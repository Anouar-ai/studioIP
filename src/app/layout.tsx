import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

export const metadata: Metadata = {
  title: '20 Best IPTV Service Providers November 2025 (Ditch Your Cable)',
  description:
    'This IPTV resource guide from IPTV Provider ranks the Best IPTV Services November 2025. This covers everything you need to know about live TV.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
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
