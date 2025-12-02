import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-secondary overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-gold/20 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-rose/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-gold/10 rounded-full" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="opacity-0 animate-fade-up flex items-center gap-2 px-4 py-2 border border-gold/30 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm tracking-wider text-secondary-foreground/80 uppercase">
              Beleza & Empoderamento
            </span>
          </div>

          {/* Main Title */}
          <h1 className="opacity-0 animate-fade-up stagger-1 font-display text-5xl md:text-7xl lg:text-8xl text-secondary-foreground mb-6 leading-tight">
            Sua beleza,
            <br />
            <span className="text-gradient-gold italic">nossa arte</span>
          </h1>

          {/* Subtitle */}
          <p className="opacity-0 animate-fade-up stagger-2 text-lg md:text-xl text-secondary-foreground/70 max-w-2xl mb-10 leading-relaxed">
            Descubra o poder de se sentir única. No Studio Emilia Muniz, cada
            detalhe é pensado para realçar sua essência e elevar sua autoestima.
          </p>

          {/* CTA Buttons */}
          <div className="opacity-0 animate-fade-up stagger-3 flex flex-col sm:flex-row gap-4">
            <Button variant="gold" size="xl">
              Reservar Horário
            </Button>
            <Button variant="gold-outline" size="xl" asChild>
              <a href="#servicos">Conhecer Serviços</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="opacity-0 animate-fade-up stagger-4 grid grid-cols-3 gap-8 md:gap-16 mt-16 pt-16 border-t border-gold/10">
            <div className="text-center">
              <span className="block font-display text-3xl md:text-4xl text-gold mb-1">5+</span>
              <span className="text-xs md:text-sm text-secondary-foreground/60 uppercase tracking-wider">
                Anos de Experiência
              </span>
            </div>
            <div className="text-center">
              <span className="block font-display text-3xl md:text-4xl text-gold mb-1">1000+</span>
              <span className="text-xs md:text-sm text-secondary-foreground/60 uppercase tracking-wider">
                Clientes Satisfeitas
              </span>
            </div>
            <div className="text-center">
              <span className="block font-display text-3xl md:text-4xl text-gold mb-1">100%</span>
              <span className="text-xs md:text-sm text-secondary-foreground/60 uppercase tracking-wider">
                Dedicação
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
