import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-emerald-400" />
            <span className="text-xl font-bold">Yan Roger</span>
          </div>
          

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 ">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <>
                <Button
                  key={item}
                  variant="outline"
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className='cursor-pointer hover:bg-slate-600 hover:text-white bg-transparent border-current/20'
                >
                  {item}
                </Button>
                <div className='w-[2px] h-8 bg-emerald-200/20 rounded-full hover:bg-emerald-200/40 transition duration-100 last-of-type:hidden'/>
              </>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800 py-4">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <Button
                variant="ghost"
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-2"
              >
                {item}
              </Button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;