import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { Button } from '@/components/Button/Button'
import { TransactionFileIcon } from '@/components/icons'

type EmptyTransactionStateProps = {
  onClearFilters: () => void
}

export const EmptyTransactionState: React.FC<EmptyTransactionStateProps> = ({ onClearFilters }) => {
  return (
    <Flex direction="column" justify="center" pt={16}>
      <Flex direction="column" w="369px" justifyContent="center" gap={5} mb={8}>
        <Box
          w="48px"
          h="48px"
          p="12px"
          borderRadius="16px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgGradient="linear(135deg, #DBDEE6 1.89%, #F6F7F9 98.77%)"
        >
          <TransactionFileIcon />
        </Box>
        <Text fontSize="28px" fontWeight={700} color="black.300">
          No matching transaction found for the selected filter
        </Text>
        <Text fontSize="md" color="gray.500">
          Change your filters to see more results, or add a new product.
        </Text>
      </Flex>
      <Button variant="outline" w="117px" onClick={onClearFilters}>
        Clear Filter
      </Button>
    </Flex>
  )
}
