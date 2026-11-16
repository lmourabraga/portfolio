# Luã Braga — Portfolio (`lmourabraga.com`)

Professional portfolio and technical blog of **Luã Braga**, Software Engineer with 15 years of end-to-end development experience.

---

## Tech Stack

- **Front-end:** React 19, Vite, TypeScript
- **Styling:** Tailwind CSS, Lucide React (Icons)
- **Containerization:** Docker & Nginx
- **CMS Integration:** WordPress REST API (Headless CMS ready)

---

## Project Structure

```text
src/
├── assets/          # Static assets & images
├── components/      # Reusable components (Navbar, Hero, ExperienceTimeline, SkillsMatrix, ProjectsGrid, ArticlesSection, ContactSection, Footer)
├── data/            # Structured profile data extracted from career-ops/cv.md
├── hooks/           # Custom React hooks
├── services/        # API integration (WordPress REST API + local fallback)
├── styles/          # Tailwind setup & CSS
├── types/           # TypeScript type definitions
├── utils/           # SEO and formatting utilities
├── App.tsx
└── main.tsx
```

---

## Getting Started

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser.

---

## Running with Docker

1. Build and run using Docker Compose:
   ```bash
   docker-compose up --build
   ```

2. Access the containerized application at `http://localhost:8080`.

---

## Connecting WordPress Backend

To connect your WordPress site as a headless CMS for articles/blog posts:

1. Create a `.env` file in the project root:
   ```env
   VITE_WP_API_URL=https://your-wordpress-domain.com/wp-json/wp/v2
   ```
2. The `wordpressService.ts` will automatically fetch published posts directly from your WordPress REST API. If the environment variable is not set, it gracefully falls back to default mock articles.
