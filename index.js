const express = require("express");
const app = express();

const shouldFail = process.argv.includes("--fail");

const port = shouldFail ? 3000 : 3001;

app.get("/", (req, res) => {
  if (shouldFail) {
    console.log("failed");
    res.status(500).send("failed");
  } else {
    console.log("success");
    res.status(200).send("success");
  }
});

app.get("/health", (req, res) => {
  if (shouldFail) {
    console.log("failed");
    res.status(500).send("failed");
  } else {
    console.log("success");
    res.status(200).send("success");
  }
});

app.listen(port, () => {
  console.log(
    `Example ${shouldFail ? "failed" : "success"} app listening on port ${port}`
  );
});
