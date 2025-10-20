import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { InfoIcon } from '@/components/icons'
import { Skeleton } from '@/components/Skeleton'

type WalletItemProps = {
  label: string
  value: string
  isLoading?: boolean
}

export const WalletItem: React.FC<WalletItemProps> = ({ label, value, isLoading }) => (
  <Box w="full">
    <Flex justifyContent="space-between" alignItems="center" mb={2}>
      <Text>{label}</Text>
      <InfoIcon />
    </Flex>
    <Skeleton isLoaded={!isLoading} height={isLoading ? '32px' : 'auto'}>
      <Text textColor="black.300" fontSize="28px" fontWeight={700}>
        {value}
      </Text>
    </Skeleton>
  </Box>
)
