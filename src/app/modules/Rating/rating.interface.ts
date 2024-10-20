import { ObjectId } from 'mongoose'

export interface IRating {
  _id?: ObjectId
  recipe: ObjectId
  user: ObjectId
  ratingCount: number
}
