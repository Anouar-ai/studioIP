import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iptvprovider.me'),
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
  authors: [{ name: 'IPTV Provider', url: 'https://www.iptvprovider.me' }],
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
    canonical: 'https://www.iptvprovider.me',
    languages: {
      'en-US': 'https://www.iptvprovider.me',
      'x-default': 'https://www.iptvprovider.me',
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
    url: 'https://www.iptvprovider.me',
    siteName: 'IPTV Provider',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.iptvprovider.me/og-image.jpg',
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
        url: 'https://www.iptvprovider.me/og-image.jpg',
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
    url: 'https://www.iptvprovider.me',
    logo: 'https://www.iptvprovider.me/logo.png',
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
      "url":"https://www.iptvprovider.me",
      "name":"IPTV Provider",
      "alternateName":["IPTV Providers","best iptv provider"],
      "potentialAction":{
        "@type":"SearchAction",
        "target":{
          "@type":"EntryPoint",
          "urlTemplate":"https://www.iptvprovider.me/search?q={search_term_string}"
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
