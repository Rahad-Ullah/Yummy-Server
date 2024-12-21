import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { UserServices } from './user.service'
import sendResponse from '../../utils/sendResponse'
import { AuthServices } from '../Auth/auth.service'

const userRegister = catchAsync(async (req, res) => {
  const user = await UserServices.createUser(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Created Successfully',
    data: user,
  })
})

const updateUser = catchAsync(async (req, res) => {

  const data = await UserServices.UpdateUserIntoDB(req.user, req.body)
  
  const { accessToken } = await AuthServices.refreshToken(
    req.cookies.refreshToken,
  )

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Updated Successfully',
    data: { data, accessToken },
  })
})

const getAllUsers = catchAsync(async (req, res) => {
  const users = await UserServices.getAllUsersFromDB(req.query)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Users Retrieved Successfully',
    data: users,
  })
})

const getSingleUser = catchAsync(async (req, res) => {
  const user = await UserServices.getSingleUserFromDB(req.params.id)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Retrieved Successfully',
    data: user,
  })
})

// delete user
const deleteUser = catchAsync(async (req, res) => {
  const result = await UserServices.deleteUserFromDB(req.params.id)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Deleted Successfully',
    data: result,
  })
})

// change user status
const changeUserStatus = catchAsync(async (req, res) => {
  const result = await UserServices.changeUserStatusIntoDB(
    req.params.id,
    req.body,
  )

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Status Changed Successfully',
    data: result,
  })
})

// change user membership
const changeUserMembership = catchAsync(async (req, res) => {
  const result = await UserServices.changeUserMembershipIntoDB(req.params.id)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Membership Changed to Premium Successfully',
    data: result,
  })
})

export const UserControllers = {
  getSingleUser,
  userRegister,
  updateUser,
  getAllUsers,
  deleteUser,
  changeUserStatus,
  changeUserMembership,
}
