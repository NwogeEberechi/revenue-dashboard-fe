import { QueryClient } from '@tanstack/react-query'

import { QUERY_CONFIG } from './queryConfig'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: QUERY_CONFIG.staleTime,
      gcTime: QUERY_CONFIG.gcTime,
      retry: QUERY_CONFIG.retry,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: QUERY_CONFIG.refetchOnWindowFocus,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: 1,
    },
  },
})
