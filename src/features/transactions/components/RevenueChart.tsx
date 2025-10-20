import { Box, Flex, Text } from '@chakra-ui/react'
import { format, parseISO } from 'date-fns'
import React, { useMemo } from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { Skeleton } from '@/components/Skeleton'

import type { Transaction } from '../types/transaction'
import { aggregateTransactionsByDate } from '../utils/chartUtils'

type RevenueChartProps = {
  transactions?: Transaction[] | null
  isLoading?: boolean
}

type TooltipProps = {
  active?: boolean
  payload?: Array<{
    value: number
    payload: {
      formattedDate: string
    }
  }>
}

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <Box
        bg="white"
        p={3}
        borderRadius="md"
        boxShadow="lg"
        border="1px solid"
        borderColor="gray.100"
      >
        <Text fontSize="sm" fontWeight={600} color="black.300">
          {payload[0].payload.formattedDate}
        </Text>
        <Text fontSize="sm" color="orange.500" fontWeight={500}>
          USD{' '}
          {payload[0].value.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Text>
      </Box>
    )
  }
  return null
}

const RevenueChart: React.FC<RevenueChartProps> = ({ transactions, isLoading = false }) => {
  const chartData = useMemo(() => {
    if (!transactions || transactions.length === 0) return []
    return aggregateTransactionsByDate(transactions)
  }, [transactions])

  const dateRange = useMemo(() => {
    if (chartData.length === 0) return null
    const startDate = format(parseISO(chartData[0].date), 'MMM d, yyyy')
    const endDate = format(parseISO(chartData[chartData.length - 1].date), 'MMM d, yyyy')
    return { startDate, endDate }
  }, [chartData])

  if (isLoading) {
    return (
      <Box w="full" h="280px" position="relative">
        <Skeleton height="280px" width="100%" borderRadius="md" />
      </Box>
    )
  }

  if (!chartData || chartData.length === 0) {
    return (
      <Box w="full" h="280px" position="relative" bg="gray.25" borderRadius="md">
        <Flex align="center" justify="center" h="full">
          <Text color="gray.400" fontSize="sm">
            No transaction data available for chart
          </Text>
        </Flex>
      </Box>
    )
  }

  return (
    <Box w="full" h={{ base: '240px', md: '280px' }} position="relative">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF5403" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#FF5403" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            tickFormatter={(value: string) => format(parseISO(value), 'MMM d, yyyy')}
            stroke="#9CA3AF"
            fontSize={12}
            tickLine={false}
            axisLine={{ stroke: '#E5E7EB' }}
            tick={{ fill: '#6B7280' }}
            ticks={[chartData[0]?.date]}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#FF5403', strokeWidth: 1 }} />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#FF5403"
            strokeWidth={2}
            fill="url(#colorAmount)"
            animationDuration={800}
          />
        </AreaChart>
      </ResponsiveContainer>

      {dateRange && (
        <Flex justify="space-between" px={{ base: 2, md: 4 }}>
          <Text fontSize={{ base: '2xs', sm: 'xs' }} color="gray.500">
            {dateRange.startDate}
          </Text>
          <Text fontSize={{ base: '2xs', sm: 'xs' }} color="gray.500">
            {dateRange.endDate}
          </Text>
        </Flex>
      )}
    </Box>
  )
}

export default RevenueChart
