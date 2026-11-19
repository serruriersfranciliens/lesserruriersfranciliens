import { Link } from 'react-router';
import { brandPath, brands, brandServices } from '@/content/brands';
import { Card, CardContent } from '@/components/ui/card';
import { CtaBand } from '@/components/CtaBand';
import { PageHeader } from '@/components/PageHeader';
import { Section, SectionHeading } from '@/components/Section';

export default function Brands() {
  return (
    <>
      <PageHeader eyebrow="Marques de serrures" title="Serrurier toutes marques">
        Fichet, Vachette, Bricard, Mul-T-Lock, Kaba… Nous dépannons, remplaçons et faisons évoluer
        les serrures et cylindres des principales marques, à Paris et en Île-de-France.
      </PageHeader>

      <Section>
        <div data-reveal="stagger" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <Link key={b.slug} to={brandPath(b.slug)} className="group">
              <Card className="h-full p-2 transition-colors group-hover:ring-brand">
                <CardContent>
                  <h2 className="mb-1 text-3xl group-hover:text-brand-ink">{b.name}</h2>
                  <p className="mb-3 text-xs tracking-wide text-muted-foreground uppercase">
                    {b.origin}
                  </p>
                  <p className="text-muted-foreground">{b.summary}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading eyebrow="Sur toutes les marques" title="Nos interventions" />
        <div data-reveal="stagger" className="grid gap-x-10 gap-y-6 md:grid-cols-2">
          {brandServices.map((s) => (
            <div key={s.title} className="border-t-2 pt-6">
              <h3 className="mb-2 text-3xl">{s.title}</h3>
              <p className="text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
