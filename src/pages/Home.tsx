import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Sections/Hero";
import SecondSection from "../components/Sections/SecondSection";
import ThirdSection from "../components/Sections/ThirdSection";
import FourthSection from "../components/Sections/FourthSection";
import SixthSection from "../components/Sections/SixthSection";
import Footer from "../components/Sections/Footer";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const storedUtm = localStorage.getItem("utmParams");
    let utmData: Record<string, string> = storedUtm ? JSON.parse(storedUtm) : {};

    let hasNewUTMs = false;
    searchParams.forEach((value, key) => {
      if (key.startsWith("utm_") && utmData[key] !== value) {
        utmData[key] = value;
        hasNewUTMs = true;
      }
    });

    if (hasNewUTMs) {
      localStorage.setItem("utmParams", JSON.stringify(utmData));
    }
  }, [location.search]);

  return (
    <>
      <Hero />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <SixthSection />
      <Footer />
    </>
  );
}

export default Home;
