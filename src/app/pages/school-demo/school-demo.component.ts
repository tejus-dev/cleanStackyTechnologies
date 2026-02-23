import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-school-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './school-demo.component.html',
  styleUrl: './school-demo.component.scss'
})
export class SchoolDemoComponent {
  url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('/demos/school-erp-demo.html');
  }
}
