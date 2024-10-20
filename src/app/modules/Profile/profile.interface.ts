import { ObjectId } from 'mongoose'

export interface IFollower {
  _id?: string
  follower: ObjectId
  user: ObjectId
  createdAt?: Date
  updatedAt?: Date
}
