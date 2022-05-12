const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");

const FAVICON = path.join(__dirname, "favicon.ico");

let requestsCount = 0;
const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;
  console.log(pathname);
  // if (request.url === "/favicon.ico") {
  //   response.writeHead(200, { "Content-Type": "image/x-icon" });
  //   response.end();
  //   return;
  // }

  // If this request is asking for our favicon, respond with it.
  if (pathname === "/favicon.ico") {
    res.setHeader("Content-Type", "image/x-icon");
    fs.createReadStream(FAVICON).pipe(res);
    return;
  }

  requestsCount++;
  switch (req.url) {
    case "/":
      res.write("Home page");
      break;
    case "/students":
      res.write("STUDENTS");
      break;
    case "/courses":
      res.write("FRONT + BACK");
      break;
    default:
      res.write("404 not found");
  }

  res.write(" - MHY: " + requestsCount);
  res.end();
});

server.listen(3003);
