import type { MetaFunction } from "@remix-run/node";
import { TrustedByClients } from "~/components/TrustedByClients/TrustedByClients";
import { OurCoreCompetencies } from "~/components/OurCoreCompetencies/OurCoreCompetencies";
import { WhyChooseUs } from "~/components/WhyChooseUs/WhyChooseUs";
import { OurCoreServices } from "~/components/OurCoreServices/OurCoreServices";
import { Header } from "~/components/Header/Header";
import { Hero } from "~/components/Hero/Hero";
import { Testimonials } from "~/components/Testimonials/Testimonials";
import { SuccessStories } from "~/components/SuccessStories/SuccessStories";
import { Footer } from "~/components/Footer/Footer";
import { TeamSection } from "~/components/TeamSection/TeamSection";
import { AboutSection } from "~/components/AboutSection/AboutSection";
import { ContactSection } from "~/components/ContactUs/ContactUs";

export const meta: MetaFunction = () => {
  return [{ title: "The Business Broadway" }, { name: "description", content: "Welcome to The Business Broadway!" }];
};

export default function Index() {
  return (
    <>
      <Header />
      <main id="content">
        <Hero />
        <TrustedByClients />
        <OurCoreCompetencies />
        <WhyChooseUs />
        <OurCoreServices />
        <Testimonials />
        <SuccessStories />
        <TeamSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
