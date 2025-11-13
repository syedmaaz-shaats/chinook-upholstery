import Hero from "@/components/Hero";
import Container from "@/components/layout/Container";
import Container2 from "@/components/layout/Blue-Container";
import AboutPreview from "@/components/sections/AboutUs/AboutPreview";
import ServiceCard from "@/components/sections/Services/ServiceCard";
import GallerySection from "@/components/sections/Gallery/GallerySection";
import ClientsSection from "@/components/sections/Clients/ClientsSection";
import TestimonialsSection from "@/components/sections/Testimonials/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero
        title="Specialize in Upholstery, Window Fashion, Restoration & Custom Furniture."
        subtitle="We help both residential and commercial clients."
        ctaText="View Our Services"
        ctaLink="/upholstery"
      />
      <Container>
        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 lg:px-16 md:px-5 py-12">
          <ServiceCard
            title="Upholstery"
            description="Whether your style is modern or traditional, we can help with fabric selection in keeping with the style of your home."
            link="/upholstery"
            image="/images/gallery/custom-upholstery-5-300x300.jpg"
          />
          <ServiceCard
            title="Window Coverings"
            description="Whether your style is modern or traditional, we can help with fabric selection in keeping with the style of your home."
            link="/window-coverings"
            image="/images/gallery/window-covering-1.jpg"
          />
          <ServiceCard
            title="Headboards"
            description="You can create your own masterpiece one-of-a-kind product and we will build it for you."
            link="/headboards"
            image="/images/gallery/headboard-5.jpg"
          />
          <ServiceCard
            title="Custom Furniture"
            description="From repairing that old antique to making something new to suit your decor, so don’t hesitate to ask – restoration, headboards."
            link="/custom-furniture"
            image="/images/gallery/custom-furniture-2.jpg"
          />
        </section>
      </Container>
      <Container2>
        <AboutPreview />
      </Container2>
      <GallerySection />
      <ClientsSection />
      <TestimonialsSection />
    </>
  );
}
