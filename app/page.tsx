import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBand from "@/components/TrustBand";
import Services from "@/components/Services";
import WhyCPS from "@/components/WhyCPS";
import Locations from "@/components/Locations";
import Team from "@/components/Team";
import GetStarted from "@/components/GetStarted";
import RequestSection from "@/components/RequestSection";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <TrustBand />
        <Services />
        <WhyCPS />
        <Locations />
        <Team />
        <GetStarted />
        <RequestSection />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
