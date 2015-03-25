angular
    .module('app')
    .controller('MainController', MainController);

    function MainController(){
    	var self = this;

    	self.test = "Boom!";

    	self.helloWorld = helloWorld;
    	self.loveBillMurray;
    	self.love = love;
    	self.hate = hate;

    	function helloWorld(){
    		alert("hello world!");
    	}

    	function love(){
    		self.loveBillMurray = true;
    	}
    	function hate(){
    		self.loveBillMurray = false
    	}
    }