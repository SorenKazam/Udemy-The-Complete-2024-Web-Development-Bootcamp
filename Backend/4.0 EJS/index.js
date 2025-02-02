import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const day = "weekend";
  const adv = "work hard";

  res.render("index.ejs", {
    dayType: day,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
