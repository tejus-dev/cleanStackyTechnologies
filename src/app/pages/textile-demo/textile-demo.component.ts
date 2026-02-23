import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-textile-demo',
  standalone: true,
  imports: [CommonModule],
  template: `<iframe [src]="url" class="full-frame" scrolling="yes" title="Textile Business Demo"></iframe>`,
  styles: [`:host { display: block; } .full-frame { width: 100%; min-height: 100vh; border: none; display: block; }`],
})
export class TextileDemoComponent implements OnInit {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly seo = inject(SeoService);

  protected readonly url: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    '/demos/textile-demo.html',
  );

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Textile Business Management Software India | Live Demo | CleanStacky',
      description:
        'Manage fabric orders, stock inventory, production jobs, buyer accounts and WhatsApp updates — all in one system built for textile businesses and garment manufacturers in India.',
      keywords:
        'textile business software India, garment ERP India, fabric inventory management software, textile CRM India, garment production tracking, textile order management India, fabric stock management software, Surat textile software, textile manufacturer ERP',
      ogTitle: 'Textile Business Software India | CleanStacky Live Demo',
      ogDescription:
        'Orders, fabric stock, production tracking and buyer management for textile businesses in India.',
      ogUrl: 'https://cleanstacky.com/demo/textile',
    });
  }
}
