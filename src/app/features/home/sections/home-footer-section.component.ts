import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItem, SiteBrand } from '../../../core/models/home-content.model';

@Component({
  selector: 'app-home-footer-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-footer-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFooterSectionComponent {
  @Input({ required: true }) public brand!: SiteBrand;
  @Input({ required: true }) public footer!: { description: string; links: NavItem[]; copyright: string };
}
