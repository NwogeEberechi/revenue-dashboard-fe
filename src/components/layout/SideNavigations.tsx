import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

import { InvoiceIcon, LinkIcon, MediaIcon, StoreIcon } from '../icons'

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
        <LinkIcon />
      </Box>
      <Box>
        <StoreIcon />
      </Box>
      <Box>
        <MediaIcon />
      </Box>
      <Box>
        <InvoiceIcon />
      </Box>
    </Flex>
  )
}

export default SideNavigations
