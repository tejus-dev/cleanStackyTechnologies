import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroContent } from '../../../core/models/home-content.model';
import { HomeHeroSectionComponent } from './home-hero-section.component';

describe('HomeHeroSectionComponent', () => {
  let fixture: ComponentFixture<HomeHeroSectionComponent>;
  let component: HomeHeroSectionComponent;

  const heroInput: HeroContent = {
    eyebrow: 'Eyebrow',
    title: 'Hero Title',
    description: 'Hero Description',
    qualifier: 'Qualifier',
    primaryCta: { label: 'Primary CTA', href: '#contact' },
    secondaryCta: { label: 'Secondary CTA', href: '#solutions' },
    badges: ['Badge A', 'Badge B'],
    proofStats: [
      { value: '12+', label: 'Projects' },
      { value: '24h', label: 'SLA' },
    ],
    panel: {
      kicker: 'Panel Kicker',
      title: 'Panel Title',
      description: 'Panel Description',
      metrics: [
        { value: 'One', label: 'Metric One' },
        { value: 'Two', label: 'Metric Two' },
      ],
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHeroSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeHeroSectionComponent);
    component = fixture.componentInstance;
    component.hero = heroInput;
    fixture.detectChanges();
  });

  it('should render hero title and ctas', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('h1')?.textContent).toContain('Hero Title');
    expect(element.querySelector('.btn-primary')?.textContent).toContain('Primary CTA');
    expect(element.querySelector('.btn-secondary')?.textContent).toContain('Secondary CTA');
  });

  it('should render all panel metrics', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelectorAll('.panel-metrics > div').length).toBe(2);
  });
});
