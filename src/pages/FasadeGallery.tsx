import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import facadeMain from "@/assets/facade-main.jpg";
import facade2 from "@/assets/facade-2.jpg";
import facade3 from "@/assets/facade-3.jpg";
import facade4 from "@/assets/facade-4.jpg";
import facade5 from "@/assets/facade-5.jpg";
import facade6 from "@/assets/facade-6.jpg";

const facadeImages = [
  {
    src: facadeMain,
    title: "Fasada porodične kuće",
  },
  {
    src: facade2,
    title: "Moderna vila",
  },
  {
    src: facade3,
    title: "Stambena zgrada",
  },
  {
    src: facade4,
    title: "Porodična kuća",
  },
  {
    src: facade5,
    title: "Luksuzna vila",
  },
  {
    src: facade6,
    title: "Renovirana fasada",
  },
];

const FasadeGallery = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary py-8">
        <div className="container">
          <Link 
            to="/#galerija" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Nazad na galeriju
          </Link>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Fasaderski Radovi
          </h1>
          <p className="text-muted-foreground text-lg mt-2">
            Pogledajte naše projekte fasadnih radova.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facadeImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hero-overlay/90 via-hero-overlay/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-hero-text font-display text-xl font-semibold">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-secondary rounded-xl">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Potrebna Vam je nova fasada?
          </h2>
          <p className="text-muted-foreground mb-6">
            Kontaktirajte nas za besplatnu procenu i ponudu.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Zatražite ponudu
          </a>
        </div>
      </div>
    </div>
  );
};

export default FasadeGallery;
