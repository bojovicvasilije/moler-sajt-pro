import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-painting.jpg";

const Hero = () => {
  const features = [
    "Profesionalni molerski radovi",
    "Fasaderski radovi",
    "Besplatna procena",
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
        <div className="max-w-2xl">
          <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
              Kruševac i okolina
            </span>
          </div>

          <h1 className="animate-fade-up opacity-0 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-hero-text leading-tight mb-6" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Kvalitetni Molersko
            <span className="block text-primary">Fasaderski Radovi</span>
          </h1>

          <p className="animate-fade-up opacity-0 text-lg md:text-xl text-hero-text/80 mb-8 leading-relaxed" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Više od 15 godina iskustva u molerskim i fasaderskim radovima. 
            Pretvorimo vaš prostor u remek-delo sa preciznošću i pažnjom prema detaljima.
          </p>

          {/* Features */}
          <div className="animate-fade-up opacity-0 flex flex-wrap gap-4 mb-10" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-hero-text/90">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            <Button variant="outline" size="lg" asChild className="bg-transparent border-hero-text/30 text-hero-text hover:bg-hero-text/10 hover:text-hero-text">
              <a href="#galerija">
                Pogledajte Radove
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-hero-text/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-hero-text/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
