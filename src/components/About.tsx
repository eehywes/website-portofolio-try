const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">
            Saya adalah Mahasiswa Teknik Informatika Universitas Wahid Hasyim Semarang
          </p>
        </div>
        
        <div className="glass-card rounded-3xl p-8 md:p-12 space-y-6">
          <p className="text-foreground/80 leading-relaxed">
            Hallo! Nama Saya Alaika Amirul Fahad Lahir di Kendal, 05 Januari 2025, Alamat saya di Desa Gebanganom Wetan Kangkung Kendal, 
            Saya Mahasiswa Teknik Informatika Universitas Wahid Hasyim Semarang
          </p>
          
          <p className="text-foreground/80 leading-relaxed">
            Saya memiliki Kemampuan berpikir kreatif, kritis dan terbuka, sebagai mahasiswa saya juga mempunya kemampuan Problem Solving yang bagus, memiliki minat di bidang Fotografi dan Wirausaha. 
            Saya Juga memiliki bisnis Jual Beli Iphone 
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
