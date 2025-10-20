import { useCallback, useMemo, useState } from 'react'

import type { TransactionFilters } from '../types/transaction'

const DEFAULT_TRANSACTION_TYPES = [
  'Store Transactions',
  'Get Tipped',
  'Withdrawals',
  'Chargebacks',
  'Cashbacks',
  'Refer & Earn',
]

const DEFAULT_TRANSACTION_STATUSES = ['Successful', 'Pending', 'Failed']

export type QuickFilterValue = 'today' | 'last7days' | 'thisMonth' | 'last3months'

export const useFilterState = () => {
  const today = useMemo(() => new Date(), [])

  const [startDate, setStartDate] = useState<Date | undefined>(today)
  const [endDate, setEndDate] = useState<Date | undefined>(today)
  const [transactionTypes, setTransactionTypes] = useState<string[]>([...DEFAULT_TRANSACTION_TYPES])
  const [transactionStatuses, setTransactionStatuses] = useState<string[]>([
    ...DEFAULT_TRANSACTION_STATUSES,
  ])

  const initialValues = useMemo(
    () => ({
      startDate: today,
      endDate: today,
      transactionTypes: [...DEFAULT_TRANSACTION_TYPES],
      transactionStatuses: [...DEFAULT_TRANSACTION_STATUSES],
    }),
    [today]
  )

  const handleQuickFilter = useCallback((filterValue: QuickFilterValue) => {
    const today = new Date()

    switch (filterValue) {
      case 'today':
        setStartDate(today)
        setEndDate(today)
        break
      case 'last7days': {
        const last7Days = new Date(today)
        last7Days.setDate(today.getDate() - 7)
        setStartDate(last7Days)
        setEndDate(today)
        break
      }
      case 'thisMonth':
        setStartDate(new Date(today.getFullYear(), today.getMonth(), 1))
        setEndDate(today)
        break
      case 'last3months': {
        const last3Months = new Date(today)
        last3Months.setMonth(today.getMonth() - 3)
        setStartDate(last3Months)
        setEndDate(today)
        break
      }
    }
  }, [])

  const handleStartDateChange = useCallback(
    (date: Date | undefined) => {
      setStartDate(date)
      if (date && endDate && endDate <= date) {
        setEndDate(undefined)
      }
    },
    [endDate]
  )

  const handleEndDateChange = useCallback(
    (date: Date | undefined) => {
      if (date && startDate && date > startDate) {
        setEndDate(date)
      } else if (!date) {
        setEndDate(undefined)
      }
    },
    [startDate]
  )

  const handleClear = useCallback(() => {
    const today = new Date()
    setStartDate(today)
    setEndDate(today)
    setTransactionTypes([...DEFAULT_TRANSACTION_TYPES])
    setTransactionStatuses([...DEFAULT_TRANSACTION_STATUSES])
  }, [])

  const hasChanges = useCallback(() => {
    const datesChanged =
      startDate?.getTime() !== initialValues.startDate.getTime() ||
      endDate?.getTime() !== initialValues.endDate.getTime()

    const typesChanged =
      transactionTypes.length !== initialValues.transactionTypes.length ||
      !transactionTypes.every(type => initialValues.transactionTypes.includes(type))

    const statusesChanged =
      transactionStatuses.length !== initialValues.transactionStatuses.length ||
      !transactionStatuses.every(status => initialValues.transactionStatuses.includes(status))

    return datesChanged || typesChanged || statusesChanged
  }, [startDate, endDate, transactionTypes, transactionStatuses, initialValues])

  const isValidDateRange = useMemo(
    () => startDate && endDate && endDate >= startDate,
    [startDate, endDate]
  )

  const canApplyFilter = useMemo(
    () => hasChanges() && Boolean(isValidDateRange),
    [hasChanges, isValidDateRange]
  )

  const buildFilters = useCallback((): TransactionFilters => {
    return {
      startDate,
      endDate,
      types: transactionTypes,
      statuses: transactionStatuses,
    }
  }, [startDate, endDate, transactionTypes, transactionStatuses])

  return {
    startDate,
    endDate,
    transactionTypes,
    transactionStatuses,
    setTransactionTypes,
    setTransactionStatuses,
    handleQuickFilter,
    handleStartDateChange,
    handleEndDateChange,
    handleClear,
    canApplyFilter,
    isValidDateRange,
    buildFilters,
  }
}
