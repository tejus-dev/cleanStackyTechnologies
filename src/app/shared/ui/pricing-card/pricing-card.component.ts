import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingCardComponent {
  @Input({ required: true }) public name!: string;
  @Input({ required: true }) public setup!: string;
  @Input({ required: true }) public monthly!: string;
  @Input({ required: true }) public features: string[] = [];
  @Input() public highlighted = false;
}
