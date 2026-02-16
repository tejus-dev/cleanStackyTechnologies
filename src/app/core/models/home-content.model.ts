export interface CtaLink {
  label: string;
  href: string;
}

export interface NavItem extends CtaLink {}

export interface SiteBrand {
  name: string;
  tagline: string;
  logoSrc: string;
  logoAlt: string;
}

export interface HeroMetric {
  value: string;
  label: string;
}

export interface HeroPanel {
  kicker: string;
  title: string;
  description: string;
  metrics: HeroMetric[];
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  qualifier: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  badges: string[];
  proofStats: HeroMetric[];
  panel: HeroPanel;
}

export interface SectionHeading {
  title: string;
  description: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  tag?: string;
}

export interface OutcomeCard {
  value: string;
  label: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  label: string;
  title: string;
  description: string;
  metrics: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface ContactContent {
  title: string;
  description: string;
  responseSla: string;
  email: CtaLink;
  whatsapp: CtaLink;
  formFields: Array<{ id: string; label: string; placeholder: string; type?: 'text' | 'email' | 'textarea' }>;
}

export interface HomeContent {
  brand: SiteBrand;
  navItems: NavItem[];
  navCta: CtaLink;
  hero: HeroContent;
  trustedLabel: string;
  trustedLogos: string[];
  endToEnd: SectionHeading & { cards: FeatureCard[] };
  systems: SectionHeading & { cards: FeatureCard[] };
  capabilities: SectionHeading & { cards: FeatureCard[]; link: CtaLink };
  outcomes: SectionHeading & { cards: OutcomeCard[]; link: CtaLink };
  industries: SectionHeading & { items: string[] };
  process: SectionHeading & { steps: ProcessStep[] };
  work: SectionHeading & { studies: CaseStudy[] };
  testimonials: SectionHeading & { items: Testimonial[] };
  contact: ContactContent;
  footer: {
    description: string;
    links: NavItem[];
    copyright: string;
  };
}
