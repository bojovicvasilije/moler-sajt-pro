import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ADS Dekor 037 Kruševac | Profesionalni Molersko-Fasaderski Radovi</title>
        <meta 
          name="description" 
          content="Profesionalni molerski i fasaderski radovi u Kruševcu i okolini. Više od 15 godina iskustva. Kvalitetni materijali i garancija." 
        />
        <meta name="keywords" content="molerski radovi, fasaderski radovi, Kruševac, bojenje, gletovanje, malterisanje, ADS Dekor" />
        <link rel="canonical" href="https://adsdekor037.rs" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <Gallery />
          <Reviews />
          <About />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
