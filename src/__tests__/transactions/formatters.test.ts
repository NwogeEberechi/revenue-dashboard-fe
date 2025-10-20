import {
  DISPLAY_TYPES,
  TRANSACTION_STATUSES,
  TRANSACTION_TYPES,
  type Transaction,
} from '@/features/transactions/types/transaction'
import {
  formatCurrency,
  formatDate,
  formatTransaction,
} from '@/features/transactions/utils/formatters'

describe('formatters', () => {
  it('formats currency in USD with two decimals', () => {
    expect(formatCurrency(1234)).toBe('USD 1,234.00')
  })

  it('formats date strings to long format', () => {
    expect(formatDate('2025-01-02T00:00:00.000Z')).toMatch(/January 02, 2025|January 2, 2025/)
  })

  it('formatTransaction maps fields correctly for deposit', () => {
    const tx: Transaction = {
      amount: 1999.5,
      status: TRANSACTION_STATUSES.SUCCESSFUL,
      type: TRANSACTION_TYPES.DEPOSIT,
      date: '2025-03-10T00:00:00.000Z',
      metadata: { name: 'Mary', product_name: 'Mug' },
    }
    const formatted = formatTransaction(tx)
    expect(formatted.title).toBe('Mug')
    expect(formatted.subtitle).toBe('Mary')
    expect(formatted.type).toBe(DISPLAY_TYPES.INCOME)
    expect(formatted.amount).toBe('USD 1,999.50')
  })

  it('formatTransaction infers title for withdrawal and subtitle Bank Account', () => {
    const tx: Transaction = {
      amount: 50,
      status: TRANSACTION_STATUSES.SUCCESSFUL,
      type: TRANSACTION_TYPES.WITHDRAWAL,
      date: '2025-03-10T00:00:00.000Z',
    }
    const formatted = formatTransaction(tx)
    expect(formatted.title).toBe('Cash Withdrawal')
    expect(formatted.subtitle).toBe('Bank Account')
    expect(formatted.type).toBe(DISPLAY_TYPES.EXPENSE)
  })
})
