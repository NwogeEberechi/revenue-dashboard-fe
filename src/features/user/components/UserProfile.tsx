import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { AppsIcon } from '@/components/icons'
import { Skeleton } from '@/components/Skeleton'

import { useUser } from '../hooks/useUser'
import { getUserFullName, getUserInitials } from '../utils/userHelpers'

const userMenu = [
  'Settings',
  'Purchase History',
  'Refer and Earn',
  'Integrations',
  'Report Bug',
  'Switch Account',
  'Sign Out',
]

const UserProfile: React.FC = () => {
  const { user, isLoading, isError } = useUser()

  return (
    <Box bg="white" rounded="15px" shadow="md" p={6} pb={4} w={{ base: '100%', sm: '330px' }}>
      <Flex direction="column" gap={4}>
        <Flex alignItems="center" gap={2}>
          <Skeleton isLoaded={!isLoading} width="40px" height="40px" borderRadius="40px">
            <Text
              w="40px"
              h="40px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="40px"
              bg="linear-gradient(138.98deg, #5C6670 2.33%, #131316 96.28%)"
              color="white"
              fontWeight={600}
              fontSize="sm"
            >
              {user ? getUserInitials(user) : 'OJ'}
            </Text>
          </Skeleton>
          <Box flex={1}>
            <Skeleton
              isLoaded={!isLoading}
              height={isLoading ? '20px' : 'auto'}
              width={isLoading ? '120px' : 'auto'}
              mb={1}
            >
              <Text fontWeight={700} fontSize="lg" color="black.300">
                {isError ? 'John Doe' : user ? getUserFullName(user) : 'John Doe'}
              </Text>
            </Skeleton>
            <Skeleton
              isLoaded={!isLoading}
              height={isLoading ? '16px' : 'auto'}
              width={isLoading ? '150px' : 'auto'}
            >
              <Text fontSize="sm" color="gray.600">
                {isError ? 'john.doe@example.com' : user?.email || 'john.doe@example.com'}
              </Text>
            </Skeleton>
          </Box>
        </Flex>
        <Flex direction="column" gap={10}>
          {userMenu.map(item => (
            <Flex key={item} alignItems="center" gap={2}>
              <AppsIcon />
              <Text color="black.300" fontWeight={600}>
                {item}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

export default UserProfile
