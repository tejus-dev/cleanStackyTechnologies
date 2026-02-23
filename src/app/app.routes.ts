import { Routes } from '@angular/router';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DemoComponent } from './pages/demo/demo.component';
import { DistributorDemoComponent } from './pages/distributor-demo/distributor-demo.component';
import { CrmDemoComponent } from './pages/crm-demo/crm-demo.component';
import { TextileDemoComponent } from './pages/textile-demo/textile-demo.component';
import { EcommerceAdminDemoComponent } from './pages/ecommerce-admin-demo/ecommerce-admin-demo.component';
import { EcommerceDemoComponent } from './pages/ecommerce-demo/ecommerce-demo.component';
import { B2cDemoComponent } from './pages/b2c-demo/b2c-demo.component';
import { SchoolDemoComponent } from './pages/school-demo/school-demo.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
    data: {
      title: 'School ERP & Clinic Management Software India | CleanStacky Technologies',
      description: 'ERP, CRM and workflow automation for schools, clinics and SMBs in India.',
      path: '/',
      schemaId: 'jsonld-localbusiness',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'CleanStacky Technologies',
        url: 'https://cleanstacky.com',
        logo: 'https://cleanstacky.com/CST_LOGO.png',
        image: 'https://cleanstacky.com/CST_LOGO.png',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bengaluru',
          addressRegion: 'Karnataka',
          addressCountry: 'IN',
        },
        areaServed: 'IN',
        email: 'contact@cleanstacky.com',
        priceRange: '₹₹₹',
      },
    },
  },
  {
    path: 'systems',
    loadComponent: () => import('./pages/systems/systems.page').then((m) => m.SystemsPage),
    data: {
      title: 'Systems | CleanStacky Technologies',
      description: 'School ERP, clinic system, CRM, workflow automation, supermarket mobile applications, e-commerce websites, and custom business solutions.',
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
      schemaId: 'jsonld-school-erp',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'CleanStacky School ERP',
        operatingSystem: 'Web',
        applicationCategory: 'BusinessApplication',
        featureList: [
          'Admissions and student onboarding',
          'Fee collection with receipts',
          'Attendance and timetable management',
          'Parent communication',
          'Reports and compliance exports',
        ],
        provider: {
          '@type': 'Organization',
          name: 'CleanStacky Technologies',
          url: 'https://cleanstacky.com',
        },
        areaServed: 'IN',
      },
    },
  },
  {
    path: 'systems/clinic-system',
    loadComponent: () => import('./pages/systems/clinic-system/clinic-system.page').then((m) => m.ClinicSystemPage),
    data: {
      title: 'Clinic Management Software India | CleanStacky',
      description: 'Clinic system for appointments, billing, reminders and patient history.',
      path: '/systems/clinic-system',
      schemaId: 'jsonld-clinic-system',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'CleanStacky Clinic System',
        operatingSystem: 'Web',
        applicationCategory: 'BusinessApplication',
        featureList: [
          'Appointment scheduling',
          'Billing and invoices',
          'Patient history and records',
          'Automated reminders',
          'Clinic analytics dashboard',
        ],
        provider: {
          '@type': 'Organization',
          name: 'CleanStacky Technologies',
          url: 'https://cleanstacky.com',
        },
        areaServed: 'IN',
      },
    },
  },
  {
    path: 'systems/business-crm',
    loadComponent: () => import('./pages/systems/business-crm/business-crm.page').then((m) => m.BusinessCrmPage),
    data: {
      title: 'Business Automation Software | CRM + Support',
      description: 'CRM with lead, invoice and support workflows for Indian SMBs.',
      path: '/systems/business-crm',
      schemaId: 'jsonld-business-crm',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'CleanStacky Business CRM',
        operatingSystem: 'Web',
        applicationCategory: 'BusinessApplication',
        featureList: [
          'Lead capture and pipeline',
          'Quotes and invoices',
          'Task and follow-up automation',
          'Support ticketing',
          'Dashboards and reporting',
        ],
        provider: {
          '@type': 'Organization',
          name: 'CleanStacky Technologies',
          url: 'https://cleanstacky.com',
        },
        areaServed: 'IN',
      },
    },
  },
  {
    path: 'industries',
    loadComponent: () => import('./pages/industries/industry.page').then((m) => m.IndustryPage),
    data: {
      title: 'Industry Systems | CleanStacky Technologies',
      description: 'Industry-focused software systems for schools, clinics, diagnostics centres, textile, B2B, B2C, and custom business workflows.',
      path: '/industries',
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
      description: 'Pricing for ERP, CRM and workflow automation with SLA options.',
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
    component: ContactComponent,
    data: {
      title: 'Book a Demo | CleanStacky Technologies',
      description: 'Contact the CleanStacky team by email for ERP, CRM and workflow automation.',
      path: '/contact',
    },
  },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'demo/calculator', component: CalculatorComponent },
  { path: 'demo/school', component: SchoolDemoComponent },
  { path: 'demo/ecommerce', component: EcommerceDemoComponent },
  { path: 'demo/ecommerce-admin', component: EcommerceAdminDemoComponent },
  { path: 'demo/distributor', component: DistributorDemoComponent },
  { path: 'demo/textile', component: TextileDemoComponent },
  { path: 'demo/crm', component: CrmDemoComponent },
  { path: 'demo/b2c', component: B2cDemoComponent },
  {
    path: '**',
    redirectTo: '',
  },
];
