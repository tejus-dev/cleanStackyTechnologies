import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { FormFieldComponent } from '../form-field/form-field.component';
import { UiButtonComponent } from '../button/ui-button.component';
import { DemoModalService } from '../../../core/services/demo-modal.service';

@Component({
  selector: 'app-demo-modal',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent, FormFieldComponent, UiButtonComponent],
  templateUrl: './demo-modal.component.html',
  styleUrl: './demo-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoModalComponent {
  protected readonly form;

  constructor(
    private readonly formBuilder: FormBuilder,
    protected readonly modalService: DemoModalService
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      businessType: ['', Validators.required],
    });
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = this.form.getRawValue();
    const body = [
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email}`,
      `Business Type: ${payload.businessType}`,
    ].join('\n');

    window.location.href = `mailto:info@cleanstacky.com?subject=${encodeURIComponent('Demo Request')}&body=${encodeURIComponent(body)}`;
    this.modalService.close();
    this.form.reset();
  }
}
