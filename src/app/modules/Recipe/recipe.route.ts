import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import auth from '../../middlewares/auth'
import { RecipeValidation } from './recipe.validation'
import { RecipeControllers } from './recipe.controller'
import { USER_ROLE } from '../User/user.constant'

const router = express.Router()

export const RecipeRoutes = router

// create recipe
router.post(
  '/create-recipe',
  auth(USER_ROLE.USER, USER_ROLE.ADMIN),
  validateRequest(RecipeValidation.createRecipeValidationSchema),
  RecipeControllers.createRecipe,
)

// update recipe
router.patch('/:id', RecipeControllers.updateRecipe)

// get all recipes
router.get('/', RecipeControllers.getAllRecipes)

// get single recipe
router.get('/:id', RecipeControllers.getSingleRecipe)

// change recipe status
router.patch(
  '/change-status/:id',
  auth(USER_ROLE.ADMIN),
  validateRequest(RecipeValidation.changeRecipeStatusValidationSchema),
  RecipeControllers.updateRecipeStatus,
)

// delete recipe
router.delete(
  '/:id',
  auth(USER_ROLE.USER, USER_ROLE.ADMIN),
  RecipeControllers.deleteRecipe,
)

// change recipe type
router.patch(
  '/change-type/:id',
  auth(USER_ROLE.ADMIN, USER_ROLE.USER),
  validateRequest(RecipeValidation.changeRecipeStatusValidationSchema),
  RecipeControllers.updateRecipeStatus,
)
