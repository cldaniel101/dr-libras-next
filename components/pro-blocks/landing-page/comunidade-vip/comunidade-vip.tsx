"use client";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { TELEGRAM_VIP_LINK } from "@/lib/links";

const vipBenefits = [
  "Sorteios exclusivos",
  "Benefícios antecipados",
  "Cashback especial no lançamento",
  "Novidades em primeira mão",
  "Acesso prioritário à telemedicina",
];

export function ComunidadeVipSection() {
  return (
    <section
      className="bg-background section-padding-y border-b"
      id="comunidade-vip"
      aria-labelledby="vip-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          <div className="section-title-gap-lg flex flex-col gap-4">
            <Tagline>Comunidade VIP</Tagline>
            <h2 id="vip-heading" className="heading-lg text-foreground">
              Entre para o Grupo VIP
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg">
              No grupo VIP você recebe:
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-3 text-base text-muted-foreground sm:grid-cols-2">
            {vipBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-1 rounded-full bg-primary/10 p-1">
                  <Check className="h-4 w-4 text-primary" />
                </span>
                <span className="text-foreground font-medium">{benefit}</span>
              </li>
            ))}
          </ul>

          <div>
            <Button asChild size="lg">
              <Link href={TELEGRAM_VIP_LINK} target="_blank" rel="noopener noreferrer">
                Entrar no Grupo VIP
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

