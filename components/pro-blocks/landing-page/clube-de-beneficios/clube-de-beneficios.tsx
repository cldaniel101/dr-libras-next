"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ClubeDeBeneficios() {
  return (
    <section className="bg-background section-padding-y border-b" id="clube">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Tagline */}
          <Tagline>Clube de Benefícios</Tagline>
          {/* Main Heading */}
          <h2 className="heading-lg">
            Descontos, conteúdos e cuidados exclusivos para você
          </h2>
          {/* Description */}
          <p className="text-muted-foreground text-base lg:text-lg">
            Faça parte do nosso clube e tenha acesso a descontos, conteúdos e programas de cuidado contínuo pensados para você e sua família. Receba antes os cupons de sorteios e novidades dos novos produtos.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-3 md:gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {/* Wide Feature Card - Top Left */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-2">
            <Image
              src="/ai-meeting-notes 2.png"
              alt="Descontos exclusivos"
              width={813}
              height={332}
              className="hidden h-auto w-full object-cover md:block md:h-[332px]"
            />
            <Image
              src="/ai-meeting-notes_mobile 2.png"
              alt="Descontos exclusivos"
              width={480}
              height={332}
              className="block h-auto w-full md:hidden"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Descontos Exclusivos
              </h3>
              <p className="text-muted-foreground">
                Acesso a centenas de lojas online para compras seguras com descontos especiais para membros do clube
              </p>
            </CardContent>
          </Card>
          {/* Regular Feature Card - Top Right */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-1">
            <Image
              src="/universal-search 2.png"
              alt="Cupons de sorteios"
              width={480}
              height={332}
              className="h-auto w-full object-cover md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Cupons de Sorteios
              </h3>
              <p className="text-muted-foreground">
                Receba primeiro os cupons de sorteios e participe de promoções exclusivas
              </p>
            </CardContent>
          </Card>
          {/* Regular Feature Card - Bottom Left */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-1">
            <Image
              src="/smart-tags 2.png"
              alt="Conteúdos exclusivos"
              width={480}
              height={332}
              className="h-auto w-full object-cover md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Conteúdos Exclusivos
              </h3>
              <p className="text-muted-foreground">
                Acesso a materiais educativos, dicas de saúde e informações sobre novos produtos
              </p>
            </CardContent>
          </Card>
          {/* Wide Feature Card - Bottom Right */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-2">
            <Image
              src="/team-insights 2.png"
              alt="Programas de cuidado contínuo"
              width={813}
              height={332}
              className="hidden h-[332px] w-full object-cover md:block"
            />
            <Image
              src="/team-insights_mobile 2.png"
              alt="Programas de cuidado contínuo"
              width={480}
              height={332}
              className="block h-auto w-full object-cover md:hidden md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Programas de Cuidado Contínuo
              </h3>
              <p className="text-muted-foreground">
                Programas pensados para você e sua família, com foco em bem-estar e saúde preventiva
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6">
          <Link href="#clube">
            <Button size="lg" className="text-base">
              Fazer parte do Clube
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
