import { Ship, Plane, Truck, FileText, Warehouse, Package, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCount(Math.floor(target * progress));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  return count;
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Ship,
      title: 'Deniz Yolu',
      description: 'Uluslararası konteyner çözümleri',
    },
    {
      icon: Plane,
      title: 'Hava Yolu',
      description: 'Hızlı ve güvenli hava sevkiyatı',
    },
    {
      icon: Truck,
      title: 'Karayolu',
      description: 'Transit taşımacılık hizmetleri',
    },
    {
      icon: FileText,
      title: 'Gümrükleme',
      description: 'Profesyonel danışmanlık',
    },
    {
      icon: Warehouse,
      title: 'Depolama',
      description: 'Modern depo çözümleri',
    },
    {
      icon: Package,
      title: 'Kapıdan Kapıya',
      description: 'Anahtar teslim lojistik',
    },
  ];

  const stats = [
    { number: 10000, suffix: '+', label: 'Başarılı Teslimat' },
    { number: 50, suffix: '+', label: 'Ülke Ağı' },
    { number: 30, suffix: '+', label: 'Yıllık Deneyim' },
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(0, 33, 71, 0.1);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(0, 33, 71, 0);
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

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
      `}</style>

      <section className="relative bg-gradient-to-br from-[#002147] to-[#003366] text-white overflow-hidden min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#002147]/95 via-[#002147]/85 to-[#003366]/80"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Uluslararası Taşımacılıkta Güvenilir Çözüm Ortağınız
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
              Deniz, hava ve karayolu taşımacılığında profesyonel hizmet anlayışı ile global ölçekte lojistik çözümler sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.hash = 'services'}
                className="bg-white text-[#002147] px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Hizmetlerimiz
              </button>
              <button
                onClick={() => window.location.hash = 'quote'}
                className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[#002147] transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Teklif Al
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up flex flex-col items-center justify-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#002147] mb-2 w-full">
                  <AnimatedCounter target={stat.number} duration={2500} />
                  {stat.suffix}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium w-full">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4">
              Lojistik Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Global ölçekte eksiksiz taşımacılık ve lojistik çözümleri sunuyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`animate-fade-in-up stagger-${(index % 6) + 1} bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer`}
                >
                  <div className="bg-gradient-to-br from-[#002147] to-[#003366] text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Icon className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#002147] mb-3 group-hover:text-[#003366] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                  <button
                    onClick={() => window.location.hash = 'services'}
                    className="text-[#002147] font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300 hover:text-[#003366]"
                  >
                    <span>Detaylı Bilgi</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#002147] via-[#003366] to-[#004080] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Lojistik İhtiyaçlarınız İçin Hemen Teklif Alın
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz size özel en uygun lojistik çözümü sunmak için hazır
          </p>
          <button
            onClick={() => window.location.hash = 'quote'}
            className="bg-white text-[#002147] px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <span>Ücretsiz Teklif Al</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
