// tsc (`npm run build`) only checks .ts files; .astro components are compiled by Astro.
declare module '*.astro' {
  const Component: (props: Record<string, unknown>) => unknown;
  export default Component;
}
