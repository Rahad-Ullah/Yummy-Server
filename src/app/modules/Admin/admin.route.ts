import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import auth from '../../middlewares/auth'
import { AdminValidation } from './admin.validation'
import { UserControllers } from '../User/user.controller'
import { USER_ROLE } from '../User/user.constant'
import { AdminControllers } from './admin.controller'

const router = express.Router()

export const UserRoutes = router

// create admin
router.post(
  '/create-admin',
  auth(USER_ROLE.ADMIN),
  validateRequest(AdminValidation.createAdminValidationSchema),
  UserControllers.userRegister,
)

// update admin
router.patch(
  '/:id',
  validateRequest(AdminValidation.updateAdminValidationSchema),
  UserControllers.updateUser,
)

// remove admin
router.delete('/:id', AdminControllers.removeAdmin)

// retrieve all admins
router.get('/', AdminControllers.getAllAdmins)
