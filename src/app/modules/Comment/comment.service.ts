import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { IComment } from './comment.interface'
import { Comment } from './comment.model'

// create new comment
const createCommentIntoDB = async (payload: IComment) => {
  const result = await Comment.create(payload)
  return result
}

// update existing comment
const updateCommentIntoDB = async (id: string, payload: IComment) => {
  const comment = await Comment.findById(id)

  // check if the comment exists
  if (!comment) {
    throw new AppError(httpStatus.NOT_FOUND, 'Comment does not exist')
  }

  const result = await Comment.findByIdAndUpdate(id, payload, { new: true })
  return result
}

// delete existing comment
const deleteCommentFromDB = async (id: string) => {
  const comment = await Comment.findById(id)

  // check if the comment exists
  if (!comment) {
    throw new AppError(httpStatus.NOT_FOUND, 'Comment does not exist')
  }

  const result = await Comment.findByIdAndDelete(id, { new: true })
  return result
}

// get all comments of a single recipe
const getCommentsFromDB = async (recipe: string) => {
  const result = await Comment.find({ recipe })
  return result
}

export const CommentServices = {
  createCommentIntoDB,
  updateCommentIntoDB,
  deleteCommentFromDB,
  getCommentsFromDB,
}
