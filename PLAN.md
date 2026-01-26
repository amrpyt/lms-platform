# Dr. Zeyad Mohanna - LMS Platform Plan
## منصة د. زياد مهنا للتعليم الطبي

---

## 1. Project Overview

### Vision
Build a premium, Arabic-first Learning Management System (LMS) for Dr. Zeyad Mohanna to deliver medical courses, manage students, and establish a trusted educational brand in the MENA region.

### Goals
- Provide a seamless learning experience for medical students
- Enable Dr. Zeyad to upload, manage, and monetize courses
- Build a community of engaged learners
- Issue certificates and track progress

---

## 2. Target Audience

| Segment | Description |
|---------|-------------|
| **Primary** | Medical students (undergraduate & postgraduate) |
| **Secondary** | Healthcare professionals seeking CME credits |
| **Tertiary** | Pre-med students preparing for entrance exams |

---

## 3. Site Map & Pages

```
/                           → Landing Page (Public)
/courses                    → Course Catalog (Public)
/courses/[slug]             → Course Details (Public)
/about                      → About Dr. Zeyad (Public)
/contact                    → Contact Form (Public)

/auth/login                 → Student Login
/auth/register              → Student Registration
/auth/forgot-password       → Password Recovery

/dashboard                  → Student Dashboard (Protected)
/dashboard/my-courses       → Enrolled Courses
/dashboard/course/[id]      → Course Player (Video + Materials)
/dashboard/certificates     → Earned Certificates
/dashboard/profile          → Profile Settings

/admin                      → Admin Dashboard (Protected - Admin Only)
/admin/courses              → Manage Courses
/admin/courses/new          → Create New Course
/admin/courses/[id]/edit    → Edit Course
/admin/students             → Student Management
/admin/analytics            → Revenue & Engagement Analytics
/admin/settings             → Platform Settings
```

---

## 4. Features by Phase

### Phase 1: MVP (Current Sprint)
| Feature | Status | Priority |
|---------|--------|----------|
| Landing Page (Arabic) | ✅ Done | P0 |
| Dashboard UI (Static) | ✅ Done | P0 |
| Responsive Design | ✅ Done | P0 |
| Course Catalog Page | 🔲 Pending | P0 |
| Course Detail Page | 🔲 Pending | P0 |
| About Page | 🔲 Pending | P1 |
| Contact Page | 🔲 Pending | P1 |

### Phase 2: Authentication & User Management
| Feature | Status | Priority |
|---------|--------|----------|
| Student Registration (Email) | 🔲 Pending | P0 |
| Student Login | 🔲 Pending | P0 |
| Password Reset Flow | 🔲 Pending | P1 |
| Social Login (Google) | 🔲 Pending | P2 |
| Profile Management | 🔲 Pending | P1 |
| Role-based Access (Student/Admin) | 🔲 Pending | P0 |

### Phase 3: Course Management (Admin)
| Feature | Status | Priority |
|---------|--------|----------|
| Create/Edit/Delete Courses | 🔲 Pending | P0 |
| Upload Video Lessons | 🔲 Pending | P0 |
| Upload PDF/Documents | 🔲 Pending | P1 |
| Set Course Pricing | 🔲 Pending | P0 |
| Publish/Unpublish Courses | 🔲 Pending | P0 |
| Reorder Lessons (Drag & Drop) | 🔲 Pending | P2 |

### Phase 4: Student Learning Experience
| Feature | Status | Priority |
|---------|--------|----------|
| Course Enrollment | 🔲 Pending | P0 |
| Video Player (Protected) | 🔲 Pending | P0 |
| Progress Tracking | 🔲 Pending | P0 |
| Mark Lesson Complete | 🔲 Pending | P0 |
| Course Completion Certificate | 🔲 Pending | P1 |
| Notes & Bookmarks | 🔲 Pending | P2 |

### Phase 5: Payments & Monetization
| Feature | Status | Priority |
|---------|--------|----------|
| Payment Gateway (Stripe/Paymob) | 🔲 Pending | P0 |
| Course Purchase Flow | 🔲 Pending | P0 |
| Order History | 🔲 Pending | P1 |
| Promo Codes / Discounts | 🔲 Pending | P2 |
| Subscription Model (Optional) | 🔲 Pending | P3 |

### Phase 6: Advanced Features
| Feature | Status | Priority |
|---------|--------|----------|
| Quizzes & Assessments | 🔲 Pending | P2 |
| Discussion Forums | 🔲 Pending | P3 |
| Live Sessions (Zoom Integration) | 🔲 Pending | P3 |
| Email Notifications | 🔲 Pending | P1 |
| Analytics Dashboard | 🔲 Pending | P2 |
| Mobile App (React Native) | 🔲 Pending | P4 |

---

## 5. Tech Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Frontend** | Next.js 15+ (App Router) | SSR/SSG, SEO, React ecosystem |
| **Styling** | Tailwind CSS + Shadcn UI | Rapid development, consistent design |
| **Language** | TypeScript | Type safety, better DX |
| **Database** | PostgreSQL (Supabase/Neon) | Relational data, Prisma ORM |
| **Auth** | NextAuth.js / Clerk | Secure, easy integration |
| **File Storage** | Cloudflare R2 / AWS S3 | Video & document storage |
| **Video** | Mux / Bunny Stream | Secure video streaming with DRM |
| **Payments** | Stripe / Paymob | Global + MENA support |
| **Hosting** | Vercel | Optimal for Next.js |
| **Email** | Resend / SendGrid | Transactional emails |

---

## 6. Database Schema (High-Level)

```
┌─────────────────┐       ┌─────────────────┐
│     User        │       │     Course      │
├─────────────────┤       ├─────────────────┤
│ id              │       │ id              │
│ name            │       │ title           │
│ email           │       │ description     │
│ role (student/  │       │ price           │
│       admin)    │       │ thumbnail       │
│ avatar          │       │ published       │
│ createdAt       │       │ createdAt       │
└────────┬────────┘       └────────┬────────┘
         │                         │
         │    ┌────────────────────┘
         │    │
         ▼    ▼
┌─────────────────┐       ┌─────────────────┐
│   Enrollment    │       │     Lesson      │
├─────────────────┤       ├─────────────────┤
│ id              │       │ id              │
│ userId          │───┐   │ courseId        │
│ courseId        │   │   │ title           │
│ progress        │   │   │ videoUrl        │
│ completedAt     │   │   │ duration        │
│ createdAt       │   │   │ order           │
└─────────────────┘   │   └─────────────────┘
                      │
                      ▼
              ┌─────────────────┐
              │    Progress     │
              ├─────────────────┤
              │ id              │
              │ lessonId        │
              │ enrollmentId    │
              │ completed       │
              │ watchedSeconds  │
              └─────────────────┘

┌─────────────────┐       ┌─────────────────┐
│     Order       │       │   Certificate   │
├─────────────────┤       ├─────────────────┤
│ id              │       │ id              │
│ userId          │       │ enrollmentId    │
│ courseId        │       │ issuedAt        │
│ amount          │       │ certificateUrl  │
│ status          │       │ verificationId  │
│ paymentId       │       └─────────────────┘
│ createdAt       │
└─────────────────┘
```

---

## 7. Design System

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Primary Blue | `#1e3a8a` | CTAs, Links, Branding |
| Accent Cyan | `#00f5d4` | Highlights, Success states |
| Slate 900 | `#0f172a` | Headings, Dark backgrounds |
| Slate 600 | `#475569` | Body text |
| Slate 100 | `#f1f5f9` | Light backgrounds |

### Typography
| Element | Font | Weight | Size |
|---------|------|--------|------|
| H1 | IBM Plex Sans Arabic | 700/800 | 48-72px |
| H2 | IBM Plex Sans Arabic | 700 | 36-48px |
| H3 | IBM Plex Sans Arabic | 600 | 24-30px |
| Body | IBM Plex Sans Arabic | 400 | 16-18px |
| Small | IBM Plex Sans Arabic | 500 | 12-14px |

### Components (Shadcn UI)
- Button (Primary, Secondary, Outline, Ghost)
- Card (Course Card, Stat Card, Activity Card)
- Badge (Category, Status, Progress)
- Input (Text, Search, Textarea)
- Dialog (Modals, Confirmations)
- Tabs (Course sections)
- Progress (Learning progress bars)
- Avatar (User profiles)

---

## 8. Security Considerations

| Concern | Solution |
|---------|----------|
| Video Piracy | Signed URLs, DRM (Mux), Watermarking |
| Auth Security | JWT with refresh tokens, HTTPS only |
| Payment Security | PCI-compliant gateway (Stripe) |
| Data Privacy | GDPR compliance, data encryption at rest |
| Rate Limiting | API rate limits, CAPTCHA on forms |

---

## 9. Deployment & DevOps

| Stage | Environment | URL |
|-------|-------------|-----|
| Development | Local | localhost:3000 |
| Staging | Vercel Preview | staging.drzeyad.com |
| Production | Vercel | www.drzeyad.com |

### CI/CD Pipeline
1. Push to `main` → Auto-deploy to Production
2. Push to `develop` → Auto-deploy to Staging
3. Pull Requests → Preview deployments

---

## 10. Milestones & Timeline

| Milestone | Deliverables | Estimated Duration |
|-----------|--------------|-------------------|
| **M1: Frontend Foundation** | Landing, Dashboard UI, Course Catalog | 1-2 weeks |
| **M2: Auth & Users** | Login, Register, Profile | 1 week |
| **M3: Admin Panel** | Course CRUD, Student management | 2 weeks |
| **M4: Learning Experience** | Video player, Progress tracking | 2 weeks |
| **M5: Payments** | Checkout, Order history | 1-2 weeks |
| **M6: Polish & Launch** | Testing, Performance, SEO | 1 week |

**Total Estimated Time: 8-10 weeks**

---

## 11. Open Questions

1. **Payment Gateway**: Stripe (global) or Paymob (Egypt-focused)?
2. **Video Hosting**: Self-hosted (S3 + CloudFront) or managed (Mux/Bunny)?
3. **Certification**: PDF generation or external service?
4. **Live Classes**: Required for MVP or Phase 2?
5. **Mobile App**: React Native later or PWA sufficient?

---

## 12. Next Steps

1. ✅ Complete Landing Page (Done)
2. ✅ Complete Dashboard UI (Done)
3. 🔲 Build Course Catalog Page
4. 🔲 Build Course Detail Page
5. 🔲 Setup Database (Prisma + PostgreSQL)
6. 🔲 Implement Authentication
7. 🔲 Build Admin Panel

---

*Document Version: 1.0*
*Last Updated: January 26, 2026*
*Author: Development Team*
