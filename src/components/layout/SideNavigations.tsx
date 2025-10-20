import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

import { InvoiceIcon, LinkIcon, MediaIcon, StoreIcon } from '../icons'

type NavigationIconProps = {
  icon: React.ReactNode
  ariaLabel: string
  onClick?: () => void
}

const NavigationIcon: React.FC<NavigationIconProps> = ({ icon, ariaLabel, onClick }) => (
  <Box
    as="button"
    cursor="pointer"
    filter="grayscale(100%)"
    opacity={0.6}
    transition="all 0.2s ease-in-out"
    _hover={{
      filter: 'grayscale(0%)',
      opacity: 1,
    }}
    _focus={{
      outline: '2px solid',
      outlineColor: 'black.300',
      outlineOffset: '2px',
    }}
    aria-label={ariaLabel}
    onClick={onClick}
    bg="transparent"
    border="none"
    p={0}
  >
    {icon}
  </Box>
)

const NAV_ITEMS = [
  { icon: <LinkIcon />, label: 'Links' },
  { icon: <StoreIcon />, label: 'Store' },
  { icon: <MediaIcon />, label: 'Media' },
  { icon: <InvoiceIcon />, label: 'Invoices' },
] as const

const SideNavigations: React.FC = () => {
  return (
    <Flex
      as="nav"
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
      role="navigation"
      aria-label="Side navigation"
    >
      {NAV_ITEMS.map(({ icon, label }) => (
        <NavigationIcon key={label} icon={icon} ariaLabel={label} />
      ))}
    </Flex>
  )
}

export default SideNavigations
