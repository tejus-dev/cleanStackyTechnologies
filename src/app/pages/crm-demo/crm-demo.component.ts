import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-crm-demo',
  standalone: true,
  imports: [CommonModule],
  template: `<iframe [src]="url" class="full-frame" scrolling="yes" title="Generic CRM Demo"></iframe>`,
  styles: [`:host { display: block; } .full-frame { width: 100%; min-height: 100vh; border: none; display: block; }`],
})
export class CrmDemoComponent implements OnInit {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly seo = inject(SeoService);

  protected readonly url: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    '/demos/generic-crm-demo.html',
  );

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'CRM Software for Small Business India | WhatsApp Automation | CleanStacky',
      description:
        'A complete CRM with lead management, follow-up reminders, support tickets, and WhatsApp automation — built for any Indian small business. See the live demo, no signup required.',
      keywords:
        'CRM software small business India, WhatsApp CRM India, lead management software India, sales CRM India, business CRM Bangalore, customer management software India, CRM with WhatsApp integration, affordable CRM India',
      ogTitle: 'CRM Software for Indian Small Business | CleanStacky',
      ogDescription:
        'Lead tracking, follow-ups, support tickets and WhatsApp automation in one CRM for Indian SMBs.',
      ogUrl: 'https://cleanstacky.com/demo/crm',
    });
  }
}
