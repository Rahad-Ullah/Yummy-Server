import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { FollowerValidation } from './follower.validation'
import { FollowerControllers } from './follower.controller'

const router = express.Router()

// follow
router.post(
  '/follow',
  validateRequest(FollowerValidation.createFollowerValidationSchema),
  FollowerControllers.createFollowing,
)

// unfollow
router.delete('/unfollow/:id', FollowerControllers.deleteFollowing)

// get followings
router.get('/', FollowerControllers.getFollowings)

export const FollowerRoutes = router
