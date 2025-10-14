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
            Saya Memiliki bisnis Jual Beli Handphone Bekas Bernama Alexa Store , menyediakan berbagai 
            Handphone bekas dari mulai android iphone dan lain-lain
          </p>
          
          <p className="text-foreground/80 mb-8 leading-relaxed">
            Memulai Bisnis di Tahun 2023 menjadikan saya memiliki pengalaman wirausaha yang cukup, 
            memberikan banyak pengalaman dan pembelajaran, dari mulai negosiasi, kemampuan analisis 
            pasar dan managemen finansial 
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
