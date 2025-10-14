import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="glass-card rounded-3xl p-12 md:p-16 max-w-5xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
              Hi, I'm <span className="text-primary">Amirul Fahad</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              24103041031 | Teknik Informatika
            </p>
            <p className="text-base text-muted-foreground mb-8 max-w-md animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Crafting beautiful experiences at the intersection of design and technology.
              Passionate about making solutions that make a difference.
            </p>
            <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button className="btn-primary rounded-full px-6">
                Get in Touch
              </Button>
              <Button variant="outline" className="btn-secondary rounded-full px-6">
                View My Work
              </Button>
            </div>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img
              src={profilePhoto}
              alt="Amirul Fahad"
              className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
