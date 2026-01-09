import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
}

const staticReviews = [
  {
    id: "static-1",
    name: "Marko Petrović",
    rating: 5,
    text: "Izuzetno profesionalan tim! Fasada je urađena besprekorno, u dogovorenom roku. Preporučujem svima.",
  },
  {
    id: "static-2",
    name: "Ana Jovanović",
    rating: 5,
    text: "Molerski radovi su urađeni pedantno i čisto. Majstori su bili veoma ljubazni i uredni.",
  },
  {
    id: "static-3",
    name: "Dragan Nikolić",
    rating: 5,
    text: "Gipsani radovi su perfektno izvedeni. Zadovoljan sam kvalitetom i cenom usluge.",
  },
  {
    id: "static-4",
    name: "Jelena Stojanović",
    rating: 5,
    text: "Travertino tehnika koju su majstori uradili u mom stanu, me je prosto oduševila, pre radova ono što sam videla na njihovim fotografijama mi je delovalo fantastično, ali uživo... nemam reči! Stvarno mogu samo da kažem sve preporuke za ekipu...",
  },
];

const Reviews = () => {
  const [dbReviews, setDbReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (!error && data) {
      setDbReviews(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !text.trim()) {
      toast({
        title: "Greška",
        description: "Molimo popunite sva polja.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from("reviews").insert({
      name: name.trim(),
      rating,
      text: text.trim(),
    });

    setIsSubmitting(false);

    if (error) {
      toast({
        title: "Greška",
        description: "Došlo je do greške. Pokušajte ponovo.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Hvala Vam!",
        description: "Vaša recenzija je poslata i biće prikazana nakon odobrenja.",
      });
      setName("");
      setRating(5);
      setText("");
      setShowForm(false);
    }
  };

  const allReviews = [...staticReviews, ...dbReviews];

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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {allReviews.slice(0, 8).map((review) => (
            <div
              key={review.id}
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

        {/* Add Review Button / Form */}
        <div className="text-center">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Ostavite Vašu recenziju
            </button>
          ) : (
            <div className="max-w-xl mx-auto bg-card rounded-2xl p-6 shadow-soft border border-border/50">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Ostavite Vašu recenziju
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Vaše ime"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Ocena
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-8 h-8 transition-colors ${
                            star <= rating
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder="Vaša recenzija..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    maxLength={1000}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                <div className="flex gap-3 justify-center">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 rounded-lg font-medium border border-border text-foreground hover:bg-secondary transition-colors"
                  >
                    Otkaži
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Slanje..." : "Pošalji"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
