/* ============================================================
   Rich case study data — consumed by case-study.html
   ============================================================ */
const CS_DATA = {

  /* ─── FAMLI ────────────────────────────────────────────── */
  famli: {
    id: "famli",
    title: "Famli App",
    subtitle: "Simplified a family wealth management app by turning complex financial data into clear, intuitive experiences.",
    platform: "Mobile App",
    duration: "Jan – Apr 2026",
    role: "Design Lead",
    heroColor: "#F7F5FF",
    heroImg: "assets/case-studies/famli/famli-hero.png",
    sections: [
      { type: "text", heading: "About",
        body: "Famli is a modern wealth management app that helps families understand, manage and grow their wealth in one place. Designed for financially active individuals and families who manage multiple investments, it provides better clarity, collaboration, and guidance in managing their finances." },

      { type: "two-col",
        left: { heading: "Problem Statement", items: [
          "Financial data scattered across banks, brokers, and apps",
          "Lack of trust in financial advisors and digital tools",
          "Limited financial knowledge to make confident decisions",
          "Limited visibility of family's wealth",
          "Difficulty tracking spending, taxes, and financial goals",
          "Reliance on spreadsheets and scattered documents",
          "Difficulty getting timely financial advice"
        ]},
        right: { type: "quote", label: "USER NEED", text: '"Users lack a single source of truth for their financial lives."' }
      },

      { type: "goals", heading: "Business Goals", items: [
        { title: "Improve IA & Usability", desc: "Current app lacked clarity in navigation; flows were not intuitive, making it difficult for users to know what to do." },
        { title: "Redesign for Trust & Clarity", desc: "Existing app had too much noise, inconsistent design — leading to lack of trust when viewing sensitive financial data." },
        { title: "Design for Scalability", desc: "Think of app from long-term perspective & make reusable components that scale with the future roadmap." }
      ]},

      { type: "persona",
        heading: "User Persona",
        img: "assets/case-studies/famli/persona.png",
        title: "Primary Users: Age 30–45 yrs",
        items: [
          "Working professionals with growing investment portfolios",
          "Families managing joint financial responsibilities",
          "Individuals tracking assets across multiple platforms",
          "Users seeking guidance without relying entirely on advisors"
        ]
      },

      { type: "role-split",
        heading: "My Role & Responsibilities",
        team: "Design Lead · 1 PM · Engineering Lead · 2 Engineers · 1 QA",
        left: { label: "Strategic", items: [
          "Set the foundational design principles for the product",
          "Defined the vision for how the app will scale with the future roadmap",
          "Defined a scalable design system"
        ]},
        right: { label: "Tactical", items: [
          "Hands-on design & prototyping across all flows",
          "Redesigning flows to make them more intuitive",
          "Reduced clutter & noise caused by poor design choices",
          "Restructured Figma file for smooth developer handoff"
        ]}
      },

      { type: "research",
        heading: "Research",
        sublabel: "Qualitative Research",
        desc: "A user research team was hired to conduct qualitative interviews to understand how people manage money and what prevents them from making better financial decisions.",
        img: "assets/case-studies/famli/research.png",
        insightsHeading: "Key Insights",
        insights: [
          { title: "People want clarity, not complexity", desc: "" },
          { title: "Users trust human advisors more than pure AI", desc: "" },
          { title: "Families want selective sharing of financial data", desc: "" },
          { title: "Most users want guidance, not just dashboards", desc: "" },
          { title: "AI should assist research, not make decisions", desc: "" }
        ]
      },

      { type: "features-intro",
        heading: "Key Features Identified",
        desc: "Based on the insights from Research, Product & Business team created a roadmap of features to be developed as part of the MVP to go LIVE."
      },

      { type: "feature", imgLeft: false,
        heading: "One View of Money",
        desc: "Powered by India's Account Aggregator (AA) framework — consent-based, revocable data sharing that puts users in the driver's seat.",
        bullets: [
          "Net worth (Assets & Liabilities) updated automatically with user's consent",
          "Insurance covers auto-fetched",
          "No account migration — keep all existing institutions",
          "Consent can be revoked anytime with one tap"
        ],
        img: "assets/case-studies/famli/one-view-money.png"
      },

      { type: "feature", imgLeft: true,
        heading: "Portfolio Insights",
        desc: "Clarity of performance, risk and exposure.",
        bullets: [
          "Risk signals including concentration alerts",
          "Simple action items with rebalancing checklists",
          "Fund overlap identification & diversification indicators"
        ],
        img: "assets/case-studies/famli/portfolio-insights.png"
      },

      { type: "feature", imgLeft: false,
        heading: "AI Research Buddy",
        desc: "An AI companion that helps users make sense of money decisions.",
        bullets: [
          "Plain-language financial explanations",
          "Investment comparisons and insights",
          "Goal-based financial checklists"
        ],
        img: "assets/case-studies/famli/research-buddy.png"
      },

      { type: "feature", imgLeft: true,
        heading: "Goal Based Investing",
        desc: "Set financial goals and stay on track with smart investing.",
        bullets: [
          "Track progress for major life goals",
          "Portfolio rebalancing suggestions",
          "Investment recommendations aligned to risk profile"
        ],
        img: "assets/case-studies/famli/goals.png"
      },

      { type: "outcomes",
        heading: "Outcome",
        intro: "We built a scalable design system and revamped the entire app to make it intuitive and trustworthy.",
        items: [
          { title: "Intuitive & Clear Decision Making", desc: "Beta users who used the new app found it very intuitive & were able to complete tasks much faster." },
          { title: "User Trust & Clarity", desc: "Removing noise on the app, making the design consistent and adding trust markers across key touch points significantly improved user trust." },
          { title: "User Control & Guidance", desc: "Users got a sense of control with consent-based features for linking via account aggregators & asset sharing to groups." }
        ]
      }
    ]
  },

  /* ─── OTC ───────────────────────────────────────────────── */
  otc: {
    id: "otc",
    title: "OTC Marketplace Seller Portal",
    subtitle: "Enabling Sellers to List products & Process orders on the Platform",
    platform: "Web",
    duration: "10 weeks · Nov 2022",
    role: "Design Manager",
    heroColor: "#ECFDF3",
    heroImg: "assets/case-studies/otc/otc-hero.png",
    sections: [
      { type: "text", heading: "About",
        body: "B2C OTC (Over the Counter) marketplace sellers had to rely on external aggregators like Unicommerce, EasyEcom and Vinculum to update inventory and process Pharmeasy orders — because the partner portal didn't have inventory and order processing functionalities for marketplace sellers." },

      { type: "bullets", heading: "Problem", items: [
        "OTC Business Team incurs ₹50k/month for paying to Unicommerce",
        "Sellers don't want to join Marketplace Platform as they don't want to use aggregators",
        "Inventory Updation TAT is too high currently"
      ]},

      { type: "role-para",
        heading: "My Role",
        team: "Design Manager · 1 Lead Designer · 1 PM · Engineering Lead · 2 Engineers · 1 QA",
        desc: "Led the design & strategy of the entire project. I along with one lead designer conducted 30-minute interview sessions with 6 Sellers with the help of PMs and Account Managers. We recorded conversations, created affinity maps and synthesised feedback."
      },

      { type: "feature", imgLeft: true,
        heading: "Existing Design",
        desc: "Account Manager uploads a CSV file to upload seller catalogue & creates password for Unicommerce. Sellers then used Unicommerce to list products and process orders — a fragmented, high-cost workflow.",
        img: "assets/case-studies/otc/old-design.png"
      },

      { type: "full-img", heading: "Existing Flow", img: "assets/case-studies/otc/old-flow.png" },

      { type: "full-img", heading: "Unicommerce — Old Design", img: "assets/case-studies/otc/old-unicommerce.png" },

      { type: "bullets", heading: "Current Design Challenges", items: [
        "Listing Onboarding TAT was too high",
        "Business Team's bandwidth was spread due to heavy operations",
        "Marketplace Sellers were incurring high cost"
      ]},

      { type: "full-img", heading: "Research", sublabel: "Seller Persona", img: "assets/case-studies/otc/persona.png" },

      { type: "users-list", heading: "Users", items: [
        { title: "Account Managers", desc: "Responsible for managing multiple sellers and their onboarding" },
        { title: "Seller (Owner)", desc: "Views sales, returns, and cancellations across 1 or more locations" },
        { title: "Seller Staff", desc: "Responsible for creating listings & processing orders day-to-day" }
      ]},

      { type: "bullets", heading: "Key Insights from Research", items: [
        "Sellers are listed on multiple platforms like Amazon, Flipkart",
        "Sellers use a combination of sales models (FBA, Flex, EasyShip etc.)",
        "They want seller-friendly policies",
        "Performance data to help reduce returns, track sales and cancellations",
        "They need a flexible self-serve onboarding process",
        "A sellers forum is important to resolve issues"
      ]},

      { type: "text", heading: "Solution",
        body: "Build an intuitive listing and order processing module for marketplace sellers that will help them to Add Listings & Process Orders Quickly.", muted: true },

      { type: "feature", imgLeft: false,
        heading: "My Listings",
        desc: "Sellers have the ability to view all listings created via single or bulk upload. Active, Inactive and Blocked tabs provide full visibility of listing health.",
        img: "assets/case-studies/otc/my-listing.png"
      },

      { type: "feature", imgLeft: true,
        heading: "Add Single Product",
        desc: "Sellers can now add an existing product directly from the Pharmeasy Catalogue — no CSV, no Account Manager dependency.",
        img: "assets/case-studies/otc/add-single-product.png"
      },

      { type: "feature", imgLeft: false,
        heading: "Add Bulk Listings",
        desc: "Sellers now have the ability to upload multiple products via file upload, with clear processing status tracking for every batch.",
        img: "assets/case-studies/otc/add-bulk-listing.png"
      },

      { type: "feature", imgLeft: true,
        heading: "Dashboard",
        desc: "Sellers now have performance data that helps reduce returns, track sales, and manage cancellations — all in one view.",
        img: "assets/case-studies/otc/otc-db.png"
      },

      { type: "outcome-table",
        heading: "Outcome",
        intro: "Built from 0→1 & Scaled from 10 sellers to 236 sellers with 8960 orders processed daily with an AOV (avg order value of ₹850).",
        rows: [
          { label: "", dec2022: "Dec 2022", apr2024: "Apr 2024" },
          { label: "Sellers", dec2022: "10", apr2024: "236" },
          { label: "Active Listings", dec2022: "1,978", apr2024: "25,692" },
          { label: "Orders", dec2022: "480", apr2024: "8,960" }
        ]
      },

      { type: "full-img", heading: "Testimonials", sublabel: "Sellers who use our platform found it simple & easy to use.", img: "assets/case-studies/otc/otc-testimonials.png" }
    ]
  },

  /* ─── PHLEBO ─────────────────────────────────────────────── */
  phlebo: {
    id: "phlebo",
    title: "Phlebotomist App",
    subtitle: "Improving the efficiency of sample collection & adding features to increase revenue & AOV.",
    platform: "Android App",
    duration: "Nov 2023 – Mar 2024",
    role: "Design Lead",
    heroColor: "#FEF3F2",
    heroImg: "assets/case-studies/phlebo/phlebo-hero.png",
    sections: [
      { type: "text", heading: "About",
        body: "Whenever a customer books a lab test on Pharmeasy / Thyrocare app, a Phlebotomist (a certified technician) is assigned to collect blood samples from patient and hand it over to the lab for further processing." },

      { type: "two-col",
        left: { heading: "Problem", lines: [
          "Legacy app, Confusing UX & Order Execution is poor",
          "Missing critical features like Order Edit, Add Beneficiary",
          "Sample Collection takes lot of time"
        ]},
        right: { heading: "Business Objective", lines: [
          "Modernise the UX by making it very simple & Intuitive",
          "Add features that help increase revenue & reduce support",
          "Improve order execution & slot adherence"
        ]}
      },

      { type: "role-para",
        heading: "My Role",
        team: "Lead Designer · 1 PM · Engineering Lead · 2 Engineers · 1 QA",
        desc: "I led the entire design for V1 of the app. It was cross collaboration with Product, Business & Operations team. Based on the discussions with operations team & also meeting few users, we created user journeys and information architecture."
      },

      { type: "full-img", heading: "Task Flow", img: "assets/case-studies/phlebo/task-flow.png" },

      { type: "full-img", heading: "User Flow", img: "assets/case-studies/phlebo/user-flow.png" },

      { type: "users-two-col", heading: "Users",
        left: "<strong>Phlebotomist (Phlebos)</strong>\nCertified Technicians who draw blood from customers, collect samples + cash payment and dispatch to Hub for processing reports.\n\n<strong>LME (Runner)</strong>\nCollects Vials (Blood / Urine Samples) from Phlebos & delivers to the lab.",
        right: "<strong>Hub Manager</strong>\nAccepts Vials (samples) from Last Mile Executives collected by Phlebos to send to labs for processing customer reports.\n\n<strong>Operations Team</strong>\nIn charge of training, onboarding & daily order assignment."
      },

      { type: "full-img", heading: "Research", img: "assets/case-studies/phlebo/research.png" },

      { type: "insights-grid", heading: "Key Insights from Research",
        items: [
          { title: "Onboarding", desc: "Onboarding happens <strong>offline</strong> from Operations team" },
          { title: "Order Assignment", desc: "Order assigned by <strong>8 pm previous day</strong> as they can get <strong>6 am slots.</strong>" },
          { title: "Slot Timings", desc: "Most orders come in <strong>6 am - 10 am</strong> slot due to fasting requirements." },
          { title: "App Issues", desc: "<strong>Avg. time</strong> for sample collection is <strong>14 minutes/order</strong>; vial scan is slow" },
          { title: "Cancellation / Reshedule", desc: "Cancel orders without asking customer as there is <strong>No Tracking</strong>" },
          { title: "Order Execution", desc: "<strong>Only 78% of orders are fulfilled</strong> : customer unavailability, location far." }
        ]
      },

      { type: "full-img", heading: "Existing Designs", img: "assets/case-studies/phlebo/old-design.png" },

      { type: "features-intro",
        heading: "Revised Designs",
        desc: "The current app was very basic, slow and buggy. We redesigned the entire App & added features to Improve Slot Adherence, Safety measures and Order Execution."
      },

      { type: "feature", imgLeft: true,
        heading: "Add Beneficiary, Upsell & Edit Order",
        desc: "In ~10% of the orders, Customer requests for the Order edits like changing tests & adding family members.",
        img: "assets/case-studies/phlebo/add-beneficiary.png"
      },

      { type: "feature", imgLeft: false,
        heading: "Scan & Punch Order",
        desc: "Customer escalations used to happen if vials get mixed up for multi-patient orders during sample collection.",
        img: "assets/case-studies/phlebo/scan-order.png"
      },

      { type: "feature", imgLeft: true,
        heading: "Tri-facta Calling",
        desc: "Phlebo's could cancel or reschedule without customers consent, which led to ~50 escalations a day. With this feature they will not be able to do it.",
        img: "assets/case-studies/phlebo/tri-facta-calling.png"
      },

      { type: "outcomes",
        heading: "Outcome",
        intro: "Design team created a prototype for each feature & shared with the phlebos. Feedback given was that design was very intuitive and easy to use.",
        items: [
          { title: "Efficiency Gains", desc: "Reduced average time per order from 45 to 25 minutes." },
          { title: "Revenue Growth", desc: "Increased Average Order Value (AOV) from ₹1,154 to ₹1,732, with upsells contributing ₹302 per order." },
          { title: "Improve in Order Execution & Safety", desc: "Achieved 100% safety protocol adherence and reduced cancellations and rescheduling by over 50%." }
        ]
      }
    ]
  },

  /* ─── THYRO ──────────────────────────────────────────────── */
  thyro: {
    id: "thyro",
    title: "Diagnostics – Franchise Portal",
    subtitle: "Revamped Order Tracking & Order Creation Flows to reduce support cost & improve adoption",
    platform: "Web / Mobile App",
    duration: "12 weeks · Jun 2023",
    role: "Design Manager",
    heroColor: "#EFF8FF",
    heroImg: "assets/case-studies/thyro/tc-hero.png",
    sections: [
      { type: "text", heading: "About",
        body: "Thyrocare Franchises are collection centres which collect samples from multiple sources like clinics, labs, doctors etc. and send to Thyrocare labs for report generation. Thyrocare provides test reports at affordable cost to the labs." },

      { type: "two-col",
        left: { heading: "Problem", lines: [
          "Legacy system, multiple apps doing the same thing",
          "High support cost as Order tracking is at vial level",
          "Low adoption among franchise due to slow system & poor UX"
        ]},
        right: { heading: "Objective", lines: [
          "Deprecate all apps & merge them into one app",
          "Make the Design simple & easy to use",
          "Have a seamless ordering experience",
          "Reduce inbound customer support cost"
        ]}
      },

      { type: "role-para",
        heading: "My Role",
        team: "Design Manager · 1 Lead Designer · 1 PM · Engineering Lead · 2 Engineers · 1 QA",
        desc: "This was a mammoth project as it was a 15-year-old legacy system. It was a huge cross-functional effort with PM, Business, Operations & Engineering team.\n\nI was responsible for design strategy & planning in terms of how to execute the project phase-wise. I and the lead designer collaborated with PM's & Operations team to speak to franchises & also understood pain points of users from support queries."
      },

      { type: "full-img", heading: "Task Flow", img: "assets/case-studies/thyro/task-flow.png" },

      { type: "full-img", heading: "User Flow", img: "assets/case-studies/thyro/user-flow.png" },

      { type: "full-img", heading: "Field Visit", img: "assets/case-studies/thyro/tc-field-visit.png" },

      { type: "insights-grid", heading: "Key Insights from Research",
        items: [
          { title: "Material Order", desc: "Franchise orders barcoded vials once a month from Thyrocare for tracking. These are sold to Hospitals &amp; Clinics." },
          { title: "Franchise Staff", desc: "4 People. 1 Owner &amp; 3 Staff. 2 People go for home collection, 2 stay for Direct Patients coming to visit franchise." },
          { title: "Top Competitors", desc: "GD Diagnostics, Apollo, Metropolis, Lal Pathlabs, Medall." },
          { title: "LME (Delivery Boy)", desc: "Visits avg 2-3 times in a day to collect samples. Timings: 9 am, 1.30 pm, 4 pm" },
          { title: "Order Status", desc: "Lack of visibility of Order status &amp; Report release queries as this is at a barcode level." },
          { title: "Platform &amp; No. of Vials", desc: "60% use Cliso app v/s 40% use web. Avg 15-20 vials per daily. 14 Home | 6 DPS." },
          { title: "Payment related issues", desc: "Ledger balance not updating &amp; ILS partners doing late payments affects WOE." },
          { title: "Need ways to improve business", desc: "Need website, need repeat customer lists who are due &amp; social media presence" }
        ]
      },

      { type: "text", heading: "Solution",
        body: "Build features that will reduce support tickets, improve overall user experience which will lead to increase in adoption among franchise partners.", muted: true },

      { type: "feature", imgLeft: false,
        heading: "Order List",
        desc: "There was no order list page & order tracking was at a barcode level. We made an order list page with patient data at an order level to give visibility of orders to franchises.",
        img: "assets/case-studies/thyro/order-list.png"
      },

      { type: "feature", imgLeft: true,
        heading: "Order Management",
        desc: "Showing different states of vials & different order statuses at an order. The same set of widgets are reused on mobile as well.",
        img: "assets/case-studies/thyro/order-mgt.png"
      },

      { type: "feature", imgLeft: false,
        heading: "Work Order Entry",
        desc: "~5% orders showed up at the lab with work order entry which affected report TAT. We revamped this page to make it simple & intuitive.",
        img: "assets/case-studies/thyro/woe.png"
      },

      { type: "outcomes",
        heading: "Outcome",
        intro: "",
        items: [
          { title: "Reduction in Inbound Queries", desc: "Customer escalations went down to 3.64% from 5.5% — roughly 35% reduction — with features like merge report, order status, cancelled test & partial report." },
          { title: "Efficiency Gains & Adoption", desc: "WOE time reduced to 1.5 mins from 4 mins leading to efficiency & better adoption among franchise / ILS Partners." },
          { title: "Improved NPS", desc: "Initiatives like cancel test, merge report, partial reports & order list details improved NPS to 65 from 48." }
        ]
      }
    ]
  }
};
