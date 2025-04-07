
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-anime-pink/10 py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-2">
            <span className="font-playfair font-semibold text-lg">Kahlil Ian R. Dienzo</span>
            <Heart className="w-4 h-4 mx-2 text-anime-pink animate-pulse-soft" />
            <span className="font-playfair font-semibold text-lg">Klara Heléne Schlüter</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            &copy; {currentYear} With love and inspiration from anime
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
