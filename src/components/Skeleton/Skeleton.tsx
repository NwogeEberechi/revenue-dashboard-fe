import {
  Skeleton as ChakraSkeleton,
  type SkeletonProps as ChakraSkeletonProps,
} from '@chakra-ui/react'
import React from 'react'

type SkeletonProps = ChakraSkeletonProps

export const Skeleton: React.FC<SkeletonProps> = ({ children, ...props }) => {
  return (
    <ChakraSkeleton startColor="gray.100" endColor="gray.200" borderRadius="md" {...props}>
      {children}
    </ChakraSkeleton>
  )
}
