import { format, parseISO } from 'date-fns'

import {
  DISPLAY_TYPES,
  TRANSACTION_TYPES,
  type FormattedTransaction,
  type Transaction,
} from '../types/transaction'

export const formatCurrency = (value: number): string => {
  return `USD ${value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

export const formatDate = (dateString: string): string => {
  try {
    const date = parseISO(dateString)
    return format(date, 'MMMM dd, yyyy')
  } catch (error) {
    return dateString
  }
}

const getTransactionTitle = (transaction: Transaction): string => {
  if (transaction.type === TRANSACTION_TYPES.WITHDRAWAL) {
    return 'Cash Withdrawal'
  }

  if (transaction.metadata?.product_name) {
    return transaction.metadata.product_name
  }

  if (transaction.metadata?.type) {
    return transaction.metadata.type
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return 'Deposit'
}

const getTransactionSubtitle = (transaction: Transaction): string => {
  if (transaction.type === TRANSACTION_TYPES.WITHDRAWAL) {
    return 'Bank Account'
  }

  return transaction.metadata?.name || 'Anonymous'
}

export const formatTransaction = (transaction: Transaction): FormattedTransaction => {
  return {
    id: transaction.payment_reference || `${transaction.date}-${transaction.amount}`,
    title: getTransactionTitle(transaction),
    amount: formatCurrency(transaction.amount),
    subtitle: getTransactionSubtitle(transaction),
    date: formatDate(transaction.date),
    type:
      transaction.type === TRANSACTION_TYPES.DEPOSIT ? DISPLAY_TYPES.INCOME : DISPLAY_TYPES.EXPENSE,
    status: transaction.status,
  }
}

export const formatTransactions = (transactions: Transaction[]): FormattedTransaction[] => {
  return transactions.map(formatTransaction)
}
