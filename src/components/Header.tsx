import { useState } from "react";
import { Menu, X, Phone, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo-new.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#pocetna", label: "Početna" },
    { href: "#usluge", label: "Usluge" },
    { href: "#galerija", label: "Galerija" },
    { href: "#recenzije", label: "Preporuke" },
    { href: "#o-nama", label: "O Nama" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+381693767622" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">069 376 7622</span>
            </a>
            <div className="hidden md:flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Pon - Sub: 07:00 - 18:00</span>
            </div>
          </div>
          <a 
            href="https://instagram.com/molerskiradovi.krusevac" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Instagram className="w-4 h-4" />
            <span className="hidden sm:inline">@molerskiradovi.krusevac</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#pocetna" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="ADS Dekor 037 Logo" 
              className="w-14 h-14 rounded-full object-cover shadow-soft"
            />
            <div>
              <h1 className="font-display text-xl font-semibold text-foreground leading-tight">
                ADS Dekor 037
              </h1>
              <p className="text-xs text-muted-foreground">Kruševac</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
