const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');

//Set up express App
const app = express();

app.use(bodyParser.json());

app.use('/api', routes);

//Listen for requests
app.listen(4000, function(){
  console.log('now listening for requests');
});
