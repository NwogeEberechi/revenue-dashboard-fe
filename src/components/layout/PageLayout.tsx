import { Box, Container } from '@chakra-ui/react'
import React from 'react'

import Header from './Header'
import SideNavigations from './SideNavigations'

type PageLayoutProps = {
  children: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Box p={4} pt={0} bg="white">
      <Header />
      <SideNavigations />
      <Container maxW="container.xl" mx="auto" pt={24}>
        {children}
      </Container>
    </Box>
  )
}

export default PageLayout
