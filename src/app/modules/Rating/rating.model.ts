import { model, Schema } from 'mongoose'
import { IRating } from './rating.interface'

const ratingSchema = new Schema<IRating>(
  {
    recipe: {
      type: Schema.Types.ObjectId,
      ref: 'Recipe',
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    ratingCount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Rating = model<IRating>('Rating', ratingSchema)
