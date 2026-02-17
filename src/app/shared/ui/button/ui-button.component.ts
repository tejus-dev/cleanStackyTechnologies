import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ui-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButtonComponent {
  @Input() public variant: 'primary' | 'secondary' | 'ghost' = 'primary';
  @Input() public type: 'button' | 'submit' = 'button';
  @Input() public icon?: 'arrow';
  @Input() public text?: string;
  @Input() public href?: string;
  @Input() public routerLink?: string;
  @Input() public target?: '_blank' | '_self';
  @Input() public ariaLabel?: string;
  @Input() public fullWidth = false;
  @Output() public readonly pressed = new EventEmitter<void>();

  protected onPress(): void {
    this.pressed.emit();
  }
}
