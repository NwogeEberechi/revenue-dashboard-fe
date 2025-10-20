import { create } from 'zustand'

import type { TransactionFilters } from '../types/transaction'

type TransactionStore = {
  filters: TransactionFilters | undefined
  setFilters: (filters: TransactionFilters | undefined) => void
  clearFilters: () => void
}

export const useTransactionStore = create<TransactionStore>(set => ({
  filters: undefined,
  setFilters: filters => set({ filters }),
  clearFilters: () => set({ filters: undefined }),
}))
