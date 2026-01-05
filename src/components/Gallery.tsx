import { useState } from "react";
import { Link } from "react-router-dom";
import facadeMain from "@/assets/facade-main.jpg";
import gypsumWork from "@/assets/gypsum-work.jpg";
import paintingWork from "@/assets/painting-work.jpg";

const galleryItems = [
  {
    src: facadeMain,
    alt: "Fasaderski radovi",
    category: "Fasade",
    title: "Obnova fasade stambene zgrade",
  },
  {
    src: gypsumWork,
    alt: "Gipsani radovi",
    category: "Gipsani radovi",
    title: "Montaža gipsanih ploča",
  },
  {
    src: paintingWork,
    alt: "Molerski radovi",
    category: "Molerski radovi",
    title: "Profesionalno farbanje zidova",
  },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("Sve");
  const filters = ["Sve", "Fasade", "Gipsani radovi", "Molerski radovi"];

  const filteredItems = activeFilter === "Sve" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="galerija" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Naši Radovi
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Galerija Projekata
          </h2>
          <p className="text-muted-foreground text-lg">
            Pogledajte neke od naših uspešno završenih projekata i uverite se u kvalitet našeg rada.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const content = (
              <div
                className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hero-overlay/90 via-hero-overlay/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-primary text-sm font-medium">{item.category}</span>
                    <h3 className="text-hero-text font-display text-xl font-semibold mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );

            // Wrap in Link based on category
            if (item.category === "Fasade") {
              return (
                <Link key={index} to="/fasade">
                  {content}
                </Link>
              );
            }

            if (item.category === "Molerski radovi") {
              return (
                <Link key={index} to="/molerski">
                  {content}
                </Link>
              );
            }

            if (item.category === "Gipsani radovi") {
              return (
                <Link key={index} to="/gipsani">
                  {content}
                </Link>
              );
            }

            return <div key={index}>{content}</div>;
          })}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/molerskiradovi.krusevac"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Pogledajte više na Instagramu
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
