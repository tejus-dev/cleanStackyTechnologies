import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent implements OnInit {
  private readonly seo = inject(SeoService);
  url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('/demos/cleanstacky-demo-light.html');
  }

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Diagnostic Centre CRM Software India | Live Demo | CleanStacky',
      description:
        'See how diagnostic centres and pathology labs manage appointments, home collections, no-shows, reports, and payments — all in one system. Live interactive demo. No signup needed.',
      keywords:
        'diagnostic centre CRM India, pathology lab software India, diagnostic centre management software, home collection management system, pathology software Bangalore, lab appointment software India, diagnostic centre ERP',
      ogTitle: 'Diagnostic Centre CRM Software India | CleanStacky Live Demo',
      ogDescription:
        'Manage appointments, home collections, no-shows and payments in one system. See the live demo.',
      ogUrl: 'https://cleanstacky.com/demo',
    });
  }
}
