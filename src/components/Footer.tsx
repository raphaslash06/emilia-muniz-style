import { Instagram, Facebook, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="font-display text-2xl text-gradient-gold tracking-wide">
                Studio
              </span>
              <span className="font-display text-lg text-foreground tracking-widest -mt-1">
                Emilia Muniz
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transformando vidas através da beleza há mais de 5 anos. Cada
              cliente é única e merece um atendimento especial.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-secondary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-secondary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {["Início", "Serviços", "Galeria", "Contato"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">
              Serviços
            </h4>
            <ul className="space-y-3">
              {[
                "Corte & Estilo",
                "Coloração",
                "Tratamentos",
                "Manicure",
                "Maquiagem",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Rua Dom Pedro II, 05
                  <br />
                  Centro - Caçapava - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  (11) 99999-9999
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Seg - Sáb: 9h às 19h
                  <br />
                  Domingo: Fechado
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-muted-foreground text-xs">
              © 2024 Studio Emilia Muniz. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-1">
              <span className="text-muted-foreground text-xs">Feito com</span>
              <span className="text-rose">♥</span>
              <span className="text-muted-foreground text-xs">
                para realçar sua beleza
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
