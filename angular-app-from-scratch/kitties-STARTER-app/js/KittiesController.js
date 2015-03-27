angular
	.module('kittiesApp')
	.controller('KittiesController', KittiesController);

		function KittiesController(){
			//captures that snsures that when you reference self, 
			//it is aloways referencing the Kitties Contotller
			var self = this;





			self.listOfKitties = [
		{
			catName: 'Karl',
			monthsOld: 5,
			gender: 'boy',
			image: "images/carl.png",
			adopted: true
		},
		{
			catName: 'Jack',
			monthsOld: 4,
			gender: 'boy',
			image: "images/jack.png",
			adopted: false
		},
		{
			catName: 'Oscar',
			monthsOld: 2,
			gender: 'boy',
			image: "images/oscar.png",
			adopted: false
		},
		{
			catName: 'Princess Mew',
			monthsOld: 3,
			gender: 'girl',
			image: "images/princessmew.png",
			adopted: false
		}

	];// End of Kitties array

	}; //End of KittiesContorller





