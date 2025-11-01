// app/para-voce/page.tsx
import React from "react";
import Image from "next/image";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { Button } from "@/components/ui/button";
import {
  Video,
  ShieldCheck,
  Smartphone,
  Users,
  HeartPulse,
  Sparkles,
} from "lucide-react";

export default function ParaVocePage() {
  return (
    <>
      {/* Navbar padrão */}
      <LpNavbar1 />

      <main className="bg-secondary/30 min-h-screen">
        {/* HERO */}
        <section className="container mx-auto px-6 pt-14 pb-16 lg:pt-20 lg:pb-20 mb-24">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            {/* Texto */}
            <div className="flex flex-col gap-5">
              <p className="inline-flex w-fit rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Telemedicina • Consulte onde estiver
              </p>

              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Sou Paciente
                <span className="block text-[#2f818f]">
                  consulte com comodidade, de onde estiver.
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-600 max-w-2xl">
                Atendimento em ambiente <span className="font-semibold">virtual seguro</span>,
                sem necessidade de instalar app e com acesso por{" "}
                <span className="font-semibold">celular, computador ou tablet</span>.
                Tudo o que você precisa é de internet.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button className="gap-2">
                  Quero conhecer
                  <Video className="size-4" />
                </Button>
                <Button variant="ghost" asChild>
                  <a href="#planos">Ver planos e benefícios</a>
                </Button>
              </div>

              {/* mini highlights */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-[#70ba41] size-5" />
                  <span className="text-sm text-slate-700">
                    Plataforma segura (sem app)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="text-[#2f818f] size-5" />
                  <span className="text-sm text-slate-700">
                    Acesse de qualquer dispositivo
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartPulse className="text-[#e1795a] size-5" />
                  <span className="text-sm text-slate-700">
                    Equipe qualificada
                  </span>
                </div>
              </div>
            </div>

            {/* Lado visual */}
            <div className="relative">
              <Image src="/sou-paciente.jpg" alt="Para você" width={600} height={600} className="rounded-2xl backdrop-blur shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl" />
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="container mx-auto px-6 pb-14 lg:pb-16 mb-24">
          <div className="flex flex-col gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Consulte de forma prática e sem complicações
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "1. Acesso simples",
                desc: "Recebe o link e entra na sala virtual segura.",
              },
              {
                title: "2. Sem instalar nada",
                desc: "Funciona no navegador, no celular ou no computador.",
              },
              {
                title: "3. Suporte humano",
                desc: "Se precisar, alguém te ajuda a entrar na consulta.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/70 shadow-sm border border-slate/5 p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="size-8 rounded-md bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </span>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Planos (individuais e familiares) */}
        <section
          id="planos"
          className="container mx-auto px-6 pb-14 lg:pb-16"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs uppercase text-[#2f818f] font-semibold mb-2">
                Planos individuais e familiares
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Para toda a família!
              </h2>
              <p className="text-slate-600 mb-5">
                Oferecemos planos individuais e familiares para atender às suas
                necessidades específicas. Consultas virtuais ilimitadas, médicos
                qualificados e acesso contínuo, do jeito que você preferir.
              </p>
              <p className="text-sm text-slate-700 mb-6">
                <span className="font-semibold text-[#70ba41]">
                  Vida Individual: R$ XX/mês
                </span>{" "}
                •{" "}
                <span className="font-semibold text-[#70ba41]">
                  Vida Familiar: R$ XX/mês
                </span>{" "}
              </p>
              <Button className="gap-2">Quero conhecer</Button>
            </div>

            {/* Benefícios inclusos */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white/80 p-5 shadow-sm border transition-all duration-300 hover:-translate-y-1">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  Acesso imediato
                </p>
                <p className="text-sm text-slate-600">
                  Sem limite de idade ou quantidade de consultas.
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 p-5 shadow-sm border transition-all duration-300 hover:-translate-y-1">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  Comodidade total
                </p>
                <p className="text-sm text-slate-600">
                  Sem deslocamento e com suporte.
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 p-5 shadow-sm border transition-all duration-300 hover:-translate-y-1">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  Segurança e privacidade
                </p>
                <p className="text-sm text-slate-600">
                  Padrões de segurança elevados e criptografia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Especialidades */}
        {/* <section className="container mx-auto px-6 pb-14 lg:pb-16 mb-24">
          <div className="flex flex-col gap-3 mb-7">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Atendimento especializado em diversas áreas
            </h2>
            <p className="text-slate-600 max-w-2xl">
              Do cuidado geral ao suporte emocional, você encontra aqui os
              profissionais que precisa.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              "Cardiologia",
              "Dermatologia",
              "Endocrinologia",
              "Geriatria",
              "Ginecologia",
              "Pediatria",
              "Clínica Médica",
              "Médico da Família",
              "Nutrição",
              "Personal Trainer",
              "Psicologia",
              "Psiquiatria",
            ].map((esp) => (
              <div
                key={esp}
                className="rounded-xl bg-white/70 border p-3 text-sm text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
              >
                {esp}
              </div>
            ))}
          </div>
        </section> */}

        {/* Vantagens e benefícios */}
        <section className="container mx-auto px-6 pb-16 mb-24">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="rounded-2xl bg-white/80 p-5 shadow-sm border">
              <p className="text-xs uppercase text-[#2f818f] font-semibold mb-1">
                + benefícios
              </p>
              <p className="text-sm text-slate-700">
                Cuidado médico completo, sem limite de idade ou consultas. Acesso
                imediato.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-5 shadow-sm border">
              <p className="text-xs uppercase text-[#2f818f] font-semibold mb-1">
                + vantagens
              </p>
              <p className="text-sm text-slate-700">
                Plano vai além do cuidado com a saúde: bem-estar e acompanhamento.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-5 shadow-sm border">
              <p className="text-xs uppercase text-[#2f818f] font-semibold mb-1">
                + comodidade
              </p>
              <p className="text-sm text-slate-700">
                Atendimento online por computador, tablet ou celular.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-5 shadow-sm border">
              <p className="text-xs uppercase text-[#2f818f] font-semibold mb-1">
                + segurança
              </p>
              <p className="text-sm text-slate-700">
                Padrão de segurança, blindagem e transporte criptografado.
              </p>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-white border-y">
          <div className="container mx-auto px-6 py-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                Quer começar a se consultar sem sair de casa?
              </h2>
              <p className="text-slate-600">
                Clique em “Quero conhecer” e veja como agendar sua teleconsulta.
              </p>
            </div>
            <Button className="gap-2">
              Quero conhecer
              <Video className="size-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer1 />
    </>
  );
}
