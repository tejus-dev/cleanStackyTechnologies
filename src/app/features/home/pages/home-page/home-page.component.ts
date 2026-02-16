import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeContent } from '../../../../core/models/home-content.model';
import { HOME_CONTENT } from '../../data/home-content.data';
import { HomeHeaderSectionComponent } from '../../sections/home-header-section.component';
import { HomeHeroSectionComponent } from '../../sections/home-hero-section.component';
import { HomeTrustedSectionComponent } from '../../sections/home-trusted-section.component';
import { HomeEndToEndSectionComponent } from '../../sections/home-end-to-end-section.component';
import { HomeSystemsSectionComponent } from '../../sections/home-systems-section.component';
import { HomeCapabilitiesSectionComponent } from '../../sections/home-capabilities-section.component';
import { HomeOutcomesSectionComponent } from '../../sections/home-outcomes-section.component';
import { HomeIndustriesSectionComponent } from '../../sections/home-industries-section.component';
import { HomeProcessSectionComponent } from '../../sections/home-process-section.component';
import { HomeWorkSectionComponent } from '../../sections/home-work-section.component';
import { HomeTestimonialsSectionComponent } from '../../sections/home-testimonials-section.component';
import { HomeContactSectionComponent } from '../../sections/home-contact-section.component';
import { HomeFooterSectionComponent } from '../../sections/home-footer-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HomeHeaderSectionComponent,
    HomeHeroSectionComponent,
    HomeTrustedSectionComponent,
    HomeEndToEndSectionComponent,
    HomeSystemsSectionComponent,
    HomeCapabilitiesSectionComponent,
    HomeOutcomesSectionComponent,
    HomeIndustriesSectionComponent,
    HomeProcessSectionComponent,
    HomeWorkSectionComponent,
    HomeTestimonialsSectionComponent,
    HomeContactSectionComponent,
    HomeFooterSectionComponent,
  ],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  protected readonly content: HomeContent = HOME_CONTENT;
}
