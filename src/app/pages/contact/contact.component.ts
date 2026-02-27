import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeoService } from '../../core/services/seo.service';

interface BusinessOption {
  label: string;
  value: string;
  context: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly seo = inject(SeoService);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    businessType: ['', Validators.required],
    message: [''],
  });

  protected readonly submitted = signal(false);
  protected readonly showSuccess = signal(false);
  protected readonly selectedTeamSize = signal('');
  protected readonly selectedChallenges = signal<string[]>([]);
  protected readonly challengeLimitMessage = signal('');

  protected readonly submissionSummary = signal<{
    business: string;
    teamSize: string;
    challenges: string[];
  } | null>(null);

  protected readonly teamSizes = ['Just me', '2–5 people', '6–20 people', '20+ people'];

  protected readonly challengeOptions = [
    'No-shows / cancellations',
    'Manual follow-ups taking too long',
    'No visibility on team performance',
    'Fee / payment collection',
    'Inventory not tracked properly',
    'Customer data scattered',
    "Can't track sales pipeline",
    'WhatsApp chaos — no system',
  ];

  protected readonly businessOptions: BusinessOption[] = [
    {
      label: '🏥 Diagnostic Centre / Clinic',
      value: 'diagnostic-clinic',
      context: "We'll send you our Diagnostic Centre demo and pricing",
    },
    {
      label: '🏫 School / Educational Institute',
      value: 'school',
      context: "We'll send you our School ERP walkthrough and fee workflow details",
    },
    {
      label: '📦 Distributor / Wholesale',
      value: 'distributor-wholesale',
      context: "We'll send you our Distributor CRM + order tracking demo",
    },
    {
      label: '🧵 Textile / Garments',
      value: 'textile-garments',
      context: "We'll send you textile-focused CRM + inventory workflow examples",
    },
    {
      label: '🛒 Retail / B2C Business',
      value: 'retail-b2c',
      context: "We'll send you B2C automation + conversion workflow demos",
    },
    {
      label: '🏗️ Construction / Real Estate',
      value: 'construction-real-estate',
      context: "We'll send you lead, site, and follow-up tracking examples",
    },
    {
      label: '🌾 Agriculture / Farm',
      value: 'agriculture-farm',
      context: "We'll send you farm operations and sales workflow options",
    },
    {
      label: '💼 Any Other Business',
      value: 'other-business',
      context: "We'll tailor a custom system demo to your business type",
    },
  ];

  protected readonly businessContext = computed(() => {
    const value = this.form.controls.businessType.value;
    return this.businessOptions.find((option) => option.value === value)?.context ?? '';
  });

  protected readonly teamSizeError = computed(() => this.submitted() && !this.selectedTeamSize());
  protected readonly challengesError = computed(
    () => this.submitted() && this.selectedChallenges().length === 0,
  );

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Contact CleanStacky | Get a Demo for Your Business | Respond in 2 Hours',
      description:
        "Tell us about your business and we'll send you a tailored demo on WhatsApp within 2 hours. Serving diagnostic centres, schools, distributors, textile businesses, and retailers across India.",
      keywords:
        'CleanStacky contact, business software demo India, CRM demo India, book a demo business software, CleanStacky Technologies Bangalore',
      ogTitle: 'Get a Demo | CleanStacky Technologies',
      ogDescription:
        'WhatsApp response within 2 hours. Tailored demo for your industry — diagnostic, school, distributor, textile, retail.',
      ogUrl: 'https://cleanstacky.com/contact',
    });
  }

  protected controlInvalid(controlName: 'name' | 'phone' | 'businessType'): boolean {
    const control = this.form.controls[controlName];
    return (this.submitted() || control.touched) && control.invalid;
  }

  protected selectTeamSize(size: string): void {
    this.selectedTeamSize.set(size);
  }

  protected toggleChallenge(challenge: string): void {
    const selected = this.selectedChallenges();

    if (selected.includes(challenge)) {
      this.selectedChallenges.set(selected.filter((item) => item !== challenge));
      this.challengeLimitMessage.set('');
      return;
    }

    if (selected.length >= 2) {
      this.challengeLimitMessage.set('Please pick your top 2');
      return;
    }

    this.selectedChallenges.set([...selected, challenge]);
    this.challengeLimitMessage.set('');
  }

  protected challengeSelected(challenge: string): boolean {
    return this.selectedChallenges().includes(challenge);
  }

  protected submit(): void {
    this.submitted.set(true);
    this.form.markAllAsTouched();

    const invalid =
      this.form.invalid || !this.selectedTeamSize() || this.selectedChallenges().length === 0;

    if (invalid) {
      this.scrollToFirstError();
      return;
    }

    const value = this.form.getRawValue();
    const businessLabel =
      this.businessOptions.find((option) => option.value === value.businessType)?.label ?? value.businessType;

    const messageLines = [
      "Hi CleanStacky! 👋 I'd like to learn more about your system.",
      '',
      `*Name:* ${value.name}`,
      `*Business:* ${businessLabel}`,
      `*Team Size:* ${this.selectedTeamSize()}`,
      `*WhatsApp:* +91 ${value.phone}`,
      '*Challenges:*',
      ...this.selectedChallenges().map((challenge) => `  • ${challenge}`),
      '',
    ];

    if (value.message.trim()) {
      messageLines.push(value.message.trim(), '');
    }

    messageLines.push('Looking forward to hearing from you!');

    const url = `https://wa.me/919538299302?text=${encodeURIComponent(messageLines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    this.submissionSummary.set({
      business: businessLabel,
      teamSize: this.selectedTeamSize(),
      challenges: this.selectedChallenges(),
    });

    this.showSuccess.set(true);
  }

  private scrollToFirstError(): void {
    const firstInvalid = document.querySelector(
      '.field-error-text, .field-card.is-invalid, .selector-row.is-invalid, .chips-wrap.is-invalid',
    );

    if (firstInvalid instanceof HTMLElement) {
      firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
