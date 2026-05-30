import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-heading'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

const siteUrl = 'https://sigmasmash.pl'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sigma Smash | Smash Burgery & Pizza Rzymska | Bialystok',
    template: '%s | Sigma Smash'
  },
  description: 'Najlepsze smash burgery i pizza rzymska w Bialymstoku! 100% wolowiny, autorskie sosy, podwojny cheddar. Lokal przy ul. Swietojanskiej 4 i food truck w Ignatkach. Zamow online na goorder!',
  keywords: [
    'smash burger',
    'burgery bialystok',
    'pizza rzymska',
    'food truck bialystok',
    'sigma smash',
    'burger bialystok',
    'restauracja bialystok',
    'dostawa jedzenia bialystok',
    'ignatki food truck',
    'swietojanska bialystok',
    'najlepsze burgery bialystok',
    'pizza z pieca',
    'smash burger bialystok'
  ],
  authors: [{ name: 'Sigma Smash', url: siteUrl }],
  creator: 'seoholic.pl',
  publisher: 'Sigma Smash',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: siteUrl,
    siteName: 'Sigma Smash',
    title: 'Sigma Smash | Smash Burgery & Pizza Rzymska | Bialystok',
    description: 'Najlepsze smash burgery i pizza rzymska w Bialymstoku! 100% wolowiny, autorskie sosy, podwojny cheddar. Zamow online!',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a229a5fc-1b6f-4516-9493-0fba1fe327b2-MxnYXwgF9ig5yZzGHPSRr1fW0ENS0z.jpg',
        width: 1200,
        height: 630,
        alt: 'Sigma Smash - Smash Burger przy piecu opalanym drewnem',
      },
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-5olYA3g5xuqH0OyEmVFQKqKwYvTIyE.jpg',
        width: 500,
        height: 500,
        alt: 'Logo Sigma Smash',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sigma Smash | Smash Burgery & Pizza Rzymska | Bialystok',
    description: 'Najlepsze smash burgery i pizza rzymska w Bialymstoku! 100% wolowiny, autorskie sosy, podwojny cheddar.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a229a5fc-1b6f-4516-9493-0fba1fe327b2-MxnYXwgF9ig5yZzGHPSRr1fW0ENS0z.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  category: 'restaurant',
  other: {
    'geo.region': 'PL-20',
    'geo.placename': 'Bialystok',
    'geo.position': '53.1325;23.1548',
    'ICBM': '53.1325, 23.1548',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#E63946' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Sigma Smash',
    description: 'Najlepsze smash burgery i pizza rzymska w Bialymstoku',
    url: siteUrl,
    telephone: ['+48530272696', '+48782250006'],
    email: 'kontakt@sigmasmash.pl',
    priceRange: '$$',
    servesCuisine: ['American', 'Italian', 'Burgers', 'Pizza'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-5olYA3g5xuqH0OyEmVFQKqKwYvTIyE.jpg',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-5olYA3g5xuqH0OyEmVFQKqKwYvTIyE.jpg',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'ul. Swietojanska 4',
        addressLocality: 'Bialystok',
        postalCode: '15-082',
        addressCountry: 'PL',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Zalesie 2a',
        addressLocality: 'Ignatki-Osiedle',
        postalCode: '16-001',
        addressCountry: 'PL',
      },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.1325,
      longitude: 23.1548,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '12:00',
        closes: '22:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/sigmasmash',
      'https://www.tiktok.com/@sigma_burger88',
      'https://sigmasmash.goorder.pl',
    ],
    menu: 'https://sigmasmash.goorder.pl',
    acceptsReservations: false,
    hasMenu: {
      '@type': 'Menu',
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Burgery',
          hasMenuItem: [
            {
              '@type': 'MenuItem',
              name: 'Burger Sigma',
              description: 'Autorski sos SIGMA, 100% wolowiny, podwojny cheddar',
              offers: {
                '@type': 'Offer',
                price: '19.99',
                priceCurrency: 'PLN',
              },
            },
            {
              '@type': 'MenuItem',
              name: 'Burger Royal',
              description: 'Sos ROYAL na bazie musztardy i ketchupu, ogorek piklowany',
              offers: {
                '@type': 'Offer',
                price: '19.99',
                priceCurrency: 'PLN',
              },
            },
            {
              '@type': 'MenuItem',
              name: 'Burger Red Dead',
              description: 'Bardzo pikantny sos Carolina Reaper 700k+ SHU',
              offers: {
                '@type': 'Offer',
                price: '19.99',
                priceCurrency: 'PLN',
              },
            },
          ],
        },
        {
          '@type': 'MenuSection',
          name: 'Pizza Rzymska',
          hasMenuItem: [
            {
              '@type': 'MenuItem',
              name: 'Pizza Margherita',
              description: 'Sos San Marzano, mozzarella fior di latte, bazylia',
              offers: {
                '@type': 'Offer',
                price: '32',
                priceCurrency: 'PLN',
              },
            },
          ],
        },
      ],
    },
  }

  return (
    <html lang="pl" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
