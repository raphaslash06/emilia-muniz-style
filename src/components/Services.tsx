import ServiceCard from "./ServiceCard";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Corte & Estilo",
    description:
      "Transforme seu visual com cortes modernos e personalizados que realçam sua personalidade e estilo único.",
  },
  {
    title: "Coloração",
    description:
      "Das cores vibrantes aos tons naturais, nossa expertise em coloração garante resultados deslumbrantes e duradouros.",
  },
  {
    title: "Tratamentos Capilares",
    description:
      "Hidratação profunda, reconstrução e tratamentos especializados para cabelos saudáveis e radiantes.",
  },
  {
    title: "Penteados",
    description:
      "Penteados elegantes para ocasiões especiais, casamentos, formaturas e eventos sociais.",
  },
  {
    title: "Manicure & Pedicure",
    description:
      "Cuidados completos para suas unhas com as últimas tendências em nail art e esmaltação em gel.",
  },
  {
    title: "Maquiagem",
    description:
      "Maquiagem profissional para qualquer ocasião, do look natural ao glamouroso make de festa.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="relative py-24 md:py-32 bg-background">
      {/* Top gradient overlay for smooth transition */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-secondary/50 via-secondary/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="opacity-0 animate-fade-up text-gold text-sm tracking-widest uppercase font-medium">
            O que oferecemos
          </span>
          <h2 className="opacity-0 animate-fade-up stagger-1 font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Nossos <span className="text-gradient-gold italic">Serviços</span>
          </h2>
          <p className="opacity-0 animate-fade-up stagger-2 text-muted-foreground leading-relaxed">
            Cada serviço é realizado com dedicação e técnicas atualizadas,
            garantindo resultados que superam suas expectativas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="opacity-0 animate-fade-up mt-16 text-center">
          <Button variant="gold" size="xl">
            Reservar Horário
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
