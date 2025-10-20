export const QUERY_CONFIG = {
  staleTime: 1000 * 60 * 5,
  gcTime: 1000 * 60 * 10,
  retry: 3,
  refetchOnWindowFocus: true,
} as const
