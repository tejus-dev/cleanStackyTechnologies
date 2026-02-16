import { HomeContent } from '../../../core/models/home-content.model';

export const HOME_CONTENT: HomeContent = {
  brand: {
    name: 'CleanStacky Technologies',
    tagline: 'Business Systems & Product Engineering',
    logoSrc: 'CST_LOGO.png',
    logoAlt: 'CleanStacky Technologies',
  },
  navItems: [
    { label: 'Systems', href: '#solutions' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Outcomes', href: '#outcomes' },
    { label: 'Industries', href: '#industries' },
    { label: 'Process', href: '#process' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
  navCta: { label: 'Book a system call', href: '#contact' },
  hero: {
    eyebrow: 'End-to-end operational systems',
    title: 'End-to-end systems that convert leads, run operations, and scale support.',
    description:
      'CleanStacky designs and ships websites, mobile apps, CRM, HRM, ERP workflows, dashboards, and WhatsApp bot automation that keep your business moving from inquiry to post-sales support.',
    qualifier: 'Best fit for operations-heavy teams with 10+ staff and active customer workflows.',
    primaryCta: { label: 'Book a system call', href: '#contact' },
    secondaryCta: { label: 'See delivery proof', href: '#work' },
    badges: ['Lead-to-support coverage', 'Stable releases', 'Weekly delivery cadence'],
    proofStats: [
      { value: '25+', label: 'Projects delivered across operations teams' },
      { value: '2-6 weeks', label: 'Typical module release window' },
      { value: '24 hours', label: 'Support response SLA' },
    ],
    panel: {
      kicker: 'What you get',
      title: 'Aligned teams, visible progress, measurable outcomes.',
      description: 'Delivery is phased and transparent so leadership has control and teams adopt faster.',
      metrics: [
        { value: 'Weekly', label: 'Demo + delivery updates' },
        { value: 'Tracked', label: 'Scope, risks, and decisions' },
        { value: 'Reliable', label: 'QA gates to stable releases' },
      ],
    },
  },
  trustedLabel: 'Teams we have supported across multiple delivery engagements',
  trustedLogos: ['NatureFreshFarm', 'Yes Farms', 'Astra Build International', 'CF Andrews English High School'],
  endToEnd: {
    title: 'What We Do End-to-End',
    description: 'One connected operating model from lead conversion to customer support automation.',
    cards: [
      {
        title: 'Lead conversion',
        description: 'Websites, landing flows, and CRM intake that qualify leads and capture the right data.',
      },
      {
        title: 'Operations & fulfillment',
        description: 'ERP/HRM/workflow modules, dashboards, and approvals to keep delivery predictable.',
      },
      {
        title: 'Customer support automation',
        description: 'WhatsApp bots, notifications, and integrations that reduce follow-ups and improve response time.',
      },
      {
        title: 'Reporting & visibility',
        description: 'Live dashboards and reporting so leaders see status, risks, and outcomes in real time.',
      },
    ],
  },
  systems: {
    title: 'Systems We Build',
    description: 'Structured systems that reduce manual effort and improve execution quality.',
    cards: [
      {
        title: 'E-Commerce & Payments',
        description: 'Catalogs, carts, checkout, and payment flows built for speed and conversion.',
        tag: 'Revenue enablement',
      },
      {
        title: 'Mobile Apps',
        description: 'Customer and staff apps that keep field teams, customers, and managers aligned.',
        tag: 'Mobile delivery',
      },
      {
        title: 'CRM & Lead Pipelines',
        description: 'Lead capture, stages, reminders, and handoffs that close gaps in follow-up.',
        tag: 'Sales execution',
      },
      {
        title: 'HRM & People Ops',
        description: 'Staff records, attendance, approvals, and workflow visibility for operations teams.',
        tag: 'People operations',
      },
      {
        title: 'ERP & Workflow Modules',
        description: 'Fees, receipts, inventory, orders, and approvals tailored to your business process.',
        tag: 'Operational control',
      },
      {
        title: 'Dashboards & Admin Consoles',
        description: 'Executive dashboards and admin tools that replace spreadsheets and manual tracking.',
        tag: 'Visibility',
      },
      {
        title: 'Automation & Integrations',
        description: 'WhatsApp/email automation, payment sync, and data integrations that reduce manual work.',
        tag: 'Automation',
      },
      {
        title: 'Modernization & Stability',
        description: 'Upgrade legacy systems, improve performance, and ship reliable, maintainable releases.',
        tag: 'Modernization',
      },
    ],
  },
  capabilities: {
    title: 'Capabilities',
    description: 'Execution discipline from discovery to stabilization, with business impact in every phase.',
    link: { label: 'Request a system plan', href: '#contact' },
    cards: [
      {
        title: 'Discovery & Workflow Design',
        description: 'We map roles, approvals, and edge cases so the system matches how your business runs.',
      },
      {
        title: 'Product & Platform Delivery',
        description: 'Web, mobile, and back office systems delivered with clear milestones and demos.',
      },
      {
        title: 'Automation + QA',
        description: 'WhatsApp workflows and quality checks that keep releases stable and predictable.',
      },
      {
        title: 'Reliability & Support',
        description: 'Performance monitoring, fixes, and iterative improvements to keep operations running.',
      },
    ],
  },
  outcomes: {
    title: 'Outcomes You Can Measure',
    description: 'Operational improvements that show up in speed, accuracy, and customer response.',
    link: { label: 'Talk through your workflow', href: '#contact' },
    cards: [
      { value: 'Reduced', label: 'Manual work and follow-ups' },
      { value: 'Clearer', label: 'Visibility across teams and leadership' },
      { value: 'Faster', label: 'Execution and decision-making' },
      { value: 'Improved', label: 'Customer support response time' },
    ],
  },
  industries: {
    title: 'Industries We Support',
    description: 'Operations-heavy teams that need reliable systems instead of manual tracking.',
    items: [
      'Schools & Education Operations',
      'Construction & Real Estate Delivery',
      'Agriculture & Farms',
      'Food & Supply Chain',
      'Retail & Distribution',
      'Service Businesses',
    ],
  },
  process: {
    title: 'How We Deliver',
    description: 'A four-step delivery model built for predictability, speed, and adoption.',
    steps: [
      {
        step: '01',
        title: 'Discovery',
        description: 'We learn your workflow, roles, and current bottlenecks before proposing solutions.',
      },
      {
        step: '02',
        title: 'Plan',
        description: 'We define modules, milestones, and responsibilities so delivery stays predictable.',
      },
      {
        step: '03',
        title: 'Build & Validate',
        description: 'We ship in weekly cycles with demos, QA checks, and feedback loops.',
      },
      {
        step: '04',
        title: 'Stabilize & Improve',
        description: 'We support adoption, fix issues quickly, and improve with real usage data.',
      },
    ],
  },
  work: {
    title: 'Selected Work Delivered',
    description:
      'Representative public examples. Additional projects are delivered under client confidentiality and are discussed during discovery calls.',
    studies: [
      {
        label: 'Education',
        title: 'Fees, Receipts & Daily Closure System',
        description:
          'Replaced spreadsheet-based fee operations with receipting, role-based approvals, and daily closure controls.',
        metrics: ['~40% less manual reconciliation', 'Daily closure reports under 10 minutes'],
      },
      {
        label: 'Construction',
        title: 'Lead Capture & Business Website',
        description:
          'Built a conversion-focused website with structured lead stages and response workflow for sales follow-up.',
        metrics: ['Higher qualified inquiry rate', 'First-response process standardized in one flow'],
      },
      {
        label: 'Agri / Retail',
        title: 'Catalog + Ordering Workflow',
        description:
          'Delivered catalog publishing and order tracking with WhatsApp status notifications for customers and teams.',
        metrics: ['Fewer order status calls', 'Improved dispatch visibility for staff'],
      },
    ],
  },
  testimonials: {
    title: 'Client Feedback',
    description: 'Specific feedback from selected public references. More references are available during calls.',
    items: [
      {
        quote: '"Weekly demos and clear milestones gave us confidence. We always knew what was shipping next."',
        author: 'NatureFreshFarm, Founder',
      },
      {
        quote: '"The new lead and operations flow removed multiple manual handoffs and improved our response speed."',
        author: 'Astra Build International, Business Owner',
      },
      {
        quote: '"The workflow matched our day-to-day operations, so staff adoption was smooth from week one."',
        author: 'School Operations, Admin Team',
      },
    ],
  },
  contact: {
    title: 'Tell Us What\'s Breaking in Your Operations',
    description: 'Share your context and goals. We will return a practical system plan for your next delivery phase.',
    responseSla: 'We reply within 24 hours.',
    email: { label: 'info@cleanstacky.com', href: 'mailto:info@cleanstacky.com' },
    whatsapp: { label: 'WhatsApp: +91 6362569793', href: 'https://wa.me/916362569793' },
    formFields: [
      { id: 'industry', label: 'Industry', placeholder: 'Education, Construction, Retail, Agriculture, etc.' },
      { id: 'teamSize', label: 'Team Size', placeholder: 'Example: 25 staff across operations and support' },
      { id: 'currentTools', label: 'Current Tools', placeholder: 'Excel, WhatsApp, legacy ERP, CRM, etc.' },
      { id: 'targetOutcome', label: 'Target Outcome', placeholder: 'What should improve in 90 days?', type: 'textarea' },
    ],
  },
  footer: {
    description: 'Business systems and product engineering for teams that demand clarity, performance, and growth.',
    links: [
      { label: 'Systems', href: '#solutions' },
      { label: 'Capabilities', href: '#capabilities' },
      { label: 'Outcomes', href: '#outcomes' },
      { label: 'Contact', href: '#contact' },
    ],
    copyright: '© 2026 CleanStacky Technologies. All rights reserved.',
  },
};
