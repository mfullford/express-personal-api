// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000/api');


let new_hikes = [
	{
	id: 1,
	name: "Panoramic Point",
	location: "Kings Canyon National Park, California",
	length_miles: 1
	},
{
	id: 2,
	name: "Cibecue Falls",
	location: "Whiteriver, Arizona",
	length_miles: 4
	},
	{
	id: 3,
	name: "Billy Goat Trail",
	location: "Washington DC",
	length_miles: 4.7
	},
	{
	id: 4,
	name: "Bridal Veil Falls",
	location: "Alpines Lakes Wilderness, Washington",
	length_miles: 4
	},
	{
	id: 5,
	name: "Mt. Pilatus",
	location: "Lucerne, Switzerland",
	length_miles: 7
	},
	{
	id: 6,
	name: "Camins de Ronda",
	location: "Costa Brava, Spain",
	length_miles: 3
	},
	{
	id: 7,
	name: "Butterfly Valley",
	location: "Fetihye, Turkey",
	length_miles: 4
	},
];

// var Hike = require('./models/hike.js');

// var new_hike = {
// 	name: "Antelope Canyon",
// 	location: "Navajo Nation, Arizona",
// 	length_miles: 2
// }



db.Hike.create(new_hikes, function(err, hike){
  if (err){
    return console.log("Error:", err);
  }
  console.log("Created new hike", hike._id)
  process.exit(); // we're all done! Exit the program.
});







