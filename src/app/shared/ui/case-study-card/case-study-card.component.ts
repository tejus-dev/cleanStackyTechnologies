import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-case-study-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-study-card.component.html',
  styleUrl: './case-study-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudyCardComponent {
  @Input() public imageSrc?: string;
  @Input() public imageAlt?: string;
  @Input({ required: true }) public clientType!: string;
  @Input({ required: true }) public problem!: string;
  @Input({ required: true }) public solution!: string;
  @Input({ required: true }) public outcome!: string;
}
