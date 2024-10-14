import express from 'express';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: 'AuthRoutes',
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
