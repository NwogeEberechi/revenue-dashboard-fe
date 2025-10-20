export type WalletData = {
  balance: number
  total_payout: number
  total_revenue: number
  pending_payout: number
  ledger_balance: number
}

export type FormattedWalletData = {
  availableBalance: string
  totalPayout: string
  totalRevenue: string
  pendingPayout: string
  ledgerBalance: string
}
