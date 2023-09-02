// Server
const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const q = new URL(req.url, "https://localhost:8080/");
    let filename;

    if (q.pathname === "/") {
      filename = "./index.html";
    } else {
      filename = "./" + q.pathname + ".html";
    }

    fs.readFile(filename, function (err, data) {
      if (err) {
        fs.readFile("./404.html", function (err, data) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(data);
        });
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  })
  .listen(8080);
