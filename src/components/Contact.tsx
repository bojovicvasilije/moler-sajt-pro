import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+381 60 123 4567",
    href: "tel:+381601234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@molerskiradovi.rs",
    href: "mailto:info@molerskiradovi.rs",
  },
  {
    icon: MapPin,
    label: "Lokacija",
    value: "Kruševac, Srbija",
    href: "#",
  },
  {
    icon: Clock,
    label: "Radno vreme",
    value: "Pon - Sub: 07:00 - 18:00",
    href: "#",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Poruka poslata!",
      description: "Hvala vam na interesovanju. Kontaktiraćemo vas uskoro.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="kontakt" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Kontakt
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Zatražite Besplatnu Ponudu
          </h2>
          <p className="text-muted-foreground text-lg">
            Kontaktirajte nas za besplatnu procenu vaših molerskih ili fasaderskih radova. 
            Odgovorićemo vam u najkraćem mogućem roku.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Pošaljite Upit
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ime i Prezime
                  </label>
                  <Input
                    placeholder="Vaše ime"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefon
                  </label>
                  <Input
                    type="tel"
                    placeholder="+381 60 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="vas@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Poruka
                </label>
                <Textarea
                  placeholder="Opišite vaš projekat..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Pošaljite Upit
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="text-lg font-medium text-foreground">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Instagram CTA */}
            <div className="bg-gradient-hero rounded-2xl p-8 text-center">
              <Instagram className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
                Pratite nas na Instagramu
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Pogledajte naše najnovije radove i inspiraciju
              </p>
              <a
                href="https://instagram.com/molerskiradovi.krusevac"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-lg font-medium hover:bg-card/90 transition-colors"
              >
                @molerskiradovi.krusevac
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
