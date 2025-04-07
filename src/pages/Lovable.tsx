
import { useState, useEffect, useRef } from 'react';
import { 
  Heart, 
  Calendar, 
  MapPin, 
  Flag, 
  Briefcase, 
  Palette, 
  Music, 
  ShoppingBag, 
  Trophy, 
  Flower, 
  Sparkles
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const Lovable = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const messageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col heart-cursor">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="page-container">
          <PageHeader 
            title="For Klara" 
            subtitle="A special page dedicated to my girlfriend"
            icon={<Heart className="w-8 h-8 text-anime-pink" />}
            className="mb-16"
          />
          
          <div className="max-w-5xl mx-auto">
            {/* Profile Section */}
            <section className="mb-16">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-b from-anime-pink/60 to-anime-yellow/60 p-6 flex flex-col items-center justify-center">
                    <div className="relative mb-4">
                      <div className="w-48 h-48 rounded-full border-4 border-white overflow-hidden">
                        {/* Placeholder for Klara's photo */}
                        <div className="w-full h-full bg-gradient-to-br from-anime-yellow to-anime-pink flex items-center justify-center text-white text-6xl font-bold">
                          K
                        </div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-anime-pink rounded-full p-2">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-center font-playfair">Klara Heléne Schlüter</h2>
                    <div className="flex mt-3 space-x-2">
                      <Heart className="w-4 h-4 text-anime-pink" />
                      <Heart className="w-4 h-4 text-anime-yellow" />
                      <Heart className="w-4 h-4 text-anime-pink" />
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h3 className="text-xl font-bold mb-4 pb-2 border-b border-anime-pink/30 font-playfair">
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ProfileDetail 
                        icon={<Calendar className="w-5 h-5 text-anime-pink" />}
                        label="Birthday"
                        value="June 9, 2008"
                      />
                      
                      <ProfileDetail 
                        icon={<MapPin className="w-5 h-5 text-anime-pink" />}
                        label="Birthplace"
                        value="Saitama, Japan"
                      />
                      
                      <ProfileDetail 
                        icon={<Flag className="w-5 h-5 text-anime-pink" />}
                        label="Nationality"
                        value="¾ Filipino, ¼ German"
                      />
                      
                      <ProfileDetail 
                        icon={<Briefcase className="w-5 h-5 text-anime-pink" />}
                        label="Dream Job"
                        value="Architect or Marine Biologist"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Hobbies Section */}
            <section className="mb-16">
              <h3 className="text-2xl font-bold mb-6 font-playfair text-center">Hobbies & Interests</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <HobbyCard 
                  icon={<Palette className="w-10 h-10 text-anime-pink" />}
                  title="Drawing & Painting"
                  color="bg-anime-pink/10"
                />
                
                <HobbyCard 
                  icon={<Music className="w-10 h-10 text-anime-yellow" />}
                  title="Listening to Music"
                  color="bg-anime-yellow/20"
                />
                
                <HobbyCard 
                  icon={<Palette className="w-10 h-10 text-anime-purple" />}
                  title="Digital Art"
                  color="bg-anime-purple/10"
                />
                
                <HobbyCard 
                  icon={<Palette className="w-10 h-10 text-anime-blue" />}
                  title="Editing"
                  color="bg-anime-blue/10"
                />
                
                <HobbyCard 
                  icon={<ShoppingBag className="w-10 h-10 text-anime-rose" />}
                  title="Online Shopping"
                  color="bg-anime-rose/10"
                />
                
                <HobbyCard 
                  icon={<Heart className="w-10 h-10 text-anime-pink" />}
                  title="Skincare"
                  color="bg-anime-pink/10"
                />
              </div>
            </section>
            
            {/* Favorites Section */}
            <section className="mb-16">
              <h3 className="text-2xl font-bold mb-6 font-playfair text-center">Favorites</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="anime-card">
                  <h4 className="font-bold mb-3 text-center">Food</h4>
                  <ul className="space-y-2">
                    <FavoriteItem label="Seafood" />
                    <FavoriteItem label="Noodles" />
                  </ul>
                </div>
                
                <div className="anime-card">
                  <h4 className="font-bold mb-3 text-center">Colors</h4>
                  <ul className="space-y-2">
                    <FavoriteItem label="Red" />
                    <FavoriteItem label="Yellow" />
                    <FavoriteItem label="Pink" />
                  </ul>
                </div>
                
                <div className="anime-card">
                  <h4 className="font-bold mb-3 text-center">Animal</h4>
                  <ul className="space-y-2">
                    <FavoriteItem label="Orca" />
                  </ul>
                </div>
                
                <div className="anime-card">
                  <h4 className="font-bold mb-3 text-center">Streamer</h4>
                  <ul className="space-y-2">
                    <FavoriteItem label="Caseoh" />
                  </ul>
                </div>
                
                <div className="anime-card">
                  <h4 className="font-bold mb-3 text-center">Flowers</h4>
                  <ul className="space-y-2">
                    <FavoriteItem label="Sunflower" />
                    <FavoriteItem label="Baby's breath" />
                    <FavoriteItem label="Daffodils" />
                    <FavoriteItem label="Yellow poppy" />
                  </ul>
                </div>
                
                <div className="anime-card">
                  <h4 className="font-bold mb-3 text-center">Game Genre</h4>
                  <ul className="space-y-2">
                    <FavoriteItem label="Psychological indie horror" />
                  </ul>
                </div>
                
                <div className="anime-card">
                  <h4 className="font-bold mb-3 text-center">Characters</h4>
                  <ul className="space-y-2">
                    <FavoriteItem label="Keroppi" />
                    <FavoriteItem label="Tifa Lockhart" />
                    <FavoriteItem label="Spiderman" />
                    <FavoriteItem label="Deadpool" />
                  </ul>
                </div>
                
                <div className="anime-card">
                  <h4 className="font-bold mb-3 text-center">Disney Princesses</h4>
                  <ul className="space-y-2">
                    <FavoriteItem label="Tiana" />
                    <FavoriteItem label="Belle" />
                  </ul>
                </div>
                
                <div className="anime-card">
                  <h4 className="font-bold mb-3 text-center">Subjects</h4>
                  <ul className="space-y-2">
                    <FavoriteItem label="Arts" />
                    <FavoriteItem label="Science" />
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Achievements Section */}
            <section className="mb-16">
              <h3 className="text-2xl font-bold mb-6 font-playfair text-center flex items-center justify-center">
                <Trophy className="w-6 h-6 text-anime-yellow mr-2" />
                <span>Achievements</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md">
                  <ul className="space-y-3">
                    <AchievementItem text="Grade 6, 7, 9 Honors (Rank 4 in Grade 9)" />
                    <AchievementItem text="Grade 9 Class Secretary" />
                    <AchievementItem text="Grade 10 Class President" />
                    <AchievementItem text="Ms. Tech High 1st Runner-Up" />
                    <AchievementItem text="1st Place Poster Making (2022), 2nd Place (2024)" />
                    <AchievementItem text="Visage Runway (2023)" />
                  </ul>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md">
                  <ul className="space-y-3">
                    <AchievementItem text="Outstanding Digital Designers Club Member (2023)" />
                    <AchievementItem text="Theology Catequiz 4th Runner-Up" />
                    <AchievementItem text="Y.E.S. Member" />
                    <AchievementItem text="Family Day Billiards Runner-Up" />
                    <AchievementItem text="Speaker for Stations of the Cross" />
                    <AchievementItem text="Implemented Class Funds & joined multiple committees" />
                  </ul>
                </div>
              </div>
            </section>
            
            {/* What I Love About Her */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-anime-pink/20 to-anime-yellow/20 p-8 rounded-2xl relative">
                <FloatingElements />
                
                <h3 className="text-2xl font-bold mb-6 font-playfair text-center">
                  <Flower className="w-6 h-6 text-anime-pink inline-block mr-2" />
                  What I Love About Her
                </h3>
                
                <div className="max-w-2xl mx-auto text-center">
                  <p className="text-lg leading-relaxed">
                    Klara is the most amazing person I know. Her creativity and artistic talents 
                    never cease to amaze me. She's incredibly thoughtful and caring, always putting 
                    others before herself. When she smiles, it's like watching the sun rise. 
                    Her determination and ambition inspire me to be a better person every day. 
                    I admire her intelligence, her sense of humor, and her kind heart. She brings 
                    color and joy into my life, just like the bright, beautiful worlds in our 
                    favorite anime.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Special Message */}
            <section className="mb-16">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 font-playfair text-center">
                  <Sparkles className="w-6 h-6 text-anime-yellow inline-block mr-2" />
                  A Special Message From Me
                </h3>
                
                <div 
                  ref={messageRef} 
                  className="max-w-2xl mx-auto p-4 bg-anime-cream/50 rounded-lg border border-anime-pink/30 relative overflow-hidden"
                >
                  <div 
                    className={`${
                      typingComplete ? 'hidden' : 'block'
                    } font-mono whitespace-nowrap overflow-hidden border-r-2 border-primary animate-typing`}
                  >
                    Klara, thank you for being in my life...
                  </div>
                  
                  <div className={`${typingComplete ? 'block' : 'hidden'}`}>
                    <p className="mb-3">
                      Klara, thank you for being in my life. Every moment with you feels like the perfect 
                      scene from a romantic anime - full of warmth, joy, and those little magical moments 
                      that make my heart skip a beat.
                    </p>
                    <p className="mb-3">
                      You inspire me every day with your creativity, kindness, and beautiful spirit.
                      I'm so proud of all your achievements and can't wait to see all the amazing 
                      things you'll accomplish in the future.
                    </p>
                    <p>
                      I cherish every memory we create together and look forward to making countless more.
                      You're my real-life anime romance, and I'm the luckiest person in the world.
                    </p>
                    <div className="mt-4 text-right">
                      <span className="font-playfair italic">With all my love,</span><br />
                      <span className="font-playfair font-bold">Kahlil</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Memories Gallery */}
            <section>
              <h3 className="text-2xl font-bold mb-6 font-playfair text-center">
                Our Memories
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="aspect-square bg-anime-pink/10 rounded-lg border-2 border-dashed border-anime-pink/30 flex items-center justify-center"
                  >
                    <div className="text-center p-4">
                      <Heart className="w-8 h-8 text-anime-pink mx-auto mb-2" />
                      <p className="text-muted-foreground">Photo placeholder {i}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const ProfileDetail = ({ 
  icon, 
  label, 
  value 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
}) => {
  return (
    <div className="flex items-center">
      <div className="mr-3">{icon}</div>
      <div>
        <span className="text-sm text-muted-foreground">{label}: </span>
        <span className="font-medium">{value}</span>
      </div>
    </div>
  );
};

const HobbyCard = ({ 
  icon, 
  title, 
  color 
}: { 
  icon: React.ReactNode; 
  title: string; 
  color: string; 
}) => {
  return (
    <div className={`rounded-xl p-4 flex items-center ${color} transition-all duration-300 hover:shadow-md`}>
      <div className="mr-4">{icon}</div>
      <h4 className="font-medium">{title}</h4>
    </div>
  );
};

const FavoriteItem = ({ label }: { label: string }) => {
  return (
    <li className="flex items-center">
      <span className="w-2 h-2 bg-anime-pink rounded-full mr-2"></span>
      <span>{label}</span>
    </li>
  );
};

const AchievementItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start">
      <Trophy className="w-4 h-4 text-anime-yellow mt-1 mr-2 flex-shrink-0" />
      <span>{text}</span>
    </li>
  );
};

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `float ${3 + Math.random() * 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {i % 3 === 0 ? (
            <Heart className="w-6 h-6 text-anime-pink" />
          ) : i % 3 === 1 ? (
            <Flower className="w-6 h-6 text-anime-yellow" />
          ) : (
            <Sparkles className="w-6 h-6 text-anime-purple" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Lovable;
