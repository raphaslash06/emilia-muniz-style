const galleryItems = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  aspectClass: i % 3 === 0 ? "row-span-2" : "",
}));

const Gallery = () => {
  return (
    <section id="galeria" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="opacity-0 animate-fade-up text-gold text-sm tracking-widest uppercase font-medium">
            Nosso Trabalho
          </span>
          <h2 className="opacity-0 animate-fade-up stagger-1 font-display text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mt-4 mb-6">
            <span className="text-gradient-gold italic">Galeria</span> de Transformações
          </h2>
          <p className="opacity-0 animate-fade-up stagger-2 text-secondary-foreground/70 leading-relaxed">
            Inspire-se com algumas das nossas transformações mais especiais.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`opacity-0 animate-scale-in group relative bg-charcoal rounded-sm overflow-hidden ${item.aspectClass}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-gold/20 m-3 rounded-sm">
                <span className="text-secondary-foreground/40 font-display text-sm md:text-base italic text-center px-4">
                  Seu serviço aqui.
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-all duration-500" />
              
              {/* Decorative Corner */}
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="opacity-0 animate-fade-up mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors duration-300 text-sm tracking-wider uppercase font-medium"
          >
            Ver mais no Instagram
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
