import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseStudy, SectionHeading } from '../../../core/models/home-content.model';

@Component({
  selector: 'app-home-work-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-work-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeWorkSectionComponent {
  @Input({ required: true }) public section!: SectionHeading & { studies: CaseStudy[] };
}
