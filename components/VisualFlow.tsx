
import React from 'react';
import { ShoppingCart, Zap, TrendingUp, CheckCircle, ShieldCheck, HeartOff } from 'lucide-react';

const VisualFlow: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">איך זה נראה בפועל?</h2>
          <p className="text-xl text-gray-400">הנוסחה שלנו לצמיחה בשורה התחתונה</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-4 mb-20">
          {/* Step 1: Your Store */}
          <div className="flex-1 w-full group">
            <div className="bg-neutral-900 border border-white/10 p-10 rounded-[3rem] text-center transform transition-all group-hover:-translate-y-2">
              <div className="bg-white/5 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">החנות שלך</h3>
              <p className="text-gray-500">בסיס חזק עם מחזור של 60K+ בשופיפי</p>
            </div>
          </div>

          {/* Connection */}
          <div className="flex items-center justify-center lg:px-4">
             <Zap className="h-12 w-12 text-blue-500 animate-pulse" />
          </div>

          {/* Step 2: Optimize */}
          <div className="flex-1 w-full group">
            <div className="bg-blue-600 border border-blue-500 p-10 rounded-[3rem] text-center shadow-[0_0_50px_rgba(37,99,235,0.3)] transform transition-all group-hover:-translate-y-2">
              <div className="bg-white/20 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">Optimize</h3>
              <p className="text-white/90">דיוור שבאמת עובד: מייל, SMS ו-WhatsApp</p>
            </div>
          </div>

          {/* Connection */}
          <div className="flex items-center justify-center lg:px-4">
             <div className="h-[2px] w-12 bg-gradient-to-r from-blue-500 to-purple-500 hidden lg:block"></div>
             <div className="w-[2px] h-12 bg-gradient-to-b from-blue-500 to-purple-500 lg:hidden"></div>
          </div>

          {/* Step 3: Profit */}
          <div className="flex-1 w-full group">
            <div className="bg-neutral-900 border border-purple-500/30 p-10 rounded-[3rem] text-center transform transition-all group-hover:-translate-y-2">
              <div className="bg-purple-500/10 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-12 w-12 text-purple-500" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">תוספת 20-30%</h3>
              <p className="text-gray-500 font-bold">צמיחה עקבית כל חודש במחזור</p>
            </div>
          </div>
        </div>

        {/* Pricing Model / Value Prop */}
        <div className="bg-neutral-900/50 border border-white/10 rounded-[4rem] p-10 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] pointer-events-none"></div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-black leading-tight">
                המודל שלנו פשוט: <br />
                <span className="text-blue-500">אנחנו מרוויחים רק כשאתה מרוויח.</span>
              </h3>
              <p className="text-xl text-gray-400 leading-relaxed">
                אנחנו לוקחים אחוז קטן מההכנסה שהבאנו לכם בלבד. אחוז באמת קטן שזה כמעט מביך, נטו כי אנחנו יודעים שאנחנו יכולים לייצר לך כסף.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-xl font-bold">
                  <ShieldCheck className="h-8 w-8 text-green-500" />
                  ללא עלות הקמה
                </div>
                <div className="flex items-center gap-4 text-xl font-bold">
                  <HeartOff className="h-8 w-8 text-red-500" />
                  ללא אותיות קטנות
                </div>
                <div className="flex items-center gap-4 text-xl font-bold">
                  <CheckCircle className="h-8 w-8 text-blue-500" />
                  נטו רווח עבורך
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-1 rounded-[2.5rem]">
                <div className="bg-black rounded-[2.4rem] p-10 text-center">
                  <p className="text-sm font-black text-blue-400 uppercase tracking-widest mb-4">Our Commitment</p>
                  <p className="text-6xl md:text-8xl font-black text-white mb-6">0₪</p>
                  <p className="text-2xl font-bold text-gray-300">עלות הקמה</p>
                  <div className="mt-8 h-[1px] bg-white/10 w-full"></div>
                  <p className="mt-8 text-gray-400 text-lg">
                    הסיכון עלינו. התוצאות עליך.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualFlow;
