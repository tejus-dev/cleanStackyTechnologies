import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
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
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Pricing — ERP & CRM Systems India | CleanStacky Technologies',
      description:
        'Transparent pricing for CleanStacky business systems. Starter from ₹30k setup, ₹5k/month. Growth and Enterprise plans available.',
      ogUrl: 'https://cleanstacky.com/pricing',
    });
  }
}
