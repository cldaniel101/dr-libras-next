"use client";

import { Logo } from "@/components/pro-blocks/logo";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

// Define your menu items for multi-page scenario
const MENU_ITEMS = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Clube de Benefícios", href: "#clube" },
  { label: "Sou Paciente", href: "/para-voce" },
  { label: "Para Empresas", href: "/para-empresas" },
  { label: "Seja um Embaixador", href: "/embaixador" },
] as const;

export function Footer1() {
  const pathname = usePathname();

  // Função para determinar o href correto baseado na página atual
  const getHref = (href: string) => {
    // Se é um anchor link e não estamos na home, redireciona para home com o anchor
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
        <div className="flex w-full flex-col items-center gap-12 text-center">
          {/* Logo Section */}
          <Link href="/" aria-label="Go to homepage">
            <Logo />
          </Link>

          {/* Main Navigation */}
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
          {/* Copyright Text */}
          <p className="text-muted-foreground text-center lg:text-left">
            Criado por{" "}
            <Link
              href="https://www.danieldev.dev.br"
              className="underline"
              target="_blank"
            >
              Daniel Dev
            </Link>{""}
            . Todos os direitos reservados.
          </p>

          {/* Legal Navigation */}
          <nav
            className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8"
            aria-label="Legal links"
          >
            <Link
              href="https://www.shadcndesign.com/pro-blocks"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="https://www.shadcndesign.com/pro-blocks"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos de Serviço
            </Link>
            <Link
              href="https://www.shadcndesign.com/pro-blocks"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Configurações de Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
