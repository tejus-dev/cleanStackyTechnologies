import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from '../../shared/ui/section-container/section-container.component';
import { FormFieldComponent } from '../../shared/ui/form-field/form-field.component';
import { UiButtonComponent } from '../../shared/ui/button/ui-button.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SectionContainerComponent, FormFieldComponent, UiButtonComponent],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage implements OnInit {
  protected readonly toastVisible = signal(false);
  protected readonly form;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly seo: SeoService
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.seo.update('Contact | CleanStacky Technologies', 'Talk to CleanStacky Technologies for ERP, CRM and WhatsApp automation demos.', '/contact');
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.getRawValue();
    const body = [`Name: ${v.name}`, `Phone: ${v.phone}`, `Email: ${v.email}`, `Message: ${v.message}`].join('\n');
    window.location.href = `mailto:info@cleanstacky.com?subject=${encodeURIComponent('Contact Request')}&body=${encodeURIComponent(body)}`;

    this.toastVisible.set(true);
    setTimeout(() => this.toastVisible.set(false), 2500);
    this.form.reset();
  }
}
