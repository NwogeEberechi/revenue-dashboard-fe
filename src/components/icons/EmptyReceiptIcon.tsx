import React from 'react'

const EmptyReceiptIcon: React.FC = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="24" fill="#F4F4F4" />
      <path
        d="M30 32H18C17.45 32 17 31.55 17 31V17C17 16.45 17.45 16 18 16H30C30.55 16 31 16.45 31 17V31C31 31.55 30.55 32 30 32Z"
        stroke="#999999"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20H27"
        stroke="#999999"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 24H27"
        stroke="#999999"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 28H24"
        stroke="#999999"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default EmptyReceiptIcon
