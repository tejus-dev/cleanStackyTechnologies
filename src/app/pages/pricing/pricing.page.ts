import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SectionContainerComponent } from '../../shared/ui/section-container/section-container.component';
import { PricingCardComponent } from '../../shared/ui/pricing-card/pricing-card.component';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [SectionContainerComponent, PricingCardComponent],
  templateUrl: './pricing.page.html',
  styleUrl: './pricing.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingPage implements OnInit {
  constructor(
    private readonly meta: Meta,
    private readonly title: Title
  ) {}

  ngOnInit(): void {
    const pageTitle = 'Pricing | CleanStacky Technologies';
    const pageDescription = 'Transparent pricing tiers for system setup, support, and growth.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: pageDescription });
    this.meta.updateTag({ property: 'og:title', content: 'CleanStacky Technologies' });
    this.meta.updateTag({ property: 'og:image', content: 'https://cleanstacky.com/og-image.jpg' });
  }
}
