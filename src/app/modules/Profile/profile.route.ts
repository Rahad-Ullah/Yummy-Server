import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { FollowerValidation } from './profile.validation'
import { FollowerControllers } from './profile.controller'
import { UserValidation } from '../User/user.validation'
import { UserControllers } from '../User/user.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../User/user.constant'

const router = express.Router()

// edit profile
router.patch(
  '/edit/:id',
  auth(USER_ROLE.ADMIN, USER_ROLE.USER),
  validateRequest(UserValidation.updateUserValidationSchema),
  UserControllers.updateUser,
)

// follow
router.post(
  '/follow',
  auth(USER_ROLE.USER),
  validateRequest(FollowerValidation.createFollowerValidationSchema),
  FollowerControllers.createFollowing,
)

// unfollow
router.delete(
  '/unfollow/:id',
  auth(USER_ROLE.USER),
  FollowerControllers.deleteFollowing,
)

// get followings
router.get(
  '/followings',
  auth(USER_ROLE.USER),
  FollowerControllers.getFollowings,
)

export const ProfileRoutes = router
