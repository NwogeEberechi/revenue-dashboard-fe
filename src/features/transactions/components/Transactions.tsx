import { Box, Flex, Text, VStack, useDisclosure } from '@chakra-ui/react'

import { Button } from '@/components/Button'
import { DownloadIcon, DropDownIcon } from '@/components/icons'

import FilterDrawer from './FilterDrawer'
import { TransactionItem } from './TransactionItem'

const Transactions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box my="82px">
      {/* Header */}
      <Flex
        alignItems="center"
        justifyContent="space-between"
        pb={6}
        mb={8}
        borderBottom="1px solid"
        borderColor="gray.50"
      >
        <Box>
          <Text fontSize="2xl" color="black.300" fontWeight={700}>
            24 Transactions
          </Text>
          <Text fontSize="sm">Your transactions for the last 7 days</Text>
        </Box>

        <Flex alignItems="center" gap={2}>
          {/* Filter Button */}
          <Button variant="secondary" maxW={107} onClick={onOpen}>
            <Flex alignItems="center" gap={2}>
              Filter <DropDownIcon />
            </Flex>
          </Button>

          {/* Export Button */}
          <Button variant="secondary" maxW={139}>
            <Flex alignItems="center" gap={2}>
              Export List <DownloadIcon />
            </Flex>
          </Button>
        </Flex>
      </Flex>

      {/* Transactions List */}
      <VStack direction="column" spacing={6}>
        {Array(7)
          .fill(null)
          .map((_, index) => (
            <TransactionItem
              key={index}
              title="Psychology of Money"
              amount="USD 600"
              payer="Roy Cash"
              date="April 03, 2022"
              type="income"
            />
          ))}
      </VStack>

      {/* Drawer Component */}
      <FilterDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Transactions
