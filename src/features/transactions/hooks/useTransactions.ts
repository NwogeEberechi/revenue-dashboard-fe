import { useMemo } from 'react'

import { useTransactionsQuery } from '../api/transaction.query'
import { formatTransactions } from '../utils/formatters'

export const useTransactions = () => {
  const { data: rawData, isLoading, isError, error } = useTransactionsQuery()

  const formattedData = useMemo(() => {
    if (!rawData) return null
    return formatTransactions(rawData)
  }, [rawData])

  const count = formattedData?.length || 0

  return {
    data: formattedData,
    rawData,
    count,
    isLoading,
    isError,
    error,
  }
}
