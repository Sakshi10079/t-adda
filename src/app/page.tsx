import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import WhyTAdda from "@/components/home/WhyTAdda";
import HowItWorks from "@/components/home/HowItWorks";
import Products from "@/components/home/Products";
import Pricing from "@/components/home/Pricing";
import AddOns from "@/components/home/AddOns";
import BeyondPrinting from "@/components/home/BeyondPrinting";
import TermsConditions from "@/components/home/TermsConditions";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <WhyTAdda />
      <HowItWorks />
      <Products />
      <Pricing />
      <AddOns />
      <BeyondPrinting />
      <TermsConditions />
      <Contact />
      <Footer/>
    </main>
  );
}
