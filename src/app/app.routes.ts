import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
    data: {
      title: 'School ERP & Clinic Management Software India | CleanStacky Technologies',
      description: 'ERP, CRM and WhatsApp automation for schools, clinics and SMBs in India.',
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
      title: 'School ERP Software India | Fee Management System',
      description: 'School ERP with admissions, fee collection, attendance, and closure reporting.',
      path: '/systems/school-erp',
    },
  },
  {
    path: 'systems/clinic-system',
    loadComponent: () => import('./pages/systems/clinic-system/clinic-system.page').then((m) => m.ClinicSystemPage),
    data: {
      title: 'Clinic Management Software India | CleanStacky',
      description: 'Clinic system for appointments, billing, reminders and patient history.',
      path: '/systems/clinic-system',
    },
  },
  {
    path: 'systems/business-crm',
    loadComponent: () => import('./pages/systems/business-crm/business-crm.page').then((m) => m.BusinessCrmPage),
    data: {
      title: 'Business Automation Software | CRM + Support',
      description: 'CRM with lead, invoice and support workflows for Indian SMBs.',
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
      title: 'ERP Case Studies | Schools, Clinics, SMBs',
      description: 'Real delivery outcomes from CleanStacky ERP and automation systems.',
      path: '/case-studies',
    },
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing.page').then((m) => m.PricingPage),
    data: {
      title: 'ERP Pricing India | CleanStacky Plans',
      description: 'Pricing for ERP, CRM and WhatsApp automation with SLA options.',
      path: '/pricing',
    },
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then((m) => m.AboutPage),
    data: {
      title: 'About CleanStacky Technologies | Bangalore',
      description: 'B2B software team delivering ERP, CRM and automation systems in India.',
      path: '/about',
    },
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.page').then((m) => m.ContactPage),
    data: {
      title: 'Book a Demo | CleanStacky Technologies',
      description: 'Speak to the CleanStacky team for ERP, CRM and WhatsApp automation.',
      path: '/contact',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
