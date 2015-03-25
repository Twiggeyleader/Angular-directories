// var shawn = {
// 	name: "shawn",
// 	passion: "partying on code"
// };

// Object.prototype.sing = function (){
// 	console.log("fa la la la la la la la!");
// };

// Object.prototype.reverse = function(){
// 	console.log("we added a new reverse method!");
// };

// var languages = ["Ruby", "Java", "Swift"];

// Array.prototype.shuffle = function(){
// 	var arr = this;

// for(var i = arr.length-1; i >=0; i--){
// 	var randomIndex = Math.floor(Math.random()*(arr.length));
// 	var randomElement = arr[randomIndex];

// 	arr[randomIndex] = arr[i];
// 	arr[i] = randomElement;
// }
// 	return arr;

// };




////////////////////////////////////////
///CONSTUCTOR function.

// var myCar = {make: 'Porche', model: "Panamera", color: 'black', type: "car"};
// var yourCar = Object.create(myCar);

// yourCar.interior = "leather";
// yourCar.sunroof = true;

function Vehicle(make, model, type){
		this.make = make;
		this.model = model;
		this.type = type;
}


Vehicle.prototype = {
	turnOn: function(){
		return('Your ' + this.type + ' is on. Vroom, vroom.'); 
	}
};

var motorcycle = new Vehicle("Kawasaki", "Ninja", "Morotcycle");








