import type { User } from '../types/user'

export const getUserInitials = (user: User): string => {
  const firstInitial = user.firstName?.charAt(0)?.toUpperCase() || ''
  const lastInitial = user.lastName?.charAt(0)?.toUpperCase() || ''
  return `${firstInitial}${lastInitial}`
}

export const getUserFullName = (user: User): string => {
  return `${user.firstName} ${user.lastName}`.trim()
}
