import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'systems',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'systems/school-erp',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'systems/clinic-system',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'systems/business-crm',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'case-studies',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'pricing',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'about',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'contact',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'industries/:industry',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
