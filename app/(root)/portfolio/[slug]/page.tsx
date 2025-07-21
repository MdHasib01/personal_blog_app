import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, Calendar } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const sampleProjects = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, Stripe, and a headless CMS.",
    overview:
      "This project was developed to create a modern e-commerce experience with fast performance, SEO optimization, and a seamless checkout process.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    date: "December 2023",
    technologies: [
      "Next.js for frontend and API routes",
      "TypeScript for type safety",
      "Stripe for payment processing",
      "Tailwind CSS for styling",
      "Sanity.io as a headless CMS",
      "Vercel for deployment",
    ],
    features: [
      "Product catalog with filtering and search",
      "User authentication and account management",
      "Shopping cart and wishlist functionality",
      "Secure checkout with Stripe",
      "Order history and tracking",
      "Admin dashboard for content management",
    ],
    challenges:
      "One of the main challenges was implementing a performant filtering system that could handle multiple filter criteria without sacrificing user experience. I solved this by implementing server-side filtering with efficient database queries and client-side caching.",
    results:
      "The platform achieved a 40% faster loading time compared to the client's previous solution, resulting in a 25% increase in conversion rate and improved SEO rankings.",
    demoUrl: "#",
    repoUrl: "#",
    galleryImages: [
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    overview:
      "This task management application was designed to help teams collaborate effectively with real-time updates, task assignment, and progress tracking.",
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Firebase", "Material UI", "Redux"],
    date: "October 2023",
    technologies: [
      "React for the user interface",
      "Firebase for backend and real-time database",
      "Material UI for component library",
      "Redux for state management",
      "Firebase Authentication for user management",
      "Firebase Cloud Functions for backend logic",
    ],
    features: [
      "Real-time task updates across all team members",
      "Customizable project boards with drag-and-drop interface",
      "Task assignment, due dates, and priority settings",
      "Comment and attachment system for task discussions",
      "Notification system for task changes and mentions",
      "Dashboard with progress metrics and analytics",
    ],
    challenges:
      "Implementing the real-time synchronization while maintaining optimal performance was challenging. I utilized Firebase's real-time database with careful data structuring and selective subscription patterns to minimize unnecessary updates.",
    results:
      "The application was adopted by several small teams and has received positive feedback for its intuitive interface and reliable real-time functionality. It helped one client reduce their project management overhead by 30%.",
    demoUrl: "#",
    repoUrl: "#",
    galleryImages: [
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7172089/pexels-photo-7172089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
  },
  {
    id: "3",
    title: "Personal Finance Dashboard",
    description:
      "A dashboard for tracking personal finances with data visualization and budgeting tools.",
    overview:
      "This personal finance application helps users track their income, expenses, and investments with intuitive visualizations and budgeting features.",
    image:
      "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
    date: "August 2023",
    technologies: [
      "Vue.js for frontend framework",
      "D3.js for data visualization",
      "Node.js for backend API",
      "MongoDB for data storage",
      "Express for API framework",
      "Plaid API for bank integration",
    ],
    features: [
      "Bank account integration via Plaid",
      "Automatic transaction categorization",
      "Interactive charts and graphs for expense analysis",
      "Budget creation and tracking",
      "Financial goal setting and progress tracking",
      "Investment portfolio monitoring",
      "Expense predictions based on historical data",
    ],
    challenges:
      "The main challenge was ensuring data privacy and security while providing seamless bank integration. I implemented robust encryption, secure API design, and followed financial industry best practices for data handling.",
    results:
      "Users reported better financial awareness and improved saving habits after using the dashboard for a few months. The visualization features were particularly praised for making financial data more accessible and actionable.",
    demoUrl: "#",
    repoUrl: "#",
    galleryImages: [
      "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7567441/pexels-photo-7567441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7567569/pexels-photo-7567569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
  },
];

export function generateStaticParams() {
  return sampleProjects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // In a real app, fetch the project data based on the slug
  const project = sampleProjects.find((p) => p.id === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = sampleProjects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <article className="pb-16">
        {/* Hero Section */}
        <div className="relative h-[40vh] md:h-[60vh] w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container relative -mt-16 md:-mt-24">
          <div className="bg-background border border-border/40 rounded-lg p-6 md:p-10 shadow-sm max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {project.title}
            </h1>

            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  {project.date}
                </div>
              </div>
              <div className="flex gap-3">
                <Button asChild>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>

            {/* Project Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead">{project.description}</p>
              <h2>Project Overview</h2>
              <p>{project.overview}</p>
              <h2>Technologies Used</h2>
              <ul>
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <h2>Key Features</h2>
              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <h2>Challenges and Solutions</h2>
              <p>{project.challenges}</p>
              <h2>Results and Takeaways</h2>
              <p>{project.results}</p>
            </div>

            {/* Project Images */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden border border-border/40"
                >
                  <div className="aspect-video relative">
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="container mt-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-2xl font-bold mb-6">
              Other Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleProjects
                .filter((p) => p.id !== project.id)
                .slice(0, 3)
                .map((otherProject) => (
                  <Link
                    key={otherProject.id}
                    href={`/portfolio/${otherProject.id}`}
                    className="group"
                  >
                    <div className="border border-border/40 rounded-lg overflow-hidden h-full transition-all group-hover:shadow-md group-hover:-translate-y-1">
                      <div className="aspect-video relative">
                        <Image
                          src={otherProject.image}
                          alt={otherProject.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                          {otherProject.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {otherProject.tags.slice(0, 2).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {otherProject.tags.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{otherProject.tags.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>

            <div className="mt-10 text-center">
              <Button variant="outline" asChild>
                <Link href="/portfolio">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
