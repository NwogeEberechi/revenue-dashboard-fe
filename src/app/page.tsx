'use client'

import { Box } from '@chakra-ui/react'

import PageLayout from '@/components/layout/PageLayout'
import Transactions from '@/features/transactions/components/Transactions'
import Wallet from '@/features/wallet/components/Wallet'

export default function Home() {
  return (
    <PageLayout>
      <Box minH="100vh">
        <Wallet />
        <Transactions />
      </Box>
    </PageLayout>
  )
}
