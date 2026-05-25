"use client"

import { useState } from "react"
import Image from "next/image"
import { Flame, Leaf, ShoppingBag, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const GOORDER_URL = "https://sigmaburger.goorder.pl/"

// Real burger images provided by user - centered on burger
const burgerImages = {
  sigma: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/60878ee1-4190-4d8d-b76c-4a0cca443936-dRvRY1ShDeIcNOngMUlWyyEbE20UNO.jpg",
  royal: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b8f5cc39-5962-4ac9-a2d9-16e1ceff20ad-O4IxaZm8gkUD3vdXbj3NTSwSpeP7JD.jpg",
  redDead: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a229a5fc-1b6f-4516-9493-0fba1fe327b2-MxnYXwgF9ig5yZzGHPSRr1fW0ENS0z.jpg",
}

const pizzaImages = {
  margherita: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7d8b8154-4d7e-4c08-967d-71f769369c01-7TxvvFsw8wkb7YQtZFKqpjxJvMCBee.jpg",
  pepperoni: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a7152f81-5b7c-4a20-a2b7-a4587a7af9ab-l9b0oywYHTFk9rRjh6iAxd7NGO5BZf.jpg",
  capriciosa: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/124b1ea1-c285-49a7-91a3-dc3b2e8d6a23-xkhD2zmE2XhcyKbJ3JCZBYe444lu0j.jpg",
  czterySery: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/946c27ae-31bc-44a7-ab47-93077c9d8f95-CPBjiFGGXbZwce87N6gi2Iqaylwhbg.jpg",
  ostra: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9f231237-c583-4f3a-93ab-ec6a7faa827d-UD73W4RS9m9iMAXqG1NqxOnLsXIKjr.jpg",
  parmenska: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0e123ff4-ff5e-47cd-bb38-51fbb9bb0aee-mVShNP2U2CFXv6JRSc0Y1ItN0hqFHW.jpg",
  texas: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6f7d4ca9-c483-49a2-ace5-0f2a2ebe82c1-xg2R2xQJMU4tFMeNRKWO0XcHRZQ8rl.jpg",
}

const burgers = [
  {
    name: "Burger Sigma",
    description: "Nasz klasyk! Autorski sos SIGMA na bazie majonezu, 100% wolowiny i podwojny cheddar.",
    image: burgerImages.sigma,
    imagePosition: "object-[center_10%]",
    variants: {
      classic: {
        name: "Classic",
        ingredients: [
          "Wolowina 100%",
          "Podwojny cheddar",
          "Autorski sos SIGMA",
          "Bez cebuli",
        ],
      },
      oklahoma: {
        name: "Oklahoma",
        ingredients: [
          "Wolowina 100%",
          "Podwojny cheddar",
          "Autorski sos SIGMA",
          "Cebula smashowana",
        ],
        hasOnion: true,
      },
    },
    color: "#FFB703",
    bgClass: "bg-[#FFB703]",
  },

  {
    name: "Burger Royal",
    description: "Krolewski smak z sosem ROYAL na bazie musztardy i ketchupu oraz ogorkiem piklowanym.",
    image: burgerImages.royal,
    imagePosition: "object-[center_25%]",
    variants: {
      classic: {
        name: "Classic",
        ingredients: [
          "Wolowina 100%",
          "Podwojny cheddar",
          "Autorski sos ROYAL",
          "Ogorek piklowany",
          "Bez cebuli",
        ],
      },
      oklahoma: {
        name: "Oklahoma",
        ingredients: [
          "Wolowina 100%",
          "Podwojny cheddar",
          "Autorski sos ROYAL",
          "Ogorek piklowany",
          "Cebula smashowana",
        ],
        hasOnion: true,
      },
    },
    color: "#E63946",
    bgClass: "bg-[#E63946]",
  },

  {
    name: "Burger Red Dead",
    description: "Dla odwaznych! Bardzo pikantny sos Carolina Reaper 700k+ SHU - ekstremalna ostrosc!",
    image: burgerImages.redDead,
    imagePosition: "object-[center_25%]",
    variants: {
      classic: {
        name: "Classic",
        ingredients: [
          "Wolowina 100%",
          "Podwojny cheddar",
          "Sos Carolina Reaper 700k+ SHU",
          "Ogorek piklowany",
          "Bez cebuli",
        ],
      },
      oklahoma: {
        name: "Oklahoma",
        ingredients: [
          "Wolowina 100%",
          "Podwojny cheddar",
          "Sos Carolina Reaper 700k+ SHU",
          "Ogorek piklowany",
          "Cebula smashowana",
        ],
        hasOnion: true,
      },
    },
    isSpicy: true,
    color: "#E63946",
    bgClass: "bg-gradient-to-r from-[#E63946] to-[#ff4757]",
  },
]

const pizzas = [
  {
    name: "Pizza Margherita",
    description: "Sos z wloskich pomidorow San Marzano, mozzarella fior di latte oraz swieza bazylia.",
    image: pizzaImages.margherita,
    price: "33",
  },
  {
    name: "Pizza Pepperoni",
    description: "Sos z wloskich pomidorow San Marzano, podwojna mozzarella fior di latte, salami oraz pepperoni.",
    image: pizzaImages.pepperoni,
    price: "43",
  },
  {
    name: "Pizza Capriciosa",
    description: "Sos pomidorowy, mozzarella fior di latte, pieczarki, szynka prosciutto cotto oraz boczek podwojnie wedzony.",
    image: pizzaImages.capriciosa,
    price: "45",
  },
  {
    name: "Pizza Cztery Sery",
    description: "Sos serowy z dodatkiem cheddara, mozzarella fior di latte, grecka feta, blue cheese oraz pecorino romano D.O.P.",
    image: pizzaImages.czterySery,
    price: "46",
  },
  {
    name: "Pizza Ostra",
    description: "Sos pomidorowy, mozzarella, spinata picante, chorizo, boczek wedzony, jalapeno oraz sos Carolina Reaper.",
    image: pizzaImages.ostra,
    price: "48",
    isSpicy: true,
  },
  {
    name: "Pizza Parmenska",
    description: "Sos pomidorowy, mozzarella, pomidorki cherry, cebula czerwona, szynka prosciutto, rukola oraz grana padano.",
    image: pizzaImages.parmenska,
    price: "48",
  },
  {
    name: "Pizza Texas",
    description: "Sos BBQ, mozzarella fior di latte, boczek wedzony, szynka prosciutto cotto, wolowina, papryka oraz cebula czerwona.",
    image: pizzaImages.texas,
    price: "49",
  },
]

const priceTiers = [
  { patties: 1, weight: "100g wolowiny", price: "27,00", label: "1 KOTLET" },
  { patties: 2, weight: "200g wolowiny", price: "37,00", label: "2 KOTLETY" },
  { patties: 3, weight: "300g wolowiny", price: "47,00", label: "3 KOTLETY" },
]

export function Menu() {
  const [selectedBurger, setSelectedBurger] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState<"classic" | "oklahoma">("classic")
  const [activeTab, setActiveTab] = useState<"burgers" | "pizza">("burgers")

  const currentBurger = burgers[selectedBurger]

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#faf8f5] scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#E63946] font-semibold text-sm uppercase tracking-wider mb-4">
            Nasze Menu
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
            SIGMA SMASH MENU
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Wybierz swoj glod! Kazdy burger przygotowujemy ze swiezych skladnikow, a pizza pieczona jest w piecu opalanym drewnem.
          </p>
          
          {/* Tab Switcher */}
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-sm">
            <button
              onClick={() => setActiveTab("burgers")}
              className={cn(
                "px-8 py-3 rounded-xl font-semibold transition-all",
                activeTab === "burgers"
                  ? "bg-[#E63946] text-white shadow-lg"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              Burgery
            </button>
            <button
              onClick={() => setActiveTab("pizza")}
              className={cn(
                "px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2",
                activeTab === "pizza"
                  ? "bg-[#E63946] text-white shadow-lg"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              Pizza Rzymska
            </button>
          </div>
        </div>

        {/* Burgers Section */}
        {activeTab === "burgers" && (
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left: Burger Image & Selection */}
            <div className="space-y-6">
              {/* Burger Image Card */}
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src={currentBurger.image}
                  alt={`${currentBurger.name} - smash burger Sigma Smash`}
                  fill
                  className={cn("object-cover transition-transform duration-700 group-hover:scale-105", currentBurger.imagePosition)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Burger name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3">
                    {currentBurger.isSpicy && (
                      <div className="w-10 h-10 bg-[#E63946] rounded-full flex items-center justify-center animate-pulse">
                        <Flame className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-white">
                        {currentBurger.name.toUpperCase()}
                      </h3>
                      <p className="text-white/80 text-sm mt-1">{currentBurger.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Burger Selection Tabs */}
              <div className="grid grid-cols-3 gap-3">
                {burgers.map((burger, index) => (
                  <button
                    key={burger.name}
                    onClick={() => setSelectedBurger(index)}
                    className={cn(
                      "relative aspect-video rounded-xl overflow-hidden transition-all duration-300",
                      selectedBurger === index 
                        ? "ring-4 ring-[#FFB703] scale-[1.02] shadow-lg" 
                        : "opacity-60 hover:opacity-100"
                    )}
                  >
                    <Image
                      src={burger.image}
                      alt={`${burger.name} miniatura`}
                      fill
                      className={cn("object-cover", burger.imagePosition)}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <span className="absolute bottom-2 left-2 text-white font-bold text-xs">
                      {burger.name.split(" ")[1]}
                    </span>
                    {burger.isSpicy && (
                      <Flame className="absolute top-2 right-2 w-4 h-4 text-orange-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Details & Pricing */}
            <div className="space-y-6">
              {/* Variant Toggle */}
              <div className="bg-white rounded-2xl p-2 shadow-sm">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedVariant("classic")}
                    className={cn(
                      "py-4 rounded-xl font-semibold transition-all",
                      selectedVariant === "classic"
                        ? "bg-[#E63946] text-white shadow-lg"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    Classic
                    <span className="block text-xs font-normal mt-1 opacity-80">bez cebuli</span>
                  </button>
                  <button
                    onClick={() => setSelectedVariant("oklahoma")}
                    className={cn(
                      "py-4 rounded-xl font-semibold transition-all flex flex-col items-center gap-1",
                      selectedVariant === "oklahoma"
                        ? "bg-[#E63946] text-white shadow-lg"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <Leaf className="w-4 h-4" />
                      Oklahoma
                    </span>
                    <span className="text-xs font-normal opacity-80">z cebula smashowana</span>
                  </button>
                </div>
              </div>

              {/* Ingredients */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFB703]"></span>
                  Skladniki
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentBurger.variants[selectedVariant].ingredients.map((ingredient, i) => (
                    <span
                      key={i}
                      className="bg-[#faf8f5] text-foreground px-4 py-2 rounded-full text-sm border border-border"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price Cards - unified price for all variants */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E63946]"></span>
                  Wybierz rozmiar
                </h4>
                {priceTiers.map((tier, index) => (
                  <div
                    key={tier.patties}
                    className={cn(
                      "flex items-center justify-between p-5 rounded-2xl transition-all",
                      index === 1 
                        ? "bg-[#E63946] text-white shadow-lg" 
                        : "bg-white shadow-sm"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg",
                        index === 1 ? "bg-white/20 text-white" : "bg-[#FFB703] text-[#1a1a1a]"
                      )}>
                        {tier.patties}x
                      </div>
                      <div>
                        <p className="font-bold">{tier.label}</p>
                        <p className={cn("text-sm", index === 1 ? "text-white/80" : "text-muted-foreground")}>
                          {tier.weight}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={cn(
                        "font-[family-name:var(--font-heading)] text-4xl",
                        index === 1 ? "text-white" : "text-[#E63946]"
                      )}>
                        {tier.price}
                      </p>
                      <p className={cn("text-xs", index === 1 ? "text-white/60" : "text-muted-foreground")}>PLN</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                asChild
                size="lg"
                className="w-full bg-[#FFB703] text-[#1a1a1a] hover:bg-[#FFA000] font-bold rounded-full h-14 text-lg gap-2"
              >
                <a href={GOORDER_URL} target="_blank" rel="noopener noreferrer">
                  <ShoppingBag className="w-5 h-5" />
                  Zamow online
                </a>
              </Button>
            </div>
          </div>
        )}

        {/* Pizza Section */}
        {activeTab === "pizza" && (
          <div className="max-w-6xl mx-auto">
            {/* Info banner - subtle note about pizza availability */}
            <div className="bg-gradient-to-r from-[#E63946]/5 to-[#FFB703]/5 border border-[#E63946]/10 rounded-2xl p-4 mb-8 flex items-start gap-3">
              <Info className="w-5 h-5 text-[#E63946] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-foreground/70">
                Pizza rzymska pieczona w piecu opalanym drewnem przygotowywana jest w <strong>lokalu przy ul. Swietojanskiej 4</strong>. 
                Dostepna na miejscu, na wynos oraz w zamowieniach online z dostawa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pizzas.map((pizza) => (
                <div
                  key={pizza.name}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={pizza.image}
                      alt={`${pizza.name} - pizza rzymska Sigma Smash`}
                      fill
                      className="object-cover object-[center_60%] transition-transform duration-500 group-hover:scale-105"
                    />
                    {pizza.isSpicy && (
                      <div className="absolute top-4 right-4 w-10 h-10 bg-[#E63946] rounded-full flex items-center justify-center">
                        <Flame className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <div className="absolute bottom-4 right-4 bg-[#E63946] text-white px-4 py-2 rounded-full font-bold">
                      {pizza.price} PLN
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl text-foreground mb-2">
                      {pizza.name.toUpperCase()}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {pizza.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-10">
              <Button 
                asChild
                size="lg"
                className="bg-[#FFB703] text-[#1a1a1a] hover:bg-[#FFA000] font-bold rounded-full px-12 h-14 text-lg gap-2"
              >
                <a href={GOORDER_URL} target="_blank" rel="noopener noreferrer">
                  <ShoppingBag className="w-5 h-5" />
                  Zamow online
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
