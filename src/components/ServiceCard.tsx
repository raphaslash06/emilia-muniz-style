interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ title, description, index }: ServiceCardProps) => {
  return (
    <article
      className={`opacity-0 animate-fade-up group relative bg-card rounded-sm overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Placeholder */}
      <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-gold/30 m-4 rounded-sm">
          <span className="text-secondary-foreground/50 font-display text-lg italic">
            Seu serviço aqui.
          </span>
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-all duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {/* Decorative Line */}
        <div className="mt-4 h-px bg-gradient-to-r from-gold/50 via-rose/30 to-transparent w-0 group-hover:w-full transition-all duration-500" />
      </div>
    </article>
  );
};

export default ServiceCard;
