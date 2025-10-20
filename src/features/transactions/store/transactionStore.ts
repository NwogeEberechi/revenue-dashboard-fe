import { create } from 'zustand'

import type { Transaction, TransactionFilters } from '../types/transaction'

type TransactionStore = {
  rawData: Transaction[] | null
  isLoading: boolean
  isError: boolean
  error: Error | null
  filters: TransactionFilters | undefined
  setTransactionData: (data: Transaction[]) => void
  setLoading: (loading: boolean) => void
  setError: (error: Error | null) => void
  setFilters: (filters: TransactionFilters | undefined) => void
  clearFilters: () => void
}

export const useTransactionStore = create<TransactionStore>(set => ({
  rawData: null,
  isLoading: false,
  isError: false,
  error: null,
  filters: undefined,
  setTransactionData: data => set({ rawData: data, isLoading: false, isError: false, error: null }),
  setLoading: loading => set({ isLoading: loading }),
  setError: error => set({ error, isError: !!error, isLoading: false }),
  setFilters: filters => set({ filters }),
  clearFilters: () => set({ filters: undefined }),
}))
