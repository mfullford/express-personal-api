// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var Hike = require('./models/hike.js')

var new_hike = {
	name: "Antelope Canyon",
	location: "Arizona",
	length_miles: 2
}

// db.Hikes.create(new_hike, function(err, hike){
//   if (err){
//     return console.log("Error:", err);
//   }
// 	console.log("Created new hike", hike._id)
//   process.exit(); // we're all done! Exit the program.
// });


var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000/api');

var Hike = require('./models/hike');

var ALL_HIKES = [
	{
	 name: "Panoramic Point",
	 location: "Kings Canyon National Park, California",
	 length_miles: 1
	},
{
	 name: "Cibecue Falls",
	 location: "Whiteriver, Arizona",
	 length_miles: 4
	},
	{
	 name: "Billy Goat Trail",
	 location: "Washington DC",
	 length_miles: 4.7
	},
	{
	 name: "Bridal Veil Falls",
	 location: "Alpines Lakes Wilderness, Washington",
	 length_miles: 4
	},
];

Hike.create(ALL_HIKES, function(error, cats) {
  if(error) console.log('Could not ceate hike b/c:' + error);
  else console.log("Added " + hikes.length + " to the database.");
  mongoose.connection.close();
});
