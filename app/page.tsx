import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Menu } from "@/components/menu"
import { About } from "@/components/about"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Location />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
