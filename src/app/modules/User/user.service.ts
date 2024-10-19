import httpStatus from 'http-status'
import { QueryBuilder } from '../../builders/QueryBuilder'
import AppError from '../../errors/AppError'
import { UserSearchableFields } from './user.constant'
import { TUser } from './user.interface'
import { User } from './user.model'

// create a new user into database
const createUser = async (payload: TUser) => {
  const user = await User.create(payload)

  return user
}

// get all users from the database
const getAllUsersFromDB = async (query: Record<string, unknown>) => {
  const users = new QueryBuilder(User.find(), query)
    .fields()
    .paginate()
    .sort()
    .filter()
    .search(UserSearchableFields)

  const result = await users.modelQuery

  return result
}

// get single user from database
const getSingleUserFromDB = async (id: string) => {
  const user = await User.findById(id)

  return user
}

// change user status into database
const changeUserStatusIntoDB = async (
  id: string,
  payload: { status: string },
) => {
  const user = await User.findById(id)
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found')
  }

  const result = await User.findByIdAndUpdate(id, payload, { new: true })

  return result
}

export const UserServices = {
  createUser,
  getAllUsersFromDB,
  getSingleUserFromDB,
  changeUserStatusIntoDB,
}
