import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-trusted-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-trusted-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTrustedSectionComponent {
  @Input({ required: true }) public label!: string;
  @Input({ required: true }) public items!: string[];
}
