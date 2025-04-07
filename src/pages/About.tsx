
import { Coffee, Utensils } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col heart-cursor">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="page-container">
          <PageHeader 
            title="About Me" 
            subtitle="Some fun facts and things you might want to know"
            icon={<Coffee className="w-8 h-8 text-anime-pink" />}
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Coffee className="w-8 h-8 text-anime-pink mr-3" />
                  <h3 className="text-2xl font-bold font-playfair">I Love Sleeping</h3>
                </div>
                
                <p className="text-foreground/80 leading-relaxed mb-4">
                  There's nothing quite like a good night's sleep! I treasure my sleep time and often 
                  find myself dreaming of anime worlds and adventures. Sometimes I even get inspiration 
                  for creative projects from my dreams.
                </p>
                
                <div className="bg-anime-blue/10 p-4 rounded-lg">
                  <p className="text-sm italic">
                    "Sleep is the best meditation." - Dalai Lama
                  </p>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Utensils className="w-8 h-8 text-anime-pink mr-3" />
                  <h3 className="text-2xl font-bold font-playfair">I Love Eating Food</h3>
                </div>
                
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Food is one of life's greatest pleasures! I enjoy trying different cuisines and dishes.
                  My appreciation for food has been influenced by the delicious-looking meals often featured
                  in anime.
                </p>
                
                <div className="bg-anime-purple/10 p-4 rounded-lg">
                  <p className="text-sm italic">
                    "People who love to eat are always the best people." - Julia Child
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 anime-card">
              <h3 className="text-2xl font-bold mb-6 font-playfair text-center">More About Me</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-anime-cream/50 rounded-xl p-4">
                  <h4 className="font-bold mb-2">Personality</h4>
                  <p className="text-sm">
                    I'm creative, thoughtful, and enjoy spending time with close friends.
                    I often find inspiration in the anime I watch.
                  </p>
                </div>
                
                <div className="bg-anime-pink/20 rounded-xl p-4">
                  <h4 className="font-bold mb-2">Future Dreams</h4>
                  <p className="text-sm">
                    I'm still exploring my options, but I'm interested in pursuing creative fields
                    that allow me to express myself.
                  </p>
                </div>
                
                <div className="bg-anime-blue/20 rounded-xl p-4">
                  <h4 className="font-bold mb-2">What Makes Me Happy</h4>
                  <p className="text-sm">
                    Spending time with Klara, watching a great anime episode, reading manga, and enjoying delicious food.
                  </p>
                </div>
                
                <div className="bg-anime-purple/20 rounded-xl p-4">
                  <h4 className="font-bold mb-2">Favorite Quote</h4>
                  <p className="text-sm italic">
                    "Sometimes the smallest things take up the most room in your heart."
                  </p>
                </div>
                
                <div className="bg-anime-yellow/30 rounded-xl p-4">
                  <h4 className="font-bold mb-2">Comfort Activities</h4>
                  <p className="text-sm">
                    Watching slice-of-life anime, playing games, and relaxing at home.
                  </p>
                </div>
                
                <div className="bg-anime-mint/50 rounded-xl p-4">
                  <h4 className="font-bold mb-2">Favorite Season</h4>
                  <p className="text-sm">
                    Spring - when cherry blossoms bloom, just like in anime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
