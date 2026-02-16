import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaLink, OutcomeCard, SectionHeading } from '../../../core/models/home-content.model';

@Component({
  selector: 'app-home-outcomes-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-outcomes-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeOutcomesSectionComponent {
  @Input({ required: true }) public section!: SectionHeading & { cards: OutcomeCard[]; link: CtaLink };
}
