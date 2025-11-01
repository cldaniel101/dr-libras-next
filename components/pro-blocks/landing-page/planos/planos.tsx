"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Check, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { VariantProps } from "class-variance-authority";

const pricingData = {
  tagline: "Planos Dr Libras",
  title: "Planos com consultas virtuais ilimitadas",
  description: [
    "Planos com consultas virtuais ilimitadas com intérprete em Libras, para você, sua família ou sua empresa, sem burocracia.",
  ],
  referenceHighlight:
    "Quanto custa a sua saúde e o seu bem-estar? Descubra os benefícios dos nossos planos de assinatura 100% digitais e sem taxa de contratação.",
  plans: [
    {
      name: "Plano Individual",
      featureIntro: "Benefícios incluídos:",
      features: [
        {
          name: "Consultas virtuais ilimitadas com intérprete em Libras",
          tooltip:
            "Acesse médicos e especialistas com suporte em Libras sempre que precisar.",
        },
        {
          name: "Acesso fácil por SMS, e-mail ou WhatsApp",
          tooltip: "Receba o link da consulta pelo canal que preferir.",
        },
        {
          name: "Atendimento humanizado e seguro",
          tooltip:
            "Equipe especializada no atendimento à comunidade surda, com sigilo e cuidado.",
        },
        {
          name: "Cashback de pagamento (NOVO)",
          tooltip:
            "Parte do valor das mensalidades retorna para você quando os pagamentos estão em dia.",
        },
        {
          name: "Cupons de sorteios mensais (NOVO)",
          tooltip:
            "Participe de sorteios exclusivos com prêmios pensados para a comunidade Dr Libras.",
        },
      ],
      price: null,
      priceLabel: "A definir",
      priceDescription: "Sob consulta",
      variant: "outline",
      ctaLabel: "Quero Conhecer",
    },
    {
      name: "Plano Familiar",
      featureIntro: "Tudo do plano Individual, mais:",
      features: [
        {
          name: "Cobertura estendida para dependentes",
          tooltip: "Inclui titular + dependentes com o mesmo acesso ilimitado.",
        },
        {
          name: "Cashback de indicação (NOVO)",
          tooltip:
            "Ganhe bônus quando alguém indicado por você fecha um plano Dr Libras.",
        },
        {
          name: "Cashback de pagamento",
          tooltip:
            "As famílias também recebem parte da mensalidade de volta ao manterem os pagamentos em dia.",
        },
        {
          name: "Cupons de sorteios",
          tooltip:
            "Mais chances de participar das campanhas exclusivas da Dr Libras.",
        },
      ],
      price: null,
      priceLabel: "A definir",
      priceDescription: "Sob consulta",
      variant: "default",
      highlighted: true,
      ctaLabel: "Quero Conhecer",
    },
    {
      name: "Plano Empresarial",
      featureIntro: "Tudo do plano Familiar, mais:",
      features: [
        {
          name: "Adesão simplificada para colaboradores",
          tooltip:
            "Onboarding guiado para integrar colaboradores surdos e ouvintes ao mesmo tempo.",
        },
        {
          name: "Cashback de indicação corporativa",
          tooltip:
            "Bônus para a empresa a cada novo colaborador indicado que fecha o plano.",
        },
        {
          name: "Cashback de pagamento",
          tooltip:
            "Retorno financeiro para a empresa com base nos pagamentos em dia.",
        },
        {
          name: "Cupons de sorteios especiais",
          tooltip:
            "Campanhas dedicadas para engajar toda a equipe com benefícios em Libras.",
        },
        {
          name: "Canal direto com a equipe comercial",
          tooltip:
            "Atendimento ágil para personalizar os benefícios e tirar dúvidas do RH.",
        },
      ],
      price: null,
      priceLabel: "A definir",
      priceDescription: "Sob consulta",
      variant: "outline",
      ctaLabel: "Quero Conhecer",
      ctaHref: "/para-empresas",
    },
  ],
};

export function PlanosSection() {
  return (
    <section
      className="bg-secondary section-padding-y border-b"
      aria-labelledby="pricing-section-title-3"
      id="planos"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          <div className="section-title-gap-lg flex max-w-3xl flex-col items-center text-center">
            <Tagline>{pricingData.tagline}</Tagline>
            <h2
              id="pricing-section-title-3"
              className="heading-lg text-foreground"
            >
              {pricingData.title}
            </h2>
            <div className="flex flex-col gap-10 text-muted-foreground text-sm sm:text-base">
              {pricingData.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <p className="font-medium text-foreground">
                {pricingData.referenceHighlight}
              </p>
            </div>
          </div>

          <div className="grid w-full gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {pricingData.plans.map((plan) => {
              return (
                <Card
                  key={plan.name}
                  className={`flex h-full flex-col p-6 shadow-none sm:p-10 ${
                    plan.highlighted
                      ? "border-primary/40 shadow-[0px_0px_0px_6px_rgba(7,46,106,0.05)]"
                      : ""
                  }`}
                >
                  <CardContent className="flex h-full flex-col gap-8 p-0">
                    <div className="flex flex-col gap-6">
                      <div className="relative flex flex-col gap-3">
                        <h3
                          className={`text-lg font-semibold ${
                            plan.highlighted ? "text-primary" : ""
                          }`}
                        >
                          {plan.name}
                        </h3>
                      </div>

                      <div className="flex flex-col gap-1">
                        {typeof plan.price === "number" ? (
                          <div className="flex items-end gap-1">
                            <span className="text-4xl font-semibold">
                              R$
                              {(plan.price as number).toLocaleString("pt-BR", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                            {"period" in plan && typeof (plan as any).period === "string" ? (
                              <span className="text-muted-foreground text-base">
                                {(plan as any).period}
                              </span>
                            ) : null}
                          </div>
                        ) : (
                          <div className="flex flex-col">
                            <span className="text-3xl font-semibold uppercase tracking-wide">
                              {plan.priceLabel}
                            </span>
                            {plan.priceDescription ? (
                              <span className="text-muted-foreground text-sm">
                                {plan.priceDescription}
                              </span>
                            ) : null}
                          </div>
                        )}
                      </div>

                      <Button
                        variant={
                          plan.variant as VariantProps<
                            typeof buttonVariants
                          >["variant"]
                        }
                        className="w-full"
                        asChild={Boolean(plan.ctaHref)}
                      >
                        {plan.ctaHref ? (
                          <Link href={plan.ctaHref}>{plan.ctaLabel}</Link>
                        ) : (
                          <span>{plan.ctaLabel}</span>
                        )}
                      </Button>
                    </div>

                    <div className="flex flex-col gap-4">
                      <p className="text-sm font-medium text-foreground">
                        {plan.featureIntro}
                      </p>
                      <div className="flex flex-col gap-4">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Check className="text-primary h-5 w-5 shrink-0" />
                            <span className="text-muted-foreground flex-1 text-sm leading-relaxed">
                              {feature.name}
                            </span>
                            {feature.tooltip ? (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <button
                                      type="button"
                                      className="text-muted-foreground inline-flex h-6 w-6 items-center justify-center rounded-full border border-transparent transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                      aria-label={`Mais informações sobre ${feature.name}`}
                                    >
                                      <Info className="h-4 w-4 opacity-70" />
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent className="max-w-xs text-center">
                                    <p className="text-center">{feature.tooltip}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
