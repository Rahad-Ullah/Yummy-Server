import { ObjectId } from 'mongoose'
import { POST_STATUS } from './recipe.constant'

export interface IRecipe {
  _id?: string
  title: string
  image: string
  content: string
  upvote: number
  downvote: number
  user: ObjectId
  status: keyof typeof POST_STATUS
  isDeleted: boolean
}
