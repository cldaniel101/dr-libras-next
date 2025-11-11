"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";

type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];

type PlanFeature = {
  id: string;
  name: string;
  tooltip?: string;
  badgeWhenCore?: string;
};

type FeatureStatus = "core" | "differential" | "inherited";

type PlanFeatureWithStatus = PlanFeature & {
  status: FeatureStatus;
};

type Plan = {
  name: string;
  featureIntro: string;
  features: PlanFeature[];
  price: number | null;
  priceLabel: string;
  priceDescription?: string;
  variant: ButtonVariant;
  highlighted?: boolean;
  ctaLabel: string;
  ctaHref?: string;
};

type PlanWithFeatures = Plan & {
  allFeatures: PlanFeatureWithStatus[];
};

const pricingData: {
  tagline: string;
  title: string;
  description: string[];
  referenceHighlight: string;
  plans: Plan[];
} = {
  tagline: "Planos Doutor Libras",
  title: "Planos com consultas virtuais ilimitadas",
  description: [
    "Planos com consultas virtuais ilimitadas com intérprete em Libras, para você, sua família ou sua empresa, sem burocracia.",
  ],
  referenceHighlight:
    "Quanto custa a sua saúde e o seu bem-estar? Descubra os benefícios dos nossos planos de assinatura 100% digitais e sem taxa de contratação.",
  plans: [
    {
      name: "Plano Individual",
      featureIntro: "Benefícios incluídos no plano Individual", 
      features: [
        {
          id: "consultas-ilimitadas",
          name: "Consultas virtuais ilimitadas com intérprete em Libras",
          tooltip:
            "Acesse médicos e especialistas com suporte em Libras sempre que precisar.",
        },
        {
          id: "acesso-multicanal",
          name: "Acesso fácil por SMS, e-mail ou WhatsApp",
          tooltip: "Receba o link da consulta pelo canal que preferir.",
        },
        {
          id: "atendimento-humanizado",
          name: "Atendimento humanizado e seguro",
          tooltip:
            "Equipe especializada no atendimento à comunidade surda, com sigilo e cuidado.",
        },
        {
          id: "cashback-pagamento",
          name: "Cashback de pagamento",
          tooltip:
            "Parte do valor das mensalidades retorna para você quando os pagamentos estão em dia.",
          badgeWhenCore: "Novo",
        },
        {
          id: "cupons-sorteios",
          name: "Cupons de sorteios mensais",
          tooltip:
            "Participe de sorteios exclusivos com prêmios pensados para a comunidade Doutor Libras.",
          badgeWhenCore: "Novo",
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
      featureIntro: "Diferenciais do Plano Familiar",
      features: [
        {
          id: "cobertura-dependentes",
          name: "Cobertura estendida para dependentes",
          tooltip: "Inclui titular + dependentes com o mesmo acesso ilimitado.",
        },
        {
          id: "cashback-indicacao",
          name: "Cashback de indicação",
          tooltip:
            "Ganhe bônus quando alguém indicado por você fecha um plano Doutor Libras.",
        },
        {
          id: "cashback-pagamento-familiar",
          name: "Cashback de pagamento familiar",
          tooltip:
            "As famílias recebem parte da mensalidade de volta ao manterem os pagamentos em dia.",
        },
        {
          id: "cupons-sorteios-familia",
          name: "Cupons de sorteios extras",
          tooltip:
            "Mais chances de participar das campanhas exclusivas da Doutor Libras.",
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
      featureIntro: "Diferenciais do Plano Empresarial",
      features: [
        {
          id: "adesao-simplificada",
          name: "Adesão simplificada para colaboradores",
          tooltip:
            "Onboarding guiado para integrar colaboradores surdos e ouvintes ao mesmo tempo.",
        },
        {
          id: "cashback-indicacao-corporativa",
          name: "Cashback de indicação corporativa",
          tooltip:
            "Bônus para a empresa a cada novo colaborador indicado que fecha o plano.",
        },
        {
          id: "cashback-pagamento-corporativo",
          name: "Cashback de pagamento corporativo",
          tooltip:
            "Retorno financeiro para a empresa com base nos pagamentos em dia.",
        },
        {
          id: "cupons-sorteios-especiais",
          name: "Cupons de sorteios especiais",
          tooltip:
            "Campanhas dedicadas para engajar toda a equipe com benefícios em Libras.",
        },
        {
          id: "canal-comercial",
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
  const plansWithFeatures = React.useMemo<PlanWithFeatures[]>(() => {
    return pricingData.plans.reduce<PlanWithFeatures[]>((acc, plan, index) => {
      const previousPlan = acc[index - 1];
      const inheritedFeatures =
        previousPlan?.allFeatures.map((feature) => ({
          ...feature,
          status: "inherited" as FeatureStatus,
        })) ?? [];
      const inheritedIds = new Set(
        inheritedFeatures.map((feature) => feature.id),
      );

      const newFeatures = plan.features
        .filter((feature) => !inheritedIds.has(feature.id))
        .map<PlanFeatureWithStatus>((feature) => ({
          ...feature,
          status: index === 0 ? "core" : "differential",
        }));

      const currentPlan: PlanWithFeatures = {
        ...plan,
        allFeatures:
          index === 0 ? newFeatures : [...inheritedFeatures, ...newFeatures],
      };

      acc.push(currentPlan);

      return acc;
    }, []);
  }, []);

  return (
    <section
      className="section-padding-y border-b text-white"
      aria-labelledby="pricing-section-title-3"
      id="planos"
      style={{
        background:
          "radial-gradient(120% 120% at 50% -10%, rgba(34,28,64,0.95) 0%, rgba(34,28,64,0.92) 45%, rgba(31,41,55,0.94) 75%, rgba(19,24,40,0.98) 100%)",
      }}
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-10 md:gap-14">
          <div className="section-title-gap-lg flex max-w-3xl flex-col items-center text-center">
            <Tagline variant="white">{pricingData.tagline}</Tagline>
            <h2
              id="pricing-section-title-3"
              className="heading-lg text-white !text-white"
            >
              {pricingData.title}
            </h2>
            <div className="flex flex-col gap-8 text-sm leading-relaxed text-white/80 sm:text-base">
              {pricingData.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <p className="font-semibold text-white">
                {pricingData.referenceHighlight}
              </p>
            </div>
          </div>

          <div className="grid w-full gap-5 md:grid-cols-2 lg:grid-cols-3">
            {plansWithFeatures.map((plan, planIndex) => {
              const inheritedFeatures = plan.allFeatures.filter(
                (feature) => feature.status === "inherited",
              );
              const exclusiveFeatures = plan.allFeatures.filter(
                (feature) => feature.status !== "inherited",
              );
              const inheritedIntro =
                planIndex > 0
                  ? `Tudo do ${pricingData.plans[planIndex - 1].name}:`
                  : null;

              return (
                <Card
                  key={plan.name}
                  className={cn(
                    "flex h-full flex-col border border-white/20 p-6 text-white shadow-none backdrop-blur-md sm:p-10",
                    plan.highlighted
                      ? "border-[rgba(112,186,65,0.6)] shadow-[0_24px_48px_-20px_rgba(0,0,0,0.65)]"
                      : "border-white/25 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.65)]",
                  )}
                  style={{
                    background: plan.highlighted
                      ? "linear-gradient(165deg, rgba(112,186,65,0.32) 0%, rgba(90,183,200,0.35) 100%)"
                      : "linear-gradient(165deg, rgba(86,82,145,0.3) 0%, rgba(90,183,200,0.24) 100%)",
                  }}
                >
                  <CardContent className="flex h-full flex-col gap-10 p-0">
                    <div className="flex flex-col gap-6">
                      <div className="relative flex flex-col gap-3">
                        <h3 className="text-lg font-semibold uppercase tracking-wide text-white">
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
                            {"period" in plan &&
                            typeof (plan as any).period === "string" ? (
                              <span className="text-base text-white/80">
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
                              <span className="text-sm text-white/80">
                                {plan.priceDescription}
                              </span>
                            ) : null}
                          </div>
                        )}
                      </div>

                      <Button
                        variant={plan.variant}
                        className={cn(
                          "w-full border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20 hover:text-white",
                          plan.highlighted &&
                            "border-transparent bg-[var(--green-500)] text-white hover:bg-[var(--green-500)]/90",
                        )}
                        asChild={Boolean(plan.ctaHref)}
                      >
                        {plan.ctaHref ? (
                          <Link href={plan.ctaHref}>{plan.ctaLabel}</Link>
                        ) : (
                          <span>{plan.ctaLabel}</span>
                        )}
                      </Button>
                    </div>

                    <div className="flex flex-col gap-6">
                      {inheritedFeatures.length > 0 ? (
                        <div className="flex flex-col gap-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                            {inheritedIntro}
                          </p>
                          <div className="flex flex-col gap-3">
                            {inheritedFeatures.map((feature) => (
                              <FeatureListItem key={feature.id} feature={feature} />
                            ))}
                          </div>
                        </div>
                      ) : null}

                      <div className="flex flex-col gap-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                          {plan.featureIntro}
                        </p>
                        <div className="flex flex-col gap-3">
                          {exclusiveFeatures.map((feature) => (
                            <FeatureListItem key={feature.id} feature={feature} />
                          ))}
                        </div>
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

function getFeatureBadge(
  feature: PlanFeatureWithStatus,
): {
  label: string;
  className: string;
  variant?: React.ComponentProps<typeof Badge>["variant"];
} | null {
  if (feature.status === "inherited") {
    return {
      label: "Incluído",
      className: "border-white/40 bg-white/10 text-white",
      variant: "outline",
    };
  }

  if (feature.status === "differential") {
    return {
      label: "Exclusivo",
      className: "border-transparent bg-[var(--green-500)] text-white",
    };
  }

  if (feature.status === "core" && feature.badgeWhenCore) {
    return {
      label: feature.badgeWhenCore,
      className: "border-transparent bg-[var(--teal-500)] text-[var(--purple-600)]",
    };
  }

  return null;
}

function FeatureListItem({ feature }: { feature: PlanFeatureWithStatus }) {
  const badge = getFeatureBadge(feature);

  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 p-3">
      <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(112,186,65,0.4)] shadow-[0_0_0_1px_rgba(112,186,65,0.65)]">
        <Check className="h-4 w-4 text-[var(--green-500)] drop-shadow-[0_0_6px_rgba(112,186,65,0.35)]" />
      </span>
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold leading-tight text-white">
            {feature.name}
          </span>
          {badge ? (
            <Badge
              variant={badge.variant}
              className={cn(
                "px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-tight",
                badge.className,
              )}
            >
              {badge.label}
            </Badge>
          ) : null}
        </div>
      </div>
      {feature.tooltip ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                aria-label={`Mais informações sobre ${feature.name}`}
              >
                <Info className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs border-none bg-white text-[var(--purple-600)] shadow-lg">
              <p className="text-sm leading-relaxed">{feature.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : null}
    </div>
  );
}
