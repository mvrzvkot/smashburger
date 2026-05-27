import Image from "next/image"
import { Beef, Award, Flame, Store, Truck } from "lucide-react"

const features = [
  {
    icon: Beef,
    title: "100% Wołowina",
    description: "Tylko świeża wołowina 100% bez wypełniaczy, świeżo smashowana na gorącej płycie.",
  },
  {
    icon: Award,
    title: "Autorskie Sosy",
    description: "Nasze unikalne sosy SIGMA i ROYAL tworzymy według tajnych receptur",
  },
  {
    icon: Store,
    title: "Lokal + Food Truck",
    description: "Odwiedź nas w lokalu w Białymstoku lub przy food trucku w Ignatkach.",
  },
  {
    icon: Flame,
    title: "Pizza Rzymska",
    description: "W lokalu serwujemy także autentyczną pizzę pieczoną w piecu opalanym drewnem!",
  },
]

export function About() {
  return (
    <section id="o-nas" className="py-20 md:py-32 bg-[#E63946] scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-[#FFB703] font-semibold text-sm uppercase tracking-wider mb-4">
              O Nas
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl text-white mb-6">
              SIGMA SMASH
              <br />
              <span className="text-[#FFB703]">BURGERY & PIZZA</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Zaczęliśmy jako food truck z pasją do prawdziwych smash burgerów. Dzięki Waszemu wsparciu otworzyliśmy lokal w centrum Białegostoku, gdzie serwujemy nie tylko burgery, ale także autentyczną <span className="text-[#FFB703] font-semibold">pizzę rzymską</span> na cienkim spodzie. Używamy tylko <span className="text-[#FFB703] font-semibold">świeżej wołowiny 100% bez wypełniaczy</span>, autorskich sosów i świeżych składników, przygotowywanych codziennie.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FFB703] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#FFB703]/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#FFB703]/20 rounded-full blur-3xl" />
              
              {/* Main image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-5olYA3g5xuqH0OyEmVFQKqKwYvTIyE.jpg"
                  alt="Sigma Smash Logo"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats - moved to bottom right, not overlapping */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-5 shadow-xl z-20">
                <div className="text-center">
                  <p className="font-[family-name:var(--font-heading)] text-4xl text-[#E63946]">2</p>
                  <p className="text-muted-foreground text-sm font-medium">Lokalizacje</p>
                </div>
              </div>

              {/* Icons badge - moved below the logo image */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 translate-y-full bg-[#FFB703] rounded-2xl px-6 py-3 shadow-xl z-20 flex items-center gap-3 mt-4">
                <Truck className="w-5 h-5 text-[#1a1a1a]" />
                <span className="text-[#1a1a1a] text-sm font-semibold">+</span>
                <Store className="w-5 h-5 text-[#1a1a1a]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
