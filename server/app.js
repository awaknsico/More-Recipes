const express = require('express');
const bodyParser = require('body-parser');
const session = require ('express-session');
const routes = require('./routes/routes');

const port = process.env.PORT || 5000;
const app = express();

app.get('/',(req, res) => {
  res.send('More Recipes Are Here');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(routes);

app.listen(port, () => {
  console.log('Server is up and running');
});