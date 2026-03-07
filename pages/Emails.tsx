import React, { useState, useMemo } from 'react';
import { Mail, ChevronRight, ChevronLeft, Maximize2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';

const Emails: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);
  const itemsPerPage = 9;

  const images = [
    { src: "https://i.postimg.cc/FzsCLxg2/giggleit-(1).jpg", alt: "מייל מכירה - Giggleit" },
    { src: "https://i.postimg.cc/BbQ7KCBf/Giggleit-brwkym-hb'ym-2.jpg", alt: "מייל ברוכים הבאים - Giggleit" },
    { src: "https://i.postimg.cc/2y89Zx7q/la-pelota-brwkym-hb'ym-2.jpg", alt: "מייל הצטרפות - La Pelota" },
    { src: "https://i.postimg.cc/yYGpDcg7/la-pelota-brwkym-hb'ym-3.jpg", alt: "מייל קהילה - La Pelota" },
    { src: "https://i.postimg.cc/jd13DPws/la-pelota-brwkym-hb'ym-4.jpg", alt: "מייל קולקציה - La Pelota" },
    { src: "https://i.postimg.cc/tCcvsW1w/la-pelota-brwkym-hb'ym-5.jpg", alt: "מייל מבצע - La Pelota" },
    { src: "https://i.postimg.cc/CxV6gDRh/La-pelota-'glh-ntwsh-5.png", alt: "עגלה נטושה - La Pelota" },
    { src: "https://i.postimg.cc/Hxj78c8h/LAPELOTA-WINBACK-1.png", alt: "מייל Winback - La Pelota" },
    { src: "https://i.postimg.cc/mgNp2D9C/LAPELOTA-WINBACK-3.png", alt: "מייל החזרת לקוח - La Pelota" },
    { src: "https://i.postimg.cc/gJ5NB69J/Win-Back-2-(1080-x-6000-pyqsl).png", alt: "אוטומציית מכירה חוזרת" },
    { src: "https://i.postimg.cc/3R6nbDMr/winback-1.png", alt: "מייל שימור לקוחות" },
    { src: "https://i.postimg.cc/V6TDHbyN/winback-2.png", alt: "קמפיין חגים" },
    { src: "https://i.postimg.cc/4dMBFhCx/Winback-3.png", alt: "הצעה מיוחדת" },
    { src: "https://i.postimg.cc/3R6nbDMN/'nhnw-l'-'wd-bwbh.jpg", alt: "מייל מותג - בובות" },
    { src: "https://i.postimg.cc/RhHXrV99/hhybwqym-slnw-(2).jpg", alt: "מייל רגש - חיבוקים" },
    { src: "https://i.postimg.cc/tJx20Cyp/hhywk-hlbn-(4).jpg", alt: "מייל מוצר - חיוך לבן" },
    { src: "https://i.postimg.cc/x8ztrTY9/hhywk-hlbn-(6).jpg", alt: "מייל תוצאות - חיוך" },
    { src: "https://i.postimg.cc/hvdpFPgS/hnwt-hqyz-sl-ysr'l.jpg", alt: "מייל עונתי - קיץ" },
    { src: "https://i.postimg.cc/j27ZVdKq/lhslmt-hhzmnh-wqblt-hhybwq-(1).jpg", alt: "השלמת הזמנה" },
    { src: "https://i.postimg.cc/C5qmyLYL/ll'-sm-(1080-x-3500-pyqsl).jpg", alt: "מייל ניוזלטר מעוצב" },
    { src: "https://i.postimg.cc/WzkXRbjk/myyl-1-'glh-ntwsh-(1).png", alt: "פאנל עגלה נטושה 1" },
    { src: "https://i.postimg.cc/zvg0mX5W/myyl-2-'glh-ntwsh.png", alt: "פאנל עגלה נטושה 2" },
    { src: "https://i.postimg.cc/XqCQM73w/myyl-3-'glh-ntwsh.png", alt: "פאנל עגלה נטושה 3" },
    { src: "https://i.postimg.cc/RhHXrV91/myyl-4-'glh-ntwsh-(1).png", alt: "פאנל עגלה נטושה 4" },
    { src: "https://i.postimg.cc/sxhwFDyc/myyl-5-'glh-ntwsh.png", alt: "פאנל עגלה נטושה 5" },
    { src: "https://i.postimg.cc/qq3jfM0G/ns'r-lk-rq-lbhwr.jpg", alt: "מייל בחירה אישית" },
    { src: "https://i.postimg.cc/NMtzgtym/'glh-ntwsh-2-LA-PELOTA.png", alt: "עגלה נטושה מעוצבת" },
    { src: "https://i.postimg.cc/9QjTgQsB/'glh-ntwsh-3-LA-PELOTA.png", alt: "תזכורת לסל קניות" },
    { src: "https://i.postimg.cc/ry0hRgW6/'glh-ntwsh-4-la-PELOTA-(tgyd-'th-b'-lym-'w-s'th-ns'r-bbyt-(ys-qwd-bpnym).png", alt: "קמפיין ים וקיץ" },
    { src: "https://i.postimg.cc/2jbHLTWg/'yzwb-ll'-sm-(1).jpg", alt: "עיצוב נקי 1" },
    { src: "https://i.postimg.cc/pVh05kjw/'yzwb-ll'-sm-(6).jpg", alt: "עיצוב נקי 2" },
    { src: "https://i.postimg.cc/G38MTzDV/'yzwb-ll'-sm-2026-01-05T114706-626.png", alt: "עיצוב עתידני" }
  ];

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const paginatedImages = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return images.slice(start, start + itemsPerPage);
  }, [currentPage]);

  const closeModal = () => setSelectedEmail(null);

  return (
    <div className="bg-neutral-950 min-h-screen font-assistant pb-24 text-right" dir="rtl">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e40af_0%,transparent_70%)] opacity-20"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl">
          <div className="inline-flex items-center gap-3 bg-blue-600/20 border border-blue-500/30 px-8 py-3 rounded-full mb-8 backdrop-blur-3xl">
            <Mail className="w-6 h-6 text-blue-500" />
            <span className="text-blue-400 font-black text-lg uppercase tracking-widest italic">Gallery</span>
          </div>
          <h1 className="text-5xl md:text-[7rem] font-black mb-6 leading-[0.8] tracking-tighter">
            המיילים שלנו <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent italic">הביצועים שלכם</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            גלריית עבודות נבחרות המציגה את הקופי, העיצוב והאסטרטגיה מאחורי המיילים הכי מוצלחים שלנו.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {paginatedImages.map((img, idx) => (
            <div 
              key={idx}
              className="group flex flex-col bg-neutral-900 border border-white/10 rounded-[2rem] overflow-hidden hover:border-blue-500/50 transition-all shadow-2xl"
            >
              <div className="p-4 border-b border-white/5 flex items-center justify-between bg-neutral-800/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Optimize Email Preview</span>
              </div>
              
              <div className="h-[600px] overflow-y-auto relative bg-white custom-scrollbar">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto block sharp-image"
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.05)]"></div>
              </div>
              
              <div className="p-6 bg-neutral-900 flex items-center justify-between">
                <h3 className="text-white font-bold text-lg">{img.alt}</h3>
                <button 
                  onClick={() => setSelectedEmail(img.src)}
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-xl transition-colors text-blue-400"
                  title="מסך מלא"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-4">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-30 hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <span className="text-white font-bold text-xl">
              עמוד {currentPage} מתוך {totalPages}
            </span>
            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-30 hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
        )}
      </section>

      {/* Lead Form at bottom */}
      <LeadForm />

      {/* Lightbox Modal */}
      {selectedEmail && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button 
            onClick={closeModal}
            className="absolute top-8 right-8 text-white hover:text-blue-400 transition-colors z-[110]"
          >
            <X className="w-10 h-10" />
          </button>
          <div 
            className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <img src={selectedEmail} alt="Full view" className="w-full h-auto sharp-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Emails;