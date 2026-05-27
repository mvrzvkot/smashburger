import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

const GOORDER_URL = "https://sigmasmash.pl/zamow"

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-16">
      <div className="container mx-auto px-4">
        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#E63946] to-[#ff4757] rounded-3xl p-8 md:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-white mb-2">
              GLODNY?
            </h3>
            <p className="text-white/80">Zamow online i odbierz bez czekania!</p>
          </div>
          <Button 
            asChild
            size="lg"
            className="bg-[#FFB703] text-[#1a1a1a] hover:bg-[#FFA000] font-bold rounded-full px-10 h-14 text-lg gap-2 whitespace-nowrap"
          >
            <a href={GOORDER_URL} target="_blank" rel="noopener noreferrer">
              <ShoppingBag className="w-5 h-5" />
              Zamow online
            </a>
          </Button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-5olYA3g5xuqH0OyEmVFQKqKwYvTIyE.jpg"
              alt="Sigma Smash Logo"
              width={60}
              height={60}
              className="rounded-lg"
            />
            <div>
              <p className="font-[family-name:var(--font-heading)] text-2xl text-white">
                SIGMA SMASH
              </p>
              <p className="text-gray-400 text-sm">Smash Burgers & Pizza Rzymska</p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-8">
            <Link href="#menu" className="text-gray-400 hover:text-[#FFB703] transition-colors text-sm">
              Menu
            </Link>
            <Link href="#o-nas" className="text-gray-400 hover:text-[#FFB703] transition-colors text-sm">
              O nas
            </Link>
            <Link href="#lokalizacje" className="text-gray-400 hover:text-[#FFB703] transition-colors text-sm">
              Lokalizacje
            </Link>
            <a href={GOORDER_URL} target="_blank" rel="noopener noreferrer" className="text-[#FFB703] hover:text-[#FFA000] transition-colors text-sm font-semibold">
              Zamow online
            </a>
          </nav>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/sigmasmash"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#E63946] rounded-full flex items-center justify-center hover:bg-[#FFB703] transition-colors"
              aria-label="Facebook Sigma Smash"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@sigma_burger88"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#E63946] rounded-full flex items-center justify-center hover:bg-[#FFB703] transition-colors"
              aria-label="TikTok Sigma Smash"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-gray-500 text-sm">
              &copy; 2026 Sigma Smash. Wszystkie prawa zastrzezone.
            </p>
            <div className="text-gray-500 text-sm">
              <span>Lokal: ul. Swietojanska 4, 15-082 Bialystok</span>
              <span className="mx-2">|</span>
              <span>Food Truck: Zalesie 2a, 16-001 Ignatki-Osiedle</span>
            </div>
          </div>
          {/* Very discreet credit */}
          <div className="mt-6 text-center">
            <a 
              href="https://seoholic.pl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-500 text-[10px] tracking-wide transition-colors"
            >
              projekt i realizacja: seoholic.pl
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
