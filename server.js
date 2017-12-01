var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require('./app/routing/htmlRoutes')(app); //connects survey.html, home.html, and resultRoutes.html to the server
require('./app/routing/apiRoutes')(app); // connects friends.js to the server


app.listen(5555, function(){
  console.log("App listening on PORT" + 5555);
});
