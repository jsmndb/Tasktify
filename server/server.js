const express = require('express');

const app = express();

app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Taskify API!",
        version: "1.0.0",
        status: "Running"
    });
});

let tasks = [
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
];

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Task title is required",
    });
  }

  const newTask = {
    id: Date.now(),
    title,
    completed: false,
    priority: "Medium",
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});