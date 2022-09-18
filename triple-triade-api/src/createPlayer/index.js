import marvelCharacters from '../constants/marvelCharacters.json';

export const createPlayer = () => {
    const length = marvelCharacters.length;
    const data = [];

    for (let i = 0; i < 5; i++) {
        const num = Math.floor(Math.random() * length) + 1;
        data.push(marvelCharacters[num]);
    }

    return data;
}
