import { ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/normki-hero.jpg';

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium">
                🚀 Ihre ultimative KI-Lösung für Bautechnik!
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                <span className="text-primary">Linz erste</span>{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  KI-Plattform
                </span>{' '}
                zur Bauschaden-Analyse
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Übernehmen Sie die Kontrolle – erhalten Sie innerhalb von 30 Sekunden eine technische Erstanalyse mit Normbezug und Handlungsempfehlungen.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-4">
                Kostenlos Testen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Demo ansehen
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-muted-foreground">ÖNORM & DIN konform</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-muted-foreground">DSGVO-konform</span>
              </div>
            </div>
          </div>

          {/* Right Content - Demo Card */}
          <div className="relative">
            <div className="relative bg-card rounded-3xl shadow-floating p-8 animate-float">
              <div className="absolute inset-0 bg-gradient-secondary opacity-10 rounded-3xl" />
              
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Analyse läuft...</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>28 Sekunden</span>
                  </div>
                </div>
                
                <div className="aspect-video bg-muted rounded-xl overflow-hidden">
                  <img 
                    src={heroImage} 
                    alt="NormKI Analyse Demo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Schadenserkennung</span>
                    <span className="text-sm text-green-600">✓ Abgeschlossen</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Normprüfung</span>
                    <span className="text-sm text-green-600">✓ Abgeschlossen</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Bericht erstellen</span>
                    <span className="text-sm text-blue-600">⟳ In Bearbeitung</span>
                  </div>
                </div>
                
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-primary rounded-full w-3/4 animate-pulse-glow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;