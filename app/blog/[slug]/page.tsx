import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";

// Sample blog data - moved to top
const samplePosts = [
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
  {
    id: "4",
    title: "Creating Custom Hooks in React",
    excerpt:
      "Learn how to create reusable custom hooks to share logic between components.",
    coverImage:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2023-10-22",
    readTime: "7 min",
    category: "React",
  },
  {
    id: "5",
    title: "Introduction to Web Accessibility",
    excerpt:
      "Why web accessibility matters and how to make your websites more inclusive.",
    coverImage:
      "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2023-10-05",
    readTime: "8 min",
    category: "Accessibility",
  },
  {
    id: "6",
    title: "Creating a Blog with Next.js and Tailwind CSS",
    excerpt:
      "Learn how to build a fast, SEO-friendly blog using Next.js and Tailwind CSS.",
    coverImage:
      "https://images.pexels.com/photos/11035472/pexels-photo-11035472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2023-09-24",
    readTime: "10 min",
    category: "Next.js",
  },
];

// generateStaticParams moved here - before the component
export function generateStaticParams() {
  return samplePosts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = samplePosts.find((p) => p.id === params.slug);
  console.log(post);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = samplePosts.find((p) => p.id === params.slug);

  if (!post) {
    notFound();
    return null;
  }

  return (
    <article className="pb-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[60vh] w-full">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container relative -mt-16 md:-mt-24">
        <div className="bg-background border border-border/40 rounded-lg p-6 md:p-10 shadow-sm max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Badge variant="secondary" className="font-normal">
              {post.category}
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime} read
            </div>
          </div>

          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                <span className="font-bold text-sm">H</span>
              </div>
              <div>
                <p className="font-medium">Chris Gray</p>
                <p className="text-sm text-muted-foreground">Web Developer</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Post Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>{post.excerpt}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget
              aliquam nisl nisl eget nisl. Donec auctor, nisl eget ultricies
              lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
            </p>
            <h2>Getting Started</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <ul>
              <li>First, install the dependencies</li>
              <li>Configure your environment</li>
              <li>Create your first component</li>
              <li>Run your application</li>
            </ul>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <h2>Advanced Techniques</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident.
            </p>
            <p>
              Similique sunt in culpa qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio.
            </p>
            <h2>Conclusion</h2>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus.
            </p>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="container mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-2xl font-bold mb-6">
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {samplePosts
              .filter((p) => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <div className="border border-border/40 rounded-lg overflow-hidden h-full transition-all group-hover:shadow-md group-hover:-translate-y-1">
                    <div className="aspect-video relative">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {new Date(relatedPost.date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

// Uncomment these if needed for static generation
// export const dynamic = "force-static";
