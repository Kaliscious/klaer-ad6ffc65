
import { BookOpen, Gamepad, Film } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const Hobbies = () => {
  return (
    <div className="min-h-screen flex flex-col heart-cursor">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="page-container">
          <PageHeader 
            title="My Hobbies" 
            subtitle="These are the activities I enjoy in my free time"
            icon={<Gamepad className="w-8 h-8 text-anime-pink" />}
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <HobbyCard 
                icon={<BookOpen className="w-12 h-12 text-anime-pink" />}
                title="Reading Manga"
                description="I love immersing myself in the vibrant world of manga. The beautiful artwork and compelling storylines capture my imagination."
                color="bg-anime-pink/10"
                hoverColor="hover:bg-anime-pink/20"
              />
              
              <HobbyCard 
                icon={<Film className="w-12 h-12 text-anime-blue" />}
                title="Watching Anime"
                description="Anime allows me to experience amazing stories with beautiful animation. I especially enjoy slice-of-life and romance genres."
                color="bg-anime-blue/10"
                hoverColor="hover:bg-anime-blue/20"
              />
              
              <HobbyCard 
                icon={<Gamepad className="w-12 h-12 text-anime-purple" />}
                title="Playing Video Games"
                description="Gaming is a way for me to relax and have fun. I enjoy immersive stories and competitive gameplay."
                color="bg-anime-purple/10"
                hoverColor="hover:bg-anime-purple/20"
              />
            </div>
            
            <div className="mt-16 anime-card">
              <h3 className="text-2xl font-bold mb-4 font-playfair text-center">My Favorites</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <FavoritesList 
                  category="Favorite Manga"
                  items={[
                    "Blue Box",
                    "The Fragrant Flower Blooms with Dignity",
                    "Spy x Family",
                    "Jujutsu Kaisen"
                  ]}
                />
                
                <FavoritesList 
                  category="Favorite Anime"
                  items={[
                    "Your Lie in April",
                    "My Dress-Up Darling",
                    "Attack on Titan",
                    "Demon Slayer"
                  ]}
                />
                
                <FavoritesList 
                  category="Favorite Games"
                  items={[
                    "Genshin Impact",
                    "Valorant",
                    "Minecraft",
                    "The Legend of Zelda"
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const HobbyCard = ({ 
  icon, 
  title, 
  description, 
  color, 
  hoverColor 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  color: string; 
  hoverColor: string; 
}) => {
  return (
    <div className={`rounded-xl p-6 text-center transition-all duration-300 ${color} ${hoverColor} animate-float`}>
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-3 font-playfair">{title}</h3>
      <p className="text-foreground/80">{description}</p>
    </div>
  );
};

const FavoritesList = ({ 
  category, 
  items 
}: { 
  category: string; 
  items: string[]; 
}) => {
  return (
    <div>
      <h4 className="text-lg font-bold mb-3 font-playfair text-center">{category}</h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 bg-anime-pink rounded-full mr-2"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
