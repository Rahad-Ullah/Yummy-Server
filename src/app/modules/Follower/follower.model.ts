import { model, Schema } from 'mongoose'
import { IFollower } from './follower.interface'

const followerSchema = new Schema<IFollower>(
  {
    follower: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Follower = model<IFollower>('Follower', followerSchema)
