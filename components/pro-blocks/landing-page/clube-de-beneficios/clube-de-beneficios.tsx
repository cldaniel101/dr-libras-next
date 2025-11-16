"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DISCOUNTS_APP_LINK } from "@/lib/links";

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
            Seu clube de descontos simples de entender
          </h2>
          {/* Description */}
          <p className="text-muted-foreground text-base lg:text-lg">
            Pense em um lugar onde várias empresas parceiras se juntam para te
            dar descontos prontos para usar. É isso que é um clube de
            benefícios: um clube de descontos que normalmente só grandes
            empresas oferecem para seus colaboradores, mas que aqui está
            disponível para você e sua família, sem custo extra, por fazer parte
            da comunidade Doutor Libras.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-3 md:gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {/* Wide Feature Card - Top Left */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-2">
            <Image
              src="/ai-meeting-notes 2.png"
              alt="O que é um clube de benefícios"
              width={813}
              height={332}
              className="hidden h-auto w-full object-cover md:block md:h-[332px]"
            />
            <Image
              src="/ai-meeting-notes_mobile 2.png"
              alt="O que é um clube de benefícios"
              width={480}
              height={332}
              className="block h-auto w-full md:hidden"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                O que é o Clube de Benefícios?
              </h3>
              <p className="text-muted-foreground">
                É um ambiente digital com várias empresas parceiras, onde você
                encontra descontos e vantagens prontos para usar. Em vez de
                ficar procurando promoção por conta própria, você entra no
                clube, escolhe a oferta que faz sentido pra você e já aproveita.
              </p>
            </CardContent>
          </Card>

          {/* Regular Feature Card - Top Right */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-1">
            <Image
              src="/universal-search 2.png"
              alt="Como funciona na prática"
              width={480}
              height={332}
              className="h-auto w-full object-cover md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Como funciona na prática
              </h3>
              <p className="text-muted-foreground">
                Você acessa o app, faz um cadastro simples e escolhe o benefício
                que quer usar. Em poucos cliques, recebe o cupom ou link de
                desconto para apresentar na loja física ou usar na loja online.
                Tudo organizado em um só lugar, sem burocracia.
              </p>
            </CardContent>
          </Card>

          {/* Regular Feature Card - Bottom Left */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-1">
            <Image
              src="/smart-tags 2.png"
              alt="Onde você economiza"
              width={480}
              height={332}
              className="h-auto w-full object-cover md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Onde você economiza
              </h3>
              <p className="text-muted-foreground">
                São benefícios em diferentes tipos de empresas, para o dia a dia
                da sua família: compras, serviços, bem-estar e lazer. Sempre com
                vantagens pensadas para quem faz parte da comunidade Doutor
                Libras, para o seu dinheiro render mais.
              </p>
            </CardContent>
          </Card>

          {/* Wide Feature Card - Bottom Right */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-2">
            <Image
              src="/team-insights 2.png"
              alt="Benefício exclusivo para você e sua família"
              width={813}
              height={332}
              className="hidden h-[332px] w-full object-cover md:block"
            />
            <Image
              src="/team-insights_mobile 2.png"
              alt="Benefício exclusivo para você e sua família"
              width={480}
              height={332}
              className="block h-auto w-full object-cover md:hidden md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Um benefício que grandes empresas têm — agora na sua mão
              </h3>
              <p className="text-muted-foreground">
                Clube de benefícios é algo que, em geral, só quem trabalha em
                empresas grandes conhece. Aqui, você e sua família têm essa
                mesma experiência sem pagar nada a mais. Descontos reais e novas
                experiências, como um presente da Doutor Libras para cuidar de
                você no dia a dia.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6">
          <Link
            href={DISCOUNTS_APP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="text-base">
              Acessar meu Clube de Benefícios
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
