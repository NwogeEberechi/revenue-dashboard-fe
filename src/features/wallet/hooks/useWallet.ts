import { useMemo } from 'react'

import { useWalletQuery } from '../api/wallet.query'
import { formatWalletData } from '../utils/formatters'

export const useWallet = () => {
  const { data: rawData, isLoading, isError, error } = useWalletQuery()

  const formattedData = useMemo(() => {
    if (!rawData) return null
    return formatWalletData(rawData)
  }, [rawData])

  return {
    data: formattedData,
    rawData,
    isLoading,
    isError,
    error,
  }
}
