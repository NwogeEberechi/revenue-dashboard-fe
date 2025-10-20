import {
  TRANSACTION_STATUSES,
  TRANSACTION_TYPES,
  type Transaction,
} from '@/features/transactions/types/transaction'
import { filterTransactions } from '@/features/transactions/utils/filterTransactions'

const baseTx = (overrides: Partial<Transaction> = {}): Transaction => ({
  amount: 100,
  status: TRANSACTION_STATUSES.SUCCESSFUL,
  type: TRANSACTION_TYPES.DEPOSIT,
  date: '2025-10-10T12:00:00.000Z',
  metadata: { name: 'John', type: 'store_transaction', product_name: 'Shirt' },
  ...overrides,
})

describe('filterTransactions', () => {
  const txs: Transaction[] = [
    baseTx({ date: '2025-10-10T01:00:00.000Z', metadata: { type: 'store_transaction' } }),
    baseTx({ date: '2025-10-11T23:59:59.000Z', metadata: { type: 'get_tipped' } }),
    baseTx({ date: '2025-10-12T08:00:00.000Z', type: TRANSACTION_TYPES.WITHDRAWAL }),
    baseTx({
      date: '2025-10-13T08:00:00.000Z',
      status: TRANSACTION_STATUSES.PENDING,
      metadata: { type: 'chargeback' },
    }),
  ]

  it('filters by start and end dates inclusive of day boundaries', () => {
    const filtered = filterTransactions(txs, {
      startDate: new Date('2025-10-11'),
      endDate: new Date('2025-10-12'),
    })
    expect(filtered.map(t => t.date)).toEqual([
      '2025-10-11T23:59:59.000Z',
      '2025-10-12T08:00:00.000Z',
    ])
  })

  it('filters by mapped types including special-case withdrawal', () => {
    const filteredStore = filterTransactions(txs, { types: ['Store Transactions'] })
    expect(filteredStore).toHaveLength(1)
    expect(filteredStore[0].metadata?.type).toBe('store_transaction')

    const filteredWithdrawal = filterTransactions(txs, { types: ['Withdrawals'] })
    expect(filteredWithdrawal).toHaveLength(1)
    expect(filteredWithdrawal[0].type).toBe(TRANSACTION_TYPES.WITHDRAWAL)
  })

  it('filters by mapped statuses', () => {
    const filtered = filterTransactions(txs, { statuses: ['Pending'] })
    expect(filtered).toHaveLength(1)
    expect(filtered[0].status).toBe(TRANSACTION_STATUSES.PENDING)
  })
})
