import { ObjectId } from 'mongoose'

export interface IFollower {
  follower: ObjectId
  user: ObjectId
}
