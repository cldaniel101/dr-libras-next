"use client";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Card, CardContent } from "@/components/ui/card";
import { Milestone } from "lucide-react";

const roadmapItems = [
  {
    milestone: "1.000 clientes",
    label: "Telemedicina ativa",
  },
  {
    milestone: "2.000 clientes",
    label: "Plataforma Educacional (Libras+)",
  },
  {
    milestone: "5.000 clientes",
    label: "Serviço Social + Marketplace (MarketLibras)",
  },
  {
    milestone: "10.000 clientes",
    label: "Banco Digital (LibrasConta)",
  },
];

export function RoadmapSection() {
  return (
    <section
      className="bg-secondary section-padding-y border-b"
      id="roadmap"
      aria-labelledby="roadmap-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-2xl flex-col items-center text-center">
          <Tagline>Metas</Tagline>
          <h2 id="roadmap-heading" className="heading-lg text-foreground">
            Nossa jornada — juntos somos mais fortes
          </h2>
          <p className="text-muted-foreground text-base">
            Cada novo cliente libera um novo benefício para toda a comunidade.
          </p>
        </div>

        <div className="grid gap-4">
          {roadmapItems.map((item) => (
            <Card key={item.milestone} className="border-none bg-background shadow-none">
              <CardContent className="flex items-center gap-4 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Milestone className="h-6 w-6" />
                </span>
                <div className="flex flex-col gap-1 text-left">
                  <span className="text-foreground text-lg font-semibold">
                    📌 {item.milestone}
                  </span>
                  <span className="text-muted-foreground text-base">
                    {item.label}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-base font-medium text-foreground">
          Você faz parte da construção desta história.
        </p>
      </div>
    </section>
  );
}

