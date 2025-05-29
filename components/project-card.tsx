import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  repoUrl: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-video relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="pt-6 flex-1">
        <h3 className="font-playfair text-xl font-semibold mb-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-3 pt-0 pb-6">
        <Button variant="outline" size="sm" asChild>
          <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Live Demo
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Code
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}