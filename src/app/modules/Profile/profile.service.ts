import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { User } from '../User/user.model'
import { IFollower } from './profile.interface'
import { Follower } from './profile.model'

// ---------- Follow ----------
const createFollowerIntoDB = async (payload: IFollower) => {
  const user = await User.findById(payload.user)
  const follower = await User.findById(payload.follower)
  const isAlreadyFollowing = await Follower.findOne({ follower, user })

  // check if the user is exist
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found')
  }
  // check if the follower is exist
  if (!follower) {
    throw new AppError(httpStatus.NOT_FOUND, 'Follower not found')
  }

  // check if already following
  if (isAlreadyFollowing) {
    throw new AppError(httpStatus.CONFLICT, 'Already following')
  }

  const result = await Follower.create(payload)
  return result
}

// ---------- Unfollow ----------
const deleteFollowerFromDB = async (followId: string) => {
  const follow = await Follower.findById(followId)

  // check if the follow exist
  if (!follow) {
    throw new AppError(httpStatus.NOT_FOUND, 'Follow does not exist')
  }

  const result = await Follower.findByIdAndDelete(followId, { new: true })
  return result
}

// ---------- get followings ----------
const getFollowingsFromDB = async () => {
  const result = await Follower.find()

  return result
}

export const FollowerServices = {
  createFollowerIntoDB,
  deleteFollowerFromDB,
  getFollowingsFromDB,
}
