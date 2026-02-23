import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
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

      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }

      .animate-slide-in-left {
        animation: slideInLeft 0.8s ease-out forwards;
      }

      .animate-slide-in-right {
        animation: slideInRight 0.8s ease-out forwards;
      }

      .stagger-1 { animation-delay: 0.1s; }
      .stagger-2 { animation-delay: 0.2s; }
      .stagger-3 { animation-delay: 0.3s; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mesajınız gönderilmiştir. En kısa sürede size dönüş yapılacaktır.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '+90 (212) 000 00 00',
      subContent: '+90 (532) 000 00 00',
    },
    {
      icon: Mail,
      title: 'E-posta',
      content: 'info@arenglobal.com',
      subContent: 'sales@arenglobal.com',
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Merkez Ofis',
      subContent: 'İstanbul, Türkiye',
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      content: 'Pazartesi - Cuma: 09:00 - 18:00',
      subContent: 'Cumartesi: 09:00 - 13:00',
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            İletişim
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Lojistik ihtiyaçlarınız için bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 animate-slide-in-left">
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-[#002147] mb-6">
                  Bize Ulaşın
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Adınız Soyadınız"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002147] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ornek@email.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002147] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+90 (5xx) xxx xx xx"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002147] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Konu *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002147] focus:border-transparent"
                      >
                        <option value="">Seçiniz</option>
                        <option value="quote">Teklif Talebi</option>
                        <option value="service">Hizmet Bilgisi</option>
                        <option value="tracking">Yük Takibi</option>
                        <option value="complaint">Şikayet</option>
                        <option value="other">Diğer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Mesajınızı buraya yazın..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002147] focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#002147] text-white px-6 py-4 rounded-md font-semibold hover:bg-[#003366] transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg hover:scale-105 active:scale-95"
                  >
                    <Send className="h-5 w-5" />
                    <span>Mesaj Gönder</span>
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className={`animate-slide-in-right bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 stagger-${index + 1}`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#002147] text-white p-3 rounded-lg">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#002147] mb-2">
                          {info.title}
                        </h3>
                        <p className="text-gray-700 text-sm">{info.content}</p>
                        {info.subContent && (
                          <p className="text-gray-600 text-sm mt-1">
                            {info.subContent}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-[#002147] mb-4">
              Ofislerimiz
            </h2>
            <p className="text-lg text-gray-600">
              Global ağımız ile dünyanın her yerinden size ulaşıyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in-up bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-all duration-300 hover:scale-105" style={{ animationDelay: '0.2s' }}>
              <MapPin className="h-12 w-12 text-[#002147] mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-[#002147] mb-2">
                İstanbul Ofisi
              </h3>
              <p className="text-gray-600 text-sm mb-2">Merkez Ofis</p>
              <p className="text-gray-600 text-sm">
                İstanbul, Türkiye
              </p>
            </div>

            <div className="animate-fade-in-up bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-all duration-300 hover:scale-105" style={{ animationDelay: '0.3s' }}>
              <MapPin className="h-12 w-12 text-[#002147] mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-[#002147] mb-2">
                İzmir Ofisi
              </h3>
              <p className="text-gray-600 text-sm mb-2">Bölge Ofisi</p>
              <p className="text-gray-600 text-sm">
                İzmir, Türkiye
              </p>
            </div>

            <div className="animate-fade-in-up bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-all duration-300 hover:scale-105" style={{ animationDelay: '0.4s' }}>
              <MapPin className="h-12 w-12 text-[#002147] mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-[#002147] mb-2">
                Antalya Ofisi
              </h3>
              <p className="text-gray-600 text-sm mb-2">Bölge Ofisi</p>
              <p className="text-gray-600 text-sm">
                Antalya, Türkiye
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
