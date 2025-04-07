
import { useEffect, useState } from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
    document.body.classList.add('heart-cursor');
    
    return () => {
      document.body.classList.remove('heart-cursor');
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden">
          {/* Background style - animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-anime-pink/20 via-anime-blue/20 to-anime-purple/20 animate-pulse-soft"></div>
          
          {/* Floating hearts */}
          <FloatingHearts />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center">
              <h1 
                className={`text-5xl md:text-7xl font-bold mb-6 font-playfair transition-all duration-1000 ${
                  loaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
                }`}
              >
                <span className="block">Welcome to</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-anime-pink to-anime-purple">
                  Kahlil's World
                </span>
              </h1>
              
              <p 
                className={`text-xl md:text-2xl max-w-3xl mx-auto mb-10 transition-all duration-1000 delay-300 ${
                  loaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
                }`}
              >
                A lovely space inspired by anime aesthetics and dedicated to sharing my story
              </p>
              
              <div 
                className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 ${
                  loaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
                }`}
              >
                <Link to="/profile" className="anime-button flex items-center">
                  <span>Explore My Profile</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                
                <Link to="/lovable" className="anime-button bg-anime-purple hover:bg-anime-purple/80 flex items-center">
                  <Heart className="mr-2 h-4 w-4" />
                  <span>Visit Klara's Page</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Feature Cards */}
        <section className="py-16 bg-anime-cream/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-playfair">Discover My World</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                title="Profile"
                description="Learn more about me, my background, and personal details."
                link="/profile"
                color="bg-anime-pink/10"
                hoverColor="hover:bg-anime-pink/20"
              />
              
              <FeatureCard 
                title="Hobbies"
                description="Explore my favorite activities and interests in anime, manga, and gaming."
                link="/hobbies"
                color="bg-anime-blue/10"
                hoverColor="hover:bg-anime-blue/20"
              />
              
              <FeatureCard 
                title="About Me"
                description="Discover fun facts and little-known details about my personality and preferences."
                link="/about"
                color="bg-anime-purple/10"
                hoverColor="hover:bg-anime-purple/20"
              />
            </div>
          </div>
        </section>
        
        {/* Special Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-1 p-8 md:p-12 flex items-center justify-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-4 font-playfair">A Special Page for Klara</h2>
                    <p className="text-lg mb-6">
                      I've created a dedicated space to celebrate the wonderful person who means so much to me.
                    </p>
                    <Link to="/lovable" className="inline-flex items-center text-anime-pink hover:text-anime-rose font-medium">
                      <span>Visit Klara's Page</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="md:flex-1 bg-gradient-to-br from-anime-pink to-anime-purple h-64 md:h-auto">
                  <div className="h-full flex items-center justify-center p-8">
                    <Heart className="w-20 h-20 text-white animate-pulse-soft" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const FeatureCard = ({ 
  title, 
  description, 
  link, 
  color, 
  hoverColor 
}: { 
  title: string; 
  description: string; 
  link: string; 
  color: string; 
  hoverColor: string; 
}) => {
  return (
    <Link 
      to={link}
      className={`block rounded-xl p-6 transition-all duration-300 ${color} ${hoverColor} animate-float`}
    >
      <h3 className="text-xl font-bold mb-3 font-playfair">{title}</h3>
      <p className="text-foreground/80 mb-4">{description}</p>
      <div className="flex items-center text-primary font-medium">
        <span>Learn more</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </div>
    </Link>
  );
};

const FloatingHearts = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <Heart
          key={i}
          className={`absolute text-anime-pink opacity-0 floating-hearts`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 3 + 3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Index;
