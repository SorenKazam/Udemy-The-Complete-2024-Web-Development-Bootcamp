import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>HELLO WORLD!</h1><a href='/about'>about</a>");
});

app.get("/about", (req, res) => {
  res.send("<h1>ABOUT PAGE</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>CONTACT PAGE</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
