import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

import { AnalyticsIcon, HomeIcon } from '../ui/icons'

const SideNavigations: React.FC = () => {
  return (
    <Flex
      direction="column"
      gap={4}
      position="fixed"
      top="50%"
      left={4}
      transform="translateY(-50%)"
      bg="white"
      p={4}
      rounded="full"
      shadow="2xl"
    >
      <Box>
        <HomeIcon />
      </Box>
      <Box>
        <AnalyticsIcon />
      </Box>
      <Box>
        <AnalyticsIcon />
      </Box>
      <Box>
        <AnalyticsIcon />
      </Box>
      <Box>
        <AnalyticsIcon />
      </Box>
    </Flex>
  )
}

export default SideNavigations
