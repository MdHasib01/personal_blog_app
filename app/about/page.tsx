import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail } from "lucide-react";
import Link from "next/link";

import img from "../assets/avatar.jpg";

export const metadata: Metadata = {
  title: "About Me | Personal Blog & Portfolio",
  description: "Learn more about my background, skills, and interests.",
};

export default function AboutPage() {
  // Sample skills data
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"],
    },
    {
      category: "Design",
      items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"],
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "Jest", "Webpack", "VS Code"],
    },
  ];

  // Sample timeline data
  const timeline = [
    {
      year: "2023",
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      description:
        "Leading frontend development for enterprise applications and mentoring junior developers.",
    },
    {
      year: "2021",
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      description:
        "Built and maintained web applications for various clients across different industries.",
    },
    {
      year: "2019",
      title: "Frontend Developer",
      company: "Startup Labs",
      description:
        "Developed responsive user interfaces for early-stage startups.",
    },
    {
      year: "2018",
      title: "Computer Science Degree",
      company: "University of Technology",
      description:
        "Graduated with honors, specializing in web technologies and software engineering.",
    },
  ];

  return (
    <div className="container py-12 md:py-16">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image
            src={img}
            alt="Chris Gray - Developer portrait"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-6">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-tight">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground">
            I'm Chris Gray, a full-stack developer passionate about creating
            exceptional digital experiences. With over 5 years of experience, I
            specialize in building modern web applications that are both
            functional and beautiful.
          </p>
          <p className="text-muted-foreground">
            My journey in technology began when I was a teenager, tinkering with
            HTML and CSS to create simple websites. That curiosity evolved into
            a career where I now help businesses and individuals bring their
            ideas to life through code.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="font-playfair text-3xl font-bold mb-8">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup) => (
            <Card key={skillGroup.category}>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-16">
        <h2 className="font-playfair text-3xl font-bold mb-8">
          Experience & Education
        </h2>
        <div className="relative border-l border-border pl-8">
          {timeline.map((item, index) => (
            <div key={index} className="mb-12 last:mb-0 relative">
              <div className="absolute -left-10 bg-background flex items-center justify-center h-6 w-6 rounded-full border border-primary">
                <div className="h-2 w-2 bg-primary rounded-full"></div>
              </div>
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-muted rounded-full">
                  {item.year}
                </span>
                <h3 className="font-bold text-xl">{item.title}</h3>
                <p className="text-primary font-medium">{item.company}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Section */}
      <section>
        <h2 className="font-playfair text-3xl font-bold mb-8">Beyond Coding</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Interests & Hobbies</h3>
            <p className="text-muted-foreground mb-4">
              When I'm not in front of a computer, I enjoy hiking, photography,
              and exploring new places. I'm also an avid reader and particularly
              enjoy books on technology, science fiction, and philosophy.
            </p>
            <p className="text-muted-foreground">
              I believe in continuous learning and regularly take online courses
              to expand my knowledge in both technical and non-technical areas.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Community & Volunteering</h3>
            <p className="text-muted-foreground mb-4">
              I'm an active contributor to open-source projects and regularly
              participate in local tech meetups and conferences. I also
              volunteer as a mentor for aspiring developers and have taught
              coding workshops for underrepresented groups in tech.
            </p>
            <p className="text-muted-foreground">
              Giving back to the community that helped me grow is important to
              me, and I'm always looking for new ways to contribute.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
