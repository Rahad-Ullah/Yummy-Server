import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { FollowerServices } from './profile.service'

// create following
const createFollowing = catchAsync(async (req, res) => {
  const result = await FollowerServices.createFollowerIntoDB(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Followed successfully',
    data: result,
  })
})

// unfollow
const deleteFollowing = catchAsync(async (req, res) => {
  const result = await FollowerServices.deleteFollowerFromDB(req.params.id)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Unfollowed successfully',
    data: result,
  })
})

// get followings
const getFollowings = catchAsync(async (req, res) => {
  const result = await FollowerServices.getFollowingsFromDB()

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Followings retrieved successfully',
    data: result,
  })
})

export const FollowerControllers = {
  createFollowing,
  deleteFollowing,
  getFollowings,
}
