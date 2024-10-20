import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { FollowerServices } from './follower.service'

const createFollower = catchAsync(async (req, res) => {
  const result = await FollowerServices.createFollowerIntoDB(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Follower created successfully',
    data: result,
  })
})

export const FollowerControllers = {
  createFollower,
}
