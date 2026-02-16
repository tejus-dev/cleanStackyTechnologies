import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCard, SectionHeading } from '../../../core/models/home-content.model';

@Component({
  selector: 'app-home-systems-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-systems-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSystemsSectionComponent {
  @Input({ required: true }) public section!: SectionHeading & { cards: FeatureCard[] };
}
