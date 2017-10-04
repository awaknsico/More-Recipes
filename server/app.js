const express = require('express');
const bodyParser = require('body-parser');
//const router = require('./routes/index');

const port = process.env.PORT || 5000;
const app = express();

app.get('/',(req, res) => {
  res.send('More Recipes Are Here');
});

//app.use(router.vote);
//app.use(router.favorite);
//app.use(router.review);
//app.use(router.recipe);
//app.use(router.user);

app.listen(port, () => {
  console.log('Server is up and running');
});