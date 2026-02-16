import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroContent } from '../../../core/models/home-content.model';

@Component({
  selector: 'app-home-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-hero-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeroSectionComponent {
  @Input({ required: true }) public hero!: HeroContent;
}
