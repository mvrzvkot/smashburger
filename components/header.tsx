"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useOrder } from "@/components/order-dialog"

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#o-nas", label: "O nas" },
  { href: "#lokalizacje", label: "Lokalizacje" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { openOrder } = useOrder()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#E63946]/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-5olYA3g5xuqH0OyEmVFQKqKwYvTIyE.jpg"
              alt="Sigma Smash Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white font-medium hover:text-[#FFB703] transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Button 
              onClick={openOrder}
              className="bg-[#FFB703] text-[#1a1a1a] hover:bg-[#FFA000] font-bold rounded-full px-6 gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Zamow online
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden pb-6 pt-2 border-t border-white/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white font-medium hover:text-[#FFB703] transition-colors text-lg"
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                onClick={() => {
                  setIsOpen(false)
                  openOrder()
                }}
                className="bg-[#FFB703] text-[#1a1a1a] hover:bg-[#FFA000] font-bold rounded-full mt-2 gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Zamow online
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
