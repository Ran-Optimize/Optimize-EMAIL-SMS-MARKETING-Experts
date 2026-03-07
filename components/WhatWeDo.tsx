
import React from 'react';
import { 
  Layout, 
  Brain, 
  Zap, 
  UserCheck, 
  ShieldCheck, 
  MessageSquare, 
  Users, 
  Split, 
  Send, 
  TrendingUp 
} from 'lucide-react';

interface WhatWeDoProps {
  onCtaClick?: (e: React.MouseEvent) => void;
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({ onCtaClick }) => {
  const items = [
    { icon: Layout, text: 'פופאפ ממיר באמת' },
    { icon: Brain, text: 'איפיון הכאב העמוק של הלקוחות שלך' },
    { icon: Zap, text: 'בניית אוטומציות' },
    { icon: UserCheck, text: 'פרופיל שליחה מקצועי' },
    { icon: ShieldCheck, text: 'מייל שלא מגיע לספאם' },
    { icon: MessageSquare, text: 'הודעות שממירות' },
    { icon: Users, text: 'לקוחות שחוזרים' },
    { icon: Split, text: 'A/B Testing קבועים' },
    { icon: Send, text: 'קמפיינים על בסיס קבוע' },
  ];

  return (
    <section className="py-24 px-4 bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,#1e3a8a_0%,transparent_40%)] opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10 text-right" dir="rtl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">מה נעשה עבורך?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            אנחנו לוקחים אחריות מלאה על מערך הריטנשן שלך. הנה מה שקורה ברגע שמתחילים לעבוד:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-[2rem] border transition-all duration-500 flex items-center gap-6 bg-white/5 border-white/10 hover:border-blue-500/50 hover:bg-white/10"
            >
              <div className="p-4 rounded-2xl transition-transform group-hover:scale-110 bg-blue-500/10">
                <item.icon className="h-8 w-8 text-blue-500" />
              </div>
              <span className="text-xl font-bold text-gray-200">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Big Centered Highlight Card - Clickable as requested */}
        <div className="mt-8 flex justify-center">
            <button 
              onClick={onCtaClick}
              className="group w-full md:w-2/3 p-10 md:p-14 rounded-[3rem] border bg-blue-600 border-blue-500 shadow-[0_0_60px_rgba(37,99,235,0.4)] transition-all duration-500 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-right hover:scale-[1.02]"
            >
              <div className="p-6 rounded-3xl bg-white/20 group-hover:bg-white/30 transition-colors">
                <TrendingUp className="h-16 w-16 text-white" />
              </div>
              <div>
                <span className="text-4xl md:text-6xl font-black text-white block mb-2 tracking-tighter">
                  30% עליה בהכנסות
                </span>
                <p className="text-white/80 text-xl md:text-2xl font-medium">
                  זה המינימום שאנחנו מכוונים אליו עבור החנות שלך
                </p>
              </div>
            </button>
        </div>

        <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 text-center">
          <p className="text-2xl text-gray-300 italic">
            "המטרה שלנו היא לא רק לשלוח הודעות, אלא לבנות עבורך נכס דיגיטלי שמייצר מזומנים באופן קבוע."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
