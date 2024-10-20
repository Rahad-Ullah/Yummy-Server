import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { FollowerValidation } from './follower.validation'
import { FollowerControllers } from './follower.controller'

const router = express.Router()

router.post(
  '/',
  validateRequest(FollowerValidation.createFollowerValidationSchema),
  FollowerControllers.createFollower,
)

export const FollowerRoutes = router
