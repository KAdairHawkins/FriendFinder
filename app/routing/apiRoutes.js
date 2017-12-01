var path = require('path');

var friends = require('../data/friends.js'); //exports friends.js

module.exports = function(app) { //creates the api object to export...also with the "app" parameter

app.get('/api/friends', function(req, res){ //
  res.json(friends);
});

app.post("/api/friends", function(req, res){
  friends.push(req.body); //user submitted data
  res.json(friends);
});

};
