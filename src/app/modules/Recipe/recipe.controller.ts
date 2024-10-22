import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { RecipeServices } from './recipe.service'

const createRecipe = catchAsync(async (req, res) => {
  const result = await RecipeServices.createRecipeIntoDB(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Recipe Created Successfully',
    data: result,
  })
})

const updateRecipe = catchAsync(async (req, res) => {
  const result = await RecipeServices.updateRecipeIntoDB(
    req.params.id,
    req.body,
  )

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Recipe Updated Successfully',
    data: result,
  })
})

const getAllRecipes = catchAsync(async (req, res) => {
  const result = await RecipeServices.getAllRecipesFromDB(req.query)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Recipes Retrieved Successfully',
    data: result,
  })
})

const getSingleRecipe = catchAsync(async (req, res) => {
  const result = await RecipeServices.getSingleRecipeFromDB(req.params.id)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Recipe Retrieved Successfully',
    data: result,
  })
})

// delete Recipe
const deleteRecipe = catchAsync(async (req, res) => {
  const result = await RecipeServices.deleteRecipeFromDB(req.params.id)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Recipe Deleted Successfully',
    data: result,
  })
})

// update Recipe status
const updateRecipeStatus = catchAsync(async (req, res) => {
  const result = await RecipeServices.updateRecipeStatusIntoDB(
    req.params.id,
    req.body,
  )

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Status Changed Successfully',
    data: result,
  })
})

// update Recipe type
const updateRecipeType = catchAsync(async (req, res) => {
  const result = await RecipeServices.updateRecipeTypeIntoDB(
    req.params.id,
    req.body,
  )

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Type Changed Successfully',
    data: result,
  })
})

export const RecipeControllers = {
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getSingleRecipe,
  getAllRecipes,
  updateRecipeStatus,
  updateRecipeType,
}
