import { Link } from 'react-router';
import { Clock, MapPin, Phone, Timer } from 'lucide-react';
import { company } from '@/content/company';
import { departmentNames, nearbyCities, type City } from '@/content/cities';
import { housingAdvice } from '@/content/city-texts';
import { services } from '@/content/services';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CtaBand } from '@/components/CtaBand';
import { PageHeader } from '@/components/PageHeader';
import { IconBadge, Section, SectionHeading } from '@/components/Section';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

const chip = 'rounded-full bg-muted px-3 py-1.5 text-sm';

export default function CityPage({ city }: { city: City }) {
  const department = departmentNames[city.department];
  const nearby = nearbyCities(city);

  return (
    <>
      <PageHeader
        eyebrow={`${department} (${city.department})`}
        title={`Serrurier ${city.locative}`}
      >
        {city.intro}
      </PageHeader>

      <Section>
        <div data-reveal="stagger" className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="mb-4 text-4xl md:text-5xl">Vos demandes {city.locative}</h2>
            <p className="mb-8 text-lg text-muted-foreground">{city.focus}</p>
            <h3 className="mb-3 text-2xl">Bon à savoir</h3>
            <p className="mb-8 text-muted-foreground">{city.details}</p>
            <h3 className="mb-3 text-2xl">Quartiers et repères</h3>
            <ul
              className="flex flex-wrap gap-2"
              aria-label={`Quartiers desservis ${city.locative}`}
            >
              {city.districts.map((d) => (
                <li key={d} className={chip}>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <Card className="self-start bg-cream ring-0">
            <CardContent className="grid gap-3">
              <p className="flex items-center gap-3 font-medium">
                <Timer className="size-5 shrink-0 text-brand-ink" aria-hidden />
                Intervention en moins d’1 h {city.locative}
              </p>
              <p className="flex items-center gap-3 font-medium">
                <Clock className="size-5 shrink-0 text-brand-ink" aria-hidden /> {company.hours}
              </p>
              <p className="flex items-center gap-3 font-medium">
                <MapPin className="size-5 shrink-0 text-brand-ink" aria-hidden /> {city.name} (
                {city.postalCode})
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ size: 'xl' })}
                >
                  <WhatsAppIcon variant="black" />
                  WhatsApp
                </a>
                <a
                  href={company.phoneHref}
                  className={buttonVariants({ size: 'xl', variant: 'outline' })}
                >
                  <Phone aria-hidden />
                  {company.phone}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading
          eyebrow="Nos interventions"
          title={`Ce que nous faisons ${city.locative}`}
          lead="Devis gratuit et détaillé avant toute intervention. Aucun travail n’est engagé sans votre accord."
        />
        <div data-reveal="stagger" className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Card key={s.id} className="p-2">
              <CardContent>
                <IconBadge>
                  <s.icon className="size-6" aria-hidden />
                </IconBadge>
                <h3 className="mb-3 text-3xl">
                  <Link to={`/competences#${s.id}`} className="hover:text-brand-ink">
                    {s.title}
                  </Link>
                </h3>
                <ul className="grid gap-1.5 text-sm text-muted-foreground">
                  {s.items.map((item) => (
                    <li key={item.title}>{item.title}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Nos conseils" title={`Le bâti ${city.locative}`} />
        <div data-reveal="stagger" className="grid gap-x-10 gap-y-6 md:grid-cols-2">
          {city.housing.map((h) => (
            <div key={h} className="border-t-2 pt-6">
              <h3 className="mb-2 text-3xl">{housingAdvice[h].title}</h3>
              <p className="text-muted-foreground">{housingAdvice[h].text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading eyebrow="À proximité" title="Nous intervenons aussi à côté" />
        <ul data-reveal="stagger" className="flex flex-wrap gap-2">
          {nearby.map((c) => (
            <li key={c.slug}>
              <Link
                to={c.path}
                className={`${chip} inline-block bg-background hover:text-brand-ink`}
              >
                Serrurier {c.locative}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/zones-intervention"
              className={`${chip} inline-block bg-background font-semibold text-brand-ink hover:underline`}
            >
              Toutes nos zones d’intervention
            </Link>
          </li>
        </ul>
      </Section>

      <CtaBand title={`Un serrurier ${city.locative} ?`} />
    </>
  );
}
