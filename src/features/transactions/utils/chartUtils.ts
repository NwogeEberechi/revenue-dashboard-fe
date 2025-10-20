import { format, parseISO, startOfDay } from 'date-fns'

import type { Transaction } from '../types/transaction'

export type ChartDataPoint = {
  date: string
  amount: number
  formattedDate: string
}

/**
 * Aggregates transaction data by date for chart display
 * @param transactions - Array of transactions
 * @returns Array of chart data points with cumulative amounts per day
 */
export const aggregateTransactionsByDate = (transactions: Transaction[]): ChartDataPoint[] => {
  if (!transactions || transactions.length === 0) {
    return []
  }

  // Group transactions by date and sum amounts
  const dateMap = new Map<string, number>()

  transactions.forEach(transaction => {
    if (!transaction.date) return

    const dateKey = format(startOfDay(parseISO(transaction.date)), 'yyyy-MM-dd')
    const currentAmount = dateMap.get(dateKey) || 0

    // Add the transaction amount
    dateMap.set(dateKey, currentAmount + transaction.amount)
  })

  // Convert map to array and sort by date
  const chartData: ChartDataPoint[] = Array.from(dateMap.entries())
    .map(([date, amount]) => ({
      date,
      amount,
      formattedDate: format(parseISO(date), 'MMM d, yyyy'),
    }))
    .sort((a, b) => a.date.localeCompare(b.date))

  return chartData
}

/**
 * Generates a cumulative revenue chart data
 * @param transactions - Array of transactions
 * @returns Array of chart data points with cumulative revenue
 */
export const generateCumulativeRevenueData = (transactions: Transaction[]): ChartDataPoint[] => {
  const dailyData = aggregateTransactionsByDate(transactions)

  if (dailyData.length === 0) {
    return []
  }

  // Calculate cumulative amounts
  let cumulative = 0
  return dailyData.map(dataPoint => {
    cumulative += dataPoint.amount
    return {
      ...dataPoint,
      amount: cumulative,
    }
  })
}
