
import React, { useState, useMemo, useEffect } from 'react';
import { Check, AlertCircle } from 'lucide-react';

const ProfitCalculator: React.FC = () => {
  const [turnover, setTurnover] = useState<number>(60000);
  const [channelsToAdd, setChannelsToAdd] = useState({
    email: false,
    sms: false,
    whatsapp: false
  });
  const [displayRoas, setDisplayRoas] = useState<string>("0.0");

  const calculation = useMemo(() => {
    let multiplier = 0;
    let selectedCount = 0;
    
    // Each channel adds 12% as requested
    if (channelsToAdd.email) { multiplier += 0.12; selectedCount++; }
    if (channelsToAdd.sms) { multiplier += 0.12; selectedCount++; }
    if (channelsToAdd.whatsapp) { multiplier += 0.12; selectedCount++; }
    
    // Total should reflect the 20-36% range and 27% average
    // Base uplift if something is selected to reach minimum 20%
    if (selectedCount === 1) multiplier = 0.20; // Guarantee at least 20%
    if (selectedCount === 2) multiplier = 0.27; // Average
    if (selectedCount === 3) multiplier = 0.36; // Maximum

    const addedRevenue = turnover * multiplier;
    const yearlyAdded = addedRevenue * 12;
    
    return {
      addedRevenue,
      yearlyAdded,
      selectedCount,
      multiplierPercent: Math.round(multiplier * 100)
    };
  }, [turnover, channelsToAdd]);

  useEffect(() => {
    if (calculation.selectedCount === 0) {
      setDisplayRoas("0.0");
      return;
    }
    const seed = (turnover / 1000) + (calculation.selectedCount * 7);
    const roas = 14 + (seed % 4.5); // ROAS around 14 as requested
    setDisplayRoas(roas.toFixed(1));
  }, [turnover, calculation.selectedCount]);

  return (
    <section className="py-24 bg-gray-100 dark:bg-neutral-900/50 relative overflow-hidden text-right transition-colors duration-300" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-bold mb-4 uppercase tracking-tighter transition-colors">
            ROI Analytics Tool
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight font-assistant text-gray-900 dark:text-white">כמה כסף נשאר לך על השולחן?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-assistant">
            סמנו את הערוצים שחסרים לכם כרגע בחנות. אנחנו נראה לכם את פוטנציאל הצמיחה הריאלי שלכם ב-60 הימים הקרובים.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl flex flex-col justify-between shadow-xl dark:shadow-none transition-colors duration-300">
            <div className="mb-12">
              <label className="block text-xl font-black mb-6 font-assistant text-gray-900 dark:text-white">מחזור חודשי נוכחי: ₪{turnover.toLocaleString()}</label>
              <input 
                type="range" 
                min="60000" 
                max="1000000" 
                step="10000"
                value={turnover}
                onChange={(e) => setTurnover(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 dark:bg-neutral-800 rounded-full appearance-none cursor-pointer accent-blue-600 dark:accent-blue-500"
              />
              <div className="flex justify-between mt-4 text-gray-500 text-sm font-bold font-assistant">
                <span>₪60,000</span>
                <span>₪1,000,000+</span>
              </div>
            </div>

            <div className="space-y-4 font-assistant">
              <p className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                מה חסר לכם כרגע או דורש שיפור?
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {[
                  { id: 'email', label: 'שיווק במייל (Email Marketing)', icon: '📧' },
                  { id: 'sms', label: 'שיווק ב-SMS', icon: '📱' },
                  { id: 'whatsapp', label: 'שיווק ב-WhatsApp', icon: '💬' }
                ].map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => setChannelsToAdd(p => ({...p, [item.id]: !p[item.id as keyof typeof p]}))}
                    className={`flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 ${channelsToAdd[item.id as keyof typeof channelsToAdd] ? 'bg-blue-50 dark:bg-blue-600/20 border-blue-500 ring-2 ring-blue-500/20' : 'bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10'}`}
                  >
                    <span className="flex items-center gap-4 text-lg font-bold text-gray-900 dark:text-white">
                      <span className="text-2xl">{item.icon}</span>
                      {item.label}
                    </span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${channelsToAdd[item.id as keyof typeof channelsToAdd] ? 'bg-blue-600 dark:bg-blue-500' : 'bg-gray-200 dark:bg-white/10'}`}>
                      {channelsToAdd[item.id as keyof typeof channelsToAdd] && <Check className="w-5 h-5 text-white" />}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] blur-2xl opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity"></div>
            <div className="relative h-full bg-white dark:bg-gradient-to-br dark:from-neutral-900 dark:to-black border border-gray-200 dark:border-white/10 p-10 md:p-14 rounded-[2.5rem] shadow-2xl flex flex-col font-assistant transition-colors duration-300">
              
              <div className="flex-grow space-y-12">
                <div>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-black uppercase tracking-[0.2em] mb-4">תוספת מחזור מוערכת ({calculation.multiplierPercent}%)</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-7xl md:text-8xl font-black tracking-tighter text-gray-900 dark:text-white">
                      ₪{calculation.addedRevenue.toLocaleString()}
                    </span>
                  </div>
                  {calculation.selectedCount === 0 && (
                    <p className="text-gray-500 mt-4 animate-pulse">בחרו ערוץ כדי לראות את הפוטנציאל...</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-3xl border border-gray-200 dark:border-white/10 transition-colors">
                    <p className="text-gray-500 text-xs font-bold uppercase mb-2">תוספת שנתית</p>
                    <p className="text-3xl font-black text-gray-900 dark:text-white">₪{calculation.yearlyAdded.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-3xl border border-gray-200 dark:border-white/10 transition-colors">
                    <p className="text-gray-500 text-xs font-bold uppercase mb-2">ROAS צפוי</p>
                    <p className="text-3xl font-black text-green-600 dark:text-green-400">{displayRoas}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 transition-colors">
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-medium">
                  אנחנו מוסיפים בממוצע <span className="text-gray-900 dark:text-white font-bold">27% מהמחזור הקיים</span> ללקוחות שלנו (לפחות 20%), ומבקשים <span className="text-blue-600 dark:text-blue-400 font-bold">אחוזים בודדים רק מהתוצאות שהבאנו</span>.
                </p>
                <a href="#contact" className={`w-full py-6 rounded-2xl font-black text-xl text-center block transition-all shadow-xl ${calculation.selectedCount > 0 ? 'bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 hover:scale-[1.02]' : 'bg-gray-200 text-gray-400 dark:bg-neutral-800 dark:text-neutral-500 cursor-not-allowed'}`}>
                  אני רוצה להוסיף את הכסף הזה למחזור
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitCalculator;
