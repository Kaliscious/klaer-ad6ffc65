
import { User, CalendarDays, Ruler, GraduationCap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col heart-cursor">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="page-container">
          <PageHeader 
            title="My Profile" 
            subtitle="Get to know me a little better"
            icon={<User className="w-8 h-8 text-anime-pink" />}
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-b from-anime-pink/50 to-anime-purple/50 p-6 flex flex-col items-center justify-center">
                  <div className="relative mb-4">
                    <div className="w-48 h-48 rounded-full border-4 border-white overflow-hidden">
                      {/* Placeholder for profile picture */}
                      <div className="w-full h-full bg-gradient-to-br from-anime-blue to-anime-purple flex items-center justify-center text-white text-6xl font-bold">
                        K
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-anime-pink rounded-full p-2">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-center font-playfair">Kahlil Ian R. Dienzo</h2>
                </div>
                
                <div className="md:w-2/3 p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-4 pb-2 border-b border-anime-pink/30 font-playfair">
                    Personal Information
                  </h3>
                  
                  <div className="space-y-4">
                    <ProfileDetail 
                      icon={<User className="w-5 h-5 text-anime-pink" />}
                      label="Name"
                      value="Kahlil Ian R. Dienzo"
                    />
                    
                    <ProfileDetail 
                      icon={<CalendarDays className="w-5 h-5 text-anime-pink" />}
                      label="Age"
                      value="15"
                    />
                    
                    <ProfileDetail 
                      icon={<CalendarDays className="w-5 h-5 text-anime-pink" />}
                      label="Birthday"
                      value="August 31, 2009"
                    />
                    
                    <ProfileDetail 
                      icon={<Ruler className="w-5 h-5 text-anime-pink" />}
                      label="Height"
                      value="5'7&quot;"
                    />
                    
                    <ProfileDetail 
                      icon={<GraduationCap className="w-5 h-5 text-anime-pink" />}
                      label="School"
                      value="San Beda College Alabang"
                    />
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4 pb-2 border-b border-anime-pink/30 font-playfair">
                      About Me
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Hello! I'm Kahlil, a student at San Beda College Alabang. 
                      I have a passion for anime, manga, and gaming. My personal website 
                      showcases my interests and shares a bit about who I am. I also have 
                      a special page dedicated to my girlfriend, Klara, who means the world to me.
                    </p>
                  </div>
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

export default Profile;
