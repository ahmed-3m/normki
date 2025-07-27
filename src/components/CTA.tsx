import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-primary" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      
      <div className="container relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight">
            Worauf warten Sie noch?
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
            Revolutionieren Sie Ihre Bauschaden-Analyse noch heute. 
            Starten Sie kostenlos und erleben Sie die Zukunft der Bautechnik.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 shadow-floating"
            >
              Kostenlos Starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 border-white/20 text-primary-foreground hover:bg-white/10"
            >
              Demo vereinbaren
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="pt-8 space-y-4">
            <p className="text-primary-foreground/80 text-sm">
              Bereits über 500 Bauprofis vertrauen auf NormKI
            </p>
            <div className="flex justify-center items-center gap-8 text-primary-foreground/60">
              <div className="text-sm">✓ 30 Tage kostenlos</div>
              <div className="text-sm">✓ Keine Kreditkarte nötig</div>
              <div className="text-sm">✓ Sofort einsatzbereit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;