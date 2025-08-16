import { formattedText, PodcastEpisode } from "@/utils/featuredPodcastData";
import { Card, CardContent } from "./ui/card";
import { Calendar, Clock, Play } from "lucide-react";
import { Badge } from "./ui/badge";
import { getTimeAgo } from "@/utils/timeAgo";

const PodcastCard: React.FC<{
  episode: PodcastEpisode;
  onClick: () => void;
}> = ({ episode, onClick }) => {
  return (
    <Card
      className="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:bg-card/80"
      onClick={onClick}
    >
      <CardContent className="p-0">
        {/* Thumbnail Container */}
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={episode.thumbnail}
            alt={episode.title}
            className="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-primary text-primary-foreground rounded-full p-4 transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
              <Play className="w-8 h-8 fill-current" />
            </div>
          </div>

          {/* Duration Badge */}
          <Badge
            variant="secondary"
            className="absolute bottom-3 right-3 bg-black/80 text-white hover:bg-black/80 border-0"
          >
            <Clock className="w-3 h-3 mr-1" />
            {episode.duration}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Podcast Name & Published Date */}
          <div className="flex items-center justify-between mb-3">
            <Badge
              variant="outline"
              className="text-xs border-primary/30 text-primary bg-primary/10"
            >
              {episode.podcastName}
            </Badge>
            <div className="flex items-center text-muted-foreground text-xs">
              <Calendar className="w-3 h-3 mr-1" />
              {getTimeAgo(episode.publishedDate)}
            </div>
          </div>

          {/* Title */}
          <h3 className="font-bold text-lg leading-tight mb-3 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {episode.title}
          </h3>

          {/* Host */}
          <p className="text-sm text-muted-foreground mb-4">
            Hosted by{" "}
            <span className="text-foreground font-medium">
              {episode.hostName}
            </span>
          </p>

          {/* Description Preview */}

          <p
            className="text-sm text-muted-foreground line-clamp-2 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: formattedText(episode.description),
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PodcastCard;
