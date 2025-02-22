import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqsData from "../../../../data/faqs.json";

const faqs = () => {
  return (
    <div className="pt-32 pb-20  lg:px-0 px-4 max-w-[1050px] m-auto">
      <p className="text-center text-4xl font-semibold text-foreground/65">
        FREQUENTLY ASKED QUESTIONS
      </p>
      <Accordion
        type="single"
        collapsible
        className="max-w-7xl w-full w m-auto mt-9 flex flex-col gap-2"
      >
        {faqsData.map(
          (
            faq,
            index // corrected map function
          ) => (
            <AccordionItem value={`item-${index}`} className="rounded-lg" key={index}>
              <AccordionTrigger className="bg-foreground/5  hover:bg-foreground/10 px-4 rounded-none rounded-t-md  text-base font-semibold list-none text-start">
                {faq.title}
              </AccordionTrigger>
              <AccordionContent className="bg-foreground/5 rounded-b-md p-4 md:text-base text-sm">
                {faq.description}
              </AccordionContent>
            </AccordionItem>
          )
        )}
      </Accordion>
    </div>
  );
};

export default faqs;
