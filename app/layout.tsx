import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Web3 DeCoders',
  description: 'Web3 DeCoders is a platform for learning about blockchain and cryptocurrency.',
  generator: 'Web3 DeCoders',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>  
        <link  rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
