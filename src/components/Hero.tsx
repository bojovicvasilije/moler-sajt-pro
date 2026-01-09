import { CheckCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-painting.jpg";

const Hero = () => {
  const features = [
    "Molerski radovi",
    "Fasaderski radovi",
    "Gipsani radovi",
    "Dekoracije",
  ];

  return (
    <section id="pocetna" className="relative min-h-screen flex items-center pt-32 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Profesionalni molerski radovi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/95 via-hero-overlay/80 to-hero-overlay/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
              Kruševac & okolina
            </span>
          </div>

          <h1 className="animate-fade-up opacity-0 font-display text-4xl md:text-5xl lg:text-7xl font-bold text-hero-text leading-tight mb-8 tracking-wide" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <span className="md:inline">Moleraj</span>
            <span className="hidden md:inline text-hero-text/60 mx-2">,</span>
            <span className="md:inline">Fasade</span>
            <span className="hidden md:inline text-hero-text/60 mx-2">,</span>
            <span className="block md:inline text-primary">Gips</span>
          </h1>

          <p className="animate-fade-up opacity-0 text-lg md:text-xl text-hero-text/80 mb-8 leading-relaxed" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            "ADS Dekor" je sinonim za grupu profesionalaca, sa višedecenijskim iskustvom, koji će obaviti izvanredan posao u oblasti završnih građevinskih radova.
          </p>

          {/* Features */}
          <div className="animate-fade-up opacity-0 flex flex-wrap justify-center gap-4 mb-10" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-hero-text/90">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button with Scroll Indicator */}
          <div className="animate-fade-up opacity-0 flex flex-col items-center gap-4" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            <Button variant="outline" size="lg" asChild className="bg-transparent border-hero-text/30 text-hero-text hover:bg-hero-text/10 hover:text-hero-text">
              <a href="#galerija">
                Pogledajte Radove
              </a>
            </Button>
            <a href="#galerija" className="animate-bounce mt-2">
              <ChevronDown className="w-8 h-8 text-hero-text/60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
