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

module.exports = { saveToDatabase, paginator };
