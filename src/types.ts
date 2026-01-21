export interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
  article_id: string;
  keywords: string[];
  creator: string | null;
  language: string;
  country: string[];
  category: string[];
  datatype: string;
  pubDateTZ: string;
  fetched_at: string;
  video_url: string | null;
  source_id: string;
  source_priority: number;
  source_url: string;
  source_icon: string;
  sentiment: string;
  sentiment_stats: string;
  ai_tag: string;
  ai_region: string;
  ai_org: string;
  ai_summary: string;
  duplicate: boolean;
}

export interface ResponseNews {
  status: string;
  totalResults: number;
  results: Article[];
}
