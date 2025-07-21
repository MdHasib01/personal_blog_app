"use client";

import { useState, useEffect } from "react";
import { Metadata } from "next";
import { VideoCard } from "@/components/video-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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

interface ApiResponse {
  videos: Video[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalVideos: number;
    hasNext: boolean;
    hasPrev: boolean;
    limit: number;
  };
  filters: {
    search: string;
    channel: string;
    sortBy: string;
    order: string;
  };
}

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalVideos: 0,
    hasNext: false,
    hasPrev: false,
    limit: 50,
  });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchVideos = async (page: number = 1, search: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL
        }/api/youtube/videos?page=${page}&limit=6&search=${encodeURIComponent(
          search
        )}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch videos");
      }

      const data: ApiResponse = await response.json();
      setVideos(data.videos);
      setPagination(data.pagination);
    } catch (error) {
      console.error("Error fetching videos:", error);
      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos(currentPage, searchTerm);
  }, [currentPage]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchVideos(1, searchTerm);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5;
    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );
    const endPage = Math.min(
      pagination.totalPages,
      startPage + maxVisiblePages - 1
    );

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          key={i}
          variant={i === currentPage ? "default" : "outline"}
          size="sm"
          onClick={() => handlePageChange(i)}
          disabled={loading}
        >
          {i}
        </Button>
      );
    }

    return buttons;
  };

  return (
    <>
      <Navbar />

      <div className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-tight">
            YouTube Videos
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover and explore curated YouTube content from various channels.
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-md mx-auto mb-8">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="e.g. How To Create a Newsletter"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button type="submit" disabled={loading}>
              Search
            </Button>
          </form>
        </div>

        {/* Results Info */}
        {!loading && (
          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              Found {pagination.totalVideos} video
              {pagination.totalVideos !== 1 ? "s" : ""}
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="text-muted-foreground mt-4">Loading videos...</p>
          </div>
        )}

        {/* Videos Grid */}
        {!loading && videos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {videos.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))}
          </div>
        )}

        {/* No Results */}
        {!loading && videos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No videos found. Try adjusting your search terms.
            </p>
          </div>
        )}

        {/* Pagination */}
        {!loading && pagination.totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={!pagination.hasPrev || loading}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>

            {renderPaginationButtons()}

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={!pagination.hasNext || loading}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
