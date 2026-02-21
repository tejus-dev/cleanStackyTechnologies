import { RouterOutlet, NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { DemoModalComponent } from './shared/ui/demo-modal/demo-modal.component';
import { SeoService } from './core/services/seo.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, DemoModalComponent],
})
export class App {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  constructor() {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe(() => {
      let active = this.route.firstChild;
      while (active?.firstChild) {
        active = active.firstChild;
      }

      const data = active?.snapshot.data as {
        schema?: Record<string, unknown>;
        schemaId?: string;
      } | undefined;

      if (data?.schema) {
        this.seo.setJsonLd(data.schema, data.schemaId || 'jsonld-page');
      }
    });
  }
}
