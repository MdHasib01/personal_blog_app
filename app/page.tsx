import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Video, Newspaper, Mail, ExternalLink } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { VideoCard } from "@/components/video-card";
import { FeaturedSection } from "@/components/featured-section";
import img from "./assets/avatar.jpg";
import { SubscribePopup } from "@/components/subscribe-popup";

interface Post {
  _id: string;
  title: string;
  cloudinaryImageUrl: string;
  publishedAt: string;
  category: string;
}

interface Video {
  _id: string;
  videoId: string;
  channelId: string;
  channelName: string;
  description: string;
  duration: string;
  publishedAt: string;
  scrapedAt: string;
  thumbnail: string;
  title: string;
  url: string;
}

async function getPosts(): Promise<Post[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

async function getVideos(): Promise<Video[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/youtube/videos?limit=6`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch videos: ${response.status}`);
    }

    const data = await response.json();
    return data.videos || [];
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
}

export default async function Home() {
  const featuredPosts = await getPosts();
  const featuredVideos = await getVideos();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="font-playfair text-4xl md:text-6xl font-bold tracking-tight">
                  <span className="text-primary">Husband</span>, Father &
                  <span className="block">Entrepreneur</span>
                </h1>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Contact Me <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link
                    href="https://linktr.ee/yochrisgray"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Social Links <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-transparent rounded-xl blur-lg"></div>

                {/* Main image container */}
                <div className="relative aspect-square w-80 md:w-96 rounded-xl overflow-hidden border-4 border-background shadow-2xl">
                  <Image
                    src={img}
                    alt="Chris Gray - Portrait"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/15 rounded-full blur-md"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
      </section>

      {/* Featured Sections */}
      <FeaturedSection
        title="Latest Blog Posts"
        description="Thoughts and insights on web development, design, and technology."
        viewAllText="View all posts"
        viewAllLink="/blog"
        icon={<Newspaper className="h-5 w-5" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.slice(0, 6).map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </FeaturedSection>

      <FeaturedSection
        title="Featured Podcasts"
        description="Latest podcast episodes and video content on entrepreneurship, tech, and life insights."
        viewAllText="View all podcasts"
        viewAllLink="/podcasts"
        icon={<Video className="h-5 w-5" />}
        variant="secondary"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVideos.slice(0, 6).map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      </FeaturedSection>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
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
                  Chris Gray is a creative professional and digital strategist
                  with a focus on innovative design, branding, and web
                  development.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold">
                  What does Chris Gray do?
                </AccordionTrigger>
                <AccordionContent>
                  Chris provides design consulting, web development, brand
                  strategy, and content creation services for individuals and
                  businesses.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold">
                  How can I contact Chris Gray?
                </AccordionTrigger>
                <AccordionContent>
                  You can reach Chris Gray via the{" "}
                  <Link
                    href="/contact"
                    className="text-primary hover:underline"
                  >
                    contact form
                  </Link>{" "}
                  on the website or email at{" "}
                  <a
                    href="mailto:your-email@example.com"
                    className="text-primary hover:underline"
                  >
                    your-email@example.com
                  </a>
                  .
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-semibold">
                  Does Chris Gray offer mentoring or coaching?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, Chris offers one-on-one mentoring and creative coaching
                  for designers, developers, and entrepreneurs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-semibold">
                  Where has Chris Gray been featured?
                </AccordionTrigger>
                <AccordionContent>
                  Chris has been featured in leading design blogs, tech
                  podcasts, and industry panels. Visit the{" "}
                  <Link
                    href="/featured"
                    className="text-primary hover:underline"
                  >
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
                  Yes, Chris shares insights through a{" "}
                  <Link href="/blog" className="text-primary hover:underline">
                    personal blog
                  </Link>{" "}
                  and hosts a podcast on design, tech, and creative
                  entrepreneurship.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left font-semibold">
                  How do I get started working with Chris Gray?
                </AccordionTrigger>
                <AccordionContent>
                  Simply visit the{" "}
                  <Link
                    href="/work-with-me"
                    className="text-primary hover:underline"
                  >
                    Work With Me
                  </Link>{" "}
                  page, fill out the project form, and Chris will get back to
                  you with next steps.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-playfair text-3xl font-bold tracking-tight">
              Stay Updated
            </h2>
            <p className="text-muted-foreground">
              Subscribe to my newsletter for the latest blog posts, project
              updates, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row justify-center  gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 px-2 rounded-md"
              />
              <Button className="h-12">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">
              I respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      <SubscribePopup />
    </div>
  );
}

// Missing component in code above
function Input(props: any) {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${props.className}`}
      {...props}
    />
  );
}
