import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import molerskiWork1 from "@/assets/molerski-work-1.jpg";
import molerskiWork2 from "@/assets/molerski-work-2.jpg";
import molerskiWork3 from "@/assets/molerski-work-3.jpg";

const dekorativneImages = [
  {
    src: molerskiWork1,
    title: "Dekorativna tehnika",
  },
  {
    src: molerskiWork2,
    title: "Dekorativna tehnika",
  },
  {
    src: molerskiWork3,
    title: "Dekorativna tehnika",
  },
];

const DekorativneGallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary py-8">
        <div className="container">
          <Link 
            to="/"
            onClick={() => {
              setTimeout(() => {
                document.getElementById('galerija')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Nazad na galeriju
          </Link>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Dekorativne Tehnike
          </h1>
          <p className="text-muted-foreground text-lg mt-2">
            Pogledajte naše projekte dekorativnih tehnika.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dekorativneImages.map((image, index) => (
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
            Želite dekorativne tehnike za Vaš prostor?
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

export default DekorativneGallery;
