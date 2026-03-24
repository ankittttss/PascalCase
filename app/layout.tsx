import React from "react"
import type { Metadata } from 'next'
import { Sora, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const sora = Sora({ subsets: ["latin"], variable: '--font-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Pascalcase | Dynamics 365 & Power Platform Consultancy',
  description: 'Transform your Dynamics 365 investment with ex-Microsoft experts. We build tools and provide consultancy for D365 Marketing, Sales, Customer Service, and Field Service.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-white text-ink">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
