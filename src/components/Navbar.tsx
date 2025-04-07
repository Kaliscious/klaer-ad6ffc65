
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="w-6 h-6 text-anime-pink mr-2" />
              <span className="font-playfair font-bold text-xl text-foreground">Kahlil</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <NavLink to="/" label="Home" currentPath={location.pathname} />
              <NavLink to="/profile" label="Profile" currentPath={location.pathname} />
              <NavLink to="/hobbies" label="Hobbies" currentPath={location.pathname} />
              <NavLink to="/about" label="About Me" currentPath={location.pathname} />
              <NavLink to="/lovable" label="For Klara" currentPath={location.pathname} />
            </div>
          </div>
          
          <MobileMenu currentPath={location.pathname} />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, label, currentPath }: { to: string; label: string; currentPath: string }) => {
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));
  
  return (
    <Link to={to} className={`nav-link ${isActive ? 'active' : ''}`}>
      {label}
    </Link>
  );
};

const MobileMenu = ({ currentPath }: { currentPath: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary"
      >
        <svg
          className="h-6 w-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-16 right-0 left-0 bg-white/95 backdrop-blur-sm shadow-lg rounded-b-lg p-4">
          <div className="flex flex-col space-y-3">
            <NavLink to="/" label="Home" currentPath={currentPath} />
            <NavLink to="/profile" label="Profile" currentPath={currentPath} />
            <NavLink to="/hobbies" label="Hobbies" currentPath={currentPath} />
            <NavLink to="/about" label="About Me" currentPath={currentPath} />
            <NavLink to="/lovable" label="For Klara" currentPath={currentPath} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
