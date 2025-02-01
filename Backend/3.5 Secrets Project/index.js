//The password is
import express from "express"; /* node server */
import bodyParser from "body-parser"; /* handle forms */
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

var password = "";
var correctPassword = "ILoveProgramming";
var userIsAuth = false;

app.use(bodyParser.urlencoded({ extended: true }));

function verifyPassword(req, res, next) {
  password = req.body["password"];
  if (password === correctPassword) {
    userIsAuth = true;
  }
  next();
}

app.use(verifyPassword);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (userIsAuth) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    console.log("Incorrect password");
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
