var path = require('path'); // path is require for path.join()

module.exports = function(app) { // module.exports is used so that apiRoutes and server.js can require the "app". Why is the parameter "app" in here?

app.get('/survey', function(req, res){ //add survey.html to app object
  res.sendFile(path.join(__dirname, "/../public/survey.html"))
});

app.get("/resultRoutes", function(req, res){ //add resultRoutes to app object
  res.sendFile(path.resolve("./app/routing/resultRoutes.html"));
  console.log('This is working');
});

app.get("/", function(req, res){ //add home.html to app object
  res.sendFile(path.join(__dirname, "/../public/home.html"));
});

};
