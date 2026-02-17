import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update('About | CleanStacky Technologies', 'CleanStacky Technologies is a business systems and product engineering partner based in Bangalore.', '/about');
  }
}
