import { Metadata } from "next"
import { Input } from "@/components/ui/input"
import { BlogCard } from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import { Filter, Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Personal Blog & Portfolio",
  description: "Read my latest articles on web development, design, and technology.",
}

export default function BlogPage() {
  // Sample blog data
  const posts = [
    {
      id: "1",
      title: "Building Responsive Websites with Tailwind CSS",
      excerpt: "Learn how to create beautiful, responsive websites using Tailwind CSS framework.",
      coverImage: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "2023-12-10",
      readTime: "5 min",
      category: "Web Development",
    },
    {
      id: "2",
      title: "Next.js 13: The Future of React Applications",
      excerpt: "Explore the new features and improvements in Next.js 13 and how they change React development.",
      coverImage: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "2023-11-28",
      readTime: "6 min",
      category: "Frontend",
    },
    {
      id: "3",
      title: "The Power of TypeScript in Modern Applications",
      excerpt: "Why TypeScript has become essential for building scalable and maintainable applications.",
      coverImage: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "2023-11-15",
      readTime: "4 min",
      category: "JavaScript",
    },
    {
      id: "4",
      title: "Creating Custom Hooks in React",
      excerpt: "Learn how to create reusable custom hooks to share logic between components.",
      coverImage: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "2023-10-22",
      readTime: "7 min",
      category: "React",
    },
    {
      id: "5",
      title: "Introduction to Web Accessibility",
      excerpt: "Why web accessibility matters and how to make your websites more inclusive.",
      coverImage: "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "2023-10-05",
      readTime: "8 min",
      category: "Accessibility",
    },
    {
      id: "6",
      title: "Performance Optimization in Web Applications",
      excerpt: "Techniques and best practices for improving the performance of your web applications.",
      coverImage: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "2023-09-18",
      readTime: "9 min",
      category: "Performance",
    },
  ]

  // Categories from the posts
  const categories = [...new Set(posts.map(post => post.category))]

  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-tight">Blog</h1>
        <p className="text-muted-foreground text-lg">
          Thoughts, insights, and guides on web development, design, and technology.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-12 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search articles..." 
            className="pl-9 h-11"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="h-11">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <div className="flex gap-2 overflow-x-auto pb-2 max-w-[60vw] md:max-w-none">
            <Button variant="ghost" className="h-11 whitespace-nowrap">All Posts</Button>
            {categories.map(category => (
              <Button key={category} variant="ghost" className="h-11 whitespace-nowrap">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <div className="flex gap-2">
          <Button variant="outline" disabled>Previous</Button>
          <Button variant="outline" className="bg-primary text-primary-foreground hover:bg-primary/90">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  )
}