var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

module.exports = {
  findAll: function(req, res){
    Todo.find({},function(err, results) {
      return res.send(results);
    });
  },

  findById: function(req, res){
    var id = req.params.id;
    Todo.findOne({'_id':id},function(err,result){
      return res.send(result);
    });
  },

  add: function(req, res){
    Todo.create(req.body, function(err, todo){
      if(err) console.log(err);
      res.send(todo);
    });
  },
  update: function(req,res){
    var id = req.params.id;
    var updates = req.body;
    Todo.update({'_id':id}, req.body,function(err,numberAffected){
      if(err) return console.log(err);
      console.log('Todo Updated', numberAffected);
      return res.send(202);
    });
  },

  delete: function(req, res){
    var id = req.params.id;
    Todo.remove({_id: id},function(result){
      return res.send(result);
    });
  }
};

