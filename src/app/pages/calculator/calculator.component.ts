import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent implements OnInit {
  private readonly seo = inject(SeoService);
  url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('/demos/no-show-calculator.html');
  }

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'No-Show Cost Calculator for Diagnostic Centres | Free Tool | CleanStacky',
      description:
        'Calculate exactly how much revenue your diagnostic centre loses to no-shows and missed appointments every year. Free calculator — enter your numbers, get your result in 30 seconds.',
      keywords:
        'no show cost calculator diagnostic centre, appointment no-show revenue loss, diagnostic centre revenue calculator, pathology lab no-show calculator, missed appointment cost India, reduce no-shows diagnostic centre',
      ogTitle: 'No-Show Cost Calculator for Diagnostic Centres | CleanStacky',
      ogDescription:
        'See exactly how much revenue you lose to no-shows every year. Free 30-second calculator.',
      ogUrl: 'https://cleanstacky.com/calculator',
    });
  }
}
