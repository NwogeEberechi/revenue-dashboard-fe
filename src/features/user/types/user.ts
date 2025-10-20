export type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  avatar?: string
  createdAt?: string
  updatedAt?: string
}

export type UserApiResponse = {
  id: string
  first_name: string
  last_name: string
  email: string
  avatar?: string
  created_at?: string
  updated_at?: string
}

export type UserResponse = User
