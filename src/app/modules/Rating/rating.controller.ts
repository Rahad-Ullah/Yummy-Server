import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { RatingServices } from './route.service'

// create rating
const createRating = catchAsync(async (req, res) => {
  const result = await RatingServices.createRatingIntoDB(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Rated successfully',
    data: result,
  })
})

// get average rating
const getAverageRating = catchAsync(async (req, res) => {
  const result = await RatingServices.getAverageRatingFromDB(req.params.id)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Average Rating Retrieved successfully',
    data: result,
  })
})

// get single rating
const getSingleRating = catchAsync(async (req, res) => {
  const result = await RatingServices.getSingleRatingIntoDB(
    req.query.recipe as string,
    req.query.user as string,
  )

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single Rating Retrieved successfully',
    data: result,
  })
})

export const RatingControllers = {
  createRating,
  getSingleRating,
  getAverageRating,
}
