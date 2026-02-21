import { ChangeDetectionStrategy, Component, OnInit, signal, inject } from '@angular/core';
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
  private formBuilder = inject(FormBuilder);
  private seo = inject(SeoService);
  protected readonly form = this.formBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Book a Demo | CleanStacky Technologies',
      description:
        'Book a free tailored demo with CleanStacky. Tell us your workflow and we will show a relevant system walkthrough.',
      ogUrl: 'https://cleanstacky.com/contact',
    });
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
