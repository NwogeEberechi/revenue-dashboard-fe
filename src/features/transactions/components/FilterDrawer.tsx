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
import { SelectInput } from '@/components/SelectInput'

interface FilterDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const FilterDrawer: FC<FilterDrawerProps> = ({ isOpen, onClose }) => {
  const filterRanges = ['Today', 'Last 7 days', 'This month', 'Last 3 months']
  const drawerSize = useBreakpointValue({ base: 'full', md: 'md' })

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={drawerSize}>
      <DrawerOverlay />
      <DrawerContent borderLeftRadius={{ base: 0, md: '16px' }} overflow="hidden">
        <DrawerCloseButton />
        <DrawerHeader color="black.300" fontWeight={700} fontSize="xl" py={5}>
          Filter
        </DrawerHeader>

        <DrawerBody position="relative" pb="100px">
          {' '}
          <Flex gap={3}>
            {filterRanges.map(range => (
              <Button
                key={range}
                variant="outline"
                py="10px"
                px="16px"
                textColor="black.300"
                fontSize="sm"
              >
                {range}
              </Button>
            ))}
          </Flex>
          <Flex direction="column" gap={6} mt={6}>
            <Flex gap={4} flexWrap="wrap" w="full">
              <Box flex="1 1 45%">
                <Box>
                  <Box
                    as="label"
                    fontWeight={600}
                    fontSize="sm"
                    color="black.300"
                    mb={2}
                    display="block"
                  >
                    Start Date
                  </Box>
                  <input
                    type="date"
                    style={{
                      width: '100%',
                      height: '48px',
                      borderRadius: '12px',
                      border: '1px solid gray.50',
                      background: 'gray.50',
                      padding: '0 12px',
                      fontWeight: 500,
                      color: 'black.300',
                      outline: 'none',
                    }}
                  />
                </Box>
              </Box>

              <Box flex="1 1 45%">
                <Box>
                  <Box
                    as="label"
                    fontWeight={600}
                    fontSize="sm"
                    color="black.300"
                    mb={2}
                    display="block"
                  >
                    End Date
                  </Box>
                  <input
                    type="date"
                    style={{
                      width: '100%',
                      height: '48px',
                      borderRadius: '12px',
                      border: '1px solid gray.50',
                      background: 'gray.50',
                      padding: '0 12px',
                      fontWeight: 500,
                      color: 'black.300',
                      outline: 'none',
                    }}
                  />
                </Box>
              </Box>
            </Flex>

            <SelectInput
              label="Transaction Type"
              options={[
                'Store Transactions',
                'Get Tipped',
                'Withdrawals',
                'Chargebacks',
                'Cashbacks',
                'Refer & Earn',
              ]}
            />

            <SelectInput label="Transaction Status" options={['Successful', 'Pending', 'Failed']} />
          </Flex>
          <Box
            position="absolute"
            bottom="0"
            left="0"
            width="100%"
            bg="white"
            py={4}
            px={6}
            borderTop="1px solid gray.50"
          >
            <Flex justify="space-between" gap={3}>
              <Button variant="outline" maxW="50%">
                Clear
              </Button>
              <Button variant="primary" maxW="50%">
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
