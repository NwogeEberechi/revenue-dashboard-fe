import {
  Box,
  Button,
  Checkbox,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'

import { DropDownIcon } from '../icons'
interface SelectInputProps {
  label: string
  placeholder?: string
  options: string[]
}

export const SelectInput = ({
  label,
  placeholder = 'Select options',
  options,
}: SelectInputProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleSelect = (option: string) => {
    setSelectedOptions(prev =>
      prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]
    )
  }

  const displayValue = selectedOptions.length > 0 ? selectedOptions.join(', ') : placeholder

  return (
    <Box w="full" position="relative">
      <Text mb={2} fontWeight={600} fontSize="sm" color="black.300">
        {label}
      </Text>

      <Menu isOpen={isOpen} onClose={onClose} matchWidth>
        <MenuButton
          as={Button}
          onClick={isOpen ? onClose : onOpen}
          bg="gray.50"
          h="48px"
          w="full"
          borderRadius="12px"
          borderWidth="1px"
          borderColor="transparent"
          _focus={{ borderColor: 'gray.300', outline: 'none' }}
          _hover={{ borderColor: 'gray.200' }}
          justifyContent="space-between"
          fontWeight={500}
          color={selectedOptions.length ? 'black.300' : 'gray.500'}
          textAlign="left"
          px={4}
        >
          <HStack w="full" justify="space-between">
            <Text
              noOfLines={1}
              textAlign="left"
              w="90%"
              fontWeight={500}
              color={selectedOptions.length ? 'black.300' : 'gray.500'}
            >
              {displayValue}
            </Text>
            <DropDownIcon />
          </HStack>
        </MenuButton>

        <MenuList
          w="full"
          minW="unset"
          bg="white"
          boxShadow="md"
          borderRadius="12px"
          mt={2}
          py={3}
          px={2}
        >
          <VStack align="stretch" spacing={1}>
            {options.map(option => (
              <MenuItem
                key={option}
                _hover={{ bg: 'gray.50' }}
                _focus={{ bg: 'transparent' }}
                onClick={e => {
                  e.stopPropagation()
                  handleSelect(option)
                }}
                px={2}
                py={1.5}
                borderRadius="md"
              >
                <Checkbox
                  isChecked={selectedOptions.includes(option)}
                  onChange={() => handleSelect(option)}
                  colorScheme="black.300"
                  size="md"
                >
                  <Text fontWeight={500} color="black.300">
                    {option}
                  </Text>
                </Checkbox>
              </MenuItem>
            ))}
          </VStack>
        </MenuList>
      </Menu>
    </Box>
  )
}
