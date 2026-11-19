import { Link } from 'react-router';
import { KeyRound } from 'lucide-react';
import { brandPath, brands, brandServices, type Brand } from '@/content/brands';
import { company } from '@/content/company';
import { Card, CardContent } from '@/components/ui/card';
import { CtaBand } from '@/components/CtaBand';
import { PageHeader } from '@/components/PageHeader';
import { Section, SectionHeading } from '@/components/Section';

export default function BrandPage({ brand }: { brand: Brand }) {
  const others = brands.filter((b) => b.slug !== brand.slug);

  return (
    <>
      <PageHeader eyebrow={`Marques · ${brand.origin}`} title={`Serrurier ${brand.name}`}>
        {brand.intro}
      </PageHeader>

      <Section>
        <SectionHeading
          eyebrow="Produits"
          title={`Les produits ${brand.name} que nous rencontrons`}
          lead={brand.context}
        />
        <div data-reveal="stagger" className="grid gap-6 md:grid-cols-3">
          {brand.products.map((p) => (
            <Card key={p.title} className="p-2">
              <CardContent>
                <h3 className="mb-2 text-3xl">{p.title}</h3>
                <p className="text-muted-foreground">{p.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading
          eyebrow="Nos interventions"
          title={`Ce que nous faisons sur ${brand.name}`}
        />
        <div data-reveal="stagger" className="grid gap-x-10 gap-y-6 md:grid-cols-2">
          {brandServices.map((s) => (
            <div key={s.title} className="border-t-2 pt-6">
              <h3 className="mb-2 text-3xl">{s.title}</h3>
              <p className="text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
        <Card data-reveal="up" className="mt-10 bg-cream ring-0">
          <CardContent className="flex gap-4">
            <KeyRound className="mt-1 size-6 shrink-0 text-brand-ink" aria-hidden />
            <p>
              <strong>Clés protégées :</strong> pour un cylindre {brand.name} à clés protégées, une
              copie ne peut être faite que sur présentation de la carte de propriété livrée avec le
              cylindre. Sans cette carte, nous remplaçons le cylindre et vous remettons une nouvelle
              carte.
            </p>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <SectionHeading eyebrow="Toutes marques" title="Nous intervenons aussi sur" />
        <ul data-reveal="stagger" className="mb-8 flex flex-wrap gap-2">
          {others.map((b) => (
            <li key={b.slug}>
              <Link
                to={brandPath(b.slug)}
                className="inline-block rounded-full bg-muted px-3 py-1.5 text-sm hover:text-brand-ink"
              >
                {b.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground">
          {company.name} n’est ni distributeur officiel ni affilié à {brand.name}. Les marques
          citées appartiennent à leurs propriétaires respectifs et ne sont mentionnées que pour
          indiquer les équipements sur lesquels nous intervenons.
        </p>
      </Section>

      <CtaBand title={`Une serrure ${brand.name} à dépanner ?`} />
    </>
  );
}
