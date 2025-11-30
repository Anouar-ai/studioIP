import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is IPTV?",
    answer: "IPTV stands for Internet Protocol Television. It's a service that delivers television programming and other video content using the TCP/IP protocol suite, as opposed to broadcast TV, cable TV, or satellite signals."
  },
  {
    question: "Is IPTV legal?",
    answer: "The legality of IPTV depends on the service provider. Services that have the rights to broadcast the content they provide are legal. However, many low-cost providers operate without proper licensing, which may be illegal in your jurisdiction. We recommend using reputable services."
  },
  {
    question: "What internet speed do I need for IPTV?",
    answer: "For a smooth streaming experience, we recommend a minimum of 10-15 Mbps for standard definition (SD), 15-25 Mbps for high definition (HD), and 25-50 Mbps or more for 4K Ultra HD streaming."
  },
  {
    question: "What devices can I use to watch IPTV?",
    answer: "IPTV is compatible with a wide range of devices, including Smart TVs (Samsung, LG, etc.), Android TV boxes, Amazon Firestick/Fire TV, Apple TV, smartphones (iOS & Android), tablets, and computers via web players or applications like VLC."
  },
];

export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, i) => (
        <AccordionItem value={`item-${i}`} key={i}>
          <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
