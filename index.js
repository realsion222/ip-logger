const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  console.log("New visitor IP:", ip);

  fs.appendFile("ips.txt", `${ip} - ${new Date().toLocaleString()}\n`, (err) => {
    if (err) console.log(err);
  });

  res.send("Your IP has been logged successfully!");
});

app.listen(PORT, () => {
  console.log(`Server is running!`);
});
