import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCard, SectionHeading } from '../../../core/models/home-content.model';

@Component({
  selector: 'app-home-end-to-end-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-end-to-end-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeEndToEndSectionComponent {
  @Input({ required: true }) public section!: SectionHeading & { cards: FeatureCard[] };
}
