/* eslint-disable no-useless-escape */
import { Schema, model } from 'mongoose'
import { IRecipe } from './recipe.interface'
import { POST_STATUS } from './recipe.constant'

const recipeSchema = new Schema<IRecipe>(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    upvote: {
      type: Number,
      default: 0,
    },
    downvote: {
      type: Number,
      default: 0,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: Object.keys(POST_STATUS),
      default: POST_STATUS.UNPUBLISHED,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    virtuals: true,
  },
)

export const Recipe = model<IRecipe>('Recipe', recipeSchema)
