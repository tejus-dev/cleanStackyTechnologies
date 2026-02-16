import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeading, Testimonial } from '../../../core/models/home-content.model';

@Component({
  selector: 'app-home-testimonials-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-testimonials-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTestimonialsSectionComponent {
  @Input({ required: true }) public section!: SectionHeading & { items: Testimonial[] };
}
