import { act } from '@testing-library/react'

import { useTransactionStore } from '@/features/transactions/store/transactionStore'
import {
  TRANSACTION_STATUSES,
  TRANSACTION_TYPES,
  type Transaction,
} from '@/features/transactions/types/transaction'

describe('transactionStore', () => {
  afterEach(() => {
    const { clearFilters, setTransactionData, setError, setLoading } =
      useTransactionStore.getState()
    act(() => {
      clearFilters()
      setTransactionData([])
      setError(null)
      setLoading(false)
    })
  })

  it('sets and clears filters', () => {
    const { setFilters, clearFilters } = useTransactionStore.getState()
    act(() => setFilters({ statuses: ['Successful'] }))
    expect(useTransactionStore.getState().filters).toEqual({ statuses: ['Successful'] })
    act(() => clearFilters())
    expect(useTransactionStore.getState().filters).toBeUndefined()
  })

  it('updates loading and error states', () => {
    const { setLoading, setError } = useTransactionStore.getState()
    act(() => setLoading(true))
    expect(useTransactionStore.getState().isLoading).toBe(true)
    const err = new Error('boom')
    act(() => setError(err))
    expect(useTransactionStore.getState().error).toBe(err)
    expect(useTransactionStore.getState().isError).toBe(true)
  })

  it('stores raw transactions data', () => {
    const { setTransactionData } = useTransactionStore.getState()
    const txs: Transaction[] = [
      {
        amount: 1,
        date: '2025-01-01T00:00:00.000Z',
        status: TRANSACTION_STATUSES.SUCCESSFUL,
        type: TRANSACTION_TYPES.DEPOSIT,
      },
    ]
    act(() => setTransactionData(txs))
    expect(useTransactionStore.getState().rawData).toEqual(txs)
    expect(useTransactionStore.getState().isLoading).toBe(false)
    expect(useTransactionStore.getState().isError).toBe(false)
  })
})
