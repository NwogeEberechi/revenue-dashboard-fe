'use client'

import { Box, Text } from '@chakra-ui/react'

import PageLayout from '@/components/layout/PageLayout'
import Wallet from '@/features/wallet/components/Wallet'

export default function Home() {
  return (
    <PageLayout>
      <Box h="100vh" bg="gray.50">
        <Text>Home</Text>
        <Wallet />
      </Box>
    </PageLayout>
  )
}
