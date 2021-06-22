var express = require('express');
var router = express.Router();
var todo = require('../src/Controllers/todoController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//get todos
router.get('/todos', todo.getTodo);

//create todo
router.post('/todos', todo.createTodo);

//update todo
router.put('/todos/:id', todo.updateTodo);

//delete todo 
router.delete('/todos/:id', todo.deleteTodo);

module.exports = router;
