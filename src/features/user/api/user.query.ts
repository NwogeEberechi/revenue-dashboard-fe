import { useQuery } from '@tanstack/react-query'

import type { User } from '../types/user'

import { userApi } from './user.api'

export const USER_QUERY_KEY = ['user'] as const

export const useUserQuery = () => {
  return useQuery<User, Error>({
    queryKey: USER_QUERY_KEY,
    queryFn: userApi.getUser,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}
