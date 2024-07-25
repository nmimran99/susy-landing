
import Navbar from './compnents/Navbar'
import './globals.css'
import Analytics from "@/app/compnents/GtmComponent"
import { Suspense } from 'react'

export const metadata = {
  title: 'Medicina con Susy',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Navbar />
        {children}
        <Suspense>
          <Analytics />
        </Suspense>
        
        </body>
    </html>
  )
}
