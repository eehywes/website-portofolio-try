import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Code } from 'lucide-react';
import projectPreview from '@/assets/project-preview.jpg';

const Projects = () => {
  const techStack = ['HTML', 'MYSOL', 'CSS'];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Project</h2>
          <p className="text-muted-foreground">
            Membuat Website Alexa Store
          </p>
        </div>
        
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="mb-8">
            <img
              src={projectPreview}
              alt="Alexa Store Project"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Alexa Store</h3>
          
          <p className="text-foreground/80 mb-6 leading-relaxed">
            Alexa Store adalah website toko jual beli handphone Secara yang terstruktur. Saya mengoperasikan 
            website ini untuk menyediakam teman saya
          </p>
          
          <div className="mb-6">
            <p className="text-sm font-semibold mb-3 text-foreground/70">TECHNOLOGIES USED:</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm font-medium">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
            <Button className="btn-primary rounded-full px-6">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live Project
            </Button>
            <Button variant="outline" className="btn-secondary rounded-full px-6">
              <Code className="w-4 h-4 mr-2" />
              View Code
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
