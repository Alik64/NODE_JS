const http = require("http");

let requestsCount = 0;
const server = http.createServer((request, response) => {
  if (request.url === "/favicon.ico") {
    response.writeHead(200, { "Content-Type": "image/x-icon" });
    response.end();
    return;
  }
  requestsCount++;
  switch (request.url) {
    case "/":
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

  response.write(" - MHY: " + requestsCount);
  response.end();
});

server.listen(3003);
