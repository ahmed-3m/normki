import { Upload, Brain, FileText } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Foto hochladen',
    description: 'Laden Sie einfach ein Foto des Bauschädens hoch. Unsere KI akzeptiert alle gängigen Bildformate.'
  },
  {
    number: '02',
    icon: Brain,
    title: 'KI-Analyse',
    description: 'Unsere fortschrittliche KI analysiert das Bild in Echtzeit und identifiziert Schäden sowie Normbezüge.'
  },
  {
    number: '03',
    icon: FileText,
    title: 'Bericht erhalten',
    description: 'Erhalten Sie einen detaillierten Bericht mit Handlungsempfehlungen und Normbezug in unter 30 Sekunden.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Heading */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Intelligente Analyse in{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                3 Schritten
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Von der Bildanalyse bis zum fertigen Bericht - 
              unser streamlinierter Prozess macht Bauschaden-Analyse 
              so einfach wie nie zuvor.
            </p>

            {/* Social proof */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">Gesehen bei:</p>
              <div className="flex items-center gap-4">
                <div className="bg-card rounded-lg px-4 py-2 shadow-sm">
                  <span className="text-lg font-bold text-primary">brutkasten</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="group flex gap-6 items-start animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-floating">
                    {step.number}
                  </div>
                  <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-primary/20 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <step.icon className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;