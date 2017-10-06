import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/route';
//import db from './models';

const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));


app.get('/',(req, res) => {
  res.send('More Recipes Are Here');
});

app.use(router.user);
app.use(router.recipe);
app.use(router.review);
app.use(router.favorite);


app.listen(port, () => console.log `More Recipe is live`);

export default app;

/* db.sequelize.authenticate().then(() => app
  .listen(port, () => console.log('Server is up and running')))
  .catch(error => console.log(error)); */