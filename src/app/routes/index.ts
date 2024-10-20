import express from 'express'
import { UserRoutes } from '../modules/User/user.route'
import { AuthRoutes } from '../modules/Auth/auth.route'
import { ProfileRoutes } from '../modules/Profile/profile.route'
import { AdminRoutes } from '../modules/Admin/admin.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/profile',
    route: ProfileRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))
export default router
