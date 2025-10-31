"use client";

import { Logo } from "@/components/pro-blocks/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

// Define your menu items for multi-page scenario
const MENU_ITEMS = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Sou Paciente", href: "/para-voce" },
  { label: "Para Empresas", href: "/para-empresas" },
  { label: "Planos", href: "/planos" },
  { label: "Seja um Embaixador", href: "/embaixador" },
  { label: "Clube de Benefícios", href: "/clube" },
  // Estes terão FUTURAMENTE
  // { label: "Social", href: "/social" },
  // { label: "Educacional", href: "/educacional" },
  // { label: "Viagens", href: "/viagens" },
  // { label: "Banco Digital", href: "/banco-digital" },
] as const;

interface NavMenuItemsProps {
  className?: string;
  onNavigate?: () => void;
}

const NavMenuItems = ({ className = "", onNavigate }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-1 md:flex-row ${className}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href} passHref legacyBehavior>
        <a
          onClick={onNavigate}
          className="w-full md:w-auto"
          tabIndex={0}
          style={{ textDecoration: "none" }}
        >
          <Button variant="ghost" className="w-full md:w-auto">{label}</Button>
        </a>
      </Link>
    ))}
  </div>
);

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-background sticky top-0 isolate z-50 border-b py-3.5 md:py-4">
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end gap-5 md:flex md:items-center">
          <NavMenuItems />
          <div className="flex gap-2">
            <Link href="/consultorio-online">
              <Button variant="outline">Consultório online</Button>
            </Link>
            <Link href="/contrate-agora">
              <Button>Contrate agora</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-4 pb-2.5 md:hidden">
            <NavMenuItems onNavigate={closeMenu} />
            <div className="flex flex-col gap-2">
              <Link href="/consultorio-online">
                <Button variant="outline" className="w-full" onClick={closeMenu}>
                  Consultório online
                </Button>
              </Link>
              <Link href="/contrate-agora">
                <Button className="w-full" onClick={closeMenu}>
                  Contrate agora
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
