import { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Portfolio | Personal Blog & Portfolio",
  description: "Browse my portfolio of web development and design projects.",
};

export default function PortfolioPage() {
  // Sample portfolio data
  const projects = [
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
    {
      id: "3",
      title: "Personal Finance Dashboard",
      description:
        "A dashboard for tracking personal finances with data visualization and budgeting tools.",
      image:
        "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: "4",
      title: "Weather Application",
      description:
        "A weather application with forecasts, location-based data, and customizable alerts.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React Native", "OpenWeatherMap API", "Expo"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: "5",
      title: "Content Management System",
      description:
        "A custom CMS built for a marketing agency to manage client websites and content.",
      image:
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["PHP", "Laravel", "MySQL", "Alpine.js"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: "6",
      title: "Recipe Sharing Platform",
      description:
        "A social platform for sharing and discovering recipes with user profiles and collections.",
      image:
        "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js"],
      demoUrl: "#",
      repoUrl: "#",
    },
  ];

  // All unique tags from projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-tight">
          Portfolio
        </h1>
        <p className="text-muted-foreground text-lg">
          A collection of my work, personal projects, and open-source
          contributions.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <Button
          variant="outline"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          All Projects
        </Button>
        {allTags.map((tag) => (
          <Button key={tag} variant="outline">
            {tag}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
