"use client";

import { Logo } from "@/components/pro-blocks/logo";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

const MENU_ITEMS = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Clube de Benefícios", href: "#clube" },
  { label: "Sou Paciente", href: "/para-voce" },
  { label: "Para Empresas", href: "/para-empresas" },
  { label: "Seja um Embaixador", href: "/embaixador" },
] as const;

const LEGAL_LINKS = [
  {
    label: "Política de Privacidade",
    href: "https://www.shadcndesign.com/pro-blocks",
  },
  {
    label: "Termos de Serviço",
    href: "https://www.shadcndesign.com/pro-blocks",
  },
  {
    label: "Configurações de Cookies",
    href: "https://www.shadcndesign.com/pro-blocks",
  },
] as const;

export function Footer1() {
  const pathname = usePathname();

  const getHref = (href: string) => {
    if (href.startsWith("#") && pathname !== "/") {
      return `/${href}`;
    }
    return href;
  };

  return (
    <footer
      className="bg-background section-padding-y"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-12 lg:gap-16">
        {/* Top Section */}
        <div className="flex w-full flex-col items-center gap-10 text-center">
          {/* Logo Section */}
          <Link href="/" aria-label="Go to homepage">
            <img
              src="/logos/LOGO PRINCIPAL 2 - png.png"
              alt="Logo Doutor Libras"
              width={135}
              height={36}
              className="w-[120px] h-full md:w-[135px] md:h-full"
              style={{ objectFit: "contain" }}
              draggable={false}
            />
          </Link>

          <div className="flex flex-col gap-3 text-muted-foreground text-base max-w-xl">
            <p>Doutor Libras — Saúde, inclusão e oportunidades para Surdos.</p>
            <p>Juntos, construindo acessibilidade real.</p>
          </div>

          <nav
            className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8"
            aria-label="Footer navigation"
          >
            {MENU_ITEMS.map(({ label, href }) => (
              <Link
                key={label}
                href={getHref(href)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Section Divider */}
        <Separator role="presentation" />

        {/* Bottom Section */}
        <div className="flex w-full flex-col-reverse items-center gap-12 text-sm lg:flex-row lg:justify-between lg:gap-6">
          <p className="text-muted-foreground text-center lg:text-left">
            Criado por{" "}
            <Link
              href="https://www.danieldev.dev.br"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Daniel Dev
            </Link>{" "}
            . Todos os direitos reservados.
          </p>

          <nav
            className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8"
            aria-label="Legal links"
          >
            {LEGAL_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
                rel="noopener noreferrer"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
