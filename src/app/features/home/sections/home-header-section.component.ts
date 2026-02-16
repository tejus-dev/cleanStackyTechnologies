import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaLink, NavItem, SiteBrand } from '../../../core/models/home-content.model';

@Component({
  selector: 'app-home-header-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-header-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeaderSectionComponent {
  @Input({ required: true }) public brand!: SiteBrand;
  @Input({ required: true }) public navItems!: NavItem[];
  @Input({ required: true }) public cta!: CtaLink;
}
