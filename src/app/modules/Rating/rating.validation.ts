import mongoose from 'mongoose'
import { z } from 'zod'

const createRatingValidationSchema = z.object({
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
    ratingCount: z.number({ required_error: 'RatingCount is required' }),
  }),
})

export const RatingValidation = {
  createRatingValidationSchema,
}
