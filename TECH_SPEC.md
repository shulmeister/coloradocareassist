# Technical Specification: Colorado CareAssist Platform

## Executive Summary
The Colorado CareAssist platform is a high-performance, SEO-optimized web application designed to generate leads for home care services. It leverages a modern Jamstack architecture (Next.js) for speed and reliability, integrated with enterprise-grade third-party services for communication (RingCentral, Brevo) and customer engagement (Facebook Messenger, Trustpilot). The system features a custom-built, serverless Content Management System (CMS) that allows for zero-maintenance content updates via GitHub-backed storage.

## System Architecture

### 1. Frontend Application
- **Framework**: Next.js 14 (React)
- **Rendering Strategy**: Hybrid Static Site Generation (SSG) for high-performance marketing pages and Server-Side Rendering (SSR) for admin/dynamic routes.
- **Styling**: Modular CSS for scoped, maintainable styling without runtime overhead.
- **Performance**: 
  - Core Web Vitals optimized (LCP < 2.5s, CLS < 0.1).
  - Image optimization via `next/image`.
  - Font optimization via `next/font`.

### 2. Backend & API Layer
- **Runtime**: Node.js (hosted on Heroku Dynos).
- **API Routes**: Serverless functions handling form submissions, authentication, and integrations.
- **Data Persistence**:
  - **Content**: Git-based storage (Markdown files) for blog posts, ensuring version control and zero database maintenance cost.
  - **Leads**: Synced immediately to external CRMs (Brevo) and notification systems (RingCentral).
  - **Sessions**: Encrypted `iron-session` cookies for secure, stateless admin authentication.

### 3. Integrations & Microservices
| Service | Purpose | Implementation Detail |
|---------|---------|----------------------|
| **RingCentral** | SMS Notifications | Real-time SMS alerts to staff upon lead submission. Auto-reply logic for leads. |
| **Brevo (Sendinblue)** | Email Infrastructure | Transactional emails to staff and leads. Contact syncing for CRM functionality. |
| **Facebook Messenger** | Customer Chat | Direct integration for real-time customer support via existing social channels. |
| **Trustpilot** | Social Proof | Widget integration for displaying verified customer reviews. |
| **GitHub API** | Content Management | Used by the Admin Dashboard to read/write blog posts directly to the repo. |
| **Redis** | Rate Limiting | In-memory key-value store to prevent form abuse and spam. |

## Security & Compliance
- **Authentication**: Secure, password-protected Admin Dashboard using sealed cookie sessions (no sensitive data stored on client).
- **Spam Protection**: Honeypot fields and IP-based rate limiting (Redis) on public forms.
- **Data Privacy**: No sensitive PII stored in local application database; all data is passed through to secure third-party processors.
- **SSL/TLS**: Enforced HTTPS for all connections via Heroku's automated certificate management.

## Scalability & Maintenance
- **Horizontal Scaling**: Stateless architecture allows for instant scaling of Heroku Dynos to handle traffic spikes.
- **CI/CD**: Automated deployment pipeline. Any commit to `main` (via code or CMS) triggers a build and deploy process (~2 minutes to live).
- **Zero-Database**: content is file-based, removing the need for database backups, migrations, or connection management for the core site.

## Deployment Environment
- **Host**: Heroku (Platform as a Service)
- **CDN**: Heroku Edge / Next.js Optimization
- **DNS**: Hostinger (Route management)

## Admin Capabilities
A custom `/admin` portal provides business owners with:
- **Lead Dashboard**: Real-time view of recent website inquiries.
- **Content Publishing**: Markdown-based editor to publish SEO-optimized blog posts instantly.
- **Social Sharing**: One-click tools to share new content to LinkedIn and Facebook.

---
*Prepared by Jason Shulmeister | Date: Jan 2026*
