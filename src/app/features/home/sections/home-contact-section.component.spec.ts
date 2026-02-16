import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactContent } from '../../../core/models/home-content.model';
import { HomeContactSectionComponent } from './home-contact-section.component';

describe('HomeContactSectionComponent', () => {
  let fixture: ComponentFixture<HomeContactSectionComponent>;
  let component: HomeContactSectionComponent;

  const contactInput: ContactContent = {
    title: 'Contact Title',
    description: 'Contact Description',
    responseSla: 'Reply in 24 hours',
    email: { label: 'info@example.com', href: 'mailto:info@example.com' },
    whatsapp: { label: 'WhatsApp', href: 'https://wa.me/911111111111' },
    formFields: [
      { id: 'industry', label: 'Industry', placeholder: 'Industry' },
      { id: 'teamSize', label: 'Team Size', placeholder: 'Team size' },
      { id: 'currentTools', label: 'Current Tools', placeholder: 'Tools' },
      { id: 'targetOutcome', label: 'Target Outcome', placeholder: 'Outcome', type: 'textarea' },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeContactSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeContactSectionComponent);
    component = fixture.componentInstance;
    component.section = contactInput;
    fixture.detectChanges();
  });

  it('should bind email and whatsapp links', () => {
    const element = fixture.nativeElement as HTMLElement;
    const links = element.querySelectorAll('.contact-actions a');

    expect(links[0].getAttribute('href')).toBe('mailto:info@example.com');
    expect(links[1].getAttribute('href')).toBe('https://wa.me/911111111111');
  });

  it('should render contact heading', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h2')?.textContent).toContain('Contact Title');
  });
});
