import express from 'express'
import { UserControllers } from './user.controller'
import validateRequest from '../../middlewares/validateRequest'
import { UserValidation } from './user.validation'

const router = express.Router()

export const UserRoutes = router

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserValidationSchema),
  UserControllers.userRegister,
)
router.get('/', UserControllers.getAllUsers)
router.get('/:id', UserControllers.getSingleUser)
