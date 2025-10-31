"use client";

import { Target, Heart, Shield, FileText, ExternalLink } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function QuemSomosSection() {
  return (
    <section
      className="bg-secondary section-padding-y border-b"
      id="quem-somos"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>Quem Somos</Tagline>
          <h2 className="heading-lg text-foreground">
            Nossa missão e valores
          </h2>
          <p className="text-muted-foreground text-base">
            Conheça os pilares que norteiam nosso compromisso com a saúde e inclusão da comunidade surda
          </p>
        </div>

        {/* Missão e Valores */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:gap-8">
          {/* Missão */}
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-teal-100 flex h-16 w-16 shrink-0 items-center justify-center rounded-full">
              <Target className="text-teal-700 h-7 w-7" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-foreground font-semibold text-lg">Missão</h3>
              <p className="text-muted-foreground text-base">
                Cuidar com excelência da saúde dos nossos clientes em todas as etapas da vida.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-green-100 flex h-16 w-16 shrink-0 items-center justify-center rounded-full">
              <Heart className="text-[#4f832e] h-7 w-7" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-foreground font-semibold text-lg">Valores</h3>
              <p className="text-muted-foreground text-base">
                Saúde, humanização, inovação, aprendizado diário, cabeça de dono, integridade, diversidade.
              </p>
            </div>
          </div>
        </div>

        {/* Bloco Regulatório */}
        <div className="bg-background rounded-xl border p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4 md:flex-1">
              <div className="flex items-start gap-3">
                <div className="bg-secondary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <Shield className="text-primary h-5 w-5" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-foreground font-semibold text-lg">
                    Conformidade Regulatória
                  </h3>
                  <p className="text-muted-foreground text-base">
                    Solução tecnológica inovadora e segura, seguindo protocolos exigidos pelos órgãos reguladores —{" "}
                    <strong>Lei Federal nº 14.510/22</strong> e{" "}
                    <strong>Resolução CFM nº 2.134/2022</strong>.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:flex-row md:gap-3">
              <Link
                href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14510.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full md:w-auto">
                  <FileText className="mr-2 h-4 w-4" />
                  Lei / Senado
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="https://sistemas.cfm.org.br/normas/visualizar/resolucoes/BR/2022/2134"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full md:w-auto">
                  <FileText className="mr-2 h-4 w-4" />
                  Resolução CFM
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
