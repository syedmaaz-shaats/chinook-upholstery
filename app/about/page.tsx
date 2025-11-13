import Container from "@/components/layout/Container";
import PageBanner from "@/components/layout/PageBanner";
import TestimonialsSection from "@/components/sections/Testimonials/TestimonialsSection";
import AboutUs3DSection from "@/components/sections/AboutUs/AboutUs3DSection";
import BrandsClientsSection from "@/components/sections/BrandsClients/BrandsClientsSection";

export default function AboutPage() {
  return (
  <>  
      <PageBanner
        title="About Chinook Upholstery"
        slug={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        backgroundImage="/images/about-hero.jpg"
        fixedBg={true}
      />
      <AboutUs3DSection />
    <Container>
      <BrandsClientsSection />
    </Container>
    <TestimonialsSection />
  </>
  );
}
