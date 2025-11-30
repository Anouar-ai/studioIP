import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('http://iptvproviders.eu/iptv-subscription/month'),
  title: 'Best IPTV Provider | 24,000+ Channels & VOD | IPTV Service',
  description:
    'Get the best IPTV service with over 24,000 live channels and a massive VOD library. Instant activation, HD/4K quality, and 24/7 support. Subscribe to the top IPTV provider today!',
  keywords: [
    'best IPTV provider',
    'iptv providers',
    'best iptv providers',
    'iptv service provider',
    'buy IPTV',
    'IPTV subscription',
    'IPTV USA',
    'IPTV UK',
    'IPTV service',
    'premium IPTV',
    'cheap IPTV',
    'IPTV channels',
    'live TV streaming',
    '4K IPTV',
    'sports IPTV',
    'VOD streaming',
  ],
  authors: [{ name: 'IPTV Provider', url: 'http://iptvproviders.eu/iptv-subscription/month' }],
  creator: 'IPTV Provider',
  publisher: 'IPTV Provider',
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
  category: 'technology',
  alternates: {
    canonical: 'http://iptvproviders.eu/iptv-subscription/month',
    languages: {
      'en-US': 'http://iptvproviders.eu/iptv-subscription/month',
      'x-default': 'http://iptvproviders.eu/iptv-subscription/month',
    },
  },
  verification: {
    google: 'WayUe3dolb9UPFpMPHfTYy8CS-T1RkpFYqGvAkW5XqI',
    other: {
      'msvalidate.01': ['CEC29E9356C1B062CC9637E64D68C778'],
    },
  },
  openGraph: {
    title: 'Best IPTV Provider | 24,000+ Channels & VOD | IPTV Service',
    description:
      'Get the best IPTV service with over 24,000 live channels and a massive VOD library. Instant activation, HD/4K quality, and 24/7 support. Subscribe to the top IPTV provider today!',
    url: 'http://iptvproviders.eu/iptv-subscription/month',
    siteName: 'IPTV Provider',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'http://iptvproviders.eu/iptv-subscription/month/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IPTV Provider - Best Streaming Service',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@iptvprovider',
    creator: '@iptvprovider',
    title: 'Best IPTV Provider | 24,000+ Channels & VOD | IPTV Service',
    description:
      'Get the best IPTV service with over 24,000 live channels and a massive VOD library. Instant activation, HD/4K quality, and 24/7 support. Subscribe to the top IPTV provider today!',
    images: [
      {
        url: 'http://iptvproviders.eu/iptv-subscription/month/og-image.jpg',
        alt: 'IPTV Provider - Premium IPTV Service',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'IPTV Provider',
    url: 'http://iptvproviders.eu/iptv-subscription/month',
    logo: 'http://iptvproviders.eu/iptv-subscription/month/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-555-0199',
      'contactType': 'Customer Service',
    },
    sameAs: [
      'https://twitter.com/iptvprovider',
      'https://facebook.com/iptvprovider',
      'https://instagram.com/iptvprovider',
    ],
  };

  const websiteSchema = {
      "@context":"https://schema.org",
      "@type":"WebSite",
      "url":"http://iptvproviders.eu/iptv-subscription/month",
      "name":"IPTV Provider",
      "alternateName":["IPTV Providers","best iptv provider"],
      "potentialAction":{
        "@type":"SearchAction",
        "target":{
          "@type":"EntryPoint",
          "urlTemplate":"http://iptvproviders.eu/iptv-subscription/month/search?q={search_term_string}"
        },
        "query-input":"required name=search_term_string"
      }
  }


  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
            id="schema-website"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
