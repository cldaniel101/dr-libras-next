"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useRef } from 'react';
import Link from "next/link";
import { DISCOUNTS_APP_LINK } from "@/lib/links";

export function HeroSection2() {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Adicionar estilo para cursor preto
    const style = document.createElement('style');
    style.textContent = `
      .typing-animation-container .typing-cursor,
      .typing-animation-container::after,
      .typing-animation-container [class*="cursor"],
      span[class*="cursor"] {
        color: gray !important;
      }
      .typing-animation-container > span::after {
        color: gray !important;
      }
    `;
    style.setAttribute('data-typing-cursor', '');
    if (!document.head.querySelector('style[data-typing-cursor]')) {
      document.head.appendChild(style);
    }

    // Processar o texto para adicionar span na palavra "Libras"
    const processText = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        let processed = false;
        
        // Processar todos os nós de texto
        const walker = document.createTreeWalker(
          container,
          NodeFilter.SHOW_TEXT,
          null
        );
        
        const textNodes: Text[] = [];
        let node;
        while (node = walker.nextNode()) {
          if (node.nodeValue && node.nodeValue.includes('Libras')) {
            textNodes.push(node as Text);
          }
        }

        textNodes.forEach((textNode) => {
          const text = textNode.nodeValue || '';
          if (text.includes('Libras') && !text.includes('<span')) {
            const parts = text.split(/(Libras)/);
            const fragment = document.createDocumentFragment();
            
            parts.forEach((part, index) => {
              if (part === 'Libras') {
                const span = document.createElement('span');
                span.className = 'text-primary';
                span.textContent = part;
                fragment.appendChild(span);
              } else if (part) {
                fragment.appendChild(document.createTextNode(part));
              }
            });
            
            textNode.parentNode?.replaceChild(fragment, textNode);
            processed = true;
          }
        });

        // Fallback: usar innerHTML se o método acima não funcionar
        if (!processed && container.innerHTML.includes('Libras') && !container.innerHTML.includes('text-primary')) {
          container.innerHTML = container.innerHTML.replace(
            /Libras/g,
            '<span class="text-primary">Libras</span>'
          );
        }
      }
    };

    // Executar imediatamente e depois em intervalos
    processText();
    const interval = setInterval(processText, 50);
    
    return () => {
      clearInterval(interval);
      const styleEl = document.head.querySelector('style[data-typing-cursor]');
      if (styleEl) {
        styleEl.remove();
      }
    };
  }, []);

  return (
    <section
      className="bg-secondary section-padding-y"
      aria-labelledby="hero-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col">
            {/* Tagline */}
            <Tagline>Doutor Libras</Tagline>
            {/* Main Heading */}
            <h1 id="hero-heading" className="heading-xl">
              <span ref={containerRef} className="typing-animation-container">
                <TypeAnimation
                  sequence={[
                    'Saúde em Libras. Sem barreiras.',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={0}
                  cursor={true}
                />
              </span>
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg">
              A primeira telemedicina feita para Surdos, com atendimento 100% acessível.
            </p>
          </div>

          {/* Feature List */}
          {/* <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Deal progress tracking
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Customer sentiment analysis
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Automatic CRM updates
              </span>
            </div>
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#comunidade-vip">Entrar no Grupo VIP</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href={DISCOUNTS_APP_LINK} className="flex items-center gap-2">
                Baixar o App de Descontos
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          <p className="text-muted-foreground text-sm lg:text-base">
            Benefícios exclusivos para quem entrar antes do lançamento.
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full flex-1">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/Hero.png"
              alt="Hero visual"
              fill
              priority
              className="h-full w-full rounded-xl object-cover backdrop-blur shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
