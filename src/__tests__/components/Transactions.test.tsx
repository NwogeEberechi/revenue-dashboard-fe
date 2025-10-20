import userEvent from '@testing-library/user-event'

import { render, screen } from '@/__tests__/utils/test-utils'
import Transactions from '@/features/transactions/components/Transactions'

jest.mock('@/features/transactions/hooks/useTransactions', () => ({
  useTransactions: jest.fn(),
}))

jest.mock('@/features/transactions/store/transactionStore', () => ({
  useTransactionStore: () => ({
    setFilters: jest.fn(),
    clearFilters: jest.fn(),
  }),
}))

const { useTransactions } = jest.requireMock('@/features/transactions/hooks/useTransactions')

describe('Transactions component', () => {
  it('shows loading skeletons and disables filter/export buttons while loading', () => {
    useTransactions.mockReturnValue({
      data: null,
      count: 0,
      isLoading: true,
      isError: false,
      error: undefined,
      filterCount: 0,
      showEmptyState: false,
      hasData: false,
    })

    render(<Transactions />)
    expect(document.querySelector('.chakra-skeleton')).toBeTruthy()
    expect(screen.getByRole('button', { name: /Filter/i })).toBeDisabled()
    expect(screen.getByRole('button', { name: /Export List/i })).toBeDisabled()
  })

  it('shows empty state when filters produce no results', async () => {
    useTransactions.mockReturnValue({
      data: [],
      count: 0,
      isLoading: false,
      isError: false,
      error: undefined,
      filterCount: 1,
      showEmptyState: true,
      hasData: false,
    })

    render(<Transactions />)
    expect(
      screen.getByText(/No matching transaction found for the selected filter/i)
    ).toBeInTheDocument()
    const clearBtn = screen.getByRole('button', { name: /Clear Filter/i })
    await userEvent.click(clearBtn)
  })

  it('renders list of transactions and enables export', () => {
    useTransactions.mockReturnValue({
      data: [
        {
          id: '1',
          title: 'Test',
          amount: 'USD 1.00',
          subtitle: 'John',
          date: 'Jan 1, 2025',
          type: 'income',
          status: 'successful',
        },
      ],
      count: 1,
      isLoading: false,
      isError: false,
      error: undefined,
      filterCount: 0,
      showEmptyState: false,
      hasData: true,
    })

    render(<Transactions />)
    expect(screen.getByText(/1 Transaction/)).toBeInTheDocument()
    expect(screen.getByText(/Test/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Export List/i })).toBeEnabled()
  })
})
