// { as: 'url' } tells Vite to return the processed URL string (with hash)
// rather than the module object, bypassing Astro's image pipeline.
const modules = import.meta.glob(
  '/src/assets/case-studies/*.png',
  { as: 'url', eager: true }
) as Record<string, string>;

export function getLogoSrc(filename: string): string {
  const key = `/src/assets/case-studies/${filename}`;
  return modules[key] ?? '';
}
