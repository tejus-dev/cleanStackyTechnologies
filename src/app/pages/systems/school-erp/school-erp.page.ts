import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { SectionContainerComponent } from '../../../shared/ui/section-container/section-container.component';

@Component({
  selector: 'app-school-erp-page',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  template: `
    <app-section-container
      headingLevel="h1"
      title="School ERP"
      subtitle="Admissions, fees, attendance, receipts and reports in one integrated workflow."
    >
      <div class="system-layout">
        <figure class="system-visual">
          <img
            src="/system-school-workflow.svg"
            alt="School ERP workflow from admission to reporting"
            width="1200"
            height="520"
            loading="eager"
            decoding="async"
          />
        </figure>

        <article class="system-panel">
          <h2>Modules</h2>
          <ul class="detail-list">
            <li *ngFor="let item of modules">{{ item }}</li>
          </ul>
        </article>

        <article class="system-panel">
          <h2>Who It Is For</h2>
          <ul class="detail-list">
            <li *ngFor="let item of audiences">{{ item }}</li>
          </ul>
        </article>

        <article class="system-panel">
          <h2>Implementation Timeline</h2>
          <ol class="timeline-list">
            <li *ngFor="let item of timeline">{{ item }}</li>
          </ol>
        </article>
      </div>
    </app-section-container>
  `,
  styleUrl: './school-erp.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolErpPage implements OnInit {
  protected readonly modules = [
    'Admission tracking, seat allocation, and application review',
    'Fee plans, invoices, receipts, and overdue follow-up',
    'Attendance, transport, and role-based staff operations',
    'Finance, closure, and management reporting dashboards',
  ];

  protected readonly audiences = [
    'School groups with multi-grade fee operations',
    'Principals and administrators managing daily closures',
    'Accounts teams requiring reliable reconciliation',
  ];

  protected readonly timeline = [
    'Week 1: Process discovery and data mapping',
    'Weeks 2-3: Module setup and workflow configuration',
    'Week 4: Data migration, role training, and pilot run',
    'Week 5+: Go-live support and continuous improvements',
  ];

  constructor(
    private readonly meta: Meta,
    private readonly title: Title
  ) {}

  ngOnInit(): void {
    const pageTitle = 'School ERP | CleanStacky Technologies';
    const pageDescription = 'Admissions, fee and operations platform for schools.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: pageDescription });
    this.meta.updateTag({ property: 'og:title', content: 'CleanStacky Technologies' });
    this.meta.updateTag({ property: 'og:image', content: 'https://cleanstacky.com/og-image.jpg' });
  }
}
