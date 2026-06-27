import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import TrustedBrands from "../trusted/TrustedBrands";
import PlatformOverview from "../PlateformOverview/PlatformOverview";
import AiSection from "../ai/AiSection";
import Integrations from "../integrations/Integrations";
import CustomerStories from "../stories/CustomerStory";
import Journey from "../journey/Journey";
import Reviews from "../reviews/Reviews";
import CTA from "../cta/CTA";
import Footer from "../footer/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBrands />
      <PlatformOverview />
      <AiSection />
      <Integrations />
      <CustomerStories />
      <Journey />
      <Reviews />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;