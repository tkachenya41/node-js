const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Server request");
  console.log("Just for tes");
  // console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  // res.write(`<head><link rel='stylesheet' href='#'></head>`);

  // res.write("<h1>Hello world</h1>");
  // res.write("<p>Hello world</p>");

  // const data = JSON.stringify([
  //   { name: "Tommy", age: 35 },
  //   { name: "Arthur", age: 40 },
  // ]);

  // res.end(data);

  const createPath = (page) => path.resolve(__dirname, `views`, `${page}.html`);

  let basePath = "";

  switch (req.url) {
    case "/":
    case "/home":
    case "/index.html":
      basePath = createPath("index");
      res.statusCode = 200;
      break;
    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "contacts");
      res.end();
      break;
    case "/contacts":
      basePath = createPath("contacts");
      break;
    default:
      basePath = createPath("error");
      res.statusCode = 404;
      break;
  }

  fs.readFile(basePath, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(PORT, "localhost", (error) => {
  error ? console.log(error) : console.log(`Listening port ${PORT}`);
});
