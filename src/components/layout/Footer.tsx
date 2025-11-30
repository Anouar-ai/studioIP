import Link from "next/link";
import { Tv } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <div className="flex items-center gap-2">
           <Tv className="h-6 w-6 text-primary" />
          <p className="text-sm font-bold font-headline">
            StreamWise IPTV Guide
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
