import { ObjectId } from 'mongoose'

export interface IComment {
  _id?: ObjectId
  recipe: ObjectId
  user: ObjectId
  message: ObjectId
}
