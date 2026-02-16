import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactContent } from '../../../core/models/home-content.model';

@Component({
  selector: 'app-home-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home-contact-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContactSectionComponent {
  @Input({ required: true }) public section!: ContactContent;

  protected readonly inquiryForm;

  constructor(private readonly formBuilder: FormBuilder) {
    this.inquiryForm = this.formBuilder.group({
      industry: ['', Validators.required],
      teamSize: ['', Validators.required],
      currentTools: ['', Validators.required],
      targetOutcome: ['', Validators.required],
    });
  }

  protected onSubmit(): void {
    if (this.inquiryForm.invalid) {
      this.inquiryForm.markAllAsTouched();
      return;
    }

    const values = this.inquiryForm.getRawValue();
    const body = [
      `Industry: ${values.industry}`,
      `Team Size: ${values.teamSize}`,
      `Current Tools: ${values.currentTools}`,
      `Target Outcome: ${values.targetOutcome}`,
    ].join('\n');

    const subject = encodeURIComponent('System Call Request - CleanStacky');
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:info@cleanstacky.com?subject=${subject}&body=${encodedBody}`;
  }
}
