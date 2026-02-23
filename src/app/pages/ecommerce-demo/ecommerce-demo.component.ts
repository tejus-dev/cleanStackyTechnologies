import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-ecommerce-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ecommerce-demo.component.html',
  styleUrl: './ecommerce-demo.component.scss'
})
export class EcommerceDemoComponent implements OnInit {
  private readonly seo = inject(SeoService);
  url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('/demos/ecommerce-snitch-style.html');
  }

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'E-commerce Storefront Demo India | CleanStacky',
      description:
        'Modern e-commerce storefront demo with conversion-focused product discovery, cart flow, and checkout-ready UX.',
      keywords:
        'e-commerce demo India, retail storefront demo, online store software India, D2C storefront UI, conversion-focused ecommerce',
      ogTitle: 'E-commerce Storefront Demo | CleanStacky',
      ogDescription:
        'Conversion-first storefront experience for Indian retail and D2C businesses.',
      ogUrl: 'https://cleanstacky.com/demo/ecommerce',
    });
  }
}
