import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeading } from '../../../core/models/home-content.model';

@Component({
  selector: 'app-home-industries-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-industries-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeIndustriesSectionComponent {
  @Input({ required: true }) public section!: SectionHeading & { items: string[] };
}
