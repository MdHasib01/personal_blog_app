export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeId: string;
  publishedDate: string;
  duration: string;
  podcastName: string;
  hostName: string;
  viewCount: number;
  likeCount: number;
}
export const podcastEpisodesList: PodcastEpisode[] = [
  {
    id: "1",
    title:
      "How To Sell $300K/Year Worth of Barbecue Seasoning He Didn’t Invent.",
    description:
      "What if you could turn someone else’s proven product into a **six-figure side hustle** by simply adding your own story and marketing magic?<br><br>**Chris Gray** from **BaldBuck.com** is doing exactly that with his barbecue seasoning business, generating around **$300,000 annually** selling a product he didn’t create — he just white-labeled it with his own branding and marketing approach.<br><br>Chris didn’t spend months in a lab perfecting his own spice blend. Instead, he found a seasoning that was already working, slapped his own label on it, and built a **compelling story** around it. Now he has a thriving e-commerce business that proves you don’t need to **reinvent the wheel** to build something profitable.",
    thumbnail: "https://img.youtube.com/vi/HAmyMP9mXfk/maxresdefault.jpg",
    youtubeId: "HAmyMP9mXfk",
    publishedDate: "2025-06-20",
    duration: "1:00:49",
    podcastName: "Side Hustle Nation",
    hostName: "Nick Loper",
    viewCount: 735,
    likeCount: 25,
  },
  {
    id: "2",
    title: "S2 Ep4 - Excavating the Soul: What Inner Healing Really Looks Like",
    description:
      "Welcome back to **Season 2, Episode 4** of **The Knowing Podcast** with **Christene Marie**. This week, we’re joined by **Chris Gray**—evolving from corporate hustler to emotional intelligence champion—who shares candid stories around personal growth, presence, and living from a place of love.<br><br>🔑 **In This Episode**<br>-Chris’s dive-bar moment that sparked his first step into **self-confidence**<br>-A pivotal conversation with his wife that reshaped his **integrity**<br>-How a simple 10-minute mindfulness bell keeps him grounded daily<br>-Christene's dinner table question that surfaces hidden perceptions<br>-A heartfelt discussion on choosing **love over fear** in work and life",
    thumbnail: "https://img.youtube.com/vi/EnIw2qAS9Uc/maxresdefault.jpg",
    youtubeId: "EnIw2qAS9Uc",
    publishedDate: "2025-06-24",
    duration: "52:11",
    podcastName: "Knowing",
    hostName: "Christene Marie",
    viewCount: 138,
    likeCount: 5,
  },
  {
    id: "3",
    title:
      "The Man Behind All of  the Biggest Communities Out Right Now. The King Maker",
    description:
      "Behind every successful empire is a mastermind. In this exclusive episode, we pull back the curtain to reveal the man responsible for building some of the **BEST communities** out right now: **The Kingmaker**.<br><br>I will show you how he leveraged his deep understanding of human behavior and community dynamics to help build my community. I had to get him to do this episode to make sure you **pay attention**.",
    thumbnail: "https://img.youtube.com/vi/6ucYvM1mJF4/maxresdefault.jpg",
    youtubeId: "6ucYvM1mJF4",
    publishedDate: "2025-08-06",
    duration: "28:32",
    podcastName: "bandmankevo",
    hostName: "Bandman Kevo",
    viewCount: 6283,
    likeCount: 81,
  },
];

export const formattedText = (text: string): string => {
  if (!text) return "";

  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/__(.*?)__/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/_(.*?)_/g, "<em>$1</em>")
    .replace(/~~(.*?)~~/g, "<del>$1</del>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">$1</a>'
    )
    .replace(
      /^### (.*$)/gim,
      '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>'
    )
    .replace(
      /^## (.*$)/gim,
      '<h2 class="text-xl font-semibold mt-4 mb-2">$1</h2>'
    )
    .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-4 mb-2">$1</h1>')
    .replace(/^- (.*$)/gim, '<li class="ml-4">$1</li>')
    .replace(
      /<li.*?<\/li>/g,
      (match) => `<ul class="list-disc ml-4">${match}</ul>`
    )
    .replace(/<br\s*\/?>/gi, "<br>")
    .replace(/\n/g, "<br>")
    .replace(/(<br>\s*){3,}/g, "<br><br>");
};
