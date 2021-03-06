const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const data = require("./data/generated");
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Static Assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API Routes
app.get("/api/data", (req, res) => {
  res.send(data);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
