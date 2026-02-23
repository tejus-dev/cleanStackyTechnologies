import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ecommerce-admin-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ecommerce-admin-demo.component.html',
  styleUrl: './ecommerce-admin-demo.component.scss'
})
export class EcommerceAdminDemoComponent {
  url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('/demos/ecommerce-admin-dashboard.html');
  }
}
