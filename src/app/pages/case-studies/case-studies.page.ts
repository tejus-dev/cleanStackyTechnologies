import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { CaseStudyCardComponent } from '../../shared/ui/case-study-card/case-study-card.component';
import { SectionContainerComponent } from '../../shared/ui/section-container/section-container.component';

@Component({
  selector: 'app-case-studies-page',
  standalone: true,
  imports: [CommonModule, CaseStudyCardComponent, SectionContainerComponent],
  templateUrl: './case-studies.page.html',
  styleUrl: './case-studies.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudiesPage implements OnInit {
  constructor(
    private readonly meta: Meta,
    private readonly title: Title
  ) {}

  ngOnInit(): void {
    const pageTitle = 'Case Studies | CleanStacky Technologies';
    const pageDescription = 'Selected case studies across schools, clinics and SMB operations.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: pageDescription });
    this.meta.updateTag({ property: 'og:title', content: 'CleanStacky Technologies' });
    this.meta.updateTag({ property: 'og:image', content: 'https://cleanstacky.com/og-image.jpg' });
  }
}
