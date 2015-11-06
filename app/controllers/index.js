var angular = require('angular');

var module_name = 'todoControllers';


var module = angular.module(module_name,[]);

// add controllers to the module
// module.controller(<controller_name>, <controller_function>)

//Export the module name so that other modules can easily get it from angular
module.exports = module_name;
