import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-3xl p-8">
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-2xl font-bold text-primary">Amirul Fahad</h3>
            <p className="text-sm text-muted-foreground">24103041031</p>
            
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-primary/10 p-3 rounded-xl hover:bg-primary/20 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </a>
                );
              })}
            </div>
            
            <div className="text-center text-sm text-muted-foreground">
              <p>Made with ❤️ using Lovable © {currentYear}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
