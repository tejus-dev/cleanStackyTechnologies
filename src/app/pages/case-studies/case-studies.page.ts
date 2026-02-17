import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseStudyCardComponent } from '../../shared/ui/case-study-card/case-study-card.component';
import { SectionContainerComponent } from '../../shared/ui/section-container/section-container.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-case-studies-page',
  standalone: true,
  imports: [CommonModule, CaseStudyCardComponent, SectionContainerComponent],
  templateUrl: './case-studies.page.html',
  styleUrl: './case-studies.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudiesPage implements OnInit {
  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update('Case Studies | CleanStacky Technologies', 'Selected case studies across schools, clinics and SMB operations.', '/case-studies');
  }
}
