import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { SectionContainerComponent } from '../../shared/ui/section-container/section-container.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [SectionContainerComponent],
  templateUrl: './about.page.html',
  styleUrl: './about.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'About CleanStacky Technologies | Business Systems & Product Engineering',
      description:
        'CleanStacky Technologies is a Bangalore-based business systems company building ERP, CRM, and automation for schools, clinics, and SMBs in India.',
      keywords:
        'about CleanStacky Technologies, Bangalore software company, ERP CRM automation company India',
      ogUrl: 'https://cleanstacky.com/about',
    });
  }
}
