import type { ReactNode } from 'react'
import './globals.css'
import { Navbar } from '../components/ui/navbar'

export interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-100 font-sans text-slate-900 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}

