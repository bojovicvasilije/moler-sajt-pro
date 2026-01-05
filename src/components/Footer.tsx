import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
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
              Profesionalni molersko-fasaderski radovi sa više od 15 godina iskustva. 
              Vaš pouzdan partner za ulepšavanje vašeg doma.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/molerskiradovi.krusevac"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
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
                { href: "#kontakt", label: "Kontakt" },
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
                <a href="tel:+381601234567" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  +381 60 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:info@molerskiradovi.rs" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  info@molerskiradovi.rs
                </a>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <MapPin className="w-5 h-5" />
                Kruševac, Srbija
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© {currentYear} ADS Dekor 037 Kruševac. Sva prava zadržana.</p>
            <p>Kvalitet i preciznost u svakom potezu četke.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
