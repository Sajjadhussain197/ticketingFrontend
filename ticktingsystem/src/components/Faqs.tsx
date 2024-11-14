'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "./ui/button"

const faqs = [
  {
    question: "How much does The Muslim Ticket cost?",
    answer: "For free events, there's no fee. If you're hosting a paid event, our fees are just 2% of the ticket price plus 30 cents in Australia. We offer the lowest prices in the industry. If you want to sell tickets globally (e.g. US, UK, Europe, etc.) the fee is + 1%."
  },
  {
    question: "What types of events can I host on MuslimTicket?",
    answer: "You can host a wide variety of events on MuslimTicket, including but not limited to conferences, workshops, seminars, fundraisers, and community gatherings."
  },
  {
    question: "Is event management or customer support included?",
    answer: "Yes, we provide comprehensive event management tools and dedicated customer support to ensure your event runs smoothly."
  },
  {
    question: "Can I customise my event and profile to match my branding?",
    answer: "We offer customization options to align your event page and profile with your brand identity."
  },
  {
    question: "How fast can I set up my account?",
    answer: "Setting up your account is quick and easy. You can have your account ready in just a few minutes."
  },
  {
    question: "When will I receive payment after my event?",
    answer: "Payments are typically processed within 5-7 business days after your event concludes."
  },
  {
    question: "Can I add special requirements during the booking process?",
    answer: "Yes, you can add custom fields to collect any additional information or special requirements from attendees during the booking process."
  },
  {
    question: "Can I schedule multiple sessions for my event?",
    answer: "Yes, our platform supports multi-session events, allowing you to schedule various sessions or tracks within your main event."
  },
  {
    question: "What's the maximum number of attendees I can host?",
    answer: "There is no strict limit on the number of attendees. Our platform can handle events of any size, from small gatherings to large conferences."
  }
]

export default function FAQSection() {
  return (
    <section id="faqs" className="w-full bg-white   mx-auto pb-10">
      <div className="container mx-auto max-w-3xl flex flex-col items-center px-4">
      <div className="mb-2 mx-auto inline-block rounded-md bg-[#FF1493] px-4 text-white text-[30px]">
        FAQS
        </div>
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">
          Your questions, answered?
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>



      <div className="w-full max-w-5xl mx-auto rounded-xl 
      bg-gradient-to-r from-[#1E0A3C] to-[#3D2A8A]">
      <img src="/images/Section.png" alt="" />
    </div>
    </section>
  )
}