import mongoose from 'mongoose'
import { z } from 'zod'

const createFollowerValidationSchema = z.object({
  body: z.object({
    follower: z
      .string({
        required_error: 'Follower is required',
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
  }),
})

export const FollowerValidation = {
  createFollowerValidationSchema,
}
