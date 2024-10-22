import { ObjectId } from 'mongoose'
import { POST_STATUS, RECIPE_TYPE } from './recipe.constant'

export interface IRecipe {
  _id?: string
  title: string
  image: string
  content: string
  upvote: number
  downvote: number
  user: ObjectId
  type: keyof typeof RECIPE_TYPE
  status: keyof typeof POST_STATUS
  isDeleted: boolean
}
