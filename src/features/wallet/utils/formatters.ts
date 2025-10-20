export const formatCurrency = (value: number): string => {
  return `USD ${value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

export const formatWalletData = (data: {
  balance: number
  total_payout: number
  total_revenue: number
  pending_payout: number
  ledger_balance: number
}) => {
  return {
    availableBalance: formatCurrency(data.balance),
    totalPayout: formatCurrency(data.total_payout),
    totalRevenue: formatCurrency(data.total_revenue),
    pendingPayout: formatCurrency(data.pending_payout),
    ledgerBalance: formatCurrency(data.ledger_balance),
  }
}
