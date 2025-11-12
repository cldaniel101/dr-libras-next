"use client";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Milestone } from "lucide-react";
import { motion, Variants } from "framer-motion";
import React from "react";

const roadmapItems = [
  {
    milestone: "1.000 clientes",
    label: "Telemedicina ativa",
    imageSrc: "/new_logos/no_bg/1-removebg-preview.png",
    imageAlt: "Ilustração representando o serviço de telemedicina",
  },
  {
    milestone: "2.000 clientes",
    label: "Plataforma Educacional (Libras+)",
    imageSrc: "/new_logos/no_bg/2-removebg-preview.png",
    imageAlt: "Logotipo para a plataforma educacional Libras+",
  },
  {
    milestone: "5.000 clientes",
    label: "Serviço Social + Marketplace (MarketLibras)",
    imageSrc: "/new_logos/no_bg/3-removebg-preview.png",
    imageAlt: "Logotipo voltado ao serviço social e marketplace MarketLibras",
  },
  {
    milestone: "10.000 clientes",
    label: "Banco Digital (LibrasConta)",
    imageSrc: "/new_logos/no_bg/4-removebg-preview.png",
    imageAlt: "Identidade visual do banco digital LibrasConta",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

export function RoadmapSection() {
  return (
    <section
      id="roadmap"
      aria-labelledby="roadmap-heading"
      style={
        {
          ["--green-500"]: "#70ba41",
          ["--green-700"]: "#4f832e",
          ["--teal-500"]: "#5ab7c8",
          ["--teal-700"]: "#2f818f",
          ["--purple-600"]: "#565291",
          ["--gray-neutral"]: "#d2d3d5",
        } as React.CSSProperties
      }
      className="relative overflow-hidden border-b bg-[radial-gradient(1200px_500px_at_10%_-10%,rgba(86,82,145,0.08),transparent),radial-gradient(900px_400px_at_110%_10%,rgba(90,183,200,0.10),transparent)]"
    >
      {/* Decorative, subtle blobs */}
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[var(--teal-500)]/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-[var(--purple-600)]/10 blur-3xl" />

      <div className="container-padding-x container mx-auto flex flex-col gap-10 pb-16 pt-14 md:gap-14 md:pb-24 md:pt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="section-title-gap-lg mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <Tagline>Metas</Tagline>
          <h2
            id="roadmap-heading"
            className="bg-gradient-to-r from-[var(--purple-600)] via-[var(--teal-700)] to-[var(--green-700)] bg-clip-text text-3xl font-extrabold leading-tight text-transparent md:text-4xl"
          >
            Nossa jornada — juntos somos mais fortes
          </h2>
          <p className="text-muted-foreground mt-3 text-base md:text-lg">
            Cada novo cliente libera um novo benefício para toda a comunidade.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Vertical line (desktop) */}
          <div
            aria-hidden
            className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--gray-neutral)] via-[var(--teal-500)]/40 to-transparent md:block"
          />

          <div className="grid gap-4">
            {roadmapItems.map((itemData, idx) => (
              <motion.div key={itemData.milestone} variants={item as Variants}>
                <Card
                  className="group relative border border-[var(--gray-neutral)]/50 bg-white/70 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-900/70 dark:supports-[backdrop-filter]:bg-neutral-900/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={
                    {
                      ["--gray-neutral"]: "#d2d3d5",
                      ["--teal-500"]: "#5ab7c8",
                      ["--teal-700"]: "#2f818f",
                    } as React.CSSProperties
                  }
                >
                  <CardContent className="flex flex-col gap-5 p-5 pl-14 md:flex-row md:items-center md:justify-between md:gap-6 md:p-6 md:pl-16">
                    {/* Node */}
                    <span
                      className="absolute left-4 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--teal-500)]/60 bg-white text-[var(--teal-700)] shadow-sm transition-transform duration-300 group-hover:scale-105 dark:bg-neutral-950"
                      aria-hidden
                    >
                      <Milestone className="h-5 w-5" />
                    </span>

                    {/* Content */}
                    <div className="flex flex-col gap-1.5 text-left md:max-w-[60%]">
                      <span className="text-lg font-semibold leading-none text-foreground md:text-xl">
                        {itemData.milestone}
                      </span>
                      <span className="text-muted-foreground text-base">
                        {itemData.label}
                      </span>

                      {/* Progress accent bar */}
                      <span
                        className="mt-3 inline-block h-1.5 w-24 rounded-full bg-gradient-to-r from-[var(--purple-600)] via-[var(--teal-500)] to-[var(--green-500)] opacity-80 transition-all duration-300 group-hover:w-32"
                        aria-hidden
                      />
                    </div>
                    <div className="relative mx-auto flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] backdrop-blur supports-[backdrop-filter]:bg-white/40 md:mx-0 md:h-28 md:w-28">
                      <div className="relative h-16 w-16 md:h-20 md:w-20 overflow-hidden">
                        <Image
                          src={itemData.imageSrc}
                          alt={itemData.imageAlt}
                          fill
                          sizes="(min-width: 768px) 80px, 64px"
                          className="object-cover scale-200 object-center drop-shadow-md"
                          priority={false}
                        />
                      </div>
                    </div>
                  </CardContent>

                  {/* Connector line segment (desktop) */}
                  {idx < roadmapItems.length - 1 && (
                    <div
                      aria-hidden
                      className="absolute left-6 top-[3.5rem] hidden h-[calc(100%-3.5rem)] w-px bg-[linear-gradient(to_bottom,rgba(210,211,213,0.9),rgba(90,183,200,0.3))] md:block"
                    />
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center text-base font-medium text-foreground"
        >
          Estamos criando a maior união nacional de Surdos para conquistar direitos, benefícios e oportunidades para a comunidade. Entre no grupo VIP e faça parte da mudança.
        </motion.p>
      </div>
    </section>
  );
}
