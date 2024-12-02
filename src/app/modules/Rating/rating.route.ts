import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../User/user.constant'
import { RatingValidation } from './rating.validation'
import { RatingControllers } from './rating.controller'

const router = express.Router()

// create ratng
router.post(
  '/create-rating',
  auth(USER_ROLE.USER, USER_ROLE.ADMIN),
  validateRequest(RatingValidation.createRatingValidationSchema),
  RatingControllers.createRating,
)

// retrieve ratngs
router.get('/:id', RatingControllers.getAverageRating)

// get single ratng
router.get('/', auth(USER_ROLE.USER), RatingControllers.getSingleRating)

export const RatingRoutes = router
