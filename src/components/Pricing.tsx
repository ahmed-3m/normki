import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    name: 'Starter',
    price: '29',
    period: 'Monat',
    description: 'Perfekt für kleinere Projekte',
    features: [
      '50 Analysen pro Monat',
      'Basis Schadenserkennung',
      'Standard Berichte',
      'E-Mail Support',
      'ÖNORM Prüfung'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '89',
    period: 'Monat',
    description: 'Ideal für professionelle Anwender',
    features: [
      '200 Analysen pro Monat',
      'Erweiterte KI-Analyse',
      'Premium Berichte',
      'Prioritäts-Support',
      'ÖNORM & DIN Prüfung',
      'Individuelle Anpassungen',
      'API Zugang'
    ],
    popular: true
  },
  {
    name: 'Business',
    price: '199',
    period: 'Monat',
    description: 'Für große Unternehmen',
    features: [
      'Unbegrenzte Analysen',
      'KI-Analyse Premium',
      'White-Label Berichte',
      'Dedicated Support',
      'Alle Normen & Standards',
      'Vollständige Anpassung',
      'API & Integrationen',
      'Team Management'
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            Unser{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Preisplan
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Wählen Sie den Plan, der am besten zu Ihren Bedürfnissen passt. 
            Alle Pläne enthalten eine 30-tägige Geld-zurück-Garantie.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                    <Star className="w-3 h-3 mr-1" />
                    Beliebt
                  </Badge>
                </div>
              )}
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black">€{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </div>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-primary hover:opacity-90' 
                      : 'bg-card border border-border hover:bg-muted'
                  } transition-all duration-300`}
                  size="lg"
                >
                  Plan wählen
                </Button>
                
                <div className="space-y-4">
                  <div className="h-px bg-border" />
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;