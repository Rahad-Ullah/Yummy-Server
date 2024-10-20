import express from 'express'
import { UserControllers } from './user.controller'
import validateRequest from '../../middlewares/validateRequest'
import { UserValidation } from './user.validation'
import auth from '../../middlewares/auth'
import { USER_ROLE } from './user.constant'

const router = express.Router()

export const UserRoutes = router

// create user
router.post(
  '/create-user',
  validateRequest(UserValidation.createUserValidationSchema),
  UserControllers.userRegister,
)

// get all users
router.get('/', UserControllers.getAllUsers)

// get single user
router.get('/:id', UserControllers.getSingleUser)

// change user status between block and active
router.patch(
  '/change-status/:id',
  auth(USER_ROLE.ADMIN),
  validateRequest(UserValidation.changeUserStatusValidationSchema),
  UserControllers.changeUserStatus,
)

// change user status
router.patch('/premium/:id', UserControllers.changeUserMembership)

// delete user
router.delete('/:id', UserControllers.deleteUser)
