import Navbar from '@/components/Navbar'

import { Gabarito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';


const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'Anime list',
  description: 'Website Anime List Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning={true}>
        <Navbar />
        <Analytics />
        {children}
      </body>
    </html>
  )
}