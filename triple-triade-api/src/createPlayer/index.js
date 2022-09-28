import marvelCharacters from "../constants/marvelCharacters.json";

export const createPlayer = () => {
  const length = marvelCharacters.length;
  const data = [];
  const randomArr = [];

  let verif, randomNumber;

  for (let i = 0; i < 5; i++) {
    do {
      randomNumber = Math.floor(Math.random() * length);
      verif = randomArr.includes(randomNumber);
      if (!verif) {
        randomArr.push(randomNumber);
      }
    } while (verif);
  }
  for (let j = 0; j < randomArr.length; j++) {
    data.push(marvelCharacters[randomArr[j]]);
  }
  return data;
};
