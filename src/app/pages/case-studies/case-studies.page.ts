import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
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
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Case Studies — Delivered Results | CleanStacky Technologies',
      description:
        'Real outcomes from CleanStacky deployments: 40% faster fee cycles, 35% fewer no-shows, 50% faster lead response.',
      ogUrl: 'https://cleanstacky.com/case-studies',
    });
  }
}
