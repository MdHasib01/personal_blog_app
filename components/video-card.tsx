import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, User } from "lucide-react";

interface Video {
  _id: string;
  videoId: string;
  channelId: string;
  channelName: string;
  description: string;
  duration: string;
  publishedAt: string;
  scrapedAt: string;
  thumbnail: string;
  title: string;
  url: string;
}

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const truncateDescription = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col group hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video relative">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {video.duration && (
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            {video.duration}
          </div>
        )}
      </div>

      <CardContent className="pt-4 flex-1">
        <h3 className="font-playfair text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {video.title}
        </h3>

        <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
          <User className="h-4 w-4" />
          <span className="font-medium">{video.channelName}</span>
        </div>

        <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(video.publishedAt)}</span>
        </div>

        {video.description && (
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {truncateDescription(video.description)}
          </p>
        )}
      </CardContent>

      <CardFooter className="pt-0 pb-4">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
        >
          <Link
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Watch on YouTube
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
