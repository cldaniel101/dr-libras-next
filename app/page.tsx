import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-2";
import TestimonialsSection1 from "@/components/pro-blocks/landing-page/testimonials-sections/testimonials-section-1";
import QuemSomos from "@/components/pro-blocks/landing-page/quem-somos/quem-somos";
import { PricingSection3 } from "@/components/pro-blocks/landing-page/pricing-sections/pricing-section-3";
import { FaqSection2 } from "@/components/pro-blocks/landing-page/faq-sections/faq-section-2";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { SolutionsSection } from "@/components/pro-blocks/landing-page/solutions/solutions";
import { ClubeDeBeneficios } from "@/components/pro-blocks/landing-page/clube-de-beneficios/clube-de-beneficios";
import { PlanosSection } from "@/components/pro-blocks/landing-page/planos/planos";
import { ComunidadeVipSection } from "@/components/pro-blocks/landing-page/comunidade-vip/comunidade-vip";
import { RoadmapSection } from "@/components/pro-blocks/landing-page/roadmap/roadmap";
import { LaunchModal } from "@/components/pro-blocks/landing-page/launch-modal/launch-modal";

export default function Page() {
  return (
    <main>
      <LaunchModal />
      <LpNavbar1 />
      <HeroSection2 />
      {/* <LogoSection10 /> */}
      <QuemSomos
        eyebrow="Sobre Nós"
        images={{
          main: { src: "16.jpg", alt: "" },
          small: [
            { src: "20.jpg", alt: "Telemedicina" },
            { src: "21.jpg", alt: "Libras" },
          ],
        }}
      />
      <ClubeDeBeneficios />
      <ComunidadeVipSection />
      <TestimonialsSection1
        quote="Doutor Libras é como ter uma memória fotográfica para cada consulta. Reduzimos os emails de acompanhamento em 80%. (texto de exemplo)"
        authorName="Gabriel Nunes"
        authorRole="Paciente da Doutor Libras"
        avatarSrc="/DavidPark.png"
      />
      <PlanosSection />
      <RoadmapSection />
      {/* <FaqSection2 /> */}
      <Footer1 />
    </main>
  );
}
