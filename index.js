const express = require('express');
const app = express();
app.use(express.json());
const fs = require('fs');
const { json } = require('stream/consumers');


app.get('/todos', function (req, res) {
    fs.readFile('todos.json', 'utf-8', function (err, data) {
        if (err) {
            res.status(404).json({ message: "can't read file" });
            return;
        }
        const tasks = JSON.parse(data);
        res.json(tasks);
    })
})


app.listen(3000);