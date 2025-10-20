import {
  TRANSACTION_STATUSES,
  TRANSACTION_TYPES,
  type Transaction,
} from '@/features/transactions/types/transaction'
import {
  aggregateTransactionsByDate,
  generateCumulativeRevenueData,
} from '@/features/transactions/utils/chartUtils'

const tx = (date: string, amount: number): Transaction => ({
  amount,
  date,
  status: TRANSACTION_STATUSES.SUCCESSFUL,
  type: TRANSACTION_TYPES.DEPOSIT,
})

describe('chartUtils', () => {
  it('aggregates by day and sums amounts', () => {
    const data = aggregateTransactionsByDate([
      tx('2025-01-01T08:00:00.000Z', 10),
      tx('2025-01-01T10:00:00.000Z', 5),
      tx('2025-01-02T09:00:00.000Z', 3),
    ])
    expect(data).toHaveLength(2)
    expect(data[0]).toMatchObject({ date: '2025-01-01', amount: 15 })
    expect(data[1]).toMatchObject({ date: '2025-01-02', amount: 3 })
  })

  it('generates cumulative series', () => {
    const data = generateCumulativeRevenueData([
      tx('2025-01-01T00:00:00.000Z', 1),
      tx('2025-01-02T00:00:00.000Z', 2),
      tx('2025-01-03T00:00:00.000Z', 3),
    ])
    expect(data.map(d => d.amount)).toEqual([1, 3, 6])
  })
})
