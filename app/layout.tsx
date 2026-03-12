import type { ReactNode } from 'react'
import './globals.css'

export interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-100 font-sans text-slate-900 antialiased">{children}</body>
    </html>
  )
}

