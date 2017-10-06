import express from 'express';
import auth from '../functions/auth';
import controllers from '../controllers/index';
import validateRecipe from '../functions/validateRecipes';

const router = express.Router();

// route for posting a review
router.post('/api/recipes/:recipeId/reviews', auth, validateRecipe.recipeExist, controllers.Review.add);


export default router;