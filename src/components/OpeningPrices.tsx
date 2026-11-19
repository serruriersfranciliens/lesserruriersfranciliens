import { openingPrices, openingPricesNote } from '@/content/pricing';

export function OpeningPrices() {
  return (
    <div>
      <ul data-reveal="stagger" className="grid gap-5 md:grid-cols-3">
        {openingPrices.map((p) => (
          <li
            key={p.title}
            className="flex flex-col rounded-lg border-t-4 border-brand bg-card p-6 shadow-sm"
          >
            <h3 className="mb-2 text-2xl">{p.title}</h3>
            <p className="mb-5 text-sm text-muted-foreground">{p.text}</p>
            <strong className="mt-auto font-heading text-6xl leading-none text-brand-ink">
              {p.price} €<span className="ml-1.5 text-xl">TTC</span>
            </strong>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm text-muted-foreground">{openingPricesNote}</p>
    </div>
  );
}
