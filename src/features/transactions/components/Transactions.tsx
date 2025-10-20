import { Alert, AlertIcon, Badge, Box, Flex, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'

import { Button } from '@/components/Button'
import { DownloadIcon, DropDownIcon } from '@/components/icons'
import { Skeleton } from '@/components/Skeleton'

import { useTransactions } from '../hooks/useTransactions'
import { useTransactionStore } from '../store/transactionStore'

import { EmptyTransactionState } from './EmptyTransactionState'
import FilterDrawer from './FilterDrawer'
import { TransactionItem } from './TransactionItem'

const Transactions: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { setFilters, clearFilters } = useTransactionStore()
  const { data, count, isLoading, isError, error, filterCount, showEmptyState, hasData } =
    useTransactions()

  return (
    <Box my="82px">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        pb={6}
        mb={8}
        borderBottom="1px solid"
        borderColor="gray.50"
      >
        <Box>
          <Skeleton
            isLoaded={!isLoading}
            height={isLoading ? '32px' : 'auto'}
            width={isLoading ? '200px' : 'auto'}
            mb={1}
          >
            <Text fontSize="2xl" color="black.300" fontWeight={700}>
              {count} {count === 1 ? 'Transaction' : 'Transactions'}
            </Text>
          </Skeleton>
          <Text fontSize="sm">Your transactions for the last 7 days</Text>
        </Box>

        <Flex alignItems="center" gap={2}>
          <Button variant="secondary" w={107} onClick={onOpen} isDisabled={isLoading}>
            <Flex alignItems="center" gap={2} position="relative">
              Filter
              {filterCount > 0 && (
                <Badge
                  bg="black.300"
                  color="white"
                  borderRadius="full"
                  fontSize="xs"
                  minW="20px"
                  h="20px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontWeight={600}
                >
                  {filterCount}
                </Badge>
              )}
              <DropDownIcon />
            </Flex>
          </Button>

          <Button variant="secondary" w={139} isDisabled={isLoading || !hasData}>
            <Flex alignItems="center" gap={2}>
              Export List <DownloadIcon />
            </Flex>
          </Button>
        </Flex>
      </Flex>

      {isError && (
        <Alert status="error" borderRadius="md" mb={6}>
          <AlertIcon />
          Failed to load transactions: {error?.message || 'Unknown error'}
        </Alert>
      )}

      <VStack direction="column" spacing={6}>
        {isLoading ? (
          Array(7)
            .fill(null)
            .map((_, index) => (
              <Flex key={index} w="full" align="center">
                <Skeleton width="48px" height="48px" borderRadius="full" mr={4} />

                <Flex direction="column" flex={1} gap={2}>
                  <Flex justifyContent="space-between" w="full">
                    <Skeleton height="16px" width="140px" />
                    <Skeleton height="16px" width="100px" />
                  </Flex>
                  <Flex justifyContent="space-between" w="full">
                    <Skeleton height="14px" width="80px" />
                    <Skeleton height="14px" width="120px" />
                  </Flex>
                </Flex>
              </Flex>
            ))
        ) : showEmptyState ? (
          <EmptyTransactionState onClearFilters={clearFilters} />
        ) : hasData ? (
          data?.map(transaction => (
            <TransactionItem
              key={transaction.id}
              title={transaction.title}
              amount={transaction.amount}
              payer={transaction.subtitle}
              date={transaction.date}
              type={transaction.type}
            />
          ))
        ) : (
          <Box textAlign="center" py={8} w="full">
            <Text color="gray.400">No transactions found</Text>
          </Box>
        )}
      </VStack>

      <FilterDrawer isOpen={isOpen} onClose={onClose} onApply={setFilters} />
    </Box>
  )
}

export default Transactions
