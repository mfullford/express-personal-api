const mongoose = require('mongoose'),
Schema = mongoose.Schema;

var HikeSchema = new Schema({
name: String,
location: String,
length_miles: Number
});

var Hike = mongoose.model('Hike', HikeSchema);

module.exports = Hike;
