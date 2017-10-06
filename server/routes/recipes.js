import express from 'express';
import auth from '../functions/auth';
import controllers from '../controllers/index';
import validateRecipe from '../functions/validateRecipes';

//Intialize Express Router
const router = express.Router();

// Add Recipe Route (C)
//router.post('/api/recipes', auth, validateRecipe.validateFields, controllers.Recipe.addRecipe);

// Get Recipes Route (R)
//router.get('/api/recipes', controllers.Recipe.searchRecipes, controllers.Recipe.fetchAllRecipes, controllers.Recipe.fetchTopRecipes);

// Get A User Recipes Route (R)
//router.get('/api/recipes/users', auth, controllers.Recipe.fetchUserRecipes);

// View Recipe Details Route (R)
//router.get('/api/recipes/:recipeId', validateRecipe.recipeExist, controllers.Recipe.fetchARecipe);

// Update Recipe Details Route (U)
//router.put('/api/recipes/:recipeId', auth, validateRecipe.recipeExist, controllers.Recipe.updateARecipe);

// Delete Recipe Route (D)
//router.delete('/api/recipes/:recipeId', auth, validateRecipe.recipeExist, controllers.Recipe.destroyARecipe);

export default router;