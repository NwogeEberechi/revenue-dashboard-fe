import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { navItems } from '@/constants/navigation'

import { HamburgerIcon, HeaderLogo, MessageIcon, NotificationIcon } from '../ui/icons'

const Header: React.FC = () => {
  return (
    <Box bg="white" position="fixed" pt={4} left={4} right={4} zIndex={100}>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        shadow="md"
        px={6}
        py="14px"
        rounded="full"
        bg="white"
      >
        <Box>
          <HeaderLogo />
        </Box>
        <Flex gap={5}>
          {navItems.map(item => (
            <Flex
              key={item.label}
              alignItems="center"
              gap={1}
              bg={item.label === 'Revenue' ? 'black' : ''}
              color={item.label === 'Revenue' ? 'white' : 'gray.400'}
              borderRadius="full"
              pl="14px"
              pr="18px"
              py={2}
              cursor="pointer"
            >
              {item.icon}
              <Text fontWeight="medium">{item.label}</Text>
            </Flex>
          ))}
        </Flex>
        <Flex gap={8} alignItems="center">
          <NotificationIcon />
          <MessageIcon />
          <Flex
            alignItems="center"
            gap={2}
            bg="gray.50"
            borderRadius="full"
            p={1}
            pr={3}
            cursor="pointer"
          >
            <Box w="32px" h="32px" bg="black" borderRadius="full"></Box>
            <HamburgerIcon />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
