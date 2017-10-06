import express from 'express';
import auth from '../functions/auth';
import controllers from '../controllers/index';
import validateRecipe from '../functions/validateRecipes';

const router = express.Router();

// route for add recipe
router.post('/api/recipes', auth, validateRecipe.validateFields, controllers.Recipe.addRecipe);

// route for get recipes
router.get('/api/recipes', controllers.Recipe.searchRecipes, controllers.Recipe.fetchAllRecipes, controllers.Recipe.fetchTopRecipes);

// route to get a users recipes
router.get('/api/recipes/users', auth, controllers.Recipe.fetchUserRecipes);

// route to view recipe details
router.get('/api/recipes/:recipeId', validateRecipe.recipeExist, controllers.Recipe.fetchARecipe);

// route for update recipe
router.put('/api/recipes/:recipeId', auth, validateRecipe.recipeExist, controllers.Recipe.updateARecipe);

// route for delete recipe
router.delete('/api/recipes/:recipeId', auth, validateRecipe.recipeExist, controllers.Recipe.destroyARecipe);

export default router;