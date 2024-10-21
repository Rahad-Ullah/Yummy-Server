import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { CommentServices } from './comment.service'

// create comment
const createComment = catchAsync(async (req, res) => {
  const result = await CommentServices.createCommentIntoDB(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Comment created successfully',
    data: result,
  })
})

// update comment
const updateComment = catchAsync(async (req, res) => {
  const result = await CommentServices.updateCommentIntoDB(
    req.params.id,
    req.body,
  )

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Comment updated successfully',
    data: result,
  })
})

// delete comment
const deleteComment = catchAsync(async (req, res) => {
  const result = await CommentServices.deleteCommentFromDB(req.params.id)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Comment deleted successfully',
    data: result,
  })
})

// retrieve comments
const getComments = catchAsync(async (req, res) => {
  const result = await CommentServices.getCommentsFromDB(req.params.recipe)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Comments retrieved successfully',
    data: result,
  })
})

export const CommentControllers = {
  createComment,
  updateComment,
  deleteComment,
  getComments,
}
