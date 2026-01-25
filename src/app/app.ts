import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [CardModule, CommonModule],
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('clenstacky');
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
