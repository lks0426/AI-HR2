import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI+HR市场调研报告 | 专业商业分析',
  description: '全面的AI与人力资源市场调研报告，为企业决策提供专业数据支持和战略洞察',
  keywords: 'AI, 人力资源, 市场调研, 商业分析, 企业战略',
  authors: [{ name: 'AI-HR Research Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'AI+HR市场调研报告',
    description: '专业的AI与人力资源市场分析报告',
    type: 'website',
    locale: 'zh_CN',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}