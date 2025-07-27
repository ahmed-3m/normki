import { useState } from 'react';
import { Building2, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Funktionen', href: '#features' },
    { label: "So funktioniert's", href: '#how-it-works' },
    { label: 'Preise', href: '#pricing' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">NormKI</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
            Kostenlos Starten
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b shadow-lg md:hidden">
            <nav className="container py-4 space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                Kostenlos Starten
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;