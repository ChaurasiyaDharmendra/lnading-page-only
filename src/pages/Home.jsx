import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";

import TrustedBrands from "../components/trusted/TrustedBrands";

import FeatureCards from "../components/features/FeatureCards";

import AISection from "../components/ai/AiSection";


import Integrations from "../components/integrations/Integrations";

import CustomerStories from "../components/stories/CustomerStory";

import UseCases from "../components/usecases/UseCases";

import Research from "../components/research/Research";

import Journey from "../components/journey/Journey";

import Reviews from "../components/reviews/Reviews";

import CTA from "../components/cta/CTA";

import Footer from "../components/footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <TrustedBrands />

      <FeatureCards />

      <AiSection />

      <Integrations />

      <CustomerStories />

      <UseCases />

      <Research />

      <Journey />

      <Reviews />

      <CTA />

      <Footer />
    </>
  );
}

export default Home;