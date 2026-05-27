"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, ChevronDown, ShoppingBag, Store, Truck } from "lucide-react"

const GOORDER_URL = "https://sigmasmash.pl/zamow"

function useIsOpenNow() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date()
      const warsawTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Warsaw" }))
      const hour = warsawTime.getHours()
      setIsOpen(hour >= 12 && hour < 22)
    }

    checkIfOpen()
    const interval = setInterval(checkIfOpen, 60000)
    return () => clearInterval(interval)
  }, [])

  return isOpen
}

export function Hero() {
  const isOpenNow = useIsOpenNow()

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image - no animation */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j32X3Q2RF27wgDl3OtsSLhqGFWIq8N.png"
          alt="Sigma Smash - burgery i pizza rzymska, widok z góry na stół pełen jedzenia"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
        <div className="max-w-2xl pt-24 pb-32">
          {/* Status badge - only show when open (12:00-22:00 Warsaw time) */}
          {isOpenNow && (
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-white text-sm font-medium">Otwarte teraz</span>
            </div>
          )}
          
          {/* Logo mark */}
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-5olYA3g5xuqH0OyEmVFQKqKwYvTIyE.jpg"
              alt="Sigma Smash Logo"
              width={64}
              height={64}
              className="rounded-2xl shadow-lg"
            />
            <div className="h-12 w-px bg-white/30" />
            <span className="text-white/80 text-sm uppercase tracking-[0.2em]">Smash Burgers & Pizza</span>
          </div>

          {/* Main headline */}
          <h1 className="font-[family-name:var(--font-heading)] text-7xl md:text-8xl lg:text-9xl text-white leading-[0.85] mb-6 tracking-tight">
            SIGMA
            <br />
            <span className="text-[#FFB703] drop-shadow-[0_0_30px_rgba(255,183,3,0.5)]">SMASH</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-white/70 text-xl md:text-2xl max-w-lg mb-10 leading-relaxed font-light">
            Prawdziwe <span className="text-[#FFB703] font-medium">smash burgery</span> z sercem. Świeża wołowina 100%, bez wypełniaczy, autorskie sosy, podwójny cheddar. Teraz także <span className="text-[#FFB703] font-medium">pizza rzymska</span> dostępna w lokalu!
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              asChild
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold rounded-full px-10 text-lg h-14 bg-white/5 backdrop-blur-sm transition-all"
            >
              <Link href="#menu">Zobacz menu</Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold rounded-full px-10 text-lg h-14 bg-white/5 backdrop-blur-sm transition-all"
            >
              <Link href="#menu">Zobacz Menu</Link>
            </Button>
          </div>

          {/* Two locations */}
          <div className="space-y-3">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-4">Nasze lokalizacje</p>
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Lokal */}
              <a 
                href="https://maps.app.goo.gl/jSmnaKVtUwKxtux19"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 hover:bg-white/15 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#E63946] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold flex items-center gap-2">
                    Lokal Białystok
                    <MapPin className="w-3 h-3 text-white/50 group-hover:text-[#FFB703] transition-colors" />
                  </p>
                  <p className="text-white/60 text-sm">ul. Świętojańska 4, 15-082 Białystok</p>
                </div>
              </a>
              
              {/* Food Truck */}
              <a 
                href="https://maps.app.goo.gl/5pMnENe6nc8fFE5RA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 hover:bg-white/15 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#FFB703] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <div>
                  <p className="text-white font-semibold flex items-center gap-2">
                    Food Truck Ignatki
                    <MapPin className="w-3 h-3 text-white/50 group-hover:text-[#FFB703] transition-colors" />
                  </p>
                  <p className="text-white/60 text-sm">Zalesie 2a, 16-001 Ignatki-Osiedle</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - with margin */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 mt-8">
        <Link 
          href="#menu" 
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors group"
        >
          <span className="text-xs uppercase tracking-widest">Przewiń</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </Link>
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFB703]/10 rounded-full blur-[150px] pointer-events-none" />
    </section>
  )
}
