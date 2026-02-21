import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { SectionContainerComponent } from '../../../shared/ui/section-container/section-container.component';

@Component({
  selector: 'app-clinic-system-page',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  template: `
    <app-section-container
      headingLevel="h1"
      title="Clinic System"
      subtitle="Appointments, billing, reminders, and patient history in one clinic dashboard."
    >
      <div class="system-layout">
        <figure class="system-visual">
          <img
            src="/system-clinic-workflow.svg"
            alt="Clinic operations workflow from booking to follow-ups"
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
  styleUrl: './clinic-system.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClinicSystemPage implements OnInit {
  protected readonly modules = [
    'Appointment calendar, doctor assignment, and queue control',
    'Billing, receipts, and payment reconciliation',
    'Patient visit history and staff notes',
    'WhatsApp reminders and follow-up communication automation',
  ];

  protected readonly audiences = [
    'Single-location and multi-doctor clinics',
    'Front-desk teams handling scheduling and billing',
    'Owners requiring daily operations visibility',
  ];

  protected readonly timeline = [
    'Week 1: Intake workflow mapping and form setup',
    'Weeks 2-3: Appointment, billing, and records configuration',
    'Week 4: Team onboarding, dry runs, and process validation',
    'Week 5+: Go-live and no-show optimization cycles',
  ];

  constructor(
    private readonly meta: Meta,
    private readonly title: Title
  ) {}

  ngOnInit(): void {
    const pageTitle = 'Clinic System | CleanStacky Technologies';
    const pageDescription = 'Clinic operations software for appointments, billing and reminders.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: pageDescription });
    this.meta.updateTag({ property: 'og:title', content: 'CleanStacky Technologies' });
    this.meta.updateTag({ property: 'og:image', content: 'https://cleanstacky.com/og-image.jpg' });
  }
}
