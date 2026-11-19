// Reveals [data-reveal] elements as they scroll into view (styles in index.css).
// Elements already visible when the page loads are left alone, so nothing flashes.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        (entry.target as HTMLElement).dataset.revealState = 'in';
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  );

  // Measured from the top of the document, not the current scroll position.
  const fold = window.innerHeight * 0.92;
  for (const el of document.querySelectorAll<HTMLElement>('[data-reveal]')) {
    if (el.getBoundingClientRect().top + window.scrollY > fold) {
      el.dataset.revealState = 'pending';
      observer.observe(el);
    }
  }
}
