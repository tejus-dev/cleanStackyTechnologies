import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaLink, FeatureCard, SectionHeading } from '../../../core/models/home-content.model';

@Component({
  selector: 'app-home-capabilities-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-capabilities-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCapabilitiesSectionComponent {
  @Input({ required: true }) public section!: SectionHeading & { cards: FeatureCard[]; link: CtaLink };
}
