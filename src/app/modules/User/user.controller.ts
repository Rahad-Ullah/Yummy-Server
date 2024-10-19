import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { UserServices } from './user.service'
import sendResponse from '../../utils/sendResponse'

const userRegister = catchAsync(async (req, res) => {
  const user = await UserServices.createUser(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Created Successfully',
    data: user,
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

export const UserControllers = {
  getSingleUser,
  userRegister,
  getAllUsers,
  deleteUser,
  changeUserStatus,
}
