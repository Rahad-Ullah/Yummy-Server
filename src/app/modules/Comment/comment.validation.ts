import mongoose from 'mongoose'
import { z } from 'zod'

const createCommentValidationSchema = z.object({
  body: z.object({
    recipe: z
      .string({
        required_error: 'Recipe is required',
      })
      .refine((val) => {
        return mongoose.Types.ObjectId.isValid(val)
      }),
    user: z
      .string({
        required_error: 'User is required',
      })
      .refine((val) => {
        return mongoose.Types.ObjectId.isValid(val)
      }),
    message: z.string({ required_error: 'Message is required' }),
  }),
})

const updateCommentValidationSchema = z.object({
  body: z.object({
    message: z.string({ required_error: 'Message is required' }).optional(),
  }),
})

export const CommentValidation = {
  createCommentValidationSchema,
  updateCommentValidationSchema,
}
