import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

interface BlogPost {
  _id: string;
  title: string;
  cloudinaryImageUrl: string;
  publishedAt: string;
  category: string;
}
interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post._id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-md hover:-translate-y-1">
        <div className="aspect-video relative">
          <Image
            src={post.cloudinaryImageUrl}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader className="pt-6 pb-2">
          <div className="flex justify-between items-start gap-4">
            <Badge variant="secondary" className="font-normal">
              {post.category}
            </Badge>
            {/* <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {post.readTime}
            </div> */}
          </div>
          <h3 className="font-playfair text-xl font-semibold leading-tight mt-2">
            {post.title}
          </h3>
        </CardHeader>
        {/* <CardContent className="pb-2">
          <p className="text-muted-foreground text-sm line-clamp-2">
            {post.excerpt}
          </p>
        </CardContent> */}
        <CardFooter className="text-xs text-muted-foreground">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </CardFooter>
      </Card>
    </Link>
  );
}
