import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
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
      description:
        'Admissions, fee collection, attendance, and parent communication workflows for school operations.',
      highlights: ['Faster fee closure', 'Cleaner admin control', 'Daily reporting visibility'],
    },
    {
      slug: 'clinics',
      label: 'Clinics',
      description:
        'Appointment, billing, and patient communication systems designed for smooth clinic execution.',
      highlights: ['Reduced no-shows', 'Faster front-desk flow', 'Cleaner billing'],
    },
    {
      slug: 'diagnostics-centres',
      label: 'Diagnostics Centres',
      description:
        'Booking, sample tracking, report dispatch, and billing workflows for diagnostics teams.',
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
      description:
        'Lead pipeline, proposal, invoicing, and support workflows for B2B teams.',
      highlights: ['Stronger pipeline governance', 'Faster proposal cycles', 'Post-sale visibility'],
    },
    {
      slug: 'b2c-business',
      label: 'B2C Business',
      description:
        'Customer response, order flow, support, and retention operations for B2C businesses.',
      highlights: ['Faster first response', 'Better order control', 'Retention automation'],
    },
    {
      slug: 'any-business-tech-solutions',
      label: 'Any Business (Tech + Solutions)',
      description:
        'Custom ERP, CRM, workflows, dashboards, and automation for any business needing operational systems.',
      highlights: ['Workflow-first implementation', 'Automation-ready operations', 'Role-based dashboards'],
    },
  ];

  protected readonly faqs: FaqItem[] = [
    {
      question: 'Can you customize systems for our exact process?',
      answer:
        'Yes. We start with practical modules and customize workflows based on your operations.',
    },
    {
      question: 'Do you support workflow automation?',
      answer:
        'Yes. We implement reminder and alert workflows tied to real operational events.',
    },
    {
      question: 'Can we get web and mobile together?',
      answer: 'Yes. We can deliver web dashboards and mobile workflows as one connected system.',
    },
    {
      question: 'What is the typical implementation timeline?',
      answer:
        'Most phase-one implementations can start in a few weeks depending on scope and readiness.',
    },
    {
      question: 'Do you support integrations?',
      answer:
        'Yes. We integrate with billing, payments, and other operational tools where needed.',
    },
    {
      question: 'Do you provide support after launch?',
      answer:
        'Yes. We continue with fixes, improvements, and iteration based on usage metrics.',
    },
  ];

  protected selectedSlug = '';

  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly openFaqIndexes = new Set<number>();

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const slug = params.get('industry') || '';
      this.selectedSlug = slug;

      const industryMeta: Record<string, { title: string; description: string; ogUrl: string; keywords?: string }> = {
        schools: {
          title: 'School ERP Software India — Admissions, Fees & Attendance | CleanStacky',
          description:
            'Manage admissions, fees, attendance and reporting in one system. Built for Indian schools by CleanStacky Technologies.',
          keywords:
            'school ERP software India, school fee management software, admissions and attendance software India',
          ogUrl: 'https://cleanstacky.com/industries/schools',
        },
        clinics: {
          title: 'Clinic Management Software India — Appointments & Billing | CleanStacky',
          description:
            "Streamline clinic appointments, billing, reminders and patient history with CleanStacky's staff-friendly clinic system.",
          keywords:
            'clinic management software India, appointment billing reminders software, clinic CRM India',
          ogUrl: 'https://cleanstacky.com/industries/clinics',
        },
        'diagnostics-centres': {
          title: 'Diagnostics Centre Management Software | CleanStacky Technologies',
          description:
            'Automate appointment booking, reminders and revenue tracking for diagnostics centres in India.',
          keywords:
            'diagnostics centre software India, pathology booking and billing software, lab operations system India',
          ogUrl: 'https://cleanstacky.com/industries/diagnostics-centres',
        },
        'textile-business': {
          title: 'Textile Business ERP & CRM India | CleanStacky Technologies',
          description: 'Structured CRM, billing, and inventory systems for textile businesses in India.',
          keywords:
            'textile business ERP India, textile CRM software, garment order inventory software India',
          ogUrl: 'https://cleanstacky.com/industries/textile-business',
        },
        'b2b-business': {
          title: 'B2B Business CRM & Operations Software India | CleanStacky',
          description:
            'CRM, invoicing, and support dashboards for B2B businesses. Built and managed by CleanStacky Technologies.',
          keywords:
            'B2B CRM software India, invoicing and pipeline software India, B2B operations dashboards',
          ogUrl: 'https://cleanstacky.com/industries/b2b-business',
        },
        'b2c-business': {
          title: 'B2C Business Automation & CRM India | CleanStacky Technologies',
          description:
            'WhatsApp automation, CRM, and operations systems for B2C businesses in India.',
          keywords:
            'B2C CRM software India, retail automation software India, WhatsApp automation B2C businesses',
          ogUrl: 'https://cleanstacky.com/industries/b2c-business',
        },
      };

      this.seo.setPageMeta(
        industryMeta[slug] ?? {
          title: 'Industries We Serve | CleanStacky Technologies',
          description:
            'CleanStacky builds business systems for schools, clinics, diagnostics centres, textile businesses, B2B and B2C companies in India.',
          keywords:
            'industry software solutions India, school clinic diagnostics CRM ERP India, B2B B2C business systems',
          ogUrl: 'https://cleanstacky.com/industries',
        },
      );
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
