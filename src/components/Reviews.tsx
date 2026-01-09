import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marko Petrović",
    rating: 5,
    text: "Izuzetno profesionalan tim! Fasada je urađena besprekorno, u dogovorenom roku. Preporučujem svima.",
    service: "Fasaderski radovi",
  },
  {
    name: "Ana Jovanović",
    rating: 5,
    text: "Molerski radovi su urađeni pedantno i čisto. Majstori su bili veoma ljubazni i uredni.",
    service: "Molerski radovi",
  },
  {
    name: "Dragan Nikolić",
    rating: 5,
    text: "Gipsani radovi su perfektno izvedeni. Zadovoljan sam kvalitetom i cenom usluge.",
    service: "Gipsani radovi",
  },
  {
    name: "Jelena Stojanović",
    rating: 5,
    text: "Dekorativne tehnike su prelep završetak našeg doma. Hvala na strpljenju i profesionalizmu!",
    service: "Dekorativne tehnike",
  },
];

const Reviews = () => {
  return (
    <section id="recenzije" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Recenzije
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Šta kažu naši klijenti
          </h2>
          <p className="text-muted-foreground text-lg">
            Pročitajte iskustva nekih od naših zadovoljnih klijenata.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
