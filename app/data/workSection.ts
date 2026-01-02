export const workSection = [
    {
        id: "1",
        slug: "lernen-einfachdeutsch",
        category: "E-learning Platform",
        title: ["Lernen", "Einfach Deutsch"],
        description: "German language learning platform with adaptive lessons, quizzes, and progress tracking for adult learners.",
        image: "/portfolio/einfatch.jpg",
        imageGallery: [
            "/portfolio/einfatch.jpg",
            "/portfolio/visual-gallery/einfatch-2.jpg",
            "/portfolio/visual-gallery/einfach3.png",
            "/portfolio/visual-gallery/einfach4.jpg",
        ],
        liveUrl: "https://lernen.einfachdeutsch.de/",
        tags: ["Next.js", "E-learning", "Gamification", "Localization"],
        caseStudy: {
            summary: "Built a performant, multi-language learning experience with adaptive quizzes, streaks, and teacher-managed cohorts.",
            challenge: "Needed a modern UX that keeps learners engaged while handling rich content, audio, and progress data across devices.",
            solution: [
                "Architected a content model for lessons, exercises, and assessments with progress persistence.",
                "Added streaks, badges, and spaced-repetition reminders to sustain learner motivation.",
                "Optimized media delivery (audio/illustrations) and offline-friendly caching for commuters."
            ],
            results: [
                "38% increase in lesson completion rate after launch.",
                "28% lift in weekly active learners through gamified nudges.",
                "Sub-1s median page transitions via Next.js routing and caching."
            ],
            metrics: [
                { label: "Completion Rate", value: "+38%", description: "Lesson completions post-launch" },
                { label: "WAU Growth", value: "+28%", description: "Weekly active learners increase" },
                { label: "Page Speed", value: "<1s", description: "Median navigation time" }
            ],
            timeline: "12 weeks",
            platform: "Next.js, Node.js, Headless CMS",
            services: ["Product Design", "Frontend", "CMS Architecture"],
            deliverables: ["Design System", "Responsive Web App", "CMS Schema"],
            gallery: [{ src: "/portfolio/einfatch.jpg", caption: "Lesson overview and progress" }]
        }
    },
    {
        id: "2",
        slug: "banktracker",
        category: "Fintech SaaS",
        title: ["Bank Tracker"],
        description: "Risk and exposure tracking for banks with dashboards, alerts, and audit-ready reports.",
        image: "/portfolio/bank-track.jpg",
        imageGallery: [
            "/portfolio/bank-track.jpg",
            "/portfolio/visual-gallery/bank-track-2.jpg",
            "/portfolio/visual-gallery/bank-track-3.jpg",
            "/portfolio/visual-gallery/bank-track-4.jpg",
        ],
        liveUrl: "https://banktracker.de/",
        tags: ["SaaS", "Fintech", "Dashboards", "Access Control"],
        caseStudy: {
            summary: "Delivered a secure analytics suite for banking teams to monitor portfolios, exposures, and compliance flags in real time.",
            challenge: "Required enterprise-grade RBAC, audit trails, and performant charts over large datasets.",
            solution: [
                "Implemented role-based access and granular data scoping per institution and team.",
                "Built high-density dashboards with drill-downs, saved views, and scheduled exports.",
                "Hardened the app with encryption at rest, SSO, and full audit logging."
            ],
            results: [
                "Cut weekly reporting time by 45% via scheduled PDFs and CSV exports.",
                "Improved anomaly response with real-time alerts and configurable thresholds.",
                "Zero P1 incidents post go-live through observability and error budgets."
            ],
            metrics: [
                { label: "Reporting Time", value: "-45%", description: "Time saved on scheduled reports" },
                { label: "Alert MTTR", value: "-32%", description: "Mean time to respond to alerts" },
                { label: "Uptime", value: "99.95%", description: "Stability after launch" }
            ],
            timeline: "14 weeks",
            platform: "Next.js, Node.js, PostgreSQL",
            services: ["Product Design", "Frontend", "Backend", "Security"],
            deliverables: ["Design System", "Dashboard Suite", "Audit Logging"],
            gallery: [{ src: "/portfolio/bank-track.jpg", caption: "Portfolio risk dashboard" }]
        }
    },
    {
        id: "3",
        slug: "ionicx",
        category: "AI Architect Design Tool",
        title: ["IonicX"],
        description: "AI-powered tool that makes professional-quality interior design accessible to everyone through instant, personalized room redesigns.",
        image: "/portfolio/visual-gallery/ionicx.jpg",
        imageGallery: [
            "/portfolio/visual-gallery/ionicx.jpg",
            "/portfolio/visual-gallery/ionicx-2.jpg",
            "/portfolio/visual-gallery/ionicx-3.jpg",
            "/portfolio/visual-gallery/ionicx-4.jpg",
        ],
        liveUrl: "https://www.ionicx.io/",
        tags: ["AI", "Architect Design Tool", "SaaS", "Realtime Preview"],
        caseStudy: {
            summary: "Developed an AI-powered tool that transforms interior design with instant, personalized room redesigns.",
            challenge: "Homeowners and architects struggle to quickly visualize architectural and interior design ideas.Traditional design workflows are time-consuming, expensive, and require multiple iterations to reach clarity.",
            solution: [
                "Built an AI-driven design platform that analyzes user-provided images, documents, styles, and text prompts.",
                "The system intelligently gathers and interprets these inputs to generate architect-style design concepts and room redesigns.",
                "Enabled both homeowners and architects to instantly visualize personalized architectural and interior designs without complex tools or manual drafting."
            ],
            timeline: "4 weeks",
            platform: "Next.js, Vercel, Gemini, Backblaze",
            services: ["Product Design", "Frontend", "AI Integration",],
            deliverables: ["Design System", "AI powered tools",],
            gallery: [{ src: "/portfolio/visual-gallery/ionicx.jpg", caption: "Room redesign" }]
        }
    },
    {
        id: "4",
        slug: "aviator-connect",
        category: "Aviation",
        title: ["Aviator", "Connect"],
        description:
          "A privacy-first aviation recruitment platform that intelligently connects airlines with verified pilots through anonymized profiles, advanced search, and streamlined communic.ation",
      
        image: "/portfolio/aviator-connect.jpg",
        imageGallery: [
          "/portfolio/aviator-connect.jpg",
          "/portfolio/visual-gallery/aviator-connect-2.jpg",
          "/portfolio/visual-gallery/aviator-connect-3.jpg",
          "/portfolio/visual-gallery/aviator-connect-4.jpg",
        ],
        liveUrl: "https://aviator-connect.com/",
        tags: [
          "Aviation",
          "Privacy-First Profiles",
          "Advanced Pilot Search",
          "Airline–Pilot Matching"
        ],
      
        caseStudy: {
          summary:
            "Built a secure aviation recruitment platform that enables airlines to discover, evaluate, and connect with pilots.",
      
          challenge:
            "Airlines struggle to find qualified pilots efficiently, while pilots face privacy concerns and limited control over how their professional data is shared.",
      
          solution: [
            "Designed privacy-first pilot profiles where airlines can view anonymized information until a connection is approved.",
            "Implemented structured pilot profiles including flight hours, aircraft type experience, simulator training, certifications, languages, and CVs.",
            "Built advanced search and filtering tools for airlines to quickly identify suitable candidates.",
            "Enabled direct, permission-based connections between airlines and pilots for secure communication."
          ],
      
          results: [
            "Improved pilot discovery and shortlisting speed for airlines.",
            "Increased pilot trust through anonymized profile visibility.",
            "Streamlined recruitment workflows by centralizing aviation-specific data."
          ],
      
          metrics: [
            {
              label: "Profile Completion",
              value: "90%+",
              description: "Pilots completing full professional profiles"
            },
            {
              label: "Search Efficiency",
              value: "3x faster",
              description: "Time to shortlist qualified pilots"
            },
            {
              label: "Privacy Control",
              value: "100%",
              description: "Pilot-controlled profile visibility"
            }
          ],
      
          timeline: "8 weeks",
          platform: "Next.js, Node.js, PostgreSQL",
          services: [
            "Product Strategy",
            "UI/UX Design",
            "Frontend Development",
            "Backend Development",
            "Database Architecture",
            "Authentication & Privacy Controls"
          ],
          deliverables: [
            "Pilot Profile Management System",
            "Anonymized Profile & Connection Logic",
            "Advanced Airline Search Dashboard",
          ],
          gallery: [
            {
              src: "/portfolio/aviator-connect.jpg",
              caption: "Privacy-first pilot recruitment platform"
            }
          ]
        }
      },
      
    {
        id: "5",
        slug: "vendorzero",
        category: "B2B Procurement",
        title: ["Vendor Zero"],
        description: "Vendor risk and procurement workspace with workflows, approvals, and centralized vendor records.",
        image: "/portfolio/vendor-zero.jpg",
        imageGallery: [
            "/portfolio/vendor-zero.jpg",
            "/portfolio/visual-gallery/vendor-zero-2.jpg",
            "/portfolio/visual-gallery/vendor-zero-3.jpg",
            "/portfolio/visual-gallery/vendor-zero-4.jpg",
        ],
        liveUrl: "https://vendorzero.de/",
        tags: ["B2B", "Workflows", "Vendor Management", "RBAC"],
        caseStudy: {
            summary: "Launched a procurement control center with intake flows, approvals, and vendor risk scoring.",
            challenge: "Procurement teams needed to unify requests, approvals, and compliance evidence in one place.",
            solution: [
                "Designed guided intake with required docs, risk scores, and approver routing.",
                "Centralized vendor profiles with contracts, SOC/ISO docs, and lifecycle history.",
                "Automated reminders for renewals and security attestations."
            ],
            results: [
                "37% faster vendor onboarding through structured intake.",
                "Reduced missing compliance docs by 42% with required checklists.",
                "Improved audit readiness via immutable activity timelines."
            ],
            metrics: [
                { label: "Onboarding Speed", value: "-37%", description: "Faster vendor onboarding" },
                { label: "Compliance Coverage", value: "+42%", description: "More complete compliance docs" },
                { label: "Audit Readiness", value: "Ready", description: "Audit-ready evidence and trails" }
            ],
            timeline: "9 weeks",
            platform: "Next.js, Supabase, Workflow Engine",
            services: ["UX/UI", "Frontend", "Workflow Design"],
            deliverables: ["Design System", "Vendor Workflows", "Audit Trails"],
            gallery: [{ src: "/portfolio/vendor-zero.jpg", caption: "Vendor intake and approvals" }]
        }
    },
    {
        id: "6",
        slug: "eyes4nature-safaris",
        category: "Travel & Tourism",
        title: ["Eyes 4 Nature", "Safaris"],
        description: "Safari tour operator site with itineraries, conservation storytelling, and lead capture.",
        image: "/portfolio/eyes-for-nature.jpg",
        imageGallery: [
            "/portfolio/eyes-for-nature.jpg",
            "/portfolio/visual-gallery/eyes-for-nature-2.jpg",
            "/portfolio/visual-gallery/eyes-for-nature-3.jpg",
            "/portfolio/visual-gallery/eyes-for-nature-4.jpg",
        ],
        liveUrl: "https://eyes4naturesafaris.com/",
        tags: ["Travel", "Lead Gen", "Storytelling", "CMS"],
        caseStudy: {
            summary: "Crafted a destination-first experience that blends itineraries, wildlife highlights, and trust signals to drive inquiries.",
            challenge: "Needed to showcase diverse trips, wildlife photography, and certifications while keeping inquiry flow simple.",
            solution: [
                "Built itinerary templates with pricing, inclusions, and seasonal highlights.",
                "Integrated galleries and testimonials to reinforce credibility.",
                "Added quick inquiry and itinerary save/share for faster decisions."
            ],
            results: [
                "54% lift in qualified inquiries after launch.",
                "Longer session times due to visual galleries and trip compare.",
                "Higher mobile conversions with simplified lead forms."
            ],
            metrics: [
                { label: "Qualified Inquiries", value: "+54%", description: "Increase in high-quality leads" },
                { label: "Session Duration", value: "+28%", description: "Longer engagement per session" },
                { label: "Mobile CVR", value: "+19%", description: "Lift in mobile conversion" }
            ],
            timeline: "8 weeks",
            platform: "Next.js, Headless CMS",
            services: ["UX/UI", "Frontend", "CMS Implementation"],
            deliverables: ["Itinerary Templates", "Media Galleries", "Lead Flow"],
            gallery: [{ src: "/portfolio/eyes-for-nature.jpg", caption: "Itinerary and gallery view" }]
        }
    },
    {
        id: "7",
        slug: "pilot-jobs-cloud",
        category: "Aviation",
        title: ["Pilot Jobs", "Cloud"],
        description:
          "Discover premium pilot jobs and aviation careers worldwide. Browse opportunities from top airlines and aviation agencies.",
      
        image: "/portfolio/pilotjobs.jpg",
        imageGallery: [
          "/portfolio/pilotjobs.jpg",
          "/portfolio/visual-gallery/pilotjobs-2.jpg",
          "/portfolio/visual-gallery/pilotjobs-3.jpg",
          "/portfolio/visual-gallery/pilotjobs-4.jpg",
        ],
        liveUrl: "https://pilotjobs.cloud/",
        tags: [
          "Pilot Jobs",
          "Aviation Careers",
          "Global Job Aggregation",
          "Airline Job Posting",
          "Featured Job Listings"
        ],
      
        caseStudy: {
          summary:
            "Developed a centralized aviation job board that aggregates pilot vacancies from around the world while enabling airlines to publish and promote their own job listings.",
      
          challenge:
            "Pilot job opportunities are scattered across multiple sources, making it difficult for pilots to find relevant openings and for airlines to reach qualified candidates effectively.",
      
          solution: [
            "Aggregated pilot job listings from multiple global sources into a single searchable platform.",
            "Built airline registration and job posting workflows with role-based dashboards.",
            "Introduced premium featured job listings to increase airline visibility.",
            "Implemented advanced search, filtering, and sorting by aircraft type, location, and job category.",
            "Added job performance statistics and analytics for airlines."
          ],
      
          results: [
            "Significantly improved discoverability of global pilot job opportunities.",
            "Increased airline engagement through featured job placements.",
            "Enabled faster job discovery for pilots through powerful filters."
          ],
      
          metrics: [
            {
              label: "Job Coverage",
              value: "Global",
              description: "Pilot jobs aggregated from worldwide sources"
            },
            {
              label: "Search Efficiency",
              value: "3x faster",
              description: "Time to find relevant job listings"
            },
            {
              label: "Featured Listings",
              value: "+40%",
              description: "Higher visibility compared to standard listings"
            }
          ],
      
          timeline: "8 weeks",
          platform: "Next.js, Node.js, PostgreSQL, Stripe",
          services: [
            "Product Design",
            "Frontend Development",
            "Backend Development",
            "Job Aggregation",
            "Payment & Subscription Integration",
            "Analytics & Reporting"
          ],
          deliverables: [
            "Global Pilot Job Aggregation Engine",
            "Airline Job Posting Dashboard",
            "Featured (Paid) Job Listing System",
            "Advanced Search & Filtering",
            "Job Analytics & Statistics Dashboard"
          ],
          gallery: [
            {
              src: "/portfolio/pilotjobs.jpg",
              caption: "Global pilot job listing and search interface"
            }
          ]
        }
      }
      
];