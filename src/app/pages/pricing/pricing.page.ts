import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SectionContainerComponent } from '../../shared/ui/section-container/section-container.component';
import { PricingCardComponent } from '../../shared/ui/pricing-card/pricing-card.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [SectionContainerComponent, PricingCardComponent],
  templateUrl: './pricing.page.html',
  styleUrl: './pricing.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingPage implements OnInit {
  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update('Pricing | CleanStacky Technologies', 'Transparent pricing tiers for system setup, support, and growth.', '/pricing');
  }
}
