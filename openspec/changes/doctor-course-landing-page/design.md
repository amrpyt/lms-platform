## Context

This project is a new LMS (Learning Management System) platform for Dr. Zeyad Mohanna. The immediate goal is to create a high-fidelity frontend prototype for a landing page to show the client.

## Goals / Non-Goals

**Goals:**
- Create a modern, professional, and trustworthy landing page.
- Reflect Dr. Zeyad's personal brand as established in his provided photo.
- Showcase course offerings and capture potential student leads.
- Establish a scalable tech stack for future LMS features (authentication, course player).

**Non-Goals:**
- Backend implementation in this phase.
- Real payment integration (will use mock CTAs).
- Detailed course content creation.

## Decisions

### 1. Tech Stack: Next.js + Tailwind CSS + Shadcn UI
- **Rationale**: Next.js provides excellent SEO (critical for a landing page) and a robust path to a full-stack app. Tailwind and Shadcn allow for rapid creation of high-quality, custom-branded UI components.
- **Alternatives**: Plain React (less SEO friendly), Vue/Nuxt (less common in this specific workflow's toolset).

### 2. Layout Structure (High-Conversion)
- **Hero**: Side-by-side layout with Dr. Zeyad's professional photo and a strong value proposition.
- **Trust Indicators**: Marquee or grid of partner logos/stats (e.g., "5000+ Students").
- **Course Catalog**: Responsive grid using Card components.
- **Biography**: "Meet the Doctor" section to build personal connection.

### 3. Visual Identity (Pending Image Analysis)
- **Colors**: Will be derived from Dr. Zeyad's provided photo to ensure brand consistency.
- **Typography**: Professional serif for headings (trust/authority) and clean sans-serif for body text (readability).

## Risks / Trade-offs

- **[Risk]**: Design might not perfectly match the client's mental model. → **Mitigation**: Focus on a clean, modular design that is easy to tweak.
- **[Trade-off]**: Using a full framework like Next.js for a simple landing page. → **Mitigation**: Future-proofs the project for the planned LMS features.

## Open Questions

- What are the specific primary colors preferred by the doctor? (To be inferred from image analysis)
- Are there specific courses already prepared to use as mock data?
