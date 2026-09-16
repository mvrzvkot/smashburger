"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { Store, Truck, ShoppingBag, ArrowRight, Clock } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const LOKAL_URL = "https://sigmasmash.goorder.pl"
const FOODTRUCK_URL = "https://sigmasmashburger.goorder.pl"

type OrderContextValue = {
  openOrder: () => void
}

const OrderContext = createContext<OrderContextValue | null>(null)

export function useOrder() {
  const ctx = useContext(OrderContext)
  if (!ctx) {
    throw new Error("useOrder must be used within an OrderProvider")
  }
  return ctx
}

const options = [
  {
    name: "Lokal Białystok",
    address: "ul. Świętojańska 4",
    hours: "Codziennie 12:00 – 22:00",
    note: "Burgery i pizza rzymska",
    href: LOKAL_URL,
    icon: Store,
    color: "#E63946",
  },
  {
    name: "Food Truck Ignatki",
    address: "Zalesie 2a, Ignatki-Osiedle",
    hours: "Pon–Pt 9:30 – 17:00 · Sob–Nd 12:00 – 17:00",
    note: "Smash burgery",
    href: FOODTRUCK_URL,
    icon: Truck,
    color: "#FFB703",
  },
]

export function OrderProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  const openOrder = () => setOpen(true)

  return (
    <OrderContext.Provider value={{ openOrder }}>
      {children}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg rounded-3xl p-0 overflow-hidden gap-0">
          <div className="bg-[#E63946] p-6 text-center">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-7 h-7 text-white" />
            </div>
            <DialogHeader>
              <DialogTitle className="font-[family-name:var(--font-heading)] text-3xl text-white text-center">
                GDZIE ZAMAWIASZ?
              </DialogTitle>
              <DialogDescription className="text-white/80 text-center">
                Wybierz lokalizację, z której chcesz złożyć zamówienie online.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="p-6 space-y-4">
            {options.map((option) => (
              <a
                key={option.name}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 p-4 rounded-2xl border-2 border-border hover:border-[#FFB703] hover:bg-[#faf8f5] transition-all group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: option.color }}
                >
                  <option.icon
                    className="w-7 h-7"
                    style={{ color: option.color === "#FFB703" ? "#1a1a1a" : "#ffffff" }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-foreground text-lg leading-tight">{option.name}</p>
                  <p className="text-sm text-muted-foreground">{option.address}</p>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 flex-shrink-0" />
                    {option.hours}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-[#E63946] group-hover:translate-x-1 transition-all flex-shrink-0" />
              </a>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </OrderContext.Provider>
  )
}
