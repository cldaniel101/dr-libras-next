import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-2";
import TestimonialsSection1 from "@/components/pro-blocks/landing-page/testimonials-sections/testimonials-section-1";
import { FeatureSection9 } from "@/components/pro-blocks/landing-page/feature-sections/feature-section-9";
import { PricingSection3 } from "@/components/pro-blocks/landing-page/pricing-sections/pricing-section-3";
import { FaqSection2 } from "@/components/pro-blocks/landing-page/faq-sections/faq-section-2";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { SolutionsSection } from "@/components/pro-blocks/landing-page/solutions/solutions";
import { ClubeDeBeneficios } from "@/components/pro-blocks/landing-page/clube-de-beneficios/clube-de-beneficios";
import { PlanosSection } from "@/components/pro-blocks/landing-page/planos/planos";

export default function Page() {
  return (
    <main>
      <LpNavbar1 />
      <HeroSection2 />
      {/* <LogoSection10 /> */}
      <SolutionsSection />
      <ClubeDeBeneficios />
      <FeatureSection9 />
      <TestimonialsSection1
        quote="Dr Libras é como ter uma memória fotográfica para cada consulta. Reduzimos os emails de acompanhamento em 80%. (texto de exemplo)"
        authorName="Gabriel Nunes"
        authorRole="Paciente da Dr Libras"
        avatarSrc="/DavidPark.png"
      />
      <PlanosSection />
      {/* <FaqSection2 /> */}
      <Footer1 />
    </main>
  );
}
