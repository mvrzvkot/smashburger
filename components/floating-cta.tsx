"use client"

import { ShoppingBag } from "lucide-react"
import { useEffect, useState } from "react"
import { useOrder } from "@/components/order-dialog"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const { openOrder } = useOrder()

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (about 100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.5)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={openOrder}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#FFB703] text-[#1a1a1a] font-bold px-6 py-4 rounded-full shadow-lg shadow-[#FFB703]/30 transition-all duration-300 hover:bg-[#FFA000] hover:scale-105 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <ShoppingBag className="w-5 h-5" />
      <span className="hidden sm:inline">Zamow online</span>
    </button>
  )
}
