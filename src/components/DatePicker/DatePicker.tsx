import {
  Box,
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import React from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

import { DropDownIcon } from '../icons'

interface DatePickerProps {
  label?: string
  placeholder?: string
  value?: Date
  onChange?: (date: Date | undefined) => void
  isDisabled?: boolean
  minDate?: Date
  maxDate?: Date
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  placeholder = 'Select date',
  value,
  onChange,
  isDisabled = false,
  minDate,
  maxDate,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      if (minDate && date < minDate) {
        return
      }
      if (maxDate && date > maxDate) {
        return
      }
    }
    onChange?.(date)
    onClose()
  }

  return (
    <Box w="full">
      {label && (
        <Text mb={2} fontWeight={600} fontSize="sm" color="black.300">
          {label}
        </Text>
      )}

      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        placement="bottom-start"
        strategy="fixed"
        flip={false}
        boundary="clippingParents"
      >
        <PopoverTrigger>
          <Button
            bg="gray.50"
            h="48px"
            w="full"
            minW={0}
            borderRadius="12px"
            borderWidth="0"
            _focus={{ outline: 'none' }}
            _hover={{ bg: 'gray.100' }}
            _disabled={{
              opacity: 0.6,
              cursor: 'not-allowed',
              _hover: { bg: 'gray.50' },
            }}
            justifyContent="space-between"
            fontWeight={500}
            fontSize="sm"
            color={value ? 'black.300' : 'gray.500'}
            px={4}
            textAlign="left"
            isDisabled={isDisabled}
          >
            <Text as="span" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
              {value ? format(value, 'dd MMM yyyy') : placeholder}
            </Text>
            <DropDownIcon />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          w="350px"
          maxW="calc(100vw - 32px)"
          borderRadius="16px"
          boxShadow="lg"
          p={4}
          _focus={{ outline: 'none' }}
        >
          <PopoverBody p={0}>
            <Box
              sx={{
                '.rdp': {
                  '--rdp-cell-size': '36px',
                  '--rdp-accent-color': '#131316',
                  '--rdp-background-color': '#F4F4F4',
                  margin: 0,
                  width: '100%',
                },
                '.rdp-months': {
                  justifyContent: 'center',
                },
                '.rdp-caption': {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0 0 16px 0',
                },
                '.rdp-caption_label': {
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#131316',
                },
                '.rdp-nav': {
                  position: 'absolute',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  top: 0,
                },
                '.rdp-nav_button': {
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  _hover: {
                    backgroundColor: '#F4F4F4',
                  },
                },
                '.rdp-head_cell': {
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#666666',
                  textTransform: 'capitalize',
                },
                '.rdp-cell': {
                  padding: '4px',
                },
                '.rdp-day': {
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  fontSize: '13px',
                  fontWeight: 500,
                  _hover: {
                    backgroundColor: '#F4F4F4',
                  },
                },
                '.rdp-day_selected': {
                  backgroundColor: '#131316',
                  color: 'white',
                  fontWeight: 600,
                  _hover: {
                    backgroundColor: '#131316',
                  },
                },
                '.rdp-day_today': {
                  fontWeight: 600,
                },
              }}
            >
              <DayPicker
                mode="single"
                selected={value}
                onSelect={handleDateChange}
                numberOfMonths={1}
                fromDate={minDate}
                toDate={maxDate}
              />
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  )
}
