import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { User } from '../User/user.model'
import { IFollower } from './follower.interface'
import { Follower } from './follower.model'

const createFollowerIntoDB = async (payload: IFollower) => {
  const user = await User.findById(payload.user)
  const follower = await User.findById(payload.follower)

  // check if the user is exist
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found')
  }
  // check if the follower is exist
  if (!follower) {
    throw new AppError(httpStatus.NOT_FOUND, 'Follower not found')
  }

  const result = await Follower.create(payload)
  return result
}

export const FollowerServices = {
  createFollowerIntoDB,
}
