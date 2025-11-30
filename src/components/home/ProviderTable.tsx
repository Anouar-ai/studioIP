import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Star } from "lucide-react"

const providers = [
  { name: 'Xtreme HD IPTV', href: '#', channels: '12,000+', vod: '25,000+', price: '$14.99', trial: 'Yes (24 hours)', rating: 5 },
  { name: 'IPTV Gear', href: '#', channels: '9,500+', vod: '18,000+', price: '$12.99', trial: 'Yes (12 hours)', rating: 4 },
  { name: 'Sportz TV', href: '#', channels: '8,000+', vod: '15,000+', price: '$13.99', trial: 'No', rating: 4 },
  { name: 'Kemo IPTV', href: '#', channels: '10,000+', vod: '20,000+', price: '$15.99', trial: 'Yes (36 hours)', rating: 5 },
  { name: 'Domin', href: 'http://iptvproviders.eu/iptv-subscription/month', channels: '15,000+', vod: '30,000+', price: '$18.99', trial: 'Yes (48 hours)', rating: 5 },
];

const Rating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
    ))}
  </div>
);

export function ProviderTable() {
  return (
    <div className="my-8 overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">Provider</TableHead>
            <TableHead>Channels</TableHead>
            <TableHead>VOD Content</TableHead>
            <TableHead>Price (Monthly)</TableHead>
            <TableHead>Free Trial</TableHead>
            <TableHead className="text-right">Our Rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {providers.map((provider) => (
            <TableRow key={provider.name} className="hover:bg-muted/50">
              <TableCell className="font-medium">
                <a href={provider.href} target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">
                  {provider.name}
                </a>
              </TableCell>
              <TableCell>{provider.channels}</TableCell>
              <TableCell>{provider.vod}</TableCell>
              <TableCell>{provider.price}</TableCell>
              <TableCell>{provider.trial}</TableCell>
              <TableCell className="text-right"><Rating rating={provider.rating} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
