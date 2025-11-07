"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type SolutionHighlight = {
  title: string;
  description: string;
  status?: string;
  statusVariant?: "default" | "secondary" | "outline" | "destructive";
  href?: string;
  meta?: string;
  note?: string;
};

const solutions: SolutionHighlight[] = [
  {
    title: "Telemedicina em Libras",
    description: "Consultas acessíveis e sem barreiras.",
    status: "Em breve",
    statusVariant: "secondary",
  },
  {
    title: "Clube de Descontos",
    description: "Ofertas e benefícios exclusivos.",
    status: "Disponível",
    statusVariant: "default",
    href: "#clube",
  },
  {
    title: "Educação",
    description: "Aulas, instrução, cursos e desenvolvimento pessoal.",
    status: "Em breve",
    statusVariant: "secondary",
  },
  {
    title: "Serviço Social",
    description: "Apoio e orientação. Ajudando quem mais precisa.",
    status: "Em breve",
    statusVariant: "secondary",
  },
  {
    title: "Banco Digital",
    note: "(Nome a definir)",
    description: "Conta acessível para Surdos e PcDs.",
    meta: "Meta: 10.000 clientes",
  },
  {
    title: "Viagens Acessíveis",
    description: "Experiências planejadas para Surdos.",
    status: "Em breve",
    statusVariant: "secondary",
  },
];

export function SolutionsSection() {
  return (
    <section className="bg-background section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Benefícios &amp; Projetos</Tagline>
            <h2 className="heading-lg text-foreground">O que estamos preparando para você</h2>
            <div className="text-muted-foreground flex flex-col gap-3">
              <p>Estamos construindo um ecossistema completo para a comunidade Surda.</p>
              <p>Tudo pensado para dar mais autonomia, inclusão e qualidade de vida.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {solutions.map((solution, index) => {
              const cardContent = (
                <Card
                  key={index}
                  className={`bg-secondary rounded-xl border-none p-6 shadow-none ${
                    solution.href
                      ? "transition-all hover:shadow-md hover:scale-[1.02] h-full flex flex-col"
                      : "cursor-default opacity-100"
                  }`}
                >
                  <CardContent className="flex h-full flex-col gap-3 p-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-primary font-semibold text-lg">
                          {solution.title}
                        </h3>
                        {solution.note && (
                          <span className="text-muted-foreground text-sm">
                            {solution.note}
                          </span>
                        )}
                      </div>
                      {solution.status && (
                        <Badge
                          variant={solution.statusVariant ?? "secondary"}
                          className="shrink-0"
                        >
                          {solution.status}
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground text-base">
                      {solution.description}
                    </p>
                    {solution.meta && (
                      <p className="text-sm font-medium text-foreground">
                        {solution.meta}
                      </p>
                    )}
                  </CardContent>
                </Card>
              );

              if (solution.href) {
                return (
                  <Link key={index} href={solution.href} className="block h-full">
                    {cardContent}
                  </Link>
                );
              }

              return <div key={index} className="h-full">{cardContent}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
