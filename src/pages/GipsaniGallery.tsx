import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import gypsumWork from "@/assets/gypsum-work.jpg";

const gipsaniImages = [
  {
    src: gypsumWork,
    title: "Gipsani radovi",
  },
  // Dodajte više slika ovde
];

const GipsaniGallery = () => {
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
            Gipsani Radovi
          </h1>
          <p className="text-muted-foreground text-lg mt-2">
            Pogledajte naše projekte gipsanih radova.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gipsaniImages.map((image, index) => (
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
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-secondary rounded-xl">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Potrebni Vam su gipsani radovi?
          </h2>
          <a
            href="tel:+381693767622"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Kontaktirajte nas
          </a>
        </div>
      </div>
    </div>
  );
};

export default GipsaniGallery;
