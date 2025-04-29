
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="w-full max-w-3xl mx-auto py-20 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold font-site_header">Frequently Asked Questions</h2>
        <p className="text-muted-foreground mt-2">
          Everything you need to know before coming to a meetup
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>{`Who can join Flushing-Tech?`}</AccordionTrigger>
          <AccordionContent>
            {`Anyone! Whether you're a developer, designer, student, or just curious about tech,
            you're welcome to join our meetups and events.`}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>{`How often do meetups happen?`}</AccordionTrigger>
          <AccordionContent>
            {`We host events every two weeks, usually on weekday evenings. Check our Meetup page
            for the latest schedule and topics.`}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>{`What happens at the hackathons?`}</AccordionTrigger>
          <AccordionContent>
            {`We vote on ideas, form teams, and build quick projects in a fun, collaborative setting.
            No pressure — it's all about learning, experimenting, and meeting people.`}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>{`Is it free to attend?`}</AccordionTrigger>
          <AccordionContent>
            {`Yes! All of our meetups and hackathons are completely free to attend. Just RSVP on
            Meetup and show up!`}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>{`Do I need to bring anything?`}</AccordionTrigger>
          <AccordionContent>
            {`Just your laptop (optional), curiosity, and energy. We often pair people up so you don't
            need to come with a full team or idea.`}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>{`What kind of projects do people build?`}</AccordionTrigger>
          <AccordionContent>
            {`Everything from small web apps and design prototypes to hardware hacks and AI experiments.
            It's open-ended — and we love wild ideas.`}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>{`Can I just come to watch or network?`}</AccordionTrigger>
          <AccordionContent>
            {`Absolutely. Participation is encouraged, but there’s no pressure to present or build.
            Many people just come to hang out and meet others in tech.`}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
