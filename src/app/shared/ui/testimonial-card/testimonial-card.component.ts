import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialCardComponent {
  @Input({ required: true }) public quote!: string;
  @Input({ required: true }) public name!: string;
  @Input({ required: true }) public role!: string;
  @Input({ required: true }) public city!: string;
}
