import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DropzoneProvider } from '@/utils/contexts/DropzoneContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'drag-and-drop',
  description: 'Created by Gustavo Quintans ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <DropzoneProvider>
        <body className={inter.className}>{children}</body>
      </DropzoneProvider>
    </html>
  )
}
