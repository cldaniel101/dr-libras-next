import React from "react";
import Link from "next/link";

export type QuemSomosProps = {
  eyebrow?: string;
  images: {
    main: { src: string; alt: string };
    small: { src: string; alt: string }[]; // length 2
  };
  className?: string;
  id?: string;
};

export default function QuemSomos({
  eyebrow = "",
  images,
  className = "",
  id = "quem-somos",
}: QuemSomosProps) {
  return (
    <section id={id} className={`w-full bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* GRID PRINCIPAL: texto à esquerda, imagens à direita */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* IMAGES block (DIREITA no desktop) */}
          <div className="order-1 md:order-2 w-full h-full">
            {/* coluna: em cima 1 grande que estica, embaixo 2 pequenas lado a lado */}
            <div className="flex flex-col h-full gap-4 sm:gap-5 lg:gap-6">
              {/* imagem grande de cima (usa a main) */}
              <div className="flex-1 min-h-[180px]">
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-sm">
                  <img
                    src={images.main.src}
                    alt={images.main.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* duas pequenas embaixo */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                <div className="relative overflow-hidden rounded-2xl shadow-sm min-h-[110px]">
                  <img
                    src={images.small?.[0]?.src || images.main.src}
                    alt={images.small?.[0]?.alt || "Imagem de apoio"}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-sm min-h-[110px]">
                  <img
                    src={images.small?.[1]?.src || images.main.src}
                    alt={images.small?.[1]?.alt || "Imagem de apoio"}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* TEXT block (ESQUERDA no desktop) */}
          <div className="order-2 md:order-1">
            {eyebrow && (
              <p className="mb-3 text-sm font-medium tracking-wide text-neutral-500 uppercase">
                {eyebrow}
              </p>
            )}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-900 leading-tight mb-6">
              Quem Somos
            </h2>

            <div className="space-y-6 text-neutral-700 leading-relaxed">
              <p>
                Somos uma plataforma de Saúde Digital com o propósito de democratizar e ampliar o acesso à saúde através da telemedicina, quebrando a barreira da distância.
              </p>
              <p>
                A consultas serão realizadas por vídeo chamadas seguras, garantindo sigilo, conforto e agilidade no cuidado à saúde.
              </p>
              <p>
                O diferencial deste projeto, é o doutor Libras, uma iniciativa que integra a telemedicina com acessibilidade linguística para a comunidade surda.
              </p>
              <p>
                Por meio da Língua Brasileira de Sinais (LIBRAS), será possível garantir que paciente surdos ou com deficiência auditiva tenham pleno acesso às informações médicas e possam se comunicar de forma clara e efetiva.
              </p>
              <p>
                Durante a consulta, o paciente será atendido por um médico especializado, com o apoio de um intérprete de libras, presente na vídeochamada, atuando como mediador da comunicação. Isso assegura que todas as informações sobre sintomas, tratamentos e orientações sejam transmitidas de forma precisa, humanizada e inclusiva.
              </p>
              <p>
                Unimos tecnologia, saúde e inclusão, promovendo um atendimento médico de qualidade e sem barreiras de comunicação, contribuindo para a equidade no acesso à saúde para a comunidade surda.
              </p>
            </div>
          </div>
        </div>

        {/* Regulatory block - always shown at bottom */}
        <div className="mt-12 md:mt-16 border-t border-neutral-200 pt-8 flex justify-center">
          <div className="max-w-3xl ">
            <p className="text-neutral-700 mb-4 text-center">
              Solução tecnológica inovadora e segura, seguindo protocolos exigidos pelos órgãos reguladores — Lei Federal nº 14.510/22 e Resolução CFM nº 2.134/2022.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="https://www12.senado.leg.br/noticias/materias/2022/12/28/lei-autoriza-telessaude-com-autonomia-para-profissionais-e-consentimento-de-pacientes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors text-sm font-medium"
              >
                Lei / Senado
              </Link>
              <Link
                href="https://www.in.gov.br/web/dou/-/resolucao-cfm-n-2.314-de-20-de-abril-de-2022-397602852"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors text-sm font-medium"
              >
                Resolução CFM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Demo
export const Demo = () => (
  <QuemSomos
    eyebrow="Sobre Nós"
    images={{
      main: {
        src:
          "https://images.unsplash.com/photo-1520975922203-b6c0922cf9ec?q=80&w=1600&auto=format&fit=crop",
        alt: "Equipe médica",
      },
      small: [
        {
          src:
            "https://images.unsplash.com/photo-1622335782596-72a7c1ff6877?q=80&w=1200&auto=format&fit=crop",
          alt: "Telemedicina",
        },
        {
          src:
            "https://images.unsplash.com/photo-1592878849120-1b1cfa2fd730?q=80&w=1200&auto=format&fit=crop",
          alt: "Libras",
        },
      ],
    }}
  />
);
