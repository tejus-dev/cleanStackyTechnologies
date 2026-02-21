import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SectionContainerComponent } from '../../shared/ui/section-container/section-container.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [SectionContainerComponent],
  templateUrl: './about.page.html',
  styleUrl: './about.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage implements OnInit {
  constructor(
    private readonly meta: Meta,
    private readonly title: Title
  ) {}

  ngOnInit(): void {
    const pageTitle = 'About | CleanStacky Technologies';
    const pageDescription =
      'CleanStacky Technologies is a business systems and product engineering partner based in Bangalore.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: pageDescription });
    this.meta.updateTag({ property: 'og:title', content: 'CleanStacky Technologies' });
    this.meta.updateTag({ property: 'og:image', content: 'https://cleanstacky.com/og-image.jpg' });
  }
}
