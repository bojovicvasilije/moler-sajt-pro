import { Paintbrush, Home, Building2, Sparkles, Palette, Shield, Layers } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Paintbrush,
    title: "Molerski radovi",
    description: "Vrhunsko krečenje bez kašnjenja i bez nereda. Brzo završavamo, ostavljamo savršene zidove i čist prostor. Ako hoćete kvalitet – zovite sada.",
  },
  {
    icon: Building2,
    title: "Fasaderski Radovi",
    description: "Radimo profesionalne fasaderske radove koji štite i podižu vrednost objekta. Brzo, kvalitetno i bez improvizacije. Toplotna izolacija, završna obrada i besprekoran izgled. Ako hoćete fasadu koja traje godinama — zovite odmah.",
  },
  {
    icon: Layers,
    title: "Gipsani Radovi",
    description: "Loš gips se vidi zauvek. Mi radimo samo kako treba – ravno, čvrsto i estetski savršeno. Gipsani radovi koji podižu vrednost prostora. Pozovite!",
  },
  {
    icon: Sparkles,
    title: "Dekorativne Tehnike",
    description: "Radimo dekorativne tehnike koje prostoru daju luksuzni izgled – precizno, čisto i bez improvizacije. Ako želite zidove koji ostavljaju utisak na prvi pogled, zovite odmah.",
  },
  {
    icon: Shield,
    title: "Garancija Kvaliteta",
    description: "Radimo kako treba – ili ne radimo uopšte. Koristimo proverene materijale i stojimo 100% iza svakog izvedenog posla.",
  },
];

const Services = () => {
  return (
    <section id="usluge" className="py-20 bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Naše Usluge
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Sve za Vaš dom!
          </h2>
          <p className="text-muted-foreground text-lg">
            Bilo da Vam treba klasično krečenje, adaptacija enterijera ili ugradnja termoizolacije (demit fasade) na pravom ste mestu!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card hover:shadow-elevated transition-all duration-300 border-border/50 hover:border-primary/30"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="font-display text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
