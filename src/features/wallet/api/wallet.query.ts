import { useQuery } from '@tanstack/react-query'

import type { WalletData } from '../types/wallet'

import { walletApi } from './wallet.api'

export const WALLET_QUERY_KEY = ['wallet'] as const

export const useWalletQuery = () => {
  return useQuery<WalletData, Error>({
    queryKey: WALLET_QUERY_KEY,
    queryFn: walletApi.getWallet,
  })
}
