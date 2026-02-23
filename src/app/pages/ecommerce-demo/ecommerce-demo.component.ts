import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ecommerce-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ecommerce-demo.component.html',
  styleUrl: './ecommerce-demo.component.scss'
})
export class EcommerceDemoComponent {
  url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('/demos/ecommerce-snitch-style.html');
  }
}
