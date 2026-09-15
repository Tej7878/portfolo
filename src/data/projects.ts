export type Category = "All" | "Video" | "Garments" | "Ads";

export type Project = {
  id: string;
  title: string;
  client: string;
  year: string;
  category: Exclude<Category, "All">;
  tags: string[];
  summary: string;
  story: string;
  cover: string;
  videoUrl?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    id: "ai-video-modeling",
    title: "AI Video Modeling",
    client: "Personal",
    year: "2026",
    category: "Video",
    tags: ["Showcase", "AI Video"],
    summary: "A compilation of AI video generation workflows.",
    story:
      "Showcasing high-fidelity AI video models and virtual actors.",
    cover:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80",
    // videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Add your video URL here
    accent: "#c45c3e",
  },
  {
    id: "ai-photo-modeling",
    title: "AI Photo Modeling",
    client: "Personal",
    year: "2026",
    category: "Garments",
    tags: ["AI Stills", "Virtual Try-on"],
    summary: "Studio-grade virtual model results.",
    story:
      "Generating photorealistic models for garments and concepts using AI.",
    cover:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=80",
    accent: "#e8c9a0",
  },
  {
    id: "ad-marketing-video-shoot",
    title: "Ad Marketing Video Shoot",
    client: "Commercial",
    year: "2026",
    category: "Ads",
    tags: ["Commercial", "Production"],
    summary: "Full production showcase for commercial advertising.",
    story:
      "End-to-end video shoot workflows optimized for ad marketing and social media campaigns.",
    cover:
      "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=1600&q=80",
    accent: "#d4a59a",
  },
  
];

export const capabilities = [
  "AI video generation",
  "Garment image synthesis",
  "Ad creative systems",
  "Lookbooks & films",
  "Colorway exploration",
  "Performance variants",
  "Virtual try-on stills",
  "Campaign art direction",
];
