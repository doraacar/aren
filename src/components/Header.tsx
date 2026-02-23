import { Ship, Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'services' | 'quote' | 'contact';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Ana Sayfa', page: 'home' as Page },
    { name: 'Hizmetlerimiz', page: 'services' as Page },
    { name: 'Teklif Al', page: 'quote' as Page },
    { name: 'İletişim', page: 'contact' as Page },
  ];

  const handleNavigation = (page: Page) => {
    window.location.hash = page;
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#002147] text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavigation('home')}
          >
            <Ship className="h-10 w-10" strokeWidth={1.5} />
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Aren Global</h1>
              <p className="text-xs text-gray-300 tracking-wide">LOGISTIC</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigation(item.page)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gray-300 ${
                  currentPage === item.page ? 'text-white border-b-2 border-white pb-1' : 'text-gray-300'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navigation.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigation(item.page)}
                className={`block w-full text-left py-3 text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.page ? 'text-white bg-[#003366]' : 'text-gray-300'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
