import { useQuery } from '@tanstack/react-query'

import type { Transaction } from '../types/transaction'

import { transactionApi } from './transaction.api'

export const TRANSACTIONS_QUERY_KEY = ['transactions'] as const

export const useTransactionsQuery = () => {
  return useQuery<Transaction[], Error>({
    queryKey: TRANSACTIONS_QUERY_KEY,
    queryFn: transactionApi.getTransactions,
  })
}
