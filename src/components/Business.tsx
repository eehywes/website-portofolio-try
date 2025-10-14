import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Business = () => {
  return (
    <section id="business" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Business</h2>
          <p className="text-muted-foreground">Alexa Store</p>
        </div>
        
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">About My Business</h3>
          
          <p className="text-foreground/80 mb-6 leading-relaxed">
            Saya Memiliki sama Alat dan Handphone Bekas Bernama Alexa Store, menyediakan berbagai 
            handphone bekas mulai market Adnoid, Iphone dan tipe lain
          </p>
          
          <p className="text-foreground/80 mb-8 leading-relaxed">
            Dibentuk pada 19 Februari 2025, menyediakan yang memberi penggunna setuberak yang budak 
            mendasalam sampai pengalaman cah pembelaran, sisi produk tergodesi, komenlairan dhmasis 
            belum dan ketersihaan Thailand
          </p>
          
          <Button className="btn-primary rounded-full px-6">
            <ExternalLink className="w-4 h-4 mr-2" />
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Business;
