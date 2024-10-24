import httpStatus from 'http-status'
import { QueryBuilder } from '../../builders/QueryBuilder'
import AppError from '../../errors/AppError'
import { USER_MEMBERSHIP, UserSearchableFields } from './user.constant'
import { TUser } from './user.interface'
import { User } from './user.model'

// create a new user into database
const createUser = async (payload: TUser) => {
  const isUserAlreadyExist = await User.findOne({ email: payload.email })

  // check if user already exists
  if (isUserAlreadyExist) {
    throw new AppError(
      httpStatus.CONFLICT,
      `User ${payload.email} already exists`,
    )
  }

  const user = await User.create(payload)

  return user
}

// update a existing user into database
const UpdateUserIntoDB = async (id: string, payload: TUser) => {
  const isUserExist = await User.findById(id)

  // check if user exists
  if (!isUserExist) {
    throw new AppError(httpStatus.NOT_FOUND, `User not exists`)
  }

  const result = await User.findByIdAndUpdate(id, payload)

  return result
}

// get all users from the database
const getAllUsersFromDB = async (query: Record<string, unknown>) => {
  const users = new QueryBuilder(User.find(), query)
    .fields()
    .sort()
    .filter()
    .search(UserSearchableFields)

  // get doc count before filtering
  const count = await users.getFilteredCount()

  users.paginate()

  const data = await users.modelQuery.exec()

  return { data, count }
}

// get single user from database
const getSingleUserFromDB = async (id: string) => {
  const user = await User.findById(id)

  return user
}

// change user status into database
const deleteUserFromDB = async (id: string) => {
  const user = await User.findById(id)
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found')
  }

  const result = await User.findByIdAndDelete(id, { new: true })
  return result
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

// change user membership to premium into database
const changeUserMembershipIntoDB = async (id: string) => {
  const user = await User.findById(id)
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User does not exist')
  }

  const result = await User.findByIdAndUpdate(id, {
    membership: USER_MEMBERSHIP.PREMIUM,
  })

  return result
}

export const UserServices = {
  createUser,
  UpdateUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  deleteUserFromDB,
  changeUserStatusIntoDB,
  changeUserMembershipIntoDB,
}
