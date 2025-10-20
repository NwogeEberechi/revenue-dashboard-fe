import { Alert, AlertIcon, Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

import { Button } from '@/components/Button'
import { Skeleton } from '@/components/Skeleton'
import RevenueChart from '@/features/transactions/components/RevenueChart'
import { useTransactions } from '@/features/transactions/hooks/useTransactions'

import { useWallet } from '../hooks/useWallet'

import { WalletItem } from './WalletItem'

const Wallet: React.FC = () => {
  const { data, isLoading, isError, error } = useWallet()
  const { rawData: transactions, isLoading: isLoadingTransactions } = useTransactions()

  if (isError) {
    return (
      <Box mt={16}>
        <Alert status="error" borderRadius="md">
          <AlertIcon />
          Failed to load wallet data: {error?.message || 'Unknown error'}
        </Alert>
      </Box>
    )
  }

  return (
    <Box mt={16}>
      <Flex>
        <Box flex={1} mr="124px">
          <Text fontSize="sm" fontWeight={500}>
            Available Balance
          </Text>
          <Flex alignItems={'center'}>
            <Skeleton isLoaded={!isLoading} height={isLoading ? '40px' : 'auto'} mr={16}>
              <Text mr={16} fontWeight={700} fontSize="4xl" textColor="black.300">
                {data?.availableBalance || 'USD 0.00'}
              </Text>
            </Skeleton>
            <Button w={167} h="52px" isDisabled={isLoading}>
              Withdraw
            </Button>
          </Flex>
          <Box mt={12}>
            <RevenueChart transactions={transactions} isLoading={isLoadingTransactions} />
          </Box>
        </Box>

        <VStack maxW="271px" width="full" spacing={8}>
          <WalletItem
            label="Ledger Balance"
            value={data?.ledgerBalance || 'USD 0.00'}
            isLoading={isLoading}
          />
          <WalletItem
            label="Total Payout"
            value={data?.totalPayout || 'USD 0.00'}
            isLoading={isLoading}
          />
          <WalletItem
            label="Total Revenue"
            value={data?.totalRevenue || 'USD 0.00'}
            isLoading={isLoading}
          />
          <WalletItem
            label="Pending Payout"
            value={data?.pendingPayout || 'USD 0.00'}
            isLoading={isLoading}
          />
        </VStack>
      </Flex>
    </Box>
  )
}

export default Wallet
