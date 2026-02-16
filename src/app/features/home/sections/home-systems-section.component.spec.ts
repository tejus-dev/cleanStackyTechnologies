import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCard, SectionHeading } from '../../../core/models/home-content.model';
import { HomeSystemsSectionComponent } from './home-systems-section.component';

describe('HomeSystemsSectionComponent', () => {
  let fixture: ComponentFixture<HomeSystemsSectionComponent>;
  let component: HomeSystemsSectionComponent;

  const cards: FeatureCard[] = [
    { title: 'System A', description: 'Description A', tag: 'Tag A' },
    { title: 'System B', description: 'Description B', tag: 'Tag B' },
    { title: 'System C', description: 'Description C' },
  ];

  const sectionInput: SectionHeading & { cards: FeatureCard[] } = {
    title: 'Systems We Build',
    description: 'Section Description',
    cards,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSystemsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSystemsSectionComponent);
    component = fixture.componentInstance;
    component.section = sectionInput;
    fixture.detectChanges();
  });

  it('should render a card per input item', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelectorAll('.solution-card').length).toBe(cards.length);
  });

  it('should render heading content', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h2')?.textContent).toContain('Systems We Build');
    expect(element.querySelector('.section-head p')?.textContent).toContain('Section Description');
  });
});
