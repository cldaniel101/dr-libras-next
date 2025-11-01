// app/embaixador/page.tsx
import React from "react";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Users, Gift } from "lucide-react";
import Image from "next/image";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";

export default function EmbaixadorPage() {
  return (
    <>
      {/* Navbar padrão do projeto */}
      <LpNavbar1 />

      {/* Hero */}
      <main className="bg-secondary/40 min-h-screen">
        <section className="container mx-auto px-6 py-14 lg:py-16 mb-24">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            {/* Texto */}
            <div className="flex flex-col gap-5">
              <p className="inline-flex w-fit rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Seja um Embaixador Dr. Libras
              </p>

              <h1 className="text-3xl leading-tight font-bold text-slate-900 md:text-4xl">
                Indique, represente e ajude a levar{" "}
                <span className="text-[#2f818f]">atendimento acessível</span> para
                a comunidade surda.
              </h1>

              <p className="text-base md:text-lg text-slate-600 max-w-2xl">
                Indique a Doutor Libras e ajude a levar atendimento acessível à
                comunidade surda. Ganhe benefícios exclusivos a cada indicação
                bem-sucedida e tenha acesso às campanhas de{" "}
                <span className="font-semibold text-slate-900">
                  cashback e sorteios.
                </span>
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="mailto:embaixador@doutorlibras.com.br">
                  <Button className="gap-2">
                    Quero ser embaixador
                    <ArrowRight className="size-4" />
                  </Button>
                </a>
                <Button variant="ghost" asChild>
                  <a href="#como-funciona">Como funciona</a>
                </Button>
              </div>

              {/* mini highlights */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-[#70ba41] size-5" />
                  <span className="text-sm text-slate-700">
                    Treinamento e material oficial
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift className="text-[#70ba41] size-5" />
                  <span className="text-sm text-slate-700">
                    Cashback e sorteios
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-[#70ba41] size-5" />
                  <span className="text-sm text-slate-700">
                    Ponto de apoio da marca
                  </span>
                </div>
              </div>
            </div>

            {/* Área visual */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image 
                src="/embaixador.jpg" 
                alt="Embaixador" 
                width={600} 
                height={600} 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section
          id="como-funciona"
          className="container mx-auto px-6 pb-14 lg:pb-16 mb-24"
        >
          <div className="flex flex-col gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Como funciona para ser Embaixador?
            </h2>
            <p className="text-slate-600 max-w-2xl">
              É simples e pensado para você que já atua com acessibilidade, é
              intérprete, professor ou líder comunitário.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/70 shadow-sm border p-6 flex flex-col gap-3">
              <span className="size-8 rounded-md bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                1
              </span>
              <h3 className="font-semibold text-slate-900">
                Envie seu interesse
              </h3>
              <p className="text-sm text-slate-600">
                Mande um e-mail para{" "}
                <a
                  href="mailto:embaixador@doutorlibras.com.br"
                  className="text-primary font-medium"
                >
                  embaixador@doutorlibras.com.br
                </a>{" "}
                contando quem você é e como quer ajudar.
              </p>
            </div>

            <div className="rounded-2xl bg-white/70 shadow-sm border p-6 flex flex-col gap-3">
              <span className="size-8 rounded-md bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                2
              </span>
              <h3 className="font-semibold text-slate-900">
                Receba o material e o treinamento
              </h3>
              <p className="text-sm text-slate-600">
                Você recebe orientação para falar em nome da empresa e apresentar
                o serviço do jeito certo.
              </p>
            </div>

            <div className="rounded-2xl bg-white/70 shadow-sm border p-6 flex flex-col gap-3">
              <span className="size-8 rounded-md bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                3
              </span>
              <h3 className="font-semibold text-slate-900">
                Indique e acompanhe
              </h3>
              <p className="text-sm text-slate-600">
                Cada indicação bem-sucedida gera benefícios, participação em
                campanhas e reforça sua autoridade na comunidade.
              </p>
            </div>
          </div>
        </section>

        {/* Quem pode ser */}
        <section className="container mx-auto px-6 pb-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Quem pode ser Embaixador Doutor Libras?
              </h2>
              <p className="text-slate-600 mb-6">
                Essa frente foi criada para aproximar ainda mais a Doutor Libras
                de quem já atua com pessoas surdas e quer ampliar o acesso à
                saúde.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-1 size-2.5 rounded-full bg-primary" />
                  Intérpretes de Libras
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 size-2.5 rounded-full bg-primary" />
                  Professores e educadores bilíngues
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 size-2.5 rounded-full bg-primary" />
                  Líderes comunitários ligados à comunidade surda
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 size-2.5 rounded-full bg-primary" />
                  Profissionais de escolas especiais ou instituições
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 size-2.5 rounded-full bg-primary" />
                  Pessoas ouvintes que trabalham com inclusão
                </li>
              </ul>
            </div>

            {/* Card de reforço */}
            <div className="rounded-2xl bg-primary text-primary-foreground p-8 shadow-lg flex flex-col gap-4">
              <h3 className="text-xl font-semibold">
                Campanhas de cashback e sorteios
              </h3>
              <p className="text-sm/relaxed text-primary-foreground/85">
                Para manter o relacionamento constante, embaixadores ativos
                podem entrar nas campanhas internas. Isso incentiva a recorrência
                e premia quem está trazendo impacto real pra comunidade.
              </p>
              <p className="text-xs text-primary-foreground/70">
                *Regulamento e condições podem variar por campanha.
              </p>
              <a
                href="mailto:embaixador@doutorlibras.com.br"
                className="inline-flex mt-2"
              >
                <Button variant="secondary" className="gap-2">
                  Falar com a equipe
                  <ArrowRight className="size-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-white border-y">
          <div className="container mx-auto px-6 py-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                Pronto para representar a <span className="text-[#2f818f]">Doutor Libras</span>?
              </h2>
              <p className="text-slate-600">
                Envie um e-mail agora e receba as instruções de onboarding.
              </p>
            </div>
            <a href="mailto:embaixador@doutorlibras.com.br">
              <Button className="gap-2 bg-[#4f832e] hover:bg-[#4f832e]/90">
                Fale com a equipe
                <ArrowRight className="size-4 text-white" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer1 />
    </>
  );
}
