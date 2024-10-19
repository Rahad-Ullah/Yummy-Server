import httpStatus from 'http-status'
import config from '../../config'
import sendResponse from '../../utils/sendResponse'
import { AuthServices } from './auth.service'
import { catchAsync } from '../../utils/catchAsync'

// register user
const registerUser = catchAsync(async (req, res) => {
  const result = await AuthServices.registerUser(req.body)
  const { refreshToken, accessToken } = result

  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  })

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User registered in successfully!',
    data: {
      accessToken,
      refreshToken,
    },
  })
})

// login user
const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body)
  const { refreshToken, accessToken } = result

  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  })

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully!',
    data: {
      accessToken,
      refreshToken,
    },
  })
})

export const AuthControllers = {
  registerUser,
  loginUser,
}
