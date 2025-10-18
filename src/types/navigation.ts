import type { ReactElement } from 'react'

export type NavItem = {
  label: string
  icon: ReactElement
  href?: string
  badge?: number
  external?: boolean
}
