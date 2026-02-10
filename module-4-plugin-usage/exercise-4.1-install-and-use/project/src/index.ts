import express from "express";

const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// TODO: Add task routes
app.get("/tasks", (req, res) => {
  const tasks = [
    { id: 1, title: "Install plugins", done: false },
    { id: 2, title: "Test workflow", done: false },
  ];
  res.json(tasks);
});

export default app;
