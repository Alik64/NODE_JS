import Hapi from '@hapi/hapi';
import path from 'path';

import {createPlayer} from './createPlayer';
import TripleTriadPlayer from './solver/TripleTriadPlayer';
import marvelCharacters from './constants/marvelCharacters.json';

const port = process.env.PORT || 3004;
const host = process.env.NODE_ENV === 'development' ? 'localhost' : null;
const IMG = /\.(jpg|jpeg|gif|png)(\?v=\d+\.\d+\.\d+)?$/;

const init = async () => {
  const server = Hapi.server({
    port,
    host,
    routes: {
      cors: {
        origin: ['*'],
        headers: [
          'Accept',
          'Authorization',
          'Content-Type',
          'If-None-Match',
        ],
        credentials: true,
        additionalHeaders: ['X-Requested-With'],
      },
    },
  });

  await server.register(require('@hapi/inert'));

  server.route({
    method: 'GET',
    path: '/',
    handler: () => {
      return 'Go to https://app.swaggerhub.com/apis-docs/ZarMarathon/reactmarathon-api/1.0.0';
    },
  });

  server.route({
    method: 'GET',
    path: '/assets/{path*}',
    handler: (request, h) => {
      if (IMG.test(request.path)) {
        return h.file(path.join(process.cwd(), 'dist', request.path));
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/api/v1/marvel/create',
    handler: () => {
      const result = createPlayer();
      return {
        data: result,
      };
    },
  });

  server.route({
    method: 'POST',
    path: '/api/v1/marvel/game/start',
    handler: (request) => {
      const {characters} = typeof request.payload === 'object' ? request.payload : JSON.parse(request.payload);

      const game = new TripleTriadPlayer();
      const generateEnemy = game.generateAiHand(characters, marvelCharacters);

      return {
        data: generateEnemy
      };
    },
  });

  server.route({
    method: 'POST',
    path: '/api/v1/marvel/game',
    handler: (request) => {
      const {
        hands: {
          p1,
          p2
        },
        board: initBoard,
        currentPlayer,
        move: initMove
      } = typeof request.payload === 'object' ? request.payload : JSON.parse(request.payload);

      const player = new TripleTriadPlayer();

      const player1 = player.pokesToHandCfg(p1);
      const player2 = player.pokesToHandCfg(p2);

      const move = player1.find(item => {
        if (initMove !== null && item.poke.id === initMove?.id) {
          return true;
        }

        return false;
      });

      function sum(args) {
        let res = true;
        for (let i = 0; i < args.length; i++) {
          if (typeof args[i] === 'object') {
            res = false;
            break;
          }
        }

        return res;
      }
      let params = {};

      if (initMove === null) {
        params = {
          ai: true,
          currentPlayer,
          hands: {
            p1: player1,
            p2: player2,
          },
          board: sum(initBoard) ? null : initBoard,
        };
      } else {
        params = {
          ai: false,
          currentPlayer,
          hands: {
            p1: player1,
            p2: player2,
          },
          move: {
            ...move,
            position: initMove.position - 1,
          },
          board: sum(initBoard) ? null : initBoard,
        };
      }

      const turnPlayer = player.play(params);

      if (initMove === null) {
        return turnPlayer;
      }

      const {board, hands} = turnPlayer;

      const paramsAi = {
        ai: true,
        currentPlayer: 'p2',
        hands,
        board,
      };

      const turnAi = player.play(paramsAi);

      return {
        ...turnAi,
        board: turnAi.board,
        oldBoard: board,
      };
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
