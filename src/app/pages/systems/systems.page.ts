import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCardComponent } from '../../shared/ui/feature-card/feature-card.component';
import { SectionContainerComponent } from '../../shared/ui/section-container/section-container.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-systems-page',
  standalone: true,
  imports: [CommonModule, FeatureCardComponent, SectionContainerComponent],
  templateUrl: './systems.page.html',
  styleUrl: './systems.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SystemsPage implements OnInit {
  protected readonly cards = [
    {
      title: 'School ERP',
      description: 'Admissions, fees, attendance and reporting for school operations.',
      outcome: 'Outcome: better admin control and faster daily closures.',
      link: '/systems/school-erp',
    },
    {
      title: 'Clinic System',
      description: 'Appointments, billing and reminders for efficient front desk workflows.',
      outcome: 'Outcome: reduced no-shows and cleaner billing operations.',
      link: '/systems/clinic-system',
    },
    {
      title: 'Business CRM',
      description: 'Lead stages, support and invoicing connected to business dashboards.',
      outcome: 'Outcome: improved conversion and support visibility.',
      link: '/systems/business-crm',
    },
    {
      title: 'WhatsApp Automation',
      description: 'Automated updates, reminders and escalation workflows.',
      outcome: 'Outcome: faster customer response and fewer manual follow-ups.',
      link: '/contact',
    },
  ];

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update('Systems | CleanStacky Technologies', 'Productized business systems for schools, clinics and SMB teams.', '/systems');
  }
}
