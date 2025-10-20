import { apiClient } from '@/lib/api/client'

import type { User, UserApiResponse, UserResponse } from '../types/user'

const USER_ENDPOINTS = {
  getUser: '/user',
} as const

const transformUserResponse = (response: UserApiResponse): User => {
  return {
    id: response.id,
    firstName: response.first_name,
    lastName: response.last_name,
    email: response.email,
    avatar: response.avatar,
    createdAt: response.created_at,
    updatedAt: response.updated_at,
  }
}

export const userApi = {
  getUser: async (): Promise<UserResponse> => {
    const response = await apiClient.get<UserApiResponse>(USER_ENDPOINTS.getUser)
    return transformUserResponse(response)
  },
}
