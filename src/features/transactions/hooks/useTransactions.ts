import { useMemo } from 'react'

import { useTransactionsQuery } from '../api/transaction.query'
import type { TransactionFilters } from '../types/transaction'
import { filterTransactions } from '../utils/filterTransactions'
import { formatTransactions } from '../utils/formatters'

export const useTransactions = (filters?: TransactionFilters) => {
  const { data: rawData, isLoading, isError, error } = useTransactionsQuery()

  const filteredRawData = useMemo(() => {
    if (!rawData) return null

    // Apply filters if provided
    return filters ? filterTransactions(rawData, filters) : rawData
  }, [rawData, filters])

  const filteredData = useMemo(() => {
    if (!filteredRawData) return null

    return formatTransactions(filteredRawData)
  }, [filteredRawData])

  const count = filteredData?.length || 0

  return {
    data: filteredData,
    rawData: filteredRawData,
    count,
    isLoading,
    isError,
    error,
  }
}
