import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Molerski Radovi Kruševac | Profesionalni Molersko-Fasaderski Radovi</title>
        <meta 
          name="description" 
          content="Profesionalni molerski i fasaderski radovi u Kruševcu i okolini. Više od 15 godina iskustva. Besplatna procena. Kvalitetni materijali i garancija." 
        />
        <meta name="keywords" content="molerski radovi, fasaderski radovi, Kruševac, bojenje, gletovanje, malterisanje" />
        <link rel="canonical" href="https://molerskiradovi.rs" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <Gallery />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
