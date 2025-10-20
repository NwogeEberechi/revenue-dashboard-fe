import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

import { navItems } from '@/constants/navigation'
import UserProfile from '@/features/user/components/UserProfile'

import { HamburgerIcon, HeaderLogo, MessageIcon, NotificationIcon } from '../icons'

const Header: React.FC = () => {
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false)

  const handleUserProfileOpen = () => {
    setIsUserProfileOpen(prev => !prev)
  }

  return (
    <Box bg="white" position="fixed" pt={4} left={4} right={4} zIndex={100}>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        shadow="md"
        px={6}
        py={3}
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
              _hover={{
                bg: item.label === 'Revenue' ? 'black' : 'gray.50',
                color: item.label === 'Revenue' ? 'white' : 'gray.400',
              }}
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
            position="relative"
            onClick={handleUserProfileOpen}
          >
            <Box w="32px" h="32px" bg="black" borderRadius="full"></Box>
            <HamburgerIcon />
            <Box
              display={isUserProfileOpen ? 'block' : 'none'}
              position="absolute"
              top={14}
              right={0}
            >
              <UserProfile />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
