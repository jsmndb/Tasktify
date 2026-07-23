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
            title: "Learn Express",
            completed: false
        },
        {
            id: 2,
            title: "Build Taskify",
            completed: false
        }
    ]);
});

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});