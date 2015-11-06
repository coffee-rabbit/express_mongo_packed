var angular = require('angular');

var controllers = require('./controllers');
var services = require('./services');

// This is the basic set up for the Todo App
var app = angular.module('todoApp',[controllers,services]);
