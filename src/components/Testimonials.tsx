import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'DI Maria Schneider',
    role: 'Bauingenieurin, Schneider & Partner ZT GmbH',
    content: 'NormKI hat unsere Schadensbegutachtung revolutioniert. Was früher Stunden gedauert hat, erledigen wir jetzt in Minuten. Die Normprüfung ist dabei immer korrekt.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'Ing. Thomas Huber',
    role: 'Geschäftsführer, Huber Bautechnik GmbH',
    content: 'Die KI-gestützte Analyse ist beeindruckend präzise. Unsere Kunden sind von der Geschwindigkeit und Qualität der Berichte begeistert.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'Arch. DI Sandra Weber',
    role: 'Architekturbüro Weber & Associates',
    content: 'Endlich eine Lösung, die Technik versteht! Die automatischen Handlungsempfehlungen sparen uns enorm viel Zeit bei der Projektplanung.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'Ing. Michael Gruber',
    role: 'Sachverständiger für Bautechnik',
    content: 'Als Sachverständiger brauche ich verlässliche Analysen. NormKI liefert konsistent hochwertige Erstbegutachtungen, die meine Arbeit perfekt ergänzen.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'DI Christina Bauer',
    role: 'Projektleiterin, Bauer Baumanagement',
    content: 'Die Integration in unseren Workflow war nahtlos. Die 30-Sekunden-Analyse ist kein Marketing-Versprechen, sondern Realität.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'Ing. Andreas Moser',
    role: 'Geschäftsführer, Moser Bautechnik',
    content: 'NormKI hat unsere Effizienz um 400% gesteigert. Die Kostenersparnis durch weniger Nachbegehungen ist erheblich.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            Was unsere{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Kunden sagen
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Über 500 österreichische Bautechnik-Profis vertrauen bereits auf NormKI. 
            Lesen Sie, was sie über unsere Plattform sagen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
            >
              <div className="space-y-6">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;