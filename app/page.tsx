import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileCode, Newspaper, User } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { ProjectCard } from "@/components/project-card";
import { FeaturedSection } from "@/components/featured-section";
import img from "./assets/avata.png";

export default function Home() {
  // Sample data for the blog and portfolio
  const featuredPosts = [
    {
      id: "1",
      title: "Building Responsive Websites with Tailwind CSS",
      excerpt:
        "Learn how to create beautiful, responsive websites using Tailwind CSS framework.",
      coverImage:
        "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "2023-12-10",
      readTime: "5 min",
      category: "Web Development",
    },
    {
      id: "2",
      title: "Next.js 13: The Future of React Applications",
      excerpt:
        "Explore the new features and improvements in Next.js 13 and how they change React development.",
      coverImage:
        "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "2023-11-28",
      readTime: "6 min",
      category: "Frontend",
    },
    {
      id: "3",
      title: "The Power of TypeScript in Modern Applications",
      excerpt:
        "Why TypeScript has become essential for building scalable and maintainable applications.",
      coverImage:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "2023-11-15",
      readTime: "4 min",
      category: "JavaScript",
    },
  ];

  const featuredProjects = [
    {
      id: "1",
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform built with Next.js, Stripe, and a headless CMS.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: "2",
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team features.",
      image:
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Firebase", "Material UI", "Redux"],
      demoUrl: "#",
      repoUrl: "#",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container flex flex-col items-center text-center space-y-8 relative z-10">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-primary">Developer</span>, Writer & Creator
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              I build exceptional digital experiences and write about web
              development, design, and technology.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/portfolio">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog">Read My Blog</Link>
            </Button>
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
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </FeaturedSection>

      <FeaturedSection
        title="Featured Projects"
        description="A selection of my recent work and personal projects."
        viewAllText="Explore all projects"
        viewAllLink="/portfolio"
        icon={<FileCode className="h-5 w-5" />}
        variant="secondary"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </FeaturedSection>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={img}
                alt="Hasib - Developer portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-border/40 px-4 py-1.5">
                <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                <span className="ml-2 text-sm font-medium">About me</span>
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold tracking-tight">
                Hello, I'm Hasib
              </h2>
              <p className="text-muted-foreground">
                I'm a full-stack developer with over 5 years of experience
                building web applications and digital products. I specialize in
                React, Next.js, and modern frontend technologies, with a strong
                background in UX/UI design.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, I enjoy writing about technology,
                contributing to open-source projects, and mentoring aspiring
                developers.
              </p>
              <Button asChild>
                <Link href="/about">
                  More about me <User className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
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
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12"
              />
              <Button className="h-12">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">
              I respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Missing component in code above
function Input(props) {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${props.className}`}
      {...props}
    />
  );
}
