import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { DownArrowIcon, UpArrowIcon } from '@/components/icons'

type TransactionType = 'income' | 'expense'

type TransactionItemProps = {
  title: string
  amount: string
  payer: string
  date: string
  type?: TransactionType
}

/**
 * Transaction Item Component
 *
 * Displays a single transaction with icon, title, amount, payer, and date.
 * The icon background color changes based on transaction type (income/expense).
 */
export const TransactionItem: React.FC<TransactionItemProps> = ({
  title,
  amount,
  payer,
  date,
  type = 'income',
}) => {
  return (
    <Flex w="full">
      <Box
        w="48px"
        h="48px"
        bg={type === 'income' ? 'jade.50' : 'red.100'}
        rounded="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mr={4}
      >
        {type === 'income' ? <DownArrowIcon /> : <UpArrowIcon />}
      </Box>

      <Flex direction="column" flex={1}>
        <Flex justifyContent="space-between" w="full">
          <Text fontWeight={500}>{title}</Text>
          <Text fontWeight={700} color="black.300">
            {amount}
          </Text>
        </Flex>
        <Flex justifyContent="space-between" fontSize="sm" fontWeight={500}>
          <Text>{payer}</Text>
          <Text>{date}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
