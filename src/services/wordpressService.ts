import type { ArticleItem } from '../types';

// Fallback mock articles (expanded to 9 for carousel demonstration)
const mockArticles: ArticleItem[] = [
  {
    id: 1,
    title: "Replatforming Legacy Systems into Modern React & .NET Architecture",
    excerpt: "Insights and strategies from migrating large-scale enterprise PHP applications to modern component-driven architectures with AI assistance.",
    date: "2026-10-15",
    slug: "replatforming-legacy-systems",
    content: "Full article content goes here."
  },
  {
    id: 2,
    title: "Scaling Front-End Performance in High-Volume Logistics Platforms",
    excerpt: "Best practices learned at Americanas S.A. for building resilient, high-performance interfaces processing millions of daily transactions.",
    date: "2026-08-20",
    slug: "scaling-frontend-logistics",
    content: "Full article content goes here."
  },
  {
    id: 3,
    title: "The Developer's Guide to Headless WordPress with React",
    excerpt: "How to decouple WordPress backend CMS from a lightning-fast React front-end while preserving editorial workflow familiarity.",
    date: "2026-06-10",
    slug: "headless-wordpress-react",
    content: "Full article content goes here."
  },
  {
    id: 4,
    title: "Mastering TypeScript Generics in Large-Scale React Applications",
    excerpt: "Advanced typing patterns and design structures to maintain type safety and scalability across enterprise codebases.",
    date: "2026-05-12",
    slug: "mastering-typescript-generics",
    content: "Full article content goes here."
  },
  {
    id: 5,
    title: "AI-Assisted Code Generation: Friend or Foe for Senior Engineers?",
    excerpt: "Evaluating the impact of LLMs on software development lifecycles, code quality review processes, and architectural decision-making.",
    date: "2026-04-05",
    slug: "ai-assisted-code-generation",
    content: "Full article content goes here."
  },
  {
    id: 6,
    title: "Optimizing Web Vitals and Rendering Strategies in E-Commerce",
    excerpt: "Deep dive into SSR, ISR, and client-side optimization techniques that boost conversion rates and user experience.",
    date: "2026-03-18",
    slug: "optimizing-web-vitals-ecommerce",
    content: "Full article content goes here."
  },
  {
    id: 7,
    title: "Building Resilient Component Libraries with Tailwind CSS & Storybook",
    excerpt: "Standardizing design systems across cross-functional teams to accelerate product delivery and maintain brand consistency.",
    date: "2026-02-14",
    slug: "resilient-component-libraries",
    content: "Full article content goes here."
  },
  {
    id: 8,
    title: "Micro-Frontend Architectures: Lessons Learned from Enterprise Consultancies",
    excerpt: "Evaluating when to adopt micro-frontends, overcoming integration challenges, and managing shared state efficiently.",
    date: "2026-01-22",
    slug: "micro-frontend-architectures",
    content: "Full article content goes here."
  },
  {
    id: 9,
    title: "Effective State Management in Complex React Applications",
    excerpt: "Comparing Redux Toolkit, React Query, Zustand, and Context API for enterprise-grade web applications.",
    date: "2025-12-10",
    slug: "effective-state-management-react",
    content: "Full article content goes here."
  }
];

export async function fetchWordPressPosts(): Promise<ArticleItem[]> {
  const wpApiUrl = (import.meta as any).env?.VITE_WP_API_URL;
  
  if (!wpApiUrl) {
    return mockArticles;
  }

  try {
    const response = await fetch(`${wpApiUrl}/posts?_embed`);
    if (!response.ok) {
      throw new Error(`Failed to fetch from WordPress: ${response.statusText}`);
    }
    const data = await response.json();
    
    return data.map((post: any) => ({
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered.replace(/<[^>]*>?/gm, ''), // strip HTML
      date: post.date.split('T')[0],
      slug: post.slug,
      link: post.link,
      content: post.content.rendered
    }));
  } catch (error) {
    console.warn("Could not connect to WordPress API, falling back to local articles:", error);
    return mockArticles;
  }
}
