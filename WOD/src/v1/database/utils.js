const fs = require("fs");

const saveToDatabase = (DB) => {
  fs.writeFileSync("./src/v1/database/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
};
// (Page number -1 ) * page size + 1
const paginator = (totalItemsCount, pageSize) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize); // Nb de pages total
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return pages;
};

const useRandomItems = (arr, num, max) => {
  const resultsArr = [];
  const randomArr = [];
  const min = 0;

  let verif, randomNumber;

  for (let i = 0; i < num; i++) {
    do {
      randomNumber = Math.floor(Math.random() * (max - min)) + min;
      verif = randomArr.includes(randomNumber);
      if (!verif) {
        randomArr.push(randomNumber);
      }
    } while (verif);
  }
  for (let j = 0; j < randomArr.length; j++) {
    resultsArr.push(arr[randomArr[j]]);
  }
  return resultsArr;
};

module.exports = { saveToDatabase, paginator, useRandomItems };
