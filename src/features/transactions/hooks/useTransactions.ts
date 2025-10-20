import { useEffect, useMemo } from 'react'

import { useTransactionsQuery } from '../api/transaction.query'
import { useTransactionStore } from '../store/transactionStore'
import { filterTransactions } from '../utils/filterTransactions'
import { formatTransactions } from '../utils/formatters'

/**
 * Hook to fetch transaction data, populate the store, and return filtered data
 * Automatically reads filters from the store
 */
export const useTransactions = () => {
  const { data, isLoading, isError, error } = useTransactionsQuery()
  const { rawData, filters, setTransactionData, setLoading, setError } = useTransactionStore()

  useEffect(() => {
    if (isLoading) {
      setLoading(true)
    }
  }, [isLoading, setLoading])

  useEffect(() => {
    if (isError && error) {
      setError(error)
    }
  }, [isError, error, setError])

  useEffect(() => {
    if (data) {
      setTransactionData(data)
    }
  }, [data, setTransactionData])

  const filteredRawData = useMemo(() => {
    if (!rawData) return null

    return filters ? filterTransactions(rawData, filters) : rawData
  }, [rawData, filters])

  const filteredData = useMemo(() => {
    if (!filteredRawData) return null

    return formatTransactions(filteredRawData)
  }, [filteredRawData])

  const count = filteredData?.length || 0

  const filterCount = useMemo(() => {
    if (!filters) return 0
    let count = 0
    if (filters.startDate || filters.endDate) count++
    if (filters.types?.length) count++
    if (filters.statuses?.length) count++
    return count
  }, [filters])

  const hasActiveFilters = useMemo(() => filterCount > 0, [filterCount])

  const showEmptyState = useMemo(
    () => !isLoading && !isError && filteredData?.length === 0 && hasActiveFilters,
    [isLoading, isError, filteredData, hasActiveFilters]
  )

  const hasData = useMemo(() => Boolean(filteredData && filteredData.length > 0), [filteredData])

  return {
    data: filteredData,
    rawData: filteredRawData,
    count,
    isLoading,
    isError,
    error,
    filterCount,
    hasActiveFilters,
    showEmptyState,
    hasData,
  }
}
