import { fetchDynamicIptvLinks } from '@/ai/flows/fetch-dynamic-iptv-links';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

export async function DynamicProviderLinks() {
  let links: string[] = [];
  try {
    links = await fetchDynamicIptvLinks();
  } catch (error) {
    console.error('Failed to fetch dynamic IPTV links:', error);
  }

  if (!links || links.length === 0) {
    return (
      <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg w-full sm:w-auto shrink-0">
        <Rocket className="mr-2 h-5 w-5" /> Get Best IPTV 2025 Subscription!
      </Button>
    );
  }

  return (
    <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-wrap gap-4 justify-center">
            {links.slice(0, 1).map((link, index) => (
            <a href={link} target="_blank" rel="noopener noreferrer" key={index} className="w-full sm:w-auto">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg w-full sm:w-auto shrink-0">
                <Rocket className="mr-2 h-5 w-5" /> Get Best IPTV 2025 Subscription!
                </Button>
            </a>
            ))}
        </div>
        <p className="text-xs opacity-80 mt-2">Includes free trial • 30-day money-back guarantee</p>
    </div>
  );
}
