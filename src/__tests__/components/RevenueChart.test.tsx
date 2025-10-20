import { render, screen } from '@/__tests__/utils/test-utils'
import RevenueChart from '@/features/transactions/components/RevenueChart'
import {
  TRANSACTION_STATUSES,
  TRANSACTION_TYPES,
  type Transaction,
} from '@/features/transactions/types/transaction'

const tx = (date: string, amount = 1): Transaction => ({
  amount,
  date,
  status: TRANSACTION_STATUSES.SUCCESSFUL,
  type: TRANSACTION_TYPES.DEPOSIT,
})

describe('RevenueChart', () => {
  it('renders skeleton when loading', () => {
    render(<RevenueChart transactions={[]} isLoading />)
    expect(document.querySelector('.chakra-skeleton')).toBeTruthy()
  })

  it('renders empty state with message when no data', () => {
    render(<RevenueChart transactions={[]} />)
    expect(screen.getByText(/No transaction data available for chart/i)).toBeInTheDocument()
  })

  it('renders chart and date range when data available', () => {
    render(
      <RevenueChart
        transactions={[tx('2025-01-01T00:00:00.000Z', 1), tx('2025-01-02T00:00:00.000Z', 2)]}
      />
    )
    const dates = screen.getAllByText(/Jan .* 2025/i)
    expect(dates.length).toBe(2)
  })
})
