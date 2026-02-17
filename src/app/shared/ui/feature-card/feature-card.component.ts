import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from '../button/ui-button.component';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule, UiButtonComponent],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCardComponent {
  @Input({ required: true }) public title!: string;
  @Input({ required: true }) public description!: string;
  @Input({ required: true }) public outcome!: string;
  @Input() public detailsLink = '/systems';
}
