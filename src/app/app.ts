import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { DemoModalComponent } from './shared/ui/demo-modal/demo-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, DemoModalComponent],
})
export class App {}
