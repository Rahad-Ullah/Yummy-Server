import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { User } from '../User/user.model'
import { IRecipe } from './recipe.interface'
import { Recipe } from './recipe.model'
import { QueryBuilder } from '../../builders/QueryBuilder'
import { RecipeSearchableFields } from './recipe.constant'

// create a new recipe
const createRecipeIntoDB = async (payload: IRecipe) => {
  const user = await User.findById(payload.user)
  // check if user is exist
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User does not exist')
  }

  const result = await Recipe.create(payload)
  return result
}

// update an existing recipe
const updateRecipeIntoDB = async (id: string, payload: IRecipe) => {
  const recipe = await Recipe.findById(id)
  // check if recipe is exist
  if (!recipe) {
    throw new AppError(httpStatus.NOT_FOUND, 'Recipe does not exist')
  }

  const result = await Recipe.findByIdAndUpdate(id, payload, { new: true })
  return result
}

// delete an existing recipe
const deleteRecipeFromDB = async (id: string) => {
  const recipe = await Recipe.findById(id)
  // check if recipe is exist
  if (!recipe) {
    throw new AppError(httpStatus.NOT_FOUND, 'Recipe does not exist')
  }

  const result = await Recipe.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  )
  return result
}

// retrieve single recipe
const getSingleRecipeFromDB = async (id: string) => {
  const result = await Recipe.findById(id)
  return result
}

// retrieve all recipes
const getAllRecipesFromDB = async (query: Record<string, unknown>) => {
  const recipes = new QueryBuilder(Recipe.find(), query)
    .fields()
    .paginate()
    .sort()
    .filter()
    .search(RecipeSearchableFields)

  const result = await recipes.modelQuery

  return result
}

// update recipe publish status
const updateRecipeStatusIntoDB = async (
  id: string,
  payload: { status: string },
) => {
  const recipe = await Recipe.findById(id)
  if (!recipe) {
    throw new AppError(httpStatus.NOT_FOUND, 'Recipe not found')
  }

  const result = await Recipe.findByIdAndUpdate(id, payload, { new: true })

  return result
}

export const RecipeServices = {
  createRecipeIntoDB,
  updateRecipeIntoDB,
  deleteRecipeFromDB,
  getSingleRecipeFromDB,
  getAllRecipesFromDB,
  updateRecipeStatusIntoDB,
}
