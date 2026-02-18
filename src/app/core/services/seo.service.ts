import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

type SeoOptions = {
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  robots?: string;
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly baseUrl = 'https://cleanstacky.com';
  private readonly defaultImage = 'https://cleanstacky.com/CST_LOGO.png';
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  public update(title: string, description: string, path = ''): void {
    this.updateAdvanced(title, description, { path });
  }

  public updateAdvanced(title: string, description: string, options: SeoOptions = {}): void {
    const path = options.path || '';
    const canonicalUrl = `${this.baseUrl}${path}`;
    const image = options.image || this.defaultImage;
    const ogType = options.type || 'website';
    const robots = options.robots || 'index,follow';

    this.title.setTitle(title);

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: robots });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: ogType });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:site_name', content: 'CleanStacky Technologies' });
    this.meta.updateTag({ property: 'og:locale', content: 'en_IN' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
    this.meta.updateTag({ name: 'twitter:url', content: canonicalUrl });

    const existing = this.document.querySelector('link[rel="canonical"]');
    if (existing) {
      existing.setAttribute('href', canonicalUrl);
      return;
    }

    const link = this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonicalUrl);
    this.document.head.appendChild(link);
  }
}
