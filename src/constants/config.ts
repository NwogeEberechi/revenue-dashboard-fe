export const APP_NAME = 'Mainstack Revenue Dashboard'
export const APP_DESCRIPTION = 'Revenue tracking and analytics dashboard'

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://fe-task-api.mainstack.io'

export const ITEMS_PER_PAGE = 20

export const DATE_RANGES = {
  TODAY: 'today',
  LAST_7_DAYS: 'last-7-days',
  THIS_MONTH: 'this-month',
  LAST_3_MONTHS: 'last-3-months',
  CUSTOM: 'custom',
} as const
