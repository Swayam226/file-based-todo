const express = require('express');
const app = express();
app.use(express.json());
const fs = require('fs');


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

app.post('/todos', function (req, res) {
    fs.readFile('todos.json', 'utf-8', function (err, data) {
        if (err) {
            res.status(404).json({ message: "can't read file" });
            return;
        }
        const todosArray = JSON.parse(data);
        let isCompleted = false;
        const title = req.body.title;
        const todo = { id: todosArray.length, title: title, isCompleted: isCompleted };
        todosArray.push(todo);
        fs.writeFileSync('todos.json', JSON.stringify(todosArray));
        res.status(201).todo;
    })
})


app.listen(3000);