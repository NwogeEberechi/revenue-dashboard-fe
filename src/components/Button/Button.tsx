import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

type ButtonProps = Omit<ChakraButtonProps, 'variant'> & {
  variant?: ButtonVariant
}

/**
 * Custom Button Component
 *
 * Provides consistent button styling across the application using theme colors.
 * Supports variants: primary (default), secondary, outline, ghost
 */
export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const variantStyles = {
    primary: {
      bg: 'black.300',
      color: 'white',
      _hover: { bg: 'gray.800', _disabled: { bg: 'black.300' } },
      _active: { bg: 'gray.900' },
    },
    secondary: {
      bg: 'gray.50',
      color: 'black.300',
      _hover: { bg: 'gray.100', _disabled: { bg: 'gray.50' } },
      _active: { bg: 'gray.200' },
    },
    outline: {
      bg: 'transparent',
      color: 'black.300',
      borderWidth: '1px',
      borderColor: 'gray.300',
      _hover: { bg: 'gray.50', _disabled: { bg: 'transparent' } },
      _active: { bg: 'gray.100' },
    },
    ghost: {
      bg: 'transparent',
      color: 'gray.400',
      _hover: { bg: 'gray.50', color: 'black.300', _disabled: { bg: 'transparent' } },
      _active: { bg: 'gray.100' },
    },
  }

  return (
    <ChakraButton rounded="full" fontWeight="medium" {...variantStyles[variant]} {...props}>
      {children}
    </ChakraButton>
  )
}
