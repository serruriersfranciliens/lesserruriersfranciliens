import { company } from '@/content/company';
import { cn } from '@/lib/utils';

// Official logos from the Meta brand kits (Facebook primary logo, Instagram gradient
// glyph), resized to 96 px. Brand rules: never recolor them, and never write the word
// "Facebook" next to its logo, so the links are icons only (named via aria-label).
const networks = [
  { name: 'Instagram', href: company.social.instagram, src: '/images/instagram-96.webp' },
  { name: 'Facebook', href: company.social.facebook, src: '/images/facebook-96.webp' },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn('flex flex-wrap items-center gap-4', className)}>
      {networks.map(({ name, href, src }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
            className="block transition-opacity hover:opacity-80"
          >
            <img src={src} alt="" width={96} height={96} loading="lazy" className="size-7" />
          </a>
        </li>
      ))}
    </ul>
  );
}
