import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Indie Hacker Toolkit - Tools for Builders',
  description: 'Five powerful tools for indie hackers, by the community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

