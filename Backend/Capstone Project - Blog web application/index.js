import express from "express";

const port = 3000;
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/blog", (req, res) => {
  res.render("blog.ejs");
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
