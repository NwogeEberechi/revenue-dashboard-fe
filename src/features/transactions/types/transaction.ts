export const TRANSACTION_TYPES = {
  DEPOSIT: 'deposit',
  WITHDRAWAL: 'withdrawal',
} as const

export type TransactionType = (typeof TRANSACTION_TYPES)[keyof typeof TRANSACTION_TYPES]

export const TRANSACTION_STATUSES = {
  SUCCESSFUL: 'successful',
  PENDING: 'pending',
  FAILED: 'failed',
} as const

export type TransactionStatus = (typeof TRANSACTION_STATUSES)[keyof typeof TRANSACTION_STATUSES]

export const DISPLAY_TYPES = {
  INCOME: 'income',
  EXPENSE: 'expense',
} as const

export type DisplayType = (typeof DISPLAY_TYPES)[keyof typeof DISPLAY_TYPES]

export type TransactionMetadata = {
  name?: string
  type?: string
  email?: string
  quantity?: number
  country?: string
  product_name?: string
}

export type Transaction = {
  amount: number
  metadata?: TransactionMetadata
  payment_reference?: string
  status: TransactionStatus
  type: TransactionType
  date: string
}

export type FormattedTransaction = {
  id: string
  title: string
  amount: string
  subtitle: string
  date: string
  type: DisplayType
  status: TransactionStatus
}
