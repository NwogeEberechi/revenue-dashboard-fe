import { apiClient } from '@/lib/api/client'

import type { WalletData } from '../types/wallet'

const WALLET_ENDPOINTS = {
  getWallet: '/wallet',
} as const

export const walletApi = {
  getWallet: async (): Promise<WalletData> => {
    return apiClient.get<WalletData>(WALLET_ENDPOINTS.getWallet)
  },
}
