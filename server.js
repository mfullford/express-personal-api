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
	db.Hike.find({}, function(err, hikes) {
		if (err){
			return console.log("Error:", err);
 		}
		res.json(hikes); 		
	});
});

// show just one hike
app.get('/api/hikes/:id', function(req,res) {
	index = req.params.id;
  db.Hike.findOne({_id:index}, function(err, hikes) {
	 res.json(hikes[index]);
  });
});


//create new hike
app.post('/api/hikes', function (req, res) {
   let newHike = new db.Hike({
    "name": req.body.name,
    "description": req.body.location,
    "length_miles": req.body.length_miles
  });
  newHike.save(function (err, hikes) {
    if (err) throw err;
    res.json(hikes);
  });
});


// Update a hike
app.put('/api/hikes/:id', function(req,res) {
  let searchId = req.params.id; 
  db.Hike.findOne({_id: req.params.id}, function(err, hike) {
    if (err) {
      return console.log("Error!" + err);
    } else {
      hike.name = req.body.name;
		  hike.location = req.body.location;
		  hike.length_miles = req.body.length_miles;

      hike.save(function(err, updatedHike) {
        if (err) {
          return console.log(err);
        }
      }); 
      res.json(updatedHike);
    };
  });
});


// delete sinlge hike - done

app.delete('/api/hikes/:id', function(req, res) {
  index =req.params.id;
  db.Hike.findOneAndRemove({_id:index}, function(err, vacation) {
    if (err) {
      console.log("ERROR:" + err);
    }
    res.send("Hike deleted");
  });
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
    base_url: "https://fast-sea-65239.herokuapp.com/", // changed
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // changed
      {method: "GET", path: "/api/profiles", description: "INDEX of my favorite hikes"},
      {method: "POST", path: "/api/hikes", description: "Add a hike"}, // CHANGED
      {method: "GET", path: "/api/hikes/:id", description: "View one hike"},
      {method: "PUT", path: "/api/hikes/:id", description: "Update an existing hike"},
      {method: "DELETE", path: "/api/hikes/:id", description: "Delete a hike"}
    ]
  })
});

app.get('/api/hikes', function hike_index(req, res) {
  res.json('seed.js' , { root : __dirname});
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
