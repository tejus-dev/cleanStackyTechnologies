import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { SectionContainerComponent } from '../../../shared/ui/section-container/section-container.component';

@Component({
  selector: 'app-business-crm-page',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  template: `
    <app-section-container
      headingLevel="h1"
      title="Business CRM"
      subtitle="Lead, invoice, support, and dashboard workflows for growing teams."
    >
      <div class="system-layout">
        <figure class="system-visual">
          <img
            src="/system-crm-workflow.svg"
            alt="Business CRM workflow from lead intake to support"
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
  styleUrl: './business-crm.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessCrmPage implements OnInit {
  protected readonly modules = [
    'Lead capture, ownership, and stage-based pipeline tracking',
    'Quotation, invoice, and collection visibility',
    'Support ticket routing with SLA tracking',
    'Operational dashboards for leadership and team execution',
  ];

  protected readonly audiences = [
    'Service businesses with distributed sales teams',
    'Operations heads managing handoffs across teams',
    'Founders requiring clean revenue and support visibility',
  ];

  protected readonly timeline = [
    'Week 1: Sales and support process audit',
    'Weeks 2-3: CRM stages, invoice flow, and SLA setup',
    'Week 4: Team onboarding and acceptance testing',
    'Week 5+: Production rollout with optimization sprints',
  ];

  constructor(
    private readonly meta: Meta,
    private readonly title: Title
  ) {}

  ngOnInit(): void {
    const pageTitle = 'Business CRM | CleanStacky Technologies';
    const pageDescription = 'Business CRM platform for lead-to-support workflows.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: pageDescription });
    this.meta.updateTag({ property: 'og:title', content: 'CleanStacky Technologies' });
    this.meta.updateTag({ property: 'og:image', content: 'https://cleanstacky.com/og-image.jpg' });
  }
}
