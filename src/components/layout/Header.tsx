import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tv } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Tv className="h-7 w-7 text-primary" />
          <span className="font-bold font-headline text-lg">StreamWise</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="font-medium text-foreground/70 transition-colors hover:text-foreground">
            Home
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
            <Button asChild>
                <Link href="/#get-started">
                    Get Started
                </Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
