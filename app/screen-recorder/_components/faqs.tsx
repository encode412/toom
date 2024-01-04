import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return (
    <div className="flex-col flex items-center justify-center bg-[#2b1c50] py-40">
      <div className="md:text-7xl text-4xl font-medium text-[#eff0ff] pb-10">
        Screen Recorder FAQS
      </div>
      <Accordion
        className="md:w-2/3 w-full px-10 md:px-0"
        type="single"
        collapsible
      >
        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-1"
        >
          <AccordionTrigger className="font-medium">
            How do i purchase Llum?
          </AccordionTrigger>
          <AccordionContent>
            It is possible to purchase Llum. Click here to learn more
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-2"
        >
          <AccordionTrigger className="font-medium">
            How do i purchase Llum?
          </AccordionTrigger>
          <AccordionContent>
            It is possible to purchase Llum. Click here to learn more
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-3"
        >
          <AccordionTrigger className="font-medium">
            How do i purchase Llum?
          </AccordionTrigger>
          <AccordionContent>
            It is possible to purchase Llum. Click here to learn more
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-4"
        >
          <AccordionTrigger className="font-medium">
            How do i purchase Llum?
          </AccordionTrigger>
          <AccordionContent>
            It is possible to purchase Llum. Click here to learn more
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-5"
        >
          <AccordionTrigger className="font-medium">
            How do i purchase Llum?
          </AccordionTrigger>
          <AccordionContent>
            It is possible to purchase Llum. Click here to learn more
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQS;
