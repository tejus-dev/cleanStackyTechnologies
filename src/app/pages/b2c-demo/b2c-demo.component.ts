import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-b2c-demo',
  standalone: true,
  imports: [CommonModule],
  template: `<iframe [src]="url" class="full-frame" scrolling="yes" title="B2C Business Demo"></iframe>`,
  styles: [`:host { display: block; } .full-frame { width: 100%; min-height: 100vh; border: none; display: block; }`],
})
export class B2cDemoComponent implements OnInit {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly seo = inject(SeoService);

  protected readonly url: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    '/demos/b2c-demo.html',
  );

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'B2C Business Management Software India | Customer & Booking System | CleanStacky',
      description:
        'Manage walk-ins, bookings, customer database, WhatsApp campaigns and repeat customer retention — all in one system for retail and service businesses in India. Live interactive demo.',
      keywords:
        'B2C business software India, customer management software retail India, booking management software India, WhatsApp marketing software India, retail CRM India, customer retention software India, walk-in management software, service business software India',
      ogTitle: 'B2C Business Management Software India | CleanStacky',
      ogDescription:
        'Bookings, walk-ins, customer database and WhatsApp campaigns for retail and service businesses in India.',
      ogUrl: 'https://cleanstacky.com/demo/b2c',
    });
  }
}
