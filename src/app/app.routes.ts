import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
    data: {
      title: 'Run your business on one system | CleanStacky Technologies',
      description: 'ERP, CRM, WhatsApp automation and websites built for growing teams.',
      path: '/',
    },
  },
  {
    path: 'systems',
    loadComponent: () => import('./pages/systems/systems.page').then((m) => m.SystemsPage),
    data: {
      title: 'Systems | CleanStacky Technologies',
      description: 'System modules for schools, clinics and SMB operations.',
      path: '/systems',
    },
  },
  {
    path: 'systems/school-erp',
    loadComponent: () => import('./pages/systems/school-erp/school-erp.page').then((m) => m.SchoolErpPage),
    data: {
      title: 'School ERP | CleanStacky Technologies',
      description: 'Admissions, fees, attendance and reports in one school system.',
      path: '/systems/school-erp',
    },
  },
  {
    path: 'systems/clinic-system',
    loadComponent: () => import('./pages/systems/clinic-system/clinic-system.page').then((m) => m.ClinicSystemPage),
    data: {
      title: 'Clinic System | CleanStacky Technologies',
      description: 'Appointments, billing and reminders built for clinic operations.',
      path: '/systems/clinic-system',
    },
  },
  {
    path: 'systems/business-crm',
    loadComponent: () => import('./pages/systems/business-crm/business-crm.page').then((m) => m.BusinessCrmPage),
    data: {
      title: 'Business CRM | CleanStacky Technologies',
      description: 'Lead-to-support CRM systems for business growth.',
      path: '/systems/business-crm',
    },
  },
  {
    path: 'industries/:industry',
    loadComponent: () => import('./pages/industries/industry.page').then((m) => m.IndustryPage),
  },
  {
    path: 'case-studies',
    loadComponent: () => import('./pages/case-studies/case-studies.page').then((m) => m.CaseStudiesPage),
    data: {
      title: 'Case Studies | CleanStacky Technologies',
      description: 'Delivery proof from selected business system implementations.',
      path: '/case-studies',
    },
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing.page').then((m) => m.PricingPage),
    data: {
      title: 'Pricing | CleanStacky Technologies',
      description: 'Transparent setup and monthly ranges for CleanStacky systems.',
      path: '/pricing',
    },
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then((m) => m.AboutPage),
    data: {
      title: 'About | CleanStacky Technologies',
      description: 'Business systems and product engineering team based in Bangalore.',
      path: '/about',
    },
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.page').then((m) => m.ContactPage),
    data: {
      title: 'Contact | CleanStacky Technologies',
      description: 'Book a demo or contact CleanStacky for ERP, CRM and automation.',
      path: '/contact',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
