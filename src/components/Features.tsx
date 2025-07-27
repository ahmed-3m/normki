import { 
  Brain, 
  FileCheck, 
  Zap, 
  Camera, 
  Settings, 
  Lightbulb 
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Intelligente Schadens-Analyse',
    description: 'Unsere KI analysiert Schadensbilder und schlägt Verbesserungen vor'
  },
  {
    icon: FileCheck,
    title: 'Norm- und Regelprüfung',
    description: 'Automatische Prüfung nach ÖNORM und DIN Standards'
  },
  {
    icon: Zap,
    title: 'Blitzschnelle Erkennung',
    description: 'Schadenserkennung in unter 30 Sekunden'
  },
  {
    icon: Camera,
    title: 'Foto-zu-Bericht Umwandlung',
    description: 'Verwandeln Sie Schadensfotos in professionelle Berichte'
  },
  {
    icon: Settings,
    title: 'Stil- und Tonanpassung',
    description: 'Berichte für verschiedene Zielgruppen angepasst'
  },
  {
    icon: Lightbulb,
    title: 'Automatische Empfehlungen',
    description: 'Sofortige Handlungsempfehlungen basierend auf Normen'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            Hauptfunktionen unserer{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              KI-Plattform
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Unsere KI wurde entwickelt, um außergewöhnliche Bauschaden-Analyse zu bieten, 
            die Ihre Arbeitsprozesse revolutioniert und die Effizienz steigert.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />
              
              <div className="relative space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;