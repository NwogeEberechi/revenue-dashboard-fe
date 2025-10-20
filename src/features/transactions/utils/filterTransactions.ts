import { parseISO } from 'date-fns'

import type { Transaction, TransactionFilters } from '../types/transaction'

const filterLabelToTypeMap: Record<string, string> = {
  'Store Transactions': 'store_transaction',
  'Get Tipped': 'get_tipped',
  Withdrawals: 'withdrawal',
  Chargebacks: 'chargeback',
  Cashbacks: 'cashback',
  'Refer & Earn': 'refer_and_earn',
}

const filterLabelToStatusMap: Record<string, string> = {
  Successful: 'successful',
  Pending: 'pending',
  Failed: 'failed',
}

export const filterTransactions = (
  transactions: Transaction[],
  filters: TransactionFilters
): Transaction[] => {
  return transactions.filter(transaction => {
    if (filters.startDate || filters.endDate) {
      const transactionDate = parseISO(transaction.date)

      if (filters.startDate) {
        const startOfDay = new Date(filters.startDate)
        startOfDay.setHours(0, 0, 0, 0)
        if (transactionDate < startOfDay) return false
      }

      if (filters.endDate) {
        const endOfDay = new Date(filters.endDate)
        endOfDay.setHours(23, 59, 59, 999)
        if (transactionDate > endOfDay) return false
      }
    }

    if (filters.types && filters.types.length > 0) {
      const mappedTypes = filters.types.map(label => filterLabelToTypeMap[label] || label)

      if (transaction.type === 'withdrawal') {
        if (!mappedTypes.includes('withdrawal')) return false
      } else {
        const metadataType = transaction.metadata?.type
        if (!metadataType || !mappedTypes.includes(metadataType)) return false
      }
    }

    if (filters.statuses && filters.statuses.length > 0) {
      const mappedStatuses = filters.statuses.map(
        label => filterLabelToStatusMap[label] || label.toLowerCase()
      )
      if (!mappedStatuses.includes(transaction.status)) return false
    }

    return true
  })
}
