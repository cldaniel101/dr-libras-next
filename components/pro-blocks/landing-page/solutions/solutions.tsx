"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const solutions = [
  {
    title: "Telemedicina para você",
    href: "/para-voce",
    comingSoon: false,
    value: "24/7",
    description: "Atendimento médico remoto disponível a qualquer hora do dia, com intérpretes de Libras qualificados para garantir sua saúde e bem-estar.",
  },
  {
    title: "Planos com consultas ilimitadas",
    href: "#planos",
    comingSoon: false,
    value: "Ilimitadas",
    description: "Acesso ilimitado a consultas médicas por videochamada com intérprete em Libras, sem limites mensais ou anuais.",
  },
  {
    title: "Atendimento para empresas (inclusão de colaboradores surdos)",
    href: "/para-empresas",
    comingSoon: false,
    value: "100%",
    description: "Soluções corporativas completas para promover inclusão e saúde dos colaboradores surdos da sua empresa.",
  },
  {
    title: "Clube de Benefícios",
    href: "#clube",
    comingSoon: false,
    value: "+50",
    description: "Descontos exclusivos em serviços de saúde, farmácias, exames e muito mais para membros do clube.",
  },
  {
    title: "Seja um Embaixador",
    href: "/embaixador",
    comingSoon: false,
    value: "R$ 0",
    description: "Programa de embaixadores que oferece benefícios exclusivos e descontos especiais para quem ajuda a divulgar nossa causa.",
  },
  {
    title: "Novos serviços",
    subtitle: "Social, Educacional, Viagens, Banco Digital",
    href: "#",
    comingSoon: true,
  },
];

export function SolutionsSection() {
  return (
    <section className="bg-background section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Soluções</Tagline>
            <h2 className="heading-lg text-foreground">Destaques das Soluções</h2>
            <p className="text-muted-foreground">
              Conheça todas as formas de acesso aos nossos serviços de telemedicina com intérprete em Libras
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {solutions.map((solution, index) => {
              if (solution.comingSoon) {
                return (
                  <Card 
                    key={index}
                    className="bg-secondary rounded-xl border-none p-6 shadow-none cursor-not-allowed opacity-75"
                  >
                    <CardContent className="flex flex-col gap-3 p-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-primary font-semibold text-lg">
                          {solution.title}
                        </h3>
                        <Badge variant="secondary" className="shrink-0">
                          Em breve
                        </Badge>
                      </div>
                      {solution.subtitle && (
                        <p className="text-muted-foreground text-sm">
                          {solution.subtitle}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                );
              }

              return (
                <Link key={index} href={solution.href} className="block h-full">
                  <Card className="bg-secondary rounded-xl border-none p-6 shadow-none transition-all hover:shadow-md hover:scale-[1.02] h-full flex flex-col">
                    <CardContent className="flex flex-col gap-2 p-0 h-full flex-1 md:gap-3">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-primary font-semibold text-lg">
                          {solution.title}
                        </h3>
                        <ArrowRight className="text-primary h-5 w-5 shrink-0 mt-0.5" />
                      </div>
                      {solution.value && (
                        <span className="text-foreground text-3xl font-semibold md:text-4xl">
                          {solution.value}
                        </span>
                      )}
                      {solution.description && (
                        <p className="text-muted-foreground text-base">
                          {solution.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
