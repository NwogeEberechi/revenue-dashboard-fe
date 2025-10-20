import { apiClient } from '@/lib/api/client'

import type { Transaction } from '../types/transaction'

const TRANSACTION_ENDPOINTS = {
  getTransactions: '/transactions',
} as const

export const transactionApi = {
  getTransactions: async (): Promise<Transaction[]> => {
    return apiClient.get<Transaction[]>(TRANSACTION_ENDPOINTS.getTransactions)
  },
}
