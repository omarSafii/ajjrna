import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { MinusIcon, PlusIcon } from "lucide-react";

export default function FaqAccordion() {
  return (
    <Accordion type="single">
      {accordionData.map(({ title, content }, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger>
            <div className="grid place-items-center rounded-full border border-line group-data-[state=open]:bg-primary group-data-[state=open]:text-white">
              <PlusIcon className="hidden group-data-[state=closed]:block" />
              <MinusIcon className="hidden group-data-[state=open]:block" />
            </div>

            {title}
          </AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const accordionData = [
  {
    title: "Lorem ipsum dolor sit amet consectetur. A sed ut enim posuere ipsu.",
    content: `Lorem ipsum dolor sit amet consectetur. Vel et sagittis varius eros quis est vitae tempor et. Ullamcorper morbi donec id eros tristique ut scelerisque. Neque sem leo habitasse sed. Nec id ante maecenas ac porttitor ac tortor adipiscing.
    Velit nulla massa risus neque venenatis vel aenean consectetur vitae. Eget justo amet mauris quam quis nec erat sed. Faucibus neque bibendum pellentesque ultricies cras ipsum adipiscing vel. In cras commodo sagittis bibendum sagittis. Malesuada nullam pulvinar massa in blandit bibendum ut massa nunc. Velit nisl vestibulum habitasse id eget. Integer ultrices nec nunc ultrices. Enim elit tristique nisl dictum risus dui volutpat in.`,
  },
  {
    title: "Section 2",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit!`,
  },
  {
    title: "Section 3",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
  },
  {
    title: "Section 3",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
  },
  {
    title: "Section 3",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
  },
];
