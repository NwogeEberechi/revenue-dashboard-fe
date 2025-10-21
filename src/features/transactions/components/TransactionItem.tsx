import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { DownArrowIcon, UpArrowIcon } from '@/components/icons'

import { DISPLAY_TYPES, type DisplayType } from '../types/transaction'

type TransactionItemProps = {
  title: string
  amount: string
  payer: string
  date: string
  type?: DisplayType
}

export const TransactionItem: React.FC<TransactionItemProps> = ({
  title,
  amount,
  payer,
  date,
  type = DISPLAY_TYPES.INCOME,
}) => {
  return (
    <Flex w="full">
      <Box
        w={{ base: '40px', sm: '48px' }}
        h={{ base: '40px', sm: '48px' }}
        bg={type === DISPLAY_TYPES.INCOME ? 'jade.50' : 'red.100'}
        rounded="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mr={{ base: 2, md: 4 }}
      >
        {type === DISPLAY_TYPES.INCOME ? <DownArrowIcon /> : <UpArrowIcon />}
      </Box>

      <Flex direction="column" flex={1}>
        <Flex justifyContent="space-between" fontSize={{ base: '12px', sm: 'md' }} gap={2} w="full">
          <Text fontWeight={500}>{title}</Text>
          <Text fontWeight={700} color="black.300">
            {amount}
          </Text>
        </Flex>
        <Flex
          justifyContent="space-between"
          gap={2}
          fontSize={{ base: '12px', sm: 'sm' }}
          fontWeight={500}
        >
          <Text>{payer}</Text>
          <Text>{date}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
