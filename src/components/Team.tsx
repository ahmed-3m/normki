import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Namik Hasanovic',
    role: 'Gründer',
    bio: 'Experte für Bautechnik mit über 15 Jahren Erfahrung in der Baubranche.',
    linkedin: '#',
    email: 'namik@normki.com'
  },
  {
    name: 'Slavko Amic',
    role: 'Co-Founder',
    bio: 'Technologie-Visionär mit Fokus auf KI-gestützte Lösungen für die Bauindustrie.',
    linkedin: '#',
    email: 'slavko@normki.com'
  },
  {
    name: 'Ahmed Mohammed',
    role: 'CTO & Co-Founder',
    bio: 'Machine Learning Spezialist mit Expertise in Computer Vision und Bildanalyse.',
    linkedin: '#',
    email: 'ahmed@normki.com'
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            Unser{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lernen Sie die visionären Köpfe hinter NormKI kennen - 
            Experten mit jahrelanger Erfahrung in Bautechnik und KI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex justify-center gap-3 pt-2">
                  <a 
                    href={member.linkedin}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex items-center justify-center"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex items-center justify-center"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;