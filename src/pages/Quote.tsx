import { Package, MapPin, Calendar, FileText } from 'lucide-react';
import { useState } from 'react';

export default function Quote() {
  const [formData, setFormData] = useState({
    serviceType: '',
    origin: '',
    destination: '',
    cargoType: '',
    weight: '',
    dimensions: '',
    readyDate: '',
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    additionalInfo: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Teklif talebiniz alınmıştır. En kısa sürede size dönüş yapılacaktır.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .form-section { opacity: 0; }
        .form-section-1 { animation: slideInUp 0.6s ease-out 0.1s forwards; }
        .form-section-2 { animation: slideInUp 0.6s ease-out 0.2s forwards; }
        .form-section-3 { animation: slideInUp 0.6s ease-out 0.3s forwards; }
      `}</style>

      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Teklif Alın
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Size özel lojistik çözümü için formu doldurun, en kısa sürede dönüş yapalım
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="form-section form-section-1 bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <Package className="h-6 w-6 text-[#002147]" />
                <h2 className="text-2xl font-bold text-[#002147]">Yük Bilgileri</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hizmet Türü *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002147] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Seçiniz</option>
                    <option value="sea">Deniz Yolu</option>
                    <option value="air">Hava Yolu</option>
                    <option value="road">Karayolu</option>
                    <option value="multimodal">Multimodal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Yük Tipi *
                  </label>
                  <select
                    name="cargoType"
                    value={formData.cargoType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002147] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Seçiniz</option>
                    <option value="general">Genel Kargo</option>
                    <option value="container">Konteyner</option>
                    <option value="pallet">Paletli Kargo</option>
                    <option value="special">Özel Kargo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ağırlık (kg) *
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                    placeholder="Örn: 1000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002147] focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Boyutlar (cm)
                  </label>
                  <input
                    type="text"
                    name="dimensions"
                    value={formData.dimensions}
                    onChange={handleChange}
                    placeholder="Örn: 100x80x120"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002147] focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="form-section form-section-2 bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="h-6 w-6 text-[#002147]" />
                <h2 className="text-2xl font-bold text-[#002147]">Rota Bilgileri</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Çıkış Noktası *
                  </label>
                  <input
                    type="text"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    required
                    placeholder="Şehir, Ülke"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002147] focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Varış Noktası *
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    placeholder="Şehir, Ülke"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002147] focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hazır Olma Tarihi *
                  </label>
                  <input
                    type="date"
                    name="readyDate"
                    value={formData.readyDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002147] focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="form-section form-section-3 bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="h-6 w-6 text-[#002147]" />
                <h2 className="text-2xl font-bold text-[#002147]">İletişim Bilgileri</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Firma Adı *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    placeholder="Firma adınız"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002147] focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Yetkili Adı Soyadı *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    placeholder="Adınız Soyadınız"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002147] focus:border-transparent transition-all duration-300"
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
                    placeholder="ornek@firma.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002147] focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002147] focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ek Bilgiler
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Yükünüz hakkında ek detaylar..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#002147] focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button
                type="submit"
                className="bg-[#002147] text-white px-12 py-4 rounded-md font-semibold hover:bg-[#003366] transition-all duration-300 text-lg hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Teklif Talep Edin
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up hover:shadow-md transition-shadow duration-300 p-6 rounded-lg bg-white" style={{ animationDelay: '0.5s' }}>
              <Calendar className="h-12 w-12 text-[#002147] mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-[#002147] mb-2">Hızlı Dönüş</h3>
              <p className="text-gray-600">24 saat içinde size özel teklif</p>
            </div>
            <div className="animate-fade-in-up hover:shadow-md transition-shadow duration-300 p-6 rounded-lg bg-white" style={{ animationDelay: '0.6s' }}>
              <FileText className="h-12 w-12 text-[#002147] mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-[#002147] mb-2">Detaylı Analiz</h3>
              <p className="text-gray-600">Kapsamlı maliyet ve zaman analizi</p>
            </div>
            <div className="animate-fade-in-up hover:shadow-md transition-shadow duration-300 p-6 rounded-lg bg-white" style={{ animationDelay: '0.7s' }}>
              <Package className="h-12 w-12 text-[#002147] mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-[#002147] mb-2">Özel Çözüm</h3>
              <p className="text-gray-600">İhtiyaçlarınıza özel lojistik planı</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
