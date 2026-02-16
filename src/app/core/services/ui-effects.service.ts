import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiEffectsService {
  private revealObserver?: IntersectionObserver;
  private cleanup = new AbortController();

  public initialize(): void {
    this.destroy();
    this.cleanup = new AbortController();

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.applyStagger([
      '.end-grid',
      '.solution-grid',
      '.cap-grid',
      '.process-grid',
      '.case-grid',
      '.testimonial-grid',
      '.outcomes-cards',
      '.industry-grid',
    ]);

    this.bindMobileNavClose('#nav-toggle', '.site-header a[href^="#"]');

    if (prefersReduced) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      return;
    }

    this.revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    document.querySelectorAll('.reveal').forEach((el) => this.revealObserver?.observe(el));
  }

  public destroy(): void {
    this.revealObserver?.disconnect();
    this.revealObserver = undefined;
    this.cleanup.abort();
  }

  private applyStagger(groupSelectors: string[]): void {
    groupSelectors.forEach((selector) => {
      const container = document.querySelector(selector);
      if (!container) {
        return;
      }

      const items = container.querySelectorAll<HTMLElement>('.reveal');
      items.forEach((item, index) => {
        const delaySeconds = Math.min(index * 0.08, 0.48);
        item.style.transitionDelay = `${delaySeconds}s`;
      });
    });
  }

  private bindMobileNavClose(toggleSelector: string, linkSelector: string): void {
    const navToggle = document.querySelector<HTMLInputElement>(toggleSelector);
    if (!navToggle) {
      return;
    }

    document.querySelectorAll<HTMLAnchorElement>(linkSelector).forEach((link) => {
      link.addEventListener(
        'click',
        () => {
          navToggle.checked = false;
        },
        { signal: this.cleanup.signal }
      );
    });
  }
}
