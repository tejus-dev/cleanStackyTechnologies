import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SectionContainerComponent } from '../../shared/ui/section-container/section-container.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-industry-page',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  templateUrl: './industry.page.html',
  styleUrl: './industry.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndustryPage implements OnInit {
  protected title = 'Industry';
  protected summary = 'Solutions adapted for your operations context.';
  protected imageSrc = '/industry-schools.svg';
  protected imageAlt = 'Industry operations visual';
  protected highlights: string[] = [];

  private readonly contentMap: Record<string, { title: string; summary: string; imageSrc: string; imageAlt: string; highlights: string[] }> = {
    schools: {
      title: 'Schools',
      summary: 'Admissions, fee operations, attendance and reporting workflows for schools.',
      imageSrc: '/industry-schools.svg',
      imageAlt: 'Schools operations dashboard preview',
      highlights: ['Admissions to fee closure workflow', 'Parent communication automation', 'Weekly finance and compliance reports'],
    },
    clinics: {
      title: 'Clinics',
      summary: 'Appointment, billing and patient communication systems for clinics.',
      imageSrc: '/industry-clinics.svg',
      imageAlt: 'Clinic operations dashboard preview',
      highlights: ['Appointment and billing integration', 'Automated no-show reminders', 'Support response visibility'],
    },
    construction: {
      title: 'Construction',
      summary: 'Lead, site operations and reporting workflows for construction teams.',
      imageSrc: '/industry-construction.svg',
      imageAlt: 'Construction operations dashboard preview',
      highlights: ['Lead qualification and bid tracking', 'Site milestone and task approvals', 'Progress reporting for leadership'],
    },
    agriculture: {
      title: 'Agriculture',
      summary: 'Catalog, ordering, inventory and supply workflows for agri businesses.',
      imageSrc: '/industry-agriculture.svg',
      imageAlt: 'Agriculture operations dashboard preview',
      highlights: ['Catalog and ordering control', 'Dispatch and stock visibility', 'Field-team workflow automation'],
    },
    services: {
      title: 'Services',
      summary: 'Sales, delivery and support operations for service-oriented teams.',
      imageSrc: '/industry-services.svg',
      imageAlt: 'Service operations dashboard preview',
      highlights: ['Lead to proposal governance', 'Invoice and fulfillment control', 'SLA-based support workflow'],
    },
  };

  constructor(
    private readonly route: ActivatedRoute,
    private readonly seo: SeoService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('industry') || 'schools';
    const data = this.contentMap[slug] || this.contentMap['schools'];
    this.title = data.title;
    this.summary = data.summary;
    this.imageSrc = data.imageSrc;
    this.imageAlt = data.imageAlt;
    this.highlights = data.highlights;

    this.seo.update(`${data.title} Industry Solutions | CleanStacky`, data.summary, `/industries/${slug}`);
  }
}
