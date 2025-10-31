"use client";

import { Logo } from "@/components/pro-blocks/logo";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer1() {
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
            <Link
              href="#quem-somos"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Quem Somos
            </Link>
            <Link
              href="/para-voce"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sou Paciente
            </Link>
            <Link
              href="/para-empresas"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Para Empresas
            </Link>
            <Link
              href="/planos"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Planos
            </Link>
            <Link
              href="/embaixador"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Seja um Embaixador
            </Link>
            <Link
              href="/clube"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Clube de Benefícios
            </Link>
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
              Privacy Policy
            </Link>
            <Link
              href="https://www.shadcndesign.com/pro-blocks"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="https://www.shadcndesign.com/pro-blocks"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookies Settings
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
