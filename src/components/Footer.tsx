import { Building2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { label: 'Funktionen', href: '#features' },
      { label: 'Preise', href: '#pricing' },
      { label: 'Demo', href: '#demo' },
      { label: 'API', href: '#api' }
    ],
    company: [
      { label: 'Über uns', href: '#team' },
      { label: 'Karriere', href: '#careers' },
      { label: 'Blog', href: '#blog' },
      { label: 'Presse', href: '#press' }
    ],
    support: [
      { label: 'Hilfe', href: '#help' },
      { label: 'Dokumentation', href: '#docs' },
      { label: 'Support', href: '#support' },
      { label: 'Status', href: '#status' }
    ],
    legal: [
      { label: 'Datenschutz', href: '#privacy' },
      { label: 'AGB', href: '#terms' },
      { label: 'Impressum', href: '#imprint' },
      { label: 'Cookies', href: '#cookies' }
    ]
  };

  return (
    <footer className="bg-card border-t">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">NormKI</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Die führende KI-Plattform für professionelle Bauschaden-Analyse 
              in Österreich. Schnell, präzise, normkonform.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:kontakt@normki.com" className="hover:text-foreground transition-colors">
                  kontakt@normki.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+43123456789" className="hover:text-foreground transition-colors">
                  +43 (0) 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Linz, Österreich</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="space-y-6">
            <h3 className="font-semibold">Produkt</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold">Unternehmen</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold">Rechtliches</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 NormKI. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Made with ❤️ in Linz</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;