"use client";
import React, { useState } from "react";

import { Play, Calendar, Clock, ExternalLink } from "lucide-react";
import PodcastCard from "./podcast-card";
import EpisodeDialog from "./episod-dialog";
import {
  PodcastEpisode,
  podcastEpisodesList,
} from "@/utils/featuredPodcastData";

const FeaturedOnPodcasts = () => {
  const [selectedEpisode, setSelectedEpisode] = useState<PodcastEpisode | null>(
    null
  );
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCardClick = (episode: PodcastEpisode) => {
    setSelectedEpisode(episode);
    setDialogOpen(true);
  };
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
            <div className="bg-primary text-primary-foreground rounded-full p-3">
              <Play className="w-6 h-6" />
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Chris Gray Featured on These Podcasts
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover insights, stories, and expertise shared across top industry
            podcasts
          </p>

          {/* Decorative Line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
          </div>
        </div>

        {/* Podcast Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {podcastEpisodesList.map((episode) => (
            <PodcastCard
              key={episode.id}
              episode={episode}
              onClick={() => handleCardClick(episode)}
            />
          ))}
        </div>

        {/* Episode Dialog */}
        <EpisodeDialog
          episode={selectedEpisode}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      </div>
    </section>
  );
};

export default FeaturedOnPodcasts;
