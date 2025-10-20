import { AnalyticsIcon, AppsIcon, HomeIcon, PeopleIcon, RevenueIcon } from '@/components/icons'
import type { NavItem } from '@/types/navigation'

export const navItems: NavItem[] = [
  {
    label: 'Home',
    icon: <HomeIcon />,
    href: '/',
  },
  {
    label: 'Analytics',
    icon: <AnalyticsIcon />,
    href: '/analytics',
  },
  {
    label: 'Revenue',
    icon: <RevenueIcon />,
    href: '/revenue',
  },
  {
    label: 'CRM',
    icon: <PeopleIcon />,
    href: '/crm',
  },
  {
    label: 'Apps',
    icon: <AppsIcon />,
    href: '/apps',
  },
]
