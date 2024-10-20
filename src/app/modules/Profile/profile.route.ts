import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { FollowerValidation } from './profile.validation'
import { FollowerControllers } from './profile.controller'

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
router.get('/followings', FollowerControllers.getFollowings)

export const ProfileRoutes = router
