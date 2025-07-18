import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar } from "lucide-react";
import avatar from "../../assets/Chris Gray.jpg";
import { BlogCard } from "@/components/blog-card";
import { ShareDialog } from "@/components/ShareDialog";

interface Post {
  _id: string;
  title: string;
  cloudinaryImageUrl: string;
  content: string;
  publishedAt: string;
  summary: string;
  category: string;
}

async function getPost(id: string): Promise<Post | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`,
      {
        next: { revalidate: 3600 },
        cache: "force-cache",
      }
    );

    if (!response.ok) {
      return null;
    }

    const post = await response.json();
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

async function getAllPosts(): Promise<Post[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts`,
      {
        next: { revalidate: 3600 },
        cache: "force-cache",
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

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();

    console.log("Posts found for static generation:", posts.length);
    posts.forEach((post) => {
      console.log("Post ID:", post._id, "Title:", post.title);
    });

    const params = posts.map((post) => ({
      slug: post._id,
    }));

    console.log("Generated params:", params);
    return params;
  } catch (error) {
    console.error("Error generating static params:", error);

    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [post.cloudinaryImageUrl],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log("Requested slug:", params.slug);

  const post = await getPost(params.slug);
  const posts = await getAllPosts();

  const filteredPosts = posts.filter((p) => p.category === post?.category);
  if (!post) {
    console.log("Post not found for slug:", params.slug);
    notFound();
  }

  return (
    <article className="pb-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[60vh] w-full">
        <Image
          src={post.cloudinaryImageUrl}
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
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>

          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                <Image
                  src={avatar}
                  alt="Chris Gray"
                  width={40}
                  height={40}
                  loading="lazy"
                  className="rounded-full h-10 w-10 object-cover"
                />
              </div>
              <div>
                <p className="font-medium">Chris Gray</p>
                <p className="text-sm text-muted-foreground">Mentor</p>
              </div>
            </div>
            <ShareDialog post={post} />
          </div>

          {/* Post Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground mb-8">
              {post.summary}
            </p>
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="mt-8"
            />
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="container mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-2xl font-bold mb-6">
            Related Posts
          </h2>

          {/* You can implement related posts logic here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[400px]">
            {filteredPosts.length > 0 ? (
              filteredPosts
                .slice(0, 3)
                .map((post) => <BlogCard key={post._id} post={post} />)
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">
                  {filteredPosts.length === 0 && posts.length > 0
                    ? "No articles match your search criteria."
                    : "No blog posts available at the moment."}
                </p>
              </div>
            )}
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
