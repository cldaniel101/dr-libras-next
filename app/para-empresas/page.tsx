// app/para-empresas/page.tsx
import React from "react";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  ShieldCheck,
  HeartPulse,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";

export default function ParaEmpresasPage() {
  return (
    <>
      {/* Navbar global */}
      <LpNavbar1 />

      <main className="bg-secondary/30 min-h-screen">
        {/* HERO */}
        <section className="container mx-auto px-6 pt-14 pb-16 lg:pt-20 lg:pb-20 mb-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            {/* Texto principal */}
            <div className="flex flex-col gap-5">
              <p className="inline-flex w-fit rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Para Empresas • Benefício corporativo
              </p>

              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                O melhor benefício para sua equipe
                <span className="block text-[#2f818f] text-2xl md:text-3xl mt-2">
                  Mais satisfação e saúde para seus colaboradores.
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-600 max-w-2xl">
                Oferecer benefícios valoriza talentos e reduz o absenteísmo.
                Com os planos acessíveis, SVA, do Doutor Libras, colaboradores
                cuidam da saúde, se mantêm motivados e valorizam a empresa.
                Investir em benefícios é reduzir o turnover e promover um
                ambiente saudável.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button className="gap-2">
                  Quero conhecer
                  <PhoneCall className="size-4" />
                </Button>
                <Button variant="ghost" asChild>
                  <a href="#form-empresas">Solicitar proposta</a>
                </Button>
              </div>

              {/* mini highlights */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <Users className="text-[#70ba41] size-5" />
                  <span className="text-sm text-slate-700">
                    Reduz absenteísmo
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-[#2f818f] size-5" />
                  <span className="text-sm text-slate-700">
                    Adequado à LGPD
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartPulse className="text-[#e1795a] size-5" />
                  <span className="text-sm text-slate-700">
                    Acesso à telemedicina
                  </span>
                </div>
              </div>
            </div>

            {/* Lado visual / card */}
            <div className="relative">
              <Image src="/para-empresas.jpg" alt="Benefício corporativo" width={600} height={600} className="rounded-2xl backdrop-blur shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl" />

              {/* bolinha decorativa */}
              <div className="absolute -bottom-6 -right-4 h-20 w-20 bg-[#2f818f]/15 rounded-full blur-sm" />
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="container mx-auto px-6 pb-14 lg:pb-16 mb-20">
          <div className="flex flex-col gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Benefícios claros para o seu negócio
            </h2>
            <p className="text-slate-600 max-w-2xl">
              A lógica é simples: colaboradores saudáveis e atendidos com
              facilidade faltam menos, rendem mais e permanecem na empresa.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-white/80 border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1">
              <p className="text-xs uppercase text-[#2f818f] font-semibold mb-1">
                + Benefícios
              </p>
              <p className="text-sm text-slate-700">
                Pacote de saúde percebido como moderno, que inclui telemedicina
                e profissionais de apoio.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1">
              <p className="text-xs uppercase text-[#2f818f] font-semibold mb-1">
                + Satisfação
              </p>
              <p className="text-sm text-slate-700">
                Colaboradores valorizam empresas que se preocupam com bem-estar.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1">
              <p className="text-xs uppercase text-[#2f818f] font-semibold mb-1">
                + Produtividade
              </p>
              <p className="text-sm text-slate-700">
                Menos tempo perdido com filas e deslocamentos para consultas.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1">
              <p className="text-xs uppercase text-[#2f818f] font-semibold mb-1">
                − Custos
              </p>
              <p className="text-sm text-slate-700">
                Redução do absenteísmo e do turnover, impacto direto no caixa.
              </p>
            </div>
          </div>
        </section>

        {/* Atendimento simplificado / Na palma da mão */}
        <section className="container mx-auto px-6 pb-14 lg:pb-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs uppercase text-[#2f818f] font-semibold mb-2">
                Atendimento simplificado
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Na palma da sua mão
              </h2>
              <p className="text-slate-600 mb-4">
                Com o Doutor Libras, seus colaboradores têm acesso a consultas
                médicas por teleconsulta, de forma simples e conveniente. Por
                meio de uma teleconsulta, sem filas e deslocamentos.
              </p>
              <p className="text-slate-600 mb-5">
                Não é necessário baixar ou instalar nenhum programa adicional.
                Basta acessar pelo celular, computador ou tablet e iniciar a
                consulta.
              </p>
              <Button className="gap-2">Quero conhecer</Button>
            </div>

            {/* Card de vantagens */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white/80 p-5 shadow-sm border">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  Saúde mental
                </p>
                <p className="text-sm text-slate-600">
                  Consultas com psicólogos e psiquiatras.
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 p-5 shadow-sm border">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  Inclua dependentes
                </p>
                <p className="text-sm text-slate-600">
                  Até 3 dependentes por colaborador, com pequeno custo
                  adicional.
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 p-5 shadow-sm border">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  Segurança de dados
                </p>
                <p className="text-sm text-slate-600">
                  Transporte criptografado, padrão LGPD e controle por empresa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Segurança e histórico */}
        <section className="container mx-auto px-6 pb-14 lg:pb-16 mb-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white/80 p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Histórico de saúde do colaborador
              </h3>
              <p className="text-sm text-slate-600">
                Histórico e perfil de consulta dos colaboradores (mini ficha
                médica) para acompanhamento. Visão que ajuda o RH a entender
                melhor o uso do benefício.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Segurança de dados
              </h3>
              <p className="text-sm text-slate-600">
                Dados da empresa e dos colaboradores transportados de forma
                criptografada e adequados à LGPD.
              </p>
            </div>
          </div>
        </section>

        {/* Formulário */}
        <section
          id="form-empresas"
          className="container mx-auto px-6 pb-16 lg:pb-20"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-xs uppercase text-[#2f818f] font-semibold mb-2">
                Formulário • Para Empresas
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Peça uma proposta personalizada
              </h2>
              <p className="text-slate-600 mb-4">
                Preencha os dados da sua empresa para receber detalhamento de
                valores e formato de implantação.
              </p>
              <p className="text-xs text-slate-500">
                {/* TODO: backend deve enviar para Google Sheets e copiar para e-mail institucional (ex.: contato@drlibras.com.br). */}
                {/* TODO: enviar para planilha Google + cópia para e-mail institucional. */}
              </p>
            </div>

            <form className="rounded-2xl bg-white/90 shadow-sm border p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-800">
                  Nome da empresa
                </label>
                <input
                  className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="Ex.: Libras Tech Educação"
                  name="company_name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-800">
                  Nome do responsável
                </label>
                <input
                  className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="Quem vai tratar do benefício"
                  name="responsavel"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-800">
                  E-mail corporativo
                </label>
                <input
                  type="email"
                  className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="nome.sobrenome@empresa.com.br"
                  name="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-800">
                  Telefone / WhatsApp
                </label>
                <input
                  className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="(71) 9 9999-9999"
                  name="phone"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-800">
                    Qtde. colaboradores (total)
                  </label>
                  <input
                    type="number"
                    min={1}
                    className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Ex.: 45"
                    name="colaboradores_totais"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-800">
                    Qtde. colaboradores surdos
                  </label>
                  <input
                    type="number"
                    min={0}
                    className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Ex.: 3"
                    name="colaboradores_surdos"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-800">
                  Mensagem / observações
                </label>
                <textarea
                  rows={4}
                  className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="Conte se precisa de intérprete de Libras específico, regras de inclusão, turnos, etc."
                  name="mensagem"
                />
              </div>
              <Button type="submit" className="gap-2">
                Quero conhecer
                <Building2 className="size-4" />
              </Button>
            </form>
          </div>
        </section>

      </main>

      <Footer1 />
    </>
  );
}
