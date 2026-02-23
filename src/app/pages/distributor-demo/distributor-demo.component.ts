import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-distributor-demo',
  standalone: true,
  imports: [CommonModule],
  template: `<iframe [src]="url" class="full-frame" scrolling="yes" title="Distributor CRM Demo"></iframe>`,
  styles: [`:host { display: block; } .full-frame { width: 100%; min-height: 100vh; border: none; display: block; }`],
})
export class DistributorDemoComponent implements OnInit {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly seo = inject(SeoService);

  protected readonly url: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    '/demos/smb-crm-demo.html',
  );

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Distributor CRM Software India | B2B Sales Management | CleanStacky',
      description:
        'Manage your B2B distribution business — track orders, dispatch, outstanding invoices, dealer pipeline, and sales team performance in one system. Live demo for wholesale distributors across India.',
      keywords:
        'distributor CRM India, wholesale management software India, B2B distributor software, dealer management system India, distribution ERP India, order management software distributor, sales tracking software distributor India, FMCG distributor software',
      ogTitle: 'Distributor CRM Software India | CleanStacky Live Demo',
      ogDescription:
        'Track orders, dispatch, invoices and dealer pipeline in one system built for Indian distributors.',
      ogUrl: 'https://cleanstacky.com/demo/distributor',
    });
  }
}
