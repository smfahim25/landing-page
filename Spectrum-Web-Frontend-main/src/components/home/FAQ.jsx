import { Open_Sans } from "next/font/google";
import AccordionItem from "./Accordion";

const openSan = Open_Sans({
  weight: "700",
  subsets: ["vietnamese"],
});
const openSans = Open_Sans({
  weight: "400",
  subsets: ["vietnamese"],
});

const FAQ = () => {
  return (
    <div>
      <div className="container mx-auto md-lg:px-5 flex flex-col items-center py-16 md:pb-16 md:pt-20 gap-6 md:gap-8 md:mt-6">
        <div className="text-center">
          <h1
            className={`text-lg md:text-[32px] text-[#595D62] ${openSans.className}`}
          >
            Got questions? We’ve got{" "}
            <span
              className={`text-lg md:text-[32px] ${openSan.className} text-[#6665DD]`}
            >
              answers!
            </span>
          </h1>
        </div>
        <div className="bg-[#FDFAFA] md:w-[805px] lg:w-[1000px] md-lg:w-[1090px] mt-8 px-5 md:px-10  py-12 rounded-[40px] shadow-custom-anim border border-[#F5F5F5]">
          <div className="w-full lg:w-[720px]">
            <AccordionItem
              title="What is Copilot?"
              content="Copilot is an AI-driven tool designed to help educators streamline administrative tasks, enhance student engagement, and personalize learning. It offers customizable features tailored to each educator's needs."
            />
            <AccordionItem
              title="How do I sign up for Copilot?"
              content="Joining is easy! Simply sign up through our website to be added to our waitlist. You'll be notified as soon as the verification process is ready to begin."
            />
            <AccordionItem
              title="How long will I have to wait to get access after signing up?"
              content="We're working hard to get Copilot into your hands as quickly as possible. The wait time can vary, but we aim to start onboarding users within a few months from the sign-up date. We appreciate your patience and enthusiasm!"
            />
            <AccordionItem
              title="Do I need to complete an educator verification to access Copilot?"
              content="Yes, completing educator verification is required to access Copilot. This step ensures our platform remains exclusive to verified educators, keeping it professional and ready for upcoming eductor-centric feature launchs. The process is quick and straightforward."
            />
            <AccordionItem
              title="What can I do to expedite my access to Copilot?"
              content="To gain access faster, follow our emails and complete the educator verification steps as soon as they're communicated to you."
            />
            <AccordionItem
              title="What is Copilot Insider Circle?"
              content="The Copilot Insider Circle is a collaborative group of educators who provide strategic guidance on the design and development of Copilot, ensuring the platform evolves in ways that deeply resonate with and support the educational community."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
