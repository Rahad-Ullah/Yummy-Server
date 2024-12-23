import { z } from 'zod'
import { USER_MEMBERSHIP, USER_ROLE, USER_STATUS } from './user.constant'

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    role: z.nativeEnum(USER_ROLE).default(USER_ROLE.USER),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email({
        message: 'Invalid email',
      }),
    password: z.string({
      required_error: 'Password is required',
    }),
    status: z.nativeEnum(USER_STATUS).default(USER_STATUS.ACTIVE),
    membership: z.nativeEnum(USER_MEMBERSHIP).default(USER_MEMBERSHIP.BASIC),
    mobileNumber: z.string().optional(),
  }),
})

const updateUserValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    role: z.nativeEnum(USER_ROLE).optional(),
    email: z.string().email().optional(),
    password: z.string().optional(),
    status: z.nativeEnum(USER_STATUS).optional(),
    mobileNumber: z.string().optional(),
    membership: z.nativeEnum(USER_MEMBERSHIP).optional(),
    bio: z.string().optional(),
    profilePhoto: z.string().optional(),
  }),
})

const changeUserStatusValidationSchema = z.object({
  body: z.object({
    status: z.nativeEnum(USER_STATUS, {
      message: 'Status is not valid format',
    }),
  }),
})

export const UserValidation = {
  createUserValidationSchema,
  updateUserValidationSchema,
  changeUserStatusValidationSchema,
}
