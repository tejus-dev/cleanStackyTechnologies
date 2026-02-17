import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {
  @Input({ required: true }) public formGroup!: FormGroup;
  @Input({ required: true }) public controlName!: string;
  @Input({ required: true }) public label!: string;
  @Input() public placeholder = '';
  @Input() public type: 'text' | 'email' | 'tel' | 'textarea' = 'text';
  @Input() public requiredMessage = 'This field is required.';

  protected get invalid(): boolean {
    const control = this.formGroup.get(this.controlName);
    return !!control && control.invalid && (control.touched || control.dirty);
  }
}
