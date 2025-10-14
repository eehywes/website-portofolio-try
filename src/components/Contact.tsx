import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have a project in mind? Let's work together to bring your vision to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a href="mailto:amirulfahad8@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    amirulfahad8@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Phone</p>
                  <a href="tel:+622898088700" className="text-muted-foreground hover:text-primary transition-colors">
                    +62 289 8088 700
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Address</p>
                  <p className="text-muted-foreground">
                    Instagram Yikum, Kangkung, Kendal
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-white/80 border-white/60"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/80 border-white/60"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  placeholder="Hi, do you have a moment to talk about..."
                  className="bg-white/80 border-white/60 min-h-[120px]"
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full rounded-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
