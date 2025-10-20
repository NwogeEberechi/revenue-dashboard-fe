import { useUserQuery } from '../api/user.query'

/**
 * Hook to fetch user data
 * Provides user information and loading states
 */
export const useUser = () => {
  const { data: user, isLoading, isError, error } = useUserQuery()

  return {
    user,
    isLoading,
    isError,
    error,
  }
}
