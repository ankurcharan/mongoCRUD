const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// db instance connection
require("./config/db");

// task controller
const taskController = require("./controllers/TaskController");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.route("/tasks")
  .get(taskController.listAllTasks)
  .post(taskController.createNewTask);

app.route

app.route("/tasks/:taskid")
  .get(taskController.readTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);


app.get('/a', function(req, res) {

})


app.listen(9000, () => {
    console.log("https://localhost:9000");
});