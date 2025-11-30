import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Banknote,
  CheckCircle2,
  Clapperboard,
  Flame,
  Monitor,
  Rocket,
  Smartphone,
  Sparkles,
  Timer,
  Tv,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ProviderTable } from '@/components/home/ProviderTable';
import { Faq } from '@/components/home/Faq';
import { DynamicProviderLinks } from '@/components/home/DynamicProviderLinks';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const tableOfContents = [
  { href: '#what-is-iptv', text: 'What is IPTV? Understanding Internet Protocol Television' },
  { href: '#why-iptv', text: 'Why IPTV is Dominating 2025: Key Benefits and Features' },
  { href: '#best-providers', text: 'Best IPTV Providers in 2025: Comprehensive Comparison' },
  { href: '#get-started', text: 'How to Get Started with IPTV: Complete Setup Guide' },
  { href: '#advanced-tips', text: 'Advanced IPTV Tips & Strategies for Optimal Streaming' },
  { href: '#faq', text: 'Frequently Asked Questions' },
];

const benefits = [
  {
    icon: Clapperboard,
    title: 'Massive Content Library',
    description:
      'Access to 10,000+ live TV channels, 20,000+ movies, and thousands of TV series from around the world. From premium sports to international news and niche entertainment.',
  },
  {
    icon: Timer,
    title: 'Time-Shifted Viewing',
    description:
      'Never miss your favorite shows with catch-up TV and cloud DVR functionality. Watch content at your convenience, not according to broadcast schedules.',
  },
  {
    icon: Smartphone,
    title: 'Multi-Device Compatibility',
    description:
      'Stream seamlessly across all your devices—smart TVs, Android/iOS devices, Firestick, MAG boxes, and computers with a single subscription.',
  },
  {
    icon: Banknote,
    title: 'Significant Cost Savings',
    description:
      'Premium IPTV services cost as little as $10-20 monthly compared to $100+ for traditional cable packages with similar channel lineups.',
  },
];

const setupSteps = [
    { title: 'Choose Your IPTV Provider', description: 'Select a reputable provider that offers the channels and features you need. Consider starting with a free trial to test the service.'},
    { title: 'Check Your Internet Connection', description: 'Ensure you have a stable internet connection with sufficient speed: SD (5-10 Mbps), HD (10-20 Mbps), 4K (25+ Mbps).'},
    { title: 'Select Your Viewing Device', description: 'IPTV works on various devices like Amazon Firestick, Android TV Boxes, Smart TVs, Mobile Devices, and Computers.'},
    { title: 'Install IPTV Player Application', description: 'Depending on your device, you\'ll need to install a compatible player like Smart IPTV, TiviMate, IPTV Smarters, or VLC.'},
    { title: 'Configure Your Service', description: 'Enter your subscription details (Portal URL, Xtream Codes, M3U playlist) provided by your IPTV service.'}
]

export default function Home() {
  const iptvInterfaceImage = PlaceHolderImages.find((p) => p.id === 'iptv-interface');
  const multiDeviceImage = PlaceHolderImages.find((p) => p.id === 'multi-device-streaming');
  const mobileSetupImage = PlaceHolderImages.find((p) => p.id === 'mobile-setup');

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <a href="#main-article" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-20 focus:left-4 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:rounded-md">
        Skip to content
      </a>
      <article id="main-article" className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-2">November 27, 2025</p>
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary leading-tight">
            Best IPTV Subscription 2025: Ultimate Streaming Guide & Top Picks
          </h1>
        </header>

        <Card className="mb-12 bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <Rocket className="mx-auto h-12 w-12 text-accent mb-4" />
            <h2 className="text-2xl font-bold font-headline text-primary mb-2">
              Ready to Transform Your Entertainment?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of satisfied users with the #1 rated IPTV service of 2025
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg w-full sm:w-auto">
              <Sparkles className="mr-2 h-5 w-5" /> Start Your IPTV Free Trial Now!
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              No credit card required • Cancel anytime • 24/7 support
            </p>
          </CardContent>
        </Card>

        <section id="toc" className="mb-16 p-6 bg-card rounded-lg border">
          <h2 className="text-2xl font-bold font-headline mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            {tableOfContents.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center text-primary hover:text-accent transition-colors group"
                >
                  <CheckCircle2 className="h-4 w-4 mr-3 text-accent/50 group-hover:text-accent transition-colors" />
                  <span className="font-medium">{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section id="what-is-iptv" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold font-headline mb-4 text-primary">
            What is IPTV? Understanding Internet Protocol Television
          </h2>
          <div className="space-y-6 text-lg text-foreground/80">
            <p>
              IPTV subscription represents the future of television, delivering content through internet protocol
              rather than traditional terrestrial, satellite, or cable formats. In 2025, this technology has evolved to
              become the preferred choice for millions seeking flexible, affordable, and comprehensive entertainment
              solutions.
            </p>
            <p>
              Unlike conventional TV that broadcasts all channels simultaneously, IPTV uses your internet connection to
              stream content on-demand. This means you only receive the content you actually want to watch, resulting in a
              more personalized and efficient viewing experience.
            </p>
            {iptvInterfaceImage && (
              <div className="my-8 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={iptvInterfaceImage.imageUrl}
                  alt={iptvInterfaceImage.description}
                  width={1200}
                  height={600}
                  data-ai-hint={iptvInterfaceImage.imageHint}
                  className="w-full"
                />
              </div>
            )}
            <p>The global IPTV market has exploded in 2025, with projections indicating over 250 million subscribers worldwide. This growth is driven by several key factors:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><span className="font-semibold">Cost Efficiency:</span> IPTV subscriptions typically cost 60-80% less than traditional cable packages.</li>
                <li><span className="font-semibold">Content Variety:</span> Access to thousands of international channels, movies, and TV series.</li>
                <li><span className="font-semibold">Flexibility:</span> Watch on multiple devices including smart TVs, smartphones, tablets, and computers.</li>
                <li><span className="font-semibold">Advanced Features:</span> Catch-up TV, video on demand (VOD), and electronic program guides (EPG).</li>
            </ul>
             <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
                <span className="font-bold">Expert Insight:</span> The shift to IPTV isn&apos;t just about saving money—it&apos;s about gaining control over your entertainment. With features like time-shifted media and interactive capabilities, IPTV puts you in the director&apos;s chair of your viewing experience.
            </blockquote>
          </div>
        </section>
        
        <section id="why-iptv" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold font-headline mb-6 text-primary">
            Why IPTV is Dominating 2025: Key Benefits and Features
          </h2>
          <p className="text-lg text-foreground/80 mb-8">As we navigate through 2025, IPTV subscriptions have become increasingly sophisticated, offering features that traditional TV services simply can&apos;t match. Here&apos;s why millions are making the switch:</p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

            {multiDeviceImage && (
              <div className="my-8 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={multiDeviceImage.imageUrl}
                  alt={multiDeviceImage.description}
                  width={1200}
                  height={600}
                  data-ai-hint={multiDeviceImage.imageHint}
                  className="w-full"
                />
              </div>
            )}
            
            <h3 className="text-2xl font-bold font-headline mt-12 mb-4 text-primary">Technical Advancements in 2025 IPTV</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-lg text-foreground/80">
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0"/>4K & 8K Ultra HD Streaming</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0"/>AI-Powered Recommendations</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0"/>Low Latency Streaming</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0"/>Enhanced Security</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0"/>Interactive Features</li>
            </ul>

            <Card className="mt-16 bg-primary text-primary-foreground">
                <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div>
                        <Flame className="h-10 w-10 text-accent mb-2 hidden md:block" />
                        <h3 className="text-2xl font-bold font-headline mb-2">Why Settle for Limited Entertainment?</h3>
                        <p className="opacity-80">Experience the difference with our top-rated IPTV service featuring 10,000+ channels, 4K streaming, and 24/7 customer support.</p>
                    </div>
                    <Suspense fallback={<Skeleton className="h-12 w-64" />}>
                      <DynamicProviderLinks />
                    </Suspense>
                </CardContent>
            </Card>
        </section>


        <section id="best-providers" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold font-headline mb-4 text-primary">
            Best IPTV Providers in 2025: Comprehensive Comparison
          </h2>
          <p className="text-lg text-foreground/80 mb-6">
            With hundreds of IPTV services available, choosing the right one can be challenging. After extensive testing
            and analysis, we&apos;ve identified the top performers in 2025 based on reliability, content variety, and
            user satisfaction.
          </p>
          <ProviderTable />
          <blockquote className="mt-8 border-l-4 border-accent pl-4 italic text-muted-foreground">
                <span className="font-bold">Pro Tip:</span> Always test IPTV services with their free trial before committing to a long-term subscription. This allows you to evaluate stream quality, channel selection, and overall reliability specific to your location and internet connection.
            </blockquote>
        </section>

        <section id="get-started" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold font-headline mb-4 text-primary">How to Get Started with IPTV: Complete Setup Guide</h2>
            <p className="text-lg text-foreground/80 mb-8">Getting started with IPTV is simpler than you might think. Follow this step-by-step guide to begin your IPTV journey in 2025:</p>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    {setupSteps.map((step, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold font-headline text-lg">
                                {index + 1}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {mobileSetupImage && (
                    <div className="rounded-lg overflow-hidden shadow-xl">
                        <Image
                        src={mobileSetupImage.imageUrl}
                        alt={mobileSetupImage.description}
                        width={1200}
                        height={600}
                        data-ai-hint={mobileSetupImage.imageHint}
                        className="w-full"
                        />
                    </div>
                )}
            </div>
        </section>

        <section id="advanced-tips" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold font-headline mb-4 text-primary">
            Advanced IPTV Tips & Strategies for Optimal Streaming
          </h2>
          <p className="text-lg text-foreground/80 mb-6">
            Maximize your IPTV experience with these expert tips gathered from thousands of hours of testing in 2025:
          </p>
          <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Optimize Your Network for IPTV</h3>
          <p className="text-lg text-foreground/80 mb-6">
            Network configuration can dramatically impact your streaming quality:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-foreground/80 pl-4">
              <li><span className="font-semibold">Use Ethernet When Possible:</span> Wired connections provide more stability than WiFi.</li>
              <li><span className="font-semibold">Quality of Service (QoS):</span> Prioritize IPTV traffic on your router.</li>
              <li><span className="font-semibold">DNS Optimization:</span> Use faster DNS servers like Google DNS or Cloudflare.</li>
              <li><span className="font-semibold">Router Placement:</span> Position your router centrally for better coverage.</li>
          </ul>
        </section>
        
        <section id="faq" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold font-headline mb-6 text-primary">Frequently Asked Questions</h2>
          <Faq />
        </section>
      </article>
    </div>
  );
}
