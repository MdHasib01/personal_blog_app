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
          Everything you need to know about working with{" "}
          <Link href={"/about"} className="text-primary hover:underline">
            Chris Gray
          </Link>
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left font-semibold">
            <h3>Who is Chris Gray?</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              <Link href={"/about"} className="text-primary hover:underline">
                Chris Gray
              </Link>{" "}
              is the founder and leader of the{" "}
              <Link
                href="https://earncorecommunity.com/"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                EARN CORE COMMUNITY
              </Link>
              , a platform that empowers entrepreneurs through business
              strategy, mentorship, and community support. He is also a seasoned
              marketer, co-owner of Red Palm Studios, founder of the bold-flavor
              brand Bald Buck Seasoning, and co-host of{" "}
              <Link href={"/podcasts"} className="text-primary hover:underline">
                The Amazing Marketing Show
              </Link>
              , where he shares actionable insights on entrepreneurship and
              marketing.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left font-semibold">
            <h3> What does Chris Gray do?</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Chris provides design consulting, brand strategy, and content
              creation services for individuals and businesses.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left font-semibold">
            <h3> How can I contact Chris Gray?</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              {" "}
              For any further questions, please{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact us
              </Link>{" "}
              at{" "}
              <a
                href="mailto:Marisol@redpalm.us"
                className="text-primary hover:underline"
              >
                Marisol@redpalm.us
              </a>
              .
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left font-semibold">
            <h3> Does Chris Gray offer mentoring or coaching?</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              {" "}
              Yes, Chris offers one-on-one mentoring and creative coaching for
              marketing, and entrepreneurs.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left font-semibold">
            <h3> Where has Chris Gray been featured?</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Chris has been featured in leading design blogs, tech podcasts,
              and industry panels. Visit the{" "}
              <Link href="/blog" className="text-primary hover:underline">
                Featured In
              </Link>{" "}
              section for more.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="text-left font-semibold">
            <h3> Is there a podcast or blog by Chris Gray?</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Yes, Chris is co-host of the
              <Link href="/podcasts" className="text-primary hover:underline">
                The Amazing Marketing Show
              </Link>{" "}
              , where he and Dmitri Smirnoff interview successful entrepreneurs.
              He also continues to innovate through the Bald Buck Newsletter, a
              go-to resource for senior citizens seeking relevant updates on
              topics that matter most to them.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger className="text-left font-semibold">
            <h3>How do I get started working with Chris Gray?</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Chris wants to add value to your followers by having an authentic
              yet tactical conversation with you. The goal is for your followers
              to walk away with a tip they can implement today. Chris will then
              post any assets you give on his social media and to his community.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqSection;
