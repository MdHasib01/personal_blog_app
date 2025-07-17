import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Video,
  Newspaper,
  Mail,
  Info,
  Youtube,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { VideoCard } from "@/components/video-card";
import { FeaturedSection } from "@/components/featured-section";
import img from "./assets/Chris Gray.jpg";
import FaqSection from "@/components/faq-section";
import Newsletter from "@/components/newsletter";

import { FaTiktok } from "react-icons/fa";
import NewsletterInput from "@/components/newsletterInput";
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
              <NewsletterInput />
            </div>

            {/* Image */}
            <div className="relative flex flex-col gap-4 items-center justify-center lg:justify-end">
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
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start">
                <div className="flex items-center gap-3 pt-2 flex-wrap">
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="https://www.tiktok.com/@yochrisgray"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="TikTok"
                    >
                      <FaTiktok className="h-4 w-4" />
                    </a>
                  </Button>

                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="https://www.youtube.com/@yochrisgray"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="YouTube"
                    >
                      <Youtube className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="https://www.facebook.com/YoChrisGray"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="https://www.instagram.com/yochrisgray/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  </Button>

                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="https://x.com/YoChrisGray"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Twitter/X"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>

                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="https://www.linkedin.com/in/yochrisgray/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Contact Me <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href={"/about"}>
                    About Me <Info className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
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
          <FaqSection />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/50">
        <Newsletter />
      </section>
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
