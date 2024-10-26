import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { User } from '../User/user.model'
import { USER_ROLE } from '../User/user.constant'

const removeAdminFromDB = async (id: string) => {
  const admin = await User.findById(id)

  if (!admin) {
    throw new AppError(httpStatus.NOT_FOUND, 'Admin does not exist')
  }

  const result = await User.findByIdAndUpdate(
    id,
    { role: USER_ROLE.USER, isDeleted: true },
    { new: true },
  )
  return result
}

const getAllAdminsFromDB = async () => {
  const result = await User.find({ role: USER_ROLE.ADMIN, isDeleted: false })
  return result
}

export const AdminServices = {
  removeAdminFromDB,
  getAllAdminsFromDB,
}
