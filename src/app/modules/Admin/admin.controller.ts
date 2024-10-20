import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { AdminServices } from './admin.service'

const removeAdmin = catchAsync(async (req, res) => {
  const result = await AdminServices.removeAdminFromDB(req.params.id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin removed successfully!',
    data: result,
  })
})

const getAllAdmins = catchAsync(async (req, res) => {
  const result = await AdminServices.getAllAdminsFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admins retrieved successfully!',
    data: result,
  })
})

export const AdminControllers = {
  getAllAdmins,
  removeAdmin,
}
