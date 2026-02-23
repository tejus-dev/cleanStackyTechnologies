import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-school-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './school-demo.component.html',
  styleUrl: './school-demo.component.scss'
})
export class SchoolDemoComponent implements OnInit {
  private readonly seo = inject(SeoService);
  url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('/demos/school-erp-demo.html');
  }

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'School ERP Software India | Live Demo | CleanStacky',
      description:
        'See how schools manage fee collection, student records, attendance, staff payroll, and parent communication — all from one system. Live interactive demo for school administrators.',
      keywords:
        'school ERP software India, school management system India, school fee management software, student information system India, school software Bangalore, school administration software, parent communication app school India, school CRM India',
      ogTitle: 'School ERP Software India | CleanStacky Live Demo',
      ogDescription:
        'Fee collection, attendance, student records and parent communication in one school management system.',
      ogUrl: 'https://cleanstacky.com/demo/school',
    });
  }
}
