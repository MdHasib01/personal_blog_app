import { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { Filter, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Personal Blog & Portfolio",
  description:
    "Read my latest articles on web development, design, and technology.",
};

// Define the Post type
interface Post {
  _id: string;
  title: string;
  cloudinaryImageUrl: string;
  publishedAt: string;
  category: string;
}

// Server-side function to fetch posts
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

export default async function BlogPage() {
  const posts = await getPosts();

  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-tight">
          Blog
        </h1>
        <p className="text-muted-foreground text-lg">
          Thoughts, insights, and guides on web development, design, and
          technology.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-12 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search articles..." className="pl-9 h-11" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="h-11">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <div className="flex gap-2 overflow-x-auto pb-2 max-w-[60vw] md:max-w-none">
            <Button variant="ghost" className="h-11 whitespace-nowrap">
              All Posts
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="h-11 whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length > 0 ? (
          posts.map((post) => <BlogCard key={post._id} post={post} />)
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground text-lg">
              No blog posts available at the moment.
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <div className="flex gap-2">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button
            variant="outline"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            1
          </Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  );
}
