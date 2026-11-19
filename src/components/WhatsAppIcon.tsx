import { cn } from '@/lib/utils';

// WhatsApp icon: https://commons.wikimedia.org/wiki/File:WhatsApp_icon.png
// (CC BY-SA 4.0, credited on /mentions-legales), resized to 96 px.
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <img
      src="/images/whatsapp-96.webp"
      alt=""
      width={96}
      height={96}
      className={cn('size-5 shrink-0', className)}
    />
  );
}
