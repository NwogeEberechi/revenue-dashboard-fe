import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import React from 'react'

import { useTransactions } from '@/features/transactions/hooks/useTransactions'
import {
  TRANSACTION_STATUSES,
  TRANSACTION_TYPES,
  type Transaction,
} from '@/features/transactions/types/transaction'

jest.mock('@/features/transactions/api/transaction.query', () => ({
  useTransactionsQuery: jest.fn(),
}))

const { useTransactionsQuery } = jest.requireMock('@/features/transactions/api/transaction.query')

const tx = (overrides: Partial<Transaction> = {}): Transaction => ({
  amount: 1,
  date: '2025-01-01T00:00:00.000Z',
  status: TRANSACTION_STATUSES.SUCCESSFUL,
  type: TRANSACTION_TYPES.DEPOSIT,
  ...overrides,
})

const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } })
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

describe('useTransactions', () => {
  it('returns formatted data and computed flags', async () => {
    useTransactionsQuery.mockReturnValue({
      data: [tx(), tx({ date: '2025-01-02T00:00:00.000Z' })],
      isLoading: false,
      isError: false,
      error: undefined,
    })

    const { result } = renderHook(() => useTransactions(), { wrapper })

    await waitFor(() => expect(result.current.data).not.toBeNull())
    expect(result.current.count).toBe(2)
    expect(result.current.hasData).toBe(true)
    expect(result.current.filterCount).toBe(0)
    expect(result.current.showEmptyState).toBe(false)
  })

  it('exposes loading and error states', async () => {
    const error = new Error('fail')
    useTransactionsQuery.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
      error,
    })
    const { result } = renderHook(() => useTransactions(), { wrapper })
    await waitFor(() => expect(result.current.isError).toBe(true))
    expect(result.current.error).toBe(error)
  })
})
