import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

import type { QuickFilterValue } from '../hooks/useFilterState'

type QuickFilter = {
  label: string
  value: QuickFilterValue
}

type QuickFiltersProps = {
  onFilterSelect: (value: QuickFilterValue) => void
}

const QUICK_FILTERS: readonly QuickFilter[] = [
  { label: 'Today', value: 'today' },
  { label: 'Last 7 days', value: 'last7days' },
  { label: 'This month', value: 'thisMonth' },
  { label: 'Last 3 months', value: 'last3months' },
] as const

export const QuickFilters: React.FC<QuickFiltersProps> = ({ onFilterSelect }) => {
  return (
    <Flex gap={3} flexWrap="wrap">
      {QUICK_FILTERS.map(filter => (
        <Button
          key={filter.value}
          variant="outline"
          py="10px"
          px="16px"
          h="auto"
          fontSize="sm"
          fontWeight={500}
          borderRadius="full"
          borderColor="gray.200"
          color="black.300"
          _hover={{ bg: 'gray.50' }}
          onClick={() => onFilterSelect(filter.value)}
        >
          {filter.label}
        </Button>
      ))}
    </Flex>
  )
}
