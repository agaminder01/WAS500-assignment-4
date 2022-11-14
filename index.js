const port = 3000;
const http = require("http");
const httpStatusCodes = require("http-status-codes");
const router = require("./router");
const fs = require("fs");

const plainTextContentType = {
  "Content-Type": "text/plain",
};
const htmlContentType = {
  "Content-Type": "text/html",
};
const imagetypejpg = {
  "Content-Type": "image/jpg",
};
const imagetypepng = {
  "Content-Type": "image/png",
};
const customReadFile = (file, res) => {
  fs.readFile(`./${file}`, (errors, data) => {
    if (errors) {
      console.log("Error reading the file...");
    }
    res.end(data);
  });
};

router.get("/", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("/views/index.html", res);
});
router.get("/index.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);
});

router.get("/A_books.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/A_books.html", res);
});

router.get("/A_contactus.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/A_contactus.html", res);
});

router.get("/A_honesty.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/A_honesty", res);
});

router.get("/A_survey.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/A_survey.html", res);
});

router.get("/cukas.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/cukas.html", res);
});

router.get("/sas.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/sas.html", res);
});

router.get("/sas2.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/sas2.html", res);
});

router.get("/secret.png", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, imagetypepng);
  customReadFile("public/images/secret.png", res);
});

router.get("/sas2.png", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, imagetypepng);
  customReadFile("public/images/sas2.png", res);
});

router.get("/storm.jpg", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, imagetypejpg);
  customReadFile("public/images/storm.jpg", res);
});

router.post("/", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, plainTextContentType);
  res.end("POSTED");
});
http.createServer(router.handle).listen(3000);
console.log(`The server is listening on port number: ${port}`);