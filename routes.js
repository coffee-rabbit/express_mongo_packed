module.exports = function(app){
  // Require controllers
  var root = require('./controllers/root');
  var todos = require('./controllers/todos');

  // Example of using a controller
  // var musicians = require('./controllers/musicians');
  //=========================================================================

  app.get('/', root.index);

  app.get('/todos', todos.findAll);
  app.get('/todos/:id', todos.findById);
  app.put('/todos/:id', todos.update);
  app.post('/todos', todos.add);
  app.delete('/todos/:id', todos.delete);

  // Example routes for muscians controller
  // app.get('/musicians', musicians.findAll);
  // app.get('/musicians/:id', musicians.findById);

};
