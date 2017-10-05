const express = require ('express');
const controllers = require ('../controllers/index');

const router = express.Router();

// route for user sign up
router.post('/api/users/signup', controllers.User.create);
// route for user sign in
router.post('/api/users/signin', controllers.User.signin);

// authentication middleware
router.use((req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.send({
      message: 'Please sign in'
    });
  }
});

// route for add recipe
router.post('/api/recipes', controllers.Recipe.add);

// route for get recipes
router.get('/api/recipes', controllers.Recipe.fetch);

// route for update recipe
router.put('/api/recipes/:recipeId', controllers.Recipe.update);

// route for delete recipe
router.delete('/api/recipes/:recipeId', controllers.Recipe.destroy);


// route for logged in user sign out
router.post('/signout', (req, res) => {
  req.session.destroy();
  res.send({
    message: 'User signed out Successfully'
  });
});


// error handlers

export default router;