const express = require('express');

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Taskify API!",
        version: "1.0.0",
        status: "Running"
    });
});

app.get("/api/tasks", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Learn MERN",
      completed: false,
      priority: "High",
    },
    {
      id: 2,
      title: "Build Taskify",
      completed: true,
      priority: "Medium",
    },
    {
      id: 3,
      title: "Learn MongoDB",
      completed: false,
      priority: "Low",
    },
  ]);
});

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});