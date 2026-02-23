import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

interface SeoConfig {
  title: string;
  description: string;
  ogUrl: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  robots?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private document = inject(DOCUMENT);

  setPageMeta(config: SeoConfig): void {
    const ogTitle = config.ogTitle ?? config.title;
    const ogDescription = config.ogDescription ?? config.description;
    const ogType = config.ogType ?? 'website';
    const robots = config.robots ?? 'index, follow';

    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }
    this.meta.updateTag({ name: 'robots', content: robots });
    this.meta.updateTag({ property: 'og:title', content: ogTitle });
    this.meta.updateTag({ property: 'og:description', content: ogDescription });
    this.meta.updateTag({ property: 'og:url', content: config.ogUrl });
    this.meta.updateTag({ property: 'og:type', content: ogType });
    this.meta.updateTag({ name: 'twitter:title', content: ogTitle });
    this.meta.updateTag({ name: 'twitter:description', content: ogDescription });
  }

  setJsonLd(schema: Record<string, unknown>, id = 'jsonld-default'): void {
    const existing = this.document.getElementById(id);
    if (existing) {
      existing.textContent = JSON.stringify(schema);
      return;
    }

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }
}
