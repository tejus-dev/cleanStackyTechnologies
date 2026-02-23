import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-ecommerce-admin-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ecommerce-admin-demo.component.html',
  styleUrl: './ecommerce-admin-demo.component.scss'
})
export class EcommerceAdminDemoComponent implements OnInit {
  private readonly seo = inject(SeoService);
  url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('/demos/ecommerce-admin-dashboard.html');
  }

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'E-commerce Admin Dashboard Demo India | CleanStacky',
      description:
        'Interactive e-commerce admin dashboard demo for orders, dispatch, returns, conversion funnel, and sales operations.',
      keywords:
        'ecommerce admin dashboard India, order management dashboard, online store operations software, D2C analytics dashboard',
      ogTitle: 'E-commerce Admin Dashboard Demo | CleanStacky',
      ogDescription:
        'Operations and analytics dashboard demo for e-commerce growth teams.',
      ogUrl: 'https://cleanstacky.com/demo/ecommerce-admin',
    });
  }
}
