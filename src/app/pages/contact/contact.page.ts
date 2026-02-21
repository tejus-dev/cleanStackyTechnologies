import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from '../../shared/ui/section-container/section-container.component';
import { FormFieldComponent } from '../../shared/ui/form-field/form-field.component';
import { UiButtonComponent } from '../../shared/ui/button/ui-button.component';
import { Meta, Title } from '@angular/platform-browser';

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
    private readonly meta: Meta,
    private readonly title: Title
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const pageTitle = 'Contact | CleanStacky Technologies';
    const pageDescription =
      'Contact CleanStacky Technologies by email for ERP, CRM, and business system demos.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: pageDescription });
    this.meta.updateTag({ property: 'og:title', content: 'CleanStacky Technologies' });
    this.meta.updateTag({ property: 'og:image', content: 'https://cleanstacky.com/og-image.jpg' });
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
