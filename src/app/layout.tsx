import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI+HR Market Research Report | Professional Business Analysis',
  description: 'Comprehensive AI and Human Resources market research report providing professional data support and strategic insights for business decision-making',
  keywords: 'AI, Human Resources, Market Research, Business Analysis, Enterprise Strategy, Japan SME',
  authors: [{ name: 'AI-HR Research Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'AI+HR Market Research Report',
    description: 'Professional AI and Human Resources market analysis report',
    type: 'website',
    locale: 'en_US',
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}