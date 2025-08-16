import { Calendar, Clock, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { formattedText, PodcastEpisode } from "@/utils/featuredPodcastData";
import { getTimeAgo } from "@/utils/timeAgo";
import VideoPlayer from "./video-player";

const EpisodeDialog: React.FC<{
  episode: PodcastEpisode | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}> = ({ episode, open, onOpenChange }) => {
  if (!episode) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-sm border-border/50">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-2xl font-bold leading-tight text-left">
            {episode.title}
          </DialogTitle>

          {/* Episode Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              Published {getTimeAgo(episode.publishedDate)}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {episode.duration}
            </div>
            <Badge
              variant="outline"
              className="border-primary/30 text-primary bg-primary/10"
            >
              {episode.podcastName}
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Video Player */}
          <VideoPlayer youtubeId={episode.youtubeId} />

          {/* Host Info */}
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm">
              <span className="text-muted-foreground">Hosted by:</span>{" "}
              <span className="font-medium text-foreground">
                {episode.hostName}
              </span>
            </p>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h4 className="font-semibold text-lg">About this episode</h4>
            <p
              className="text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: formattedText(episode.description),
              }}
            />
          </div>

          {/* External Link */}
          <div className="pt-4 border-t border-border">
            <a
              href={`https://youtube.com/watch?v=${episode.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              Watch on YouTube
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EpisodeDialog;
