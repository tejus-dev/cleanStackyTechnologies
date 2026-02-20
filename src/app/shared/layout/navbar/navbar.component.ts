import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UiButtonComponent } from '../../ui/button/ui-button.component';
import { DemoModalService } from '../../../core/services/demo-modal.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, UiButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  protected menuOpen = false;

  protected readonly navLinks = [
    { label: 'Systems', href: '/systems' },
    { label: 'Industries', href: '/industries' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  constructor(private readonly demoModal: DemoModalService) {}

  protected openDemo(): void {
    this.demoModal.open();
    this.closeMenu();
  }

  protected toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  protected closeMenu(): void {
    this.menuOpen = false;
  }
}
