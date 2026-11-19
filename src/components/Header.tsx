import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Menu, Phone } from 'lucide-react';
import { company } from '@/content/company';
import { navItems } from '@/content/navigation';
import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { cn } from '@/lib/utils';

function Brand() {
  return (
    <Link to="/" className="mr-auto flex items-center">
      <span className="flex flex-col font-heading text-[1.45rem] leading-[0.85] font-semibold uppercase">
        <span>Les Serruriers</span>
        <span className="text-brand-ink">Franciliens</span>
        <span className="sr-only">, accueil</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="container-site flex h-19 items-center gap-6">
        <Brand />

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'relative block rounded-md px-3 py-2 text-[0.92rem] font-medium transition-colors hover:text-brand-ink',
                      isActive &&
                        'text-brand-ink after:absolute after:inset-x-1.5 after:bottom-0 after:h-0.5 after:bg-brand',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={company.whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className={cn(
            buttonVariants({ size: 'xl', variant: 'outline' }),
            'hidden px-3 xl:inline-flex',
          )}
        >
          <WhatsAppIcon className="size-6" />
        </a>
        <a
          href={company.phoneHref}
          className={cn(buttonVariants({ size: 'xl' }), 'hidden xl:inline-flex')}
        >
          <Phone aria-hidden />
          {company.phone}
        </a>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={<Button variant="ghost" size="icon-lg" className="lg:hidden" />}
            aria-label="Ouvrir le menu"
          >
            <Menu className="size-6" aria-hidden />
          </SheetTrigger>
          <SheetContent side="right" className="w-[85%] max-w-sm">
            <SheetHeader>
              <SheetTitle className="font-heading text-2xl uppercase">Menu</SheetTitle>
            </SheetHeader>
            <nav aria-label="Navigation mobile" className="px-4">
              <ul>
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        cn(
                          'block border-b py-3.5 text-base font-medium',
                          isActive && 'border-l-4 border-l-brand pl-3 text-brand-ink',
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto grid gap-3 p-4">
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ size: 'xl' }), 'w-full')}
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              <a
                href={company.phoneHref}
                className={cn(buttonVariants({ size: 'xl', variant: 'outline' }), 'w-full')}
              >
                <Phone aria-hidden />
                {company.phone}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
