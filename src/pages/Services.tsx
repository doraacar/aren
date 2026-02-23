import { Ship, Plane, Truck, FileText, Warehouse, Package, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Ship,
      title: 'Deniz Yolu Taşımacılığı',
      description: 'Uluslararası konteyner çözümleri',
      features: [
        'FCL (Konteyner) ve LCL (Parsiyel Yük) taşımacılığı',
        'Dünya genelinde ana limanlara doğrudan servis',
        'Konteyner takip ve izleme sistemi',
        'Ro-Ro ve proje kargo taşımacılığı',
        'Gümrükleme ve evrak işlemleri',
      ],
    },
    {
      icon: Plane,
      title: 'Hava Yolu Kargo Taşımacılığı',
      description: 'Hızlı ve güvenli hava sevkiyatı',
      features: [
        'Ekspres ve standart hava kargo servisleri',
        'Tehlikeli madde (DGR) taşımacılığı',
        'Soğuk zincir ve özel kargo çözümleri',
        'Konsolidasyon ve direkt uçuş seçenekleri',
        'Gerçek zamanlı takip ve raporlama',
      ],
    },
    {
      icon: Truck,
      title: 'Karayolu Taşımacılığı',
      description: 'Uluslararası tır ve transit taşımacılık',
      features: [
        'Avrupa ve Orta Asya transit taşımacılık',
        'Tam yük (FTL) ve parsiyel yük (LTL) seçenekleri',
        'ADR belgeli tehlikeli madde taşımacılığı',
        'Özel ekipman ve yük güvenliği',
        'GPS takip ve 7/24 operasyon desteği',
      ],
    },
    {
      icon: FileText,
      title: 'Gümrükleme Hizmetleri',
      description: 'Uluslararası gümrükleme ve mevzuat danışmanlığı',
      features: [
        'İthalat ve ihracat gümrük işlemleri',
        'Gümrük mevzuatı ve tarife danışmanlığı',
        'Transit ve antrepo işlemleri',
        'Vergi optimizasyonu ve teşvik yönetimi',
        'Uygunluk belgeleri ve sertifikasyon',
      ],
    },
    {
      icon: Warehouse,
      title: 'Depolama ve Dağıtım',
      description: 'Modern ve güvenli uluslararası depolama çözümleri',
      features: [
        'Gümrüklü ve serbest bölge depolama',
        'Sıcaklık kontrollü özel depolama alanları',
        'Stok yönetimi ve envanter takibi',
        'Yeniden paketleme ve etiketleme',
        'Order fulfillment ve e-ticaret lojistiği',
      ],
    },
    {
      icon: Package,
      title: 'Kapıdan Kapıya Servis',
      description: 'Uçtan uca anahtar teslim lojistik operasyonları',
      features: [
        'Toplama noktasından teslimat noktasına tam hizmet',
        'Multimodal taşımacılık çözümleri',
        'Tek nokta iletişim ve koordinasyon',
        'Gümrükleme, sigorta ve tüm evraklar dahil',
        'Gerçek zamanlı bilgilendirme ve raporlama',
      ],
    },
  ];

  return (
    <div className="bg-white">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
      `}</style>

      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Hizmetlerimiz
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Global standartlarda, eksiksiz lojistik çözümleri ile yanınızdayız
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-12 items-center`}
                >
                  <div className={`flex-1 ${isEven ? 'animate-slide-in-left' : 'animate-slide-in-right'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="bg-[#002147] text-white w-20 h-20 rounded-xl flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300">
                      <Icon className="h-10 w-10" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-3xl font-bold text-[#002147] mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3 opacity-0 animate-fade-in-up"
                          style={{ animationDelay: `${index * 0.1 + featureIndex * 0.05 + 0.3}s` }}
                        >
                          <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`flex-1 ${isEven ? 'animate-slide-in-right' : 'animate-slide-in-left'}`} style={{ animationDelay: `${index * 0.1 + 0.1}s` }}>
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-80 flex items-center justify-center hover:shadow-xl transition-all duration-500 hover:scale-105">
                      <Icon className="h-32 w-32 text-[#002147] opacity-20" strokeWidth={1} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-6">
            Size Özel Lojistik Çözümü İçin İletişime Geçin
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz, ihtiyaçlarınıza özel en uygun lojistik çözümünü sunmaya hazır
          </p>
          <button
            onClick={() => window.location.hash = 'quote'}
            className="bg-gradient-to-r from-[#002147] to-[#003366] text-white px-8 py-4 rounded-md font-semibold hover:from-[#003366] hover:to-[#004080] transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Teklif Talep Edin
          </button>
        </div>
      </section>
    </div>
  );
}
