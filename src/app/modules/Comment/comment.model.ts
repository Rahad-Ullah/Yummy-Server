import { model, Schema } from 'mongoose'
import { IComment } from './comment.interface'

const commentSchema = new Schema<IComment>(
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
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Comment = model<IComment>('Comment', commentSchema)
