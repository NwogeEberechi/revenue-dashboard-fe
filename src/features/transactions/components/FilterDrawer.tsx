import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FC } from 'react'

import { Button } from '@/components/Button'
import { DatePicker } from '@/components/DatePicker'
import { SelectInput } from '@/components/SelectInput'

import { useFilterState } from '../hooks/useFilterState'
import type { TransactionFilters } from '../types/transaction'

import { QuickFilters } from './QuickFilters'

interface FilterDrawerProps {
  isOpen: boolean
  onClose: () => void
  onApply: (filters: TransactionFilters) => void
}

const TRANSACTION_TYPE_OPTIONS = [
  'Store Transactions',
  'Get Tipped',
  'Withdrawals',
  'Chargebacks',
  'Cashbacks',
  'Refer & Earn',
] as const

const TRANSACTION_STATUS_OPTIONS = ['Successful', 'Pending', 'Failed'] as const

const FilterDrawer: FC<FilterDrawerProps> = ({ isOpen, onClose, onApply }) => {
  const drawerSize = useBreakpointValue({ base: 'full', md: 'md' })

  const {
    startDate,
    endDate,
    transactionTypes,
    transactionStatuses,
    setTransactionTypes,
    setTransactionStatuses,
    handleQuickFilter,
    handleStartDateChange,
    handleEndDateChange,
    handleClear,
    canApplyFilter,
    buildFilters,
  } = useFilterState()

  const handleApplyFilter = () => {
    if (!canApplyFilter) {
      return
    }

    onApply(buildFilters())
    onClose()
  }

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={drawerSize}>
      <DrawerOverlay />
      <DrawerContent borderLeftRadius={{ base: 0, md: '16px' }} overflow="hidden">
        <DrawerCloseButton />
        <DrawerHeader color="black.300" fontWeight={700} fontSize="xl" py={5}>
          Filter
        </DrawerHeader>

        <DrawerBody position="relative" pb="100px">
          <Flex direction="column" gap={6}>
            <QuickFilters onFilterSelect={handleQuickFilter} />

            <Box>
              <Box mb={2} fontWeight={600} fontSize="sm" color="black.300">
                Date Range
              </Box>
              <Flex gap={3} w="full" direction={{ base: 'column', sm: 'row' }}>
                <DatePicker
                  placeholder="Start date"
                  value={startDate}
                  onChange={handleStartDateChange}
                />
                <DatePicker
                  placeholder="End date"
                  value={endDate}
                  onChange={handleEndDateChange}
                  minDate={startDate}
                  isDisabled={!startDate}
                />
              </Flex>
            </Box>

            <SelectInput
              label="Transaction Type"
              options={[...TRANSACTION_TYPE_OPTIONS]}
              value={transactionTypes}
              onChange={setTransactionTypes}
            />

            <SelectInput
              label="Transaction Status"
              options={[...TRANSACTION_STATUS_OPTIONS]}
              value={transactionStatuses}
              onChange={setTransactionStatuses}
            />
          </Flex>
          <Box position="absolute" bottom="0" left="0" width="100%" bg="white" py={4} px={6}>
            <Flex justify="space-between" gap={3}>
              <Button variant="outline" maxW="50%" onClick={handleClear}>
                Clear
              </Button>
              <Button
                variant="primary"
                maxW="50%"
                onClick={handleApplyFilter}
                isDisabled={!canApplyFilter}
                opacity={!canApplyFilter ? 0.5 : 1}
                cursor={!canApplyFilter ? 'not-allowed' : 'pointer'}
              >
                Apply Filter
              </Button>
            </Flex>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default FilterDrawer
