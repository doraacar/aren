import { Ship, Mail, Phone, MapPin } from 'lucide-react';

type Page = 'home' | 'services' | 'quote' | 'contact';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavigation = (page: Page) => {
    window.location.hash = page;
  };

  return (
    <footer className="bg-[#002147] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Ship className="h-8 w-8" strokeWidth={1.5} />
              <div>
                <h3 className="text-xl font-bold">Aren Global</h3>
                <p className="text-xs text-gray-300">LOGISTIC</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Uluslararası taşımacılıkta güvenilir çözüm ortağınız. Deneyim ve kalite ile hizmetinizdeyiz.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('home')}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('services')}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Hizmetlerimiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('quote')}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Teklif Al
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('contact')}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  İletişim
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Deniz Yolu Taşımacılığı</li>
              <li>Hava Yolu Kargo</li>
              <li>Karayolu Taşımacılığı</li>
              <li>Gümrükleme</li>
              <li>Depolama</li>
              <li>Kapıdan Kapıya Servis</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">+90 (212) 000 00 00</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">info@arenglobal.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  İstanbul, Türkiye
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Aren Global Logistic. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
