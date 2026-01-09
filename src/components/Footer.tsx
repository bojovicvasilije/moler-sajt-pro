import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";
import sertifikat from "@/assets/sertifikat.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="ADS Dekor 037 Logo" 
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-display text-xl font-semibold leading-tight">
                  ADS Dekor 037
                </h3>
                <p className="text-sm text-background/60">Kruševac</p>
              </div>
            </div>
            <p className="text-background/70 max-w-md mb-6">
              Kontaktirajte nas i dopustite da Vam pružimo uslugu vrhunskog kvaliteta, koja će prevazići Vaša očekivanja.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/molerskiradovi.krusevac/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Brzi Linkovi</h4>
            <ul className="space-y-3">
              {[
                { href: "#pocetna", label: "Početna" },
                { href: "#usluge", label: "Usluge" },
                { href: "#galerija", label: "Galerija" },
                { href: "#o-nama", label: "O Nama" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+381693767622" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  069 376 7622
                </a>
              </li>
              <li>
                <a href="mailto:adsdekor037@gmail.com" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  adsdekor037@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <MapPin className="w-5 h-5" />
                Kruševac, Srbija
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Lokacija</h4>
            <div className="w-full h-28 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46153.04774453682!2d21.28!3d43.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4756173c2e07e251%3A0x9d4f5f0f8f0f0f0f!2sKru%C5%A1evac%2C%20Serbia!5e0!3m2!1sen!2srs!4v1700000000000!5m2!1sen!2srs"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokacija - Kruševac"
              />
            </div>
          </div>

          {/* Sertifikat */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Sertifikat</h4>
            <div className="w-full h-28 rounded-lg overflow-hidden">
              <img 
                src={sertifikat} 
                alt="Sertifikat - Diploma Moler" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6">
          <div className="text-sm text-background/60">
            <p>© {currentYear} ADS Dekor 037 Kruševac. Sva prava zadržana.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
