import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessStep, SectionHeading } from '../../../core/models/home-content.model';

@Component({
  selector: 'app-home-process-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-process-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeProcessSectionComponent {
  @Input({ required: true }) public section!: SectionHeading & { steps: ProcessStep[] };
}
