import { Box, Container } from '@chakra-ui/react'
import React from 'react'

import Header from './Header'
import SideNavigations from './SideNavigations'

type PageLayoutProps = {
  children: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Box p={{ base: 0, md: 4 }} pt={{ base: 0, md: 0 }} bg="white">
      <Header />
      <Box display={{ base: 'none', lg: 'block' }}>
        <SideNavigations />
      </Box>
      <Container maxW="container.xl" mx="auto" pt={24}>
        {children}
      </Container>
    </Box>
  )
}

export default PageLayout
