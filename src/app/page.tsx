import Header from '@/components/Header'
import Hero from '@/components/Hero'
import JapanMarketAnalysis from '@/components/JapanMarketAnalysis'
import WorkEngagement from '@/components/WorkEngagement'
import Competition from '@/components/Competition'
import CaseStudy from '@/components/CaseStudy'
import AISolution from '@/components/AISolution'
import Strategy from '@/components/Strategy'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <JapanMarketAnalysis />
      <WorkEngagement />
      <Competition />
      <CaseStudy />
      <AISolution />
      <Strategy />
      <Footer />
    </main>
  )
}