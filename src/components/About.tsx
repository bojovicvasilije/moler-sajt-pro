import { Award, Users, Calendar, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Calendar, value: "15+", label: "Godina iskustva" },
  { icon: Users, value: "500+", label: "Zadovoljnih klijenata" },
  { icon: Award, value: "100%", label: "Garancija kvaliteta" },
  { icon: ThumbsUp, value: "1000+", label: "Završenih projekata" },
];

const About = () => {
  return (
    <section id="o-nama" className="py-20 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              O Nama
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Vaš Pouzdan Partner za Molerske Radove
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Sa više od 15 godina iskustva u molerskim i fasaderskim radovima, 
                pružamo vrhunske usluge stanovnicima Kruševca i okoline.
              </p>
              <p>
                Naš tim kvalifikovanih majstora koristi samo prvoklasne materijale 
                i moderne tehnike kako bi svaki projekat bio izveden savršeno.
              </p>
              <p>
                Posvećeni smo kvalitetu, tačnosti i potpunom zadovoljstvu naših klijenata. 
                Svaki prostor tretiramo kao da je naš sopstveni.
              </p>
            </div>

            {/* Features List */}
            <div className="mt-8 space-y-4">
              {[
                "Besplatna procena i savetovanje",
                "Korišćenje premium materijala",
                "Čisto i uredno radno mesto",
                "Poštovanje rokova",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 text-center shadow-soft border border-border/50"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="font-display text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
