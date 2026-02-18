import fs from 'fs';
import path from 'path';

const repoRoot = process.cwd();
const baseUrl = 'https://cleanstacky.com';
const blockPrefixes = ['/admin', '/demo', '/private'];
const publicDir = path.join(repoRoot, 'public');

const readIfExists = (filePath) => {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return '';
  }
};

const appRoutesPath = path.join(repoRoot, 'src', 'app', 'app.routes.ts');
const prerenderPath = path.join(repoRoot, 'src', 'prerender-routes.txt');
const appRoutesContent = readIfExists(appRoutesPath);
const prerenderContent = readIfExists(prerenderPath);

const routeSet = new Set();

const normalizeRoute = (route) => {
  if (!route) return '/';
  let normalized = route.trim();
  if (!normalized) return '/';
  if (!normalized.startsWith('/')) normalized = `/${normalized}`;
  normalized = normalized.replace(/\/{2,}/g, '/');
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.replace(/\/+$/, '');
  }
  return normalized;
};

const routeRegex = /path:\s*'([^']+)'/g;
let match;
while ((match = routeRegex.exec(appRoutesContent)) !== null) {
  const route = match[1];
  if (route === '**') continue;
  if (route.includes(':')) continue;
  routeSet.add(normalizeRoute(route));
}

prerenderContent
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean)
  .forEach((route) => routeSet.add(normalizeRoute(route)));

const routes = [...routeSet]
  .filter((route) => !blockPrefixes.some((prefix) => route === prefix || route.startsWith(`${prefix}/`)))
  .filter((route) => !route.includes(':'))
  .sort();

const today = new Date().toISOString().slice(0, 10);
const urlEntries = routes
  .map((route) => {
    const priority = route === '/' ? '1.0' : route.startsWith('/systems') || route.startsWith('/school-erp') || route.startsWith('/clinic') ? '0.9' : '0.7';
    const changefreq = route === '/' ? 'weekly' : 'monthly';
    return `  <url><loc>${baseUrl}${route}</loc><lastmod>${today}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

const robots = `User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /demo\nDisallow: /private\n\nSitemap: ${baseUrl}/sitemap.xml\n`;

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);

console.log(`Generated sitemap.xml with ${routes.length} routes`);
