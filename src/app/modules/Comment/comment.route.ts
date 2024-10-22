import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../User/user.constant'
import { CommentValidation } from './comment.validation'
import { CommentControllers } from './comment.controller'

const router = express.Router()

// create comment
router.post(
  '/create-comment',
  auth(USER_ROLE.USER),
  validateRequest(CommentValidation.createCommentValidationSchema),
  CommentControllers.createComment,
)

// update comment
router.patch(
  '/:id',
  auth(USER_ROLE.USER),
  validateRequest(CommentValidation.updateCommentValidationSchema),
  CommentControllers.updateComment,
)

// delete comment
router.delete('/:id', auth(USER_ROLE.USER), CommentControllers.deleteComment)

// retrieve comments of a single recipe
router.get('/:recipe', CommentControllers.getComments)

export const CommentRoutes = router
