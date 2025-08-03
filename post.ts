export interface Post {
  id?: string;
  title: string;
  content: string;
  summary: string;
  videoUrl?: string;
  image?: string;
  channelName: string;
  tags: string[];
  category: string;
}

export interface CreatePostRequest {
  title: string;
  content: string;
  summary: string;
  videoUrl?: string;
  image?: File | string;
  channelName: string;
  tags: string[];
  category: string;
}

export const CATEGORIES = [
  "Technology",
  "Science",
  "Health",
  "Business",
  "Entertainment",
  "Sports",
  "Travel",
  "Food",
  "Education",
  "Lifestyle",
] as const;

export type Category = (typeof CATEGORIES)[number];
