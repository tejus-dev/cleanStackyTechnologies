import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { UiButtonComponent } from '../../shared/ui/button/ui-button.component';
import { SeoService } from '../../core/services/seo.service';

type SystemItem = {
  id: string;
  title: string;
  iconSvg: string;
  description: string;
  bestFor: string;
  outcomes: string[];
  features: string[];
  deepDiveText: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

@Component({
  selector: 'app-systems-page',
  standalone: true,
  imports: [CommonModule, RouterLink, UiButtonComponent],
  templateUrl: './systems.page.html',
  styleUrl: './systems.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SystemsPage implements OnInit {
  protected readonly systems: SystemItem[] = [
    {
      id: 'school-erp',
      title: 'School ERP',
      iconSvg:
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3L3 8l9 5 9-5-9-5Z"></path><path d="M5 10.5V15.5C5 16.6 8.1 19 12 19S19 16.6 19 15.5V10.5"></path></svg>',
      description:
        'Unified admissions, fee collection, attendance, and reporting in one operations console.',
      bestFor: 'Schools that need tighter admin control across front office and accounts.',
      outcomes: [
        'Faster daily closure for admin teams',
        'Fewer fee follow-up gaps',
        'Real-time visibility on attendance and dues',
      ],
      features: [
        'Admissions and student onboarding workflows',
        'Fee invoices, receipts, and pending dues tracking',
        'Attendance capture and class-wise reporting',
        'Parent communication logs and reminder history',
        'Role-based dashboards for admin, accounts, and management',
      ],
      deepDiveText:
        'Manual school operations usually break across spreadsheets, WhatsApp chats, and disconnected billing steps. We implement a single ERP flow so admissions, fees, attendance, and reporting stay synchronized for daily decision-making.',
    },
    {
      id: 'clinic-system',
      title: 'Clinic & Diagnostic Center System',
      iconSvg:
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 21s-7-4.7-7-11a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 6.3-7 11-7 11Z"></path><path d="M12 8v6"></path><path d="M9 11h6"></path></svg>',
      description:
        'Appointments, billing, and patient communication designed for smooth front-desk operations.',
      bestFor: 'Clinics that need cleaner patient flow and fewer missed follow-ups.',
      outcomes: [
        'Reduced no-show rates with reminders',
        'Cleaner billing at reception',
        'Quicker patient handoff from check-in to checkout',
      ],
      features: [
        'Appointment scheduling with doctor and slot control',
        'Billing with invoice and payment tracking',
        'Visit history and treatment notes access',
        'Automated reminders for appointments and follow-ups',
        'Front-desk dashboard for queue and status visibility',
      ],
      deepDiveText:
        'Clinic teams lose time when appointments, billing, and patient records are handled in separate tools. This system links those workflows end-to-end so reception and doctors can work with one clear operational timeline.',
    },
    {
      id: 'business-crm',
      title: 'Business CRM',
      iconSvg:
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 7h16v10H4z"></path><path d="M8 7v10"></path><path d="M12 11h6"></path><path d="M12 14h4"></path></svg>',
      description:
        'Lead pipeline, tasks, follow-ups, and support flows built for day-to-day sales operations.',
      bestFor: 'Growing teams that want predictable lead conversion and account visibility.',
      outcomes: [
        'Reduced manual follow-up effort',
        'Better stage-wise conversion visibility',
        'Faster response on support requests',
      ],
      features: [
        'Lead capture and stage-based pipeline management',
        'Task assignment with due-date reminders',
        'Quotation and invoice workflow tracking',
        'Customer support logging and escalation views',
        'Operational dashboards by team and owner',
      ],
      deepDiveText:
        'Most teams track leads in one tool and support in another, which weakens accountability. We connect the entire lifecycle so sales, operations, and founders can monitor progress from first inquiry to retained customer.',
    },
    {
      id: 'whatsapp-automation',
      title: 'WhatsApp Automation',
      iconSvg:
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 11.9A8 8 0 1 1 7.4 5.4 8 8 0 0 1 20 11.9Z"></path><path d="M12 8.8c.6 1.2 1.5 2.1 2.7 2.7"></path><path d="m8.5 19.3 1.2-3"></path></svg>',
      description:
        'Automated reminders, alerts, and status updates tied directly to your core workflows.',
      bestFor: 'Teams that rely on quick customer communication without manual pinging.',
      outcomes: [
        'Fewer missed reminders',
        'Faster customer update cycles',
        'Lower operational load on staff',
      ],
      features: [
        'Trigger-based reminders for dues, visits, and renewals',
        'Operational alerts for internal teams',
        'Template-driven customer notifications',
        'Status updates mapped to workflow milestones',
        'Delivery and response tracking logs',
      ],
      deepDiveText:
        'Manual message follow-ups are hard to scale and easy to miss during busy hours. We automate high-frequency communication touchpoints so your team focuses on exceptions, not repetitive message sending.',
    },
    {
      id: 'mobile-applications',
      title: 'Mobile Applications',
      iconSvg:
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="7" y="3" width="10" height="18" rx="2"></rect><path d="M10 6h4"></path><path d="M12 17h.01"></path></svg>',
      description:
        'Customer and employee apps for supermarkets to run ordering, tasks, and store operations.',
      bestFor: 'Retail businesses that need mobile execution at store and customer level.',
      outcomes: [
        'Faster store task completion',
        'Better order and stock coordination',
        'Real-time branch-level operational visibility',
      ],
      features: [
        'Customer app for browsing, ordering, and delivery status',
        'Employee app for picking, packing, and dispatch workflows',
        'Store-level task checklists and accountability',
        'Order and stock synchronization with admin panel',
        'Live status views for supervisors and owners',
      ],
      deepDiveText:
        'Retail operations break when customer ordering and employee execution are disconnected. We build paired mobile apps that keep storefront demand, in-store activity, and management reporting tightly aligned.',
    },
    {
      id: 'ecommerce-websites',
      title: 'E-commerce Websites',
      iconSvg:
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="9" cy="19" r="1.5"></circle><circle cx="17" cy="19" r="1.5"></circle><path d="M3 5h2l2.4 10h10.8L21 8H7"></path></svg>',
      description:
        'Conversion-focused storefronts connected to catalog, checkout, and operations reporting.',
      bestFor: 'Brands that need reliable online sales flow with operational tracking.',
      outcomes: [
        'Improved checkout completion',
        'Cleaner order management',
        'Faster response to abandoned or delayed orders',
      ],
      features: [
        'Catalog and category management',
        'Checkout flow with payment integration readiness',
        'Order tracking with status transitions',
        'Promotions and campaign landing pages',
        'Dashboard visibility for daily sales operations',
      ],
      deepDiveText:
        'Many e-commerce sites look good but fail on operational consistency after checkout. We build storefronts with backend-ready process discipline so order flow, payment status, and team actions remain clear every day.',
    },
  ];

  protected readonly deliverySteps = [
    {
      title: 'Discover',
      detail: 'Map workflows, edge cases, and current data quality before we build.',
    },
    {
      title: 'Build',
      detail: 'Ship an MVP quickly so your team starts using the system early.',
    },
    {
      title: 'Automate',
      detail: 'Add WhatsApp reminders, alerts, and follow-up triggers where needed.',
    },
    {
      title: 'Improve',
      detail: 'Track metrics and iterate based on daily operational feedback.',
    },
  ];

  protected readonly faqs: FaqItem[] = [
    {
      question: 'Do you build custom systems or only productized modules?',
      answer:
        'We start with productized modules to move fast, then adapt workflows and reports for your operating model. You get speed without forcing teams into rigid templates.',
    },
    {
      question: 'Can your systems integrate with billing and payment tools?',
      answer:
        'Yes. We support practical integration approaches for billing and payment flows, based on your current stack and operational requirements.',
    },
    {
      question: 'Do you support WhatsApp automation as part of implementation?',
      answer:
        'Yes. We implement reminder and alert journeys tied to real events such as due dates, appointment schedules, and follow-up milestones.',
    },
    {
      question: 'What is the typical implementation timeline?',
      answer:
        'Most MVP implementations start in a few weeks depending on scope, data readiness, and the number of modules you want in phase one.',
    },
    {
      question: 'Can you deliver both mobile and web systems together?',
      answer:
        'Yes. We design web admin panels and mobile apps as one connected workflow so reporting and operations stay in sync.',
    },
    {
      question: 'Which industries do you currently support?',
      answer:
        'Core focus includes schools, clinics, and retail businesses, plus custom business operations where ERP, CRM, and workflow visibility are priorities.',
    },
  ];

  protected readonly mailToLink = 'mailto:info@cleanstacky.com?subject=Systems%20Consultation';

  private readonly openFaqIndexes = new Set<number>();

  constructor(
    private readonly seo: SeoService,
    private readonly sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.seo.updateAdvanced(
      'Systems | CleanStacky Technologies',
      'School ERP, clinic system, CRM, WhatsApp automation, supermarket mobile applications, e-commerce websites, and custom business solutions for operational control.',
      { path: '/systems' },
    );

    this.seo.setJsonLd(
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: this.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      'jsonld-systems-faq',
    );
  }

  protected toggleFaq(index: number): void {
    if (this.openFaqIndexes.has(index)) {
      this.openFaqIndexes.delete(index);
      return;
    }

    this.openFaqIndexes.add(index);
  }

  protected isFaqOpen(index: number): boolean {
    return this.openFaqIndexes.has(index);
  }

  protected trackBySystemId(_: number, system: SystemItem): string {
    return system.id;
  }

  protected trackByIndex(index: number): number {
    return index;
  }

  protected safeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
