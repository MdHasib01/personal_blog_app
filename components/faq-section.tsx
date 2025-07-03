import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Link from "next/link";

const FaqSection = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center space-y-4 mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-lg">
          Everything you need to know about working with Chris Gray
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left font-semibold">
            Who is Chris Gray?
          </AccordionTrigger>
          <AccordionContent>
            Chris Gray is a passionate entrepreneur, marketer, and co-owner of
            Red Palm Studios, known for founding Bald Buck Seasoning, the{" "}
            <Link
              href="https://earncorecommunity.com/"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              EARN CORE COMMUNITY
            </Link>{" "}
            , and co-hosting the Big Life Podcast.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left font-semibold">
            What does Chris Gray do?
          </AccordionTrigger>
          <AccordionContent>
            Chris provides design consulting, brand strategy, and content
            creation services for individuals and businesses.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left font-semibold">
            How can I contact Chris Gray?
          </AccordionTrigger>
          <AccordionContent>
            For any further questions, please contact us at{" "}
            <a
              href="mailto:Marisol@redpalm.us"
              className="text-primary hover:underline"
            >
              Marisol@redpalm.us
            </a>
            .
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left font-semibold">
            Does Chris Gray offer mentoring or coaching?
          </AccordionTrigger>
          <AccordionContent>
            Yes, Chris offers one-on-one mentoring and creative coaching for
            marketing, and entrepreneurs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left font-semibold">
            Where has Chris Gray been featured?
          </AccordionTrigger>
          <AccordionContent>
            Chris has been featured in leading design blogs, tech podcasts, and
            industry panels. Visit the{" "}
            <Link href="/blog" className="text-primary hover:underline">
              Featured In
            </Link>{" "}
            section for more.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="text-left font-semibold">
            Is there a podcast or blog by Chris Gray?
          </AccordionTrigger>
          <AccordionContent>
            Yes, Chris is co-host of the Big Life{" "}
            <Link href="/podcasts" className="text-primary hover:underline">
              podcast
            </Link>{" "}
            , where he and Dmitri Smirnoff interview successful entrepreneurs.
            He also continues to innovate through the Bald Buck Newsletter, a
            go-to resource for senior citizens seeking relevant updates on
            topics that matter most to them.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger className="text-left font-semibold">
            How do I get started working with Chris Gray?
          </AccordionTrigger>
          <AccordionContent>
            Chris wants to add value to your followers by having an authentic
            yet tactical conversation with you. The goal is for your followers
            to walk away with a tip they can implement today. Chris will then
            post any assets you give on his social media and to his community.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqSection;
