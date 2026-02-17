import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DemoModalService {
  public readonly isOpen = signal(false);

  public open(): void {
    this.isOpen.set(true);
  }

  public close(): void {
    this.isOpen.set(false);
  }
}
