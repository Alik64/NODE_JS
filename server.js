const http = require("http");
let requestsCount = 0;
const server = http.createServer((request, response) => {
  requestsCount++;

  switch (request.url) {
    case "/students":
      response.write("STUDENTS");
      break;
    case "/":
    case "/courses":
      response.write("FRONT + BACK");
      break;
    default:
      response.write("404 not found");
  }

  response.end();
});

server.listen(3003);
