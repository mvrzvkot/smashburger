import { MapPin, Clock, Phone, Navigation, Truck, Store, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

const GOORDER_URL = "https://sigmaburger.goorder.pl/"

const locations = [
  {
    id: "lokal",
    name: "Lokal Bialystok",
    type: "restaurant",
    icon: Store,
    address: "ul. Swietojanska 4",
    city: "15-082 Bialystok",
    phone: "530 272 696",
    hours: [
      { day: "Poniedzialek", time: "12:00 - 22:00" },
      { day: "Wtorek", time: "12:00 - 22:00" },
      { day: "Sroda", time: "12:00 - 22:00" },
      { day: "Czwartek", time: "12:00 - 22:00" },
      { day: "Piatek", time: "12:00 - 22:00" },
      { day: "Sobota", time: "12:00 - 22:00" },
      { day: "Niedziela", time: "12:00 - 22:00" },
    ],
    features: ["Burgery", "Pizza Rzymska", "Na miejscu", "Na wynos"],
    mapsUrl: "https://maps.app.goo.gl/jSmnaKVtUwKxtux19",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2397.7089853099!2d23.1541!3d53.1325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDA3JzU3LjAiTiAyM8KwMDknMTQuOCJF!5e0!3m2!1spl!2spl!4v1234567890",
    color: "#E63946",
  },
  {
    id: "foodtruck",
    name: "Food Truck Ignatki",
    type: "foodtruck",
    icon: Truck,
    address: "Zalesie 2a",
    city: "16-001 Ignatki-Osiedle",
    phone: "782 250 006",
    hours: [
      { day: "Poniedzialek", time: "12:00 - 19:00" },
      { day: "Wtorek", time: "12:00 - 19:00" },
      { day: "Sroda", time: "12:00 - 19:00" },
      { day: "Czwartek", time: "12:00 - 19:00" },
      { day: "Piatek", time: "12:00 - 19:00" },
      { day: "Sobota", time: "12:00 - 19:00" },
      { day: "Niedziela", time: "12:00 - 19:00" },
    ],
    features: ["Burgery", "Na miejscu", "Na wynos"],
    mapsUrl: "https://maps.app.goo.gl/5pMnENe6nc8fFE5RA",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2398.5!2d23.2!3d53.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDA2JzAwLjAiTiAyM8KwMTInMDAuMCJF!5e0!3m2!1spl!2spl!4v1234567890",
    color: "#FFB703",
  },
]

export function Location() {
  return (
    <section id="lokalizacje" className="py-20 md:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#E63946] font-semibold text-sm uppercase tracking-wider mb-4">
            Lokalizacje
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
            ZNAJDZ NAS
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Odwiedz nasz lokal w centrum Bialymstoku lub food truck w Ignatkach!
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {locations.map((location) => (
            <div key={location.id} className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border">
              {/* Google Maps Embed */}
              <div className="relative h-64 w-full">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(location.address + ', ' + location.city)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${location.name}`}
                  className="absolute inset-0"
                />
              </div>
              
              {/* Header with icon */}
              <div 
                className="p-6 text-white"
                style={{ backgroundColor: location.color }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <location.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl">{location.name}</h3>
                    <p className="text-white/80 text-sm">
                      {location.address}, {location.city}
                    </p>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 space-y-6">
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {location.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-muted text-foreground px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hours - Full list */}
                <div className="bg-muted/50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span className="font-semibold text-foreground text-sm">Godziny otwarcia</span>
                  </div>
                  <div className="space-y-2">
                    {location.hours.map((item) => (
                      <div key={item.day} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item.day}</span>
                        <span className="font-medium" style={{ color: location.color }}>{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Adres</p>
                    <p className="font-medium text-foreground">
                      {location.address}, {location.city}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Telefon</p>
                    <a 
                      href={`tel:${location.phone.replace(/\s/g, "")}`}
                      className="font-bold text-foreground hover:text-[#E63946] transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 rounded-full border-2"
                    style={{ borderColor: location.color, color: location.color }}
                  >
                    <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer">
                      <Navigation className="w-4 h-4 mr-2" />
                      Nawiguj
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="flex-1 rounded-full bg-[#FFB703] text-[#1a1a1a] hover:bg-[#FFA000]"
                  >
                    <a href={GOORDER_URL} target="_blank" rel="noopener noreferrer">
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Zamow
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-[#E63946] rounded-3xl p-8 md:p-10 text-center">
            <h3 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-white mb-4">
              MASZ PYTANIA?
            </h3>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Zadzwon do nas lub napisz na social media. Chetnie odpowiemy na wszystkie pytania!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.facebook.com/sigmasmash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Facebook Sigma Smash"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@sigma_burger88"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="TikTok Sigma Smash"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
