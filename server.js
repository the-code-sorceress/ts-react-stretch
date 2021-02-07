// For staging and production use only

const express = require("express");
const path = require("path");

const app = express();

app.get("*", (req, res, next) => {
  const host = req.get("host");
  if (host && req.header("X-Forwarded-Proto") !== "https") {
    res.redirect("https://" + host + req.url);
  } else {
    next();
  }
});

app.use(express.static(`build/${process.env.ENVIRONMENT}`));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, `build/${process.env.ENVIRONMENT}/index.html`));
});

const port = process.env.PORT || 80;
console.log(`Starting ${process.env.ENVIRONMENT} server on port ${port}`);
app.listen(port);
