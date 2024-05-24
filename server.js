const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Change 'Build' to the directory where your Unity WebGL build is located
const buildPath = path.join(__dirname, "static");

app.use(express.static(buildPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
