const express = require("express");
const app = express();

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.get("/api/tasks", (req, res) => {
  res.json([
    { id: 1, title: "Set up hooks", done: false },
    { id: 2, title: "Configure plugins", done: false },
    { id: 3, title: "Test automation", done: false },
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
