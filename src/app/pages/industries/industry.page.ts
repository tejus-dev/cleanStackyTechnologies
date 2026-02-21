import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { UiButtonComponent } from '../../shared/ui/button/ui-button.component';

type IndustryCard = {
  slug: string;
  label: string;
  description: string;
  highlights: string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

@Component({
  selector: 'app-industry-page',
  standalone: true,
  imports: [CommonModule, RouterLink, UiButtonComponent],
  templateUrl: './industry.page.html',
  styleUrl: './industry.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndustryPage implements OnInit {
  protected readonly industries: IndustryCard[] = [
    {
      slug: 'schools',
      label: 'Schools',
      description: 'Admissions, fee collection, attendance, and parent communication workflows for school operations.',
      highlights: ['Faster fee closure', 'Cleaner admin control', 'Daily reporting visibility'],
    },
    {
      slug: 'clinics',
      label: 'Clinics',
      description: 'Appointment, billing, and patient communication systems designed for smooth clinic execution.',
      highlights: ['Reduced no-shows', 'Faster front-desk flow', 'Cleaner billing'],
    },
    {
      slug: 'diagnostics-centres',
      label: 'Diagnostics Centres',
      description: 'Booking, sample tracking, report dispatch, and billing workflows for diagnostics teams.',
      highlights: ['Sample status visibility', 'Faster report release', 'Better daily closure'],
    },
    {
      slug: 'textile-business',
      label: 'Textile Business',
      description: 'Order, stock, dispatch, and follow-up operations for textile businesses.',
      highlights: ['Order-to-dispatch control', 'Stock visibility', 'Less manual coordination'],
    },
    {
      slug: 'b2b-business',
      label: 'B2B Business',
      description: 'Lead pipeline, proposal, invoicing, and support workflows for B2B teams.',
      highlights: ['Stronger pipeline governance', 'Faster proposal cycles', 'Post-sale visibility'],
    },
    {
      slug: 'b2c-business',
      label: 'B2C Business',
      description: 'Customer response, order flow, support, and retention operations for B2C businesses.',
      highlights: ['Faster first response', 'Better order control', 'Retention automation'],
    },
    {
      slug: 'any-business-tech-solutions',
      label: 'Any Business (Tech + Solutions)',
      description: 'Custom ERP, CRM, workflows, dashboards, and automation for any business needing operational systems.',
      highlights: ['Workflow-first implementation', 'Automation-ready operations', 'Role-based dashboards'],
    },
  ];

  protected readonly faqs: FaqItem[] = [
    {
      question: 'Can you customize systems for our exact process?',
      answer: 'Yes. We start with practical modules and customize workflows based on your operations.',
    },
    {
      question: 'Do you support WhatsApp automation?',
      answer: 'Yes. We implement reminder and alert workflows tied to real operational events.',
    },
    {
      question: 'Can we get web and mobile together?',
      answer: 'Yes. We can deliver web dashboards and mobile workflows as one connected system.',
    },
    {
      question: 'What is the typical implementation timeline?',
      answer: 'Most phase-one implementations can start in a few weeks depending on scope and readiness.',
    },
    {
      question: 'Do you support integrations?',
      answer: 'Yes. We integrate with billing, payments, and other operational tools where needed.',
    },
    {
      question: 'Do you provide support after launch?',
      answer: 'Yes. We continue with fixes, improvements, and iteration based on usage metrics.',
    },
  ];

  protected selectedSlug = '';

  private readonly route = inject(ActivatedRoute);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly destroyRef = inject(DestroyRef);
  private readonly openFaqIndexes = new Set<number>();

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const slug = params.get('industry') || '';
      this.selectedSlug = slug;

      const selected = this.industries.find((item) => item.slug === slug);
      const title = selected ? `${selected.label} Industry Systems | CleanStacky Technologies` : 'Industry Systems | CleanStacky Technologies';
      const description = selected
        ? `${selected.description} Custom workflows, dashboards, and automation support included.`
        : 'Industry-focused software systems for schools, clinics, diagnostics centres, textile, B2B, B2C, and custom business workflows.';

      this.title.setTitle(title);
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:title', content: 'CleanStacky Technologies' });
      this.meta.updateTag({ property: 'og:image', content: 'https://cleanstacky.com/og-image.jpg' });

    });
  }

  protected isSelected(slug: string): boolean {
    return this.selectedSlug === slug;
  }

  protected toggleFaq(index: number): void {
    if (this.openFaqIndexes.has(index)) {
      this.openFaqIndexes.delete(index);
      return;
    }

    this.openFaqIndexes.add(index);
  }

  protected isFaqOpen(index: number): boolean {
    return this.openFaqIndexes.has(index);
  }

  protected trackBySlug(_: number, item: IndustryCard): string {
    return item.slug;
  }

  protected trackByIndex(index: number): number {
    return index;
  }
}
