import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionContainerComponent } from '../../shared/ui/section-container/section-container.component';
import { FeatureCardComponent } from '../../shared/ui/feature-card/feature-card.component';
import { CaseStudyCardComponent } from '../../shared/ui/case-study-card/case-study-card.component';
import { PricingCardComponent } from '../../shared/ui/pricing-card/pricing-card.component';
import { TestimonialCardComponent } from '../../shared/ui/testimonial-card/testimonial-card.component';
import { UiButtonComponent } from '../../shared/ui/button/ui-button.component';
import { DemoModalService } from '../../core/services/demo-modal.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SectionContainerComponent,
    FeatureCardComponent,
    CaseStudyCardComponent,
    PricingCardComponent,
    TestimonialCardComponent,
    UiButtonComponent,
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit {
  protected readonly systemCards = [
    {
      title: 'School ERP',
      description: 'Admissions, fees, attendance, receipts, and reporting in one operating console.',
      outcome: 'Outcome: faster fee operations and fewer admin bottlenecks.',
      link: '/systems/school-erp',
    },
    {
      title: 'Clinic System',
      description: 'Appointments, billing, reminders, and patient history with staff-friendly workflows.',
      outcome: 'Outcome: better patient flow and cleaner billing operations.',
      link: '/systems/clinic-system',
    },
    {
      title: 'Business CRM',
      description: 'Leads, invoices, support, and dashboards connected to your daily execution.',
      outcome: 'Outcome: improved lead conversion and response consistency.',
      link: '/systems/business-crm',
    },
    {
      title: 'Automation',
      description: 'WhatsApp workflows, alerts, and follow-ups integrated with your systems.',
      outcome: 'Outcome: reduced manual follow-up and faster customer response.',
      link: '/systems',
    },
  ];

  protected readonly industries = [
    { label: 'Schools', slug: 'schools' },
    { label: 'Clinics', slug: 'clinics' },
    { label: 'Diagnostics Centres', slug: 'diagnostics-centres' },
    { label: 'Textile Business', slug: 'textile-business' },
    { label: 'B2B Business', slug: 'b2b-business' },
    { label: 'B2C Business', slug: 'b2c-business' },
    { label: 'Any Business (Tech + Solutions)', slug: 'any-business-tech-solutions' },
  ];

  protected readonly proofMetrics = [
    {
      metric: 'Fee Reconciliation Cycle',
      before: 'Before: 2-3 days and manual follow-ups',
      after: 'After: same-day closure with automated reminders',
      impact: '40% faster cycle time',
    },
    {
      metric: 'Clinic No-show Rate',
      before: 'Before: missed appointments and ad-hoc call reminders',
      after: 'After: scheduled WhatsApp reminders and tracking',
      impact: '35% fewer no-shows',
    },
    {
      metric: 'Lead First Response',
      before: 'Before: delayed handoff across disconnected tools',
      after: 'After: CRM assignment with automated follow-up workflows',
      impact: '50% faster first response',
    },
  ];

  constructor(
    private readonly demoModal: DemoModalService,
    private readonly seo: SeoService
  ) {}

  ngOnInit(): void {
    this.seo.update(
      'Run your business on one system | CleanStacky Technologies',
      'ERP, CRM, WhatsApp automation and websites built and managed by CleanStacky Technologies for growing teams in India.',
      '/'
    );
  }

  protected openDemo(): void {
    this.demoModal.open();
  }
}
