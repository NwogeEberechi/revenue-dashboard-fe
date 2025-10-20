import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

import { Button } from '@/components/Button'
import { InfoIcon } from '@/components/icons'

const Wallet: React.FC = () => {
  return (
    <Flex mt={16}>
      <Box flex={1}>
        <Text fontSize="sm" fontWeight={500}>
          Available Balance
        </Text>
        <Flex alignItems={'center'}>
          <Text mr={16} fontWeight={700} fontSize="4xl" textColor="black.300">
            USD 120,500.00
          </Text>
          <Button maxW={167} py={'14px'}>
            Withdraw
          </Button>
        </Flex>
      </Box>
      <VStack maxW="271px" width="full" spacing={8}>
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <Box key={index} w="full">
              <Flex justifyContent="space-between" alignItems="center" mb={2}>
                <Text>Ledger Balance</Text>
                <InfoIcon />
              </Flex>
              <Text textColor="black.300" fontSize="28px" fontWeight={700}>
                USD 0.00
              </Text>
            </Box>
          ))}
      </VStack>
    </Flex>
  )
}

export default Wallet
