import { Component, AfterViewInit, Inject, OnDestroy, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [CommonModule],
  styleUrls: ['./app.scss'],
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly title = signal('cleanstacky-site');
  private revealObserver?: IntersectionObserver;
  private readonly cleanup = new AbortController();

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.applyStagger();
    this.bindNavClose();

    if (prefersReduced) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      return;
    }

    this.revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    document.querySelectorAll('.reveal').forEach((el) => this.revealObserver?.observe(el));
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
    this.cleanup.abort();
  }

  private applyStagger(): void {
    const staggerGroups = [
      '.end-grid',
      '.solution-grid',
      '.cap-grid',
      '.process-grid',
      '.case-grid',
      '.testimonial-grid',
      '.outcomes-cards',
      '.industry-grid',
    ];

    staggerGroups.forEach((selector) => {
      const container = document.querySelector(selector);
      if (!container) {
        return;
      }

      const items = container.querySelectorAll<HTMLElement>('.reveal');
      items.forEach((item, index) => {
        const delay = Math.min(index * 0.08, 0.48);
        item.style.transitionDelay = `${delay}s`;
      });
    });
  }

  private bindNavClose(): void {
    const navToggle = document.getElementById('nav-toggle') as HTMLInputElement | null;
    if (!navToggle) {
      return;
    }

    const header = document.querySelector('.site-header');
    if (!header) {
      return;
    }

    header.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
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
