export const USER_ROLE = {
  ADMIN: 'ADMIN',
  USER: 'USER',
} as const

export const USER_STATUS = {
  ACTIVE: 'ACTIVE',
  BLOCKED: 'BLOCKED',
} as const

export const USER_MEMBERSHIP = {
  BASIC: 'BASIC',
  PREMIUM: 'PREMIUM',
} as const

export const UserSearchableFields = ['name', 'email', 'phone', 'role', 'status']
