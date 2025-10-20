import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Providers } from './providers'

const degular = localFont({
  src: [
    {
      path: '../../public/fonts/fonnts.com-DegularDemo-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/fonnts.com-DegularDemo-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/fonnts.com-DegularDemo-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/fonnts.com-DegularDemo-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-degular',
})

export const metadata: Metadata = {
  title: 'Revenue Dashboard',
  description: 'Revenue tracking and analytics dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={degular.variable}>
      <body className={degular.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
