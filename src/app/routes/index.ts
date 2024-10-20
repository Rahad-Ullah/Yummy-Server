import express from 'express'
import { UserRoutes } from '../modules/User/user.route'
import { AuthRoutes } from '../modules/Auth/auth.route'
import { FollowerRoutes } from '../modules/Follower/follower.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/followers',
    route: FollowerRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))
export default router
