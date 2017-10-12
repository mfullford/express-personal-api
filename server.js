// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

var db = require('./models');

let myData = [
name = "Marissa",
github_profile = "https://github.com/mfullford",
github_profile_image = "https://avatars1.githubusercontent.com/u/31824846?v=4&s=460",
current_city = "Denver",
friends = [
{name: "Brandon", age: 22, location: "Denver, Colorado"},
{name: "Eunice", age: 23, location: "Dublin, Ireland"}, 
{name: "Dylan", age: 24, location: "Washington DC"},
{name: "Alaina", age: 22, location: "Phoenix, Arizona"}
]
];

let hikes = [
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

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

// show home page
app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// show profile page
app.get('/api/profile', function homepage(req, res) {
  res.json(myData);
});

// show my hikes
app.get('/api/hikes', function homepage(req, res) {
	res.json(hikes);
});

// show just one hike
app.get('/api/hikes/:id', function(req,res) {
	index = req.params.id;
	res.json(hikes[index]);
});

// create new hike - not done
app.post('/', function(req, res) {
	console.log("Creating a new fun hike")
	hikes.push(req.body);
	res.json("Create");
});

// update hike - not done
app.put('/:id', function(req, res) {
	res.send("Update");
});

// delete sinlge hike - not done
app.delete('/:id', function(req, res) {
	res.send("Delete");
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/mfullford/express-personal-api/blob/master/README.md",
    base_url: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "POST", path: "/api/hikes", description: "Check out some hikes I've done!"} // CHANGE ME
    ]
  })
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
