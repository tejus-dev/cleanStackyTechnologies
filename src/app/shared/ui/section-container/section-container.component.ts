import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-container.component.html',
  styleUrl: './section-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionContainerComponent {
  @Input() public id?: string;
  @Input() public title?: string;
  @Input() public subtitle?: string;
  @Input() public headingLevel: 'h1' | 'h2' = 'h2';
}
