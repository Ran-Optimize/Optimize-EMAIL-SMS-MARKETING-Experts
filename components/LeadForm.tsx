import React, { useState } from 'react';
import { Send, CheckCircle, User, Phone, Globe, BarChart } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xwvnbkey", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        if (typeof window !== 'undefined' && (window as any).fbq && !submitted) {
          (window as any).fbq('track', 'Lead');
        }
        setSubmitted(true);
      } else {
        alert("אירעה שגיאה בשליחת הטופס. אנא נסו שוב.");
      }
    } catch (error) {
      alert("שגיאת תקשורת. אנא בדקו את החיבור לאינטרנט.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/30 p-12 rounded-[2.5rem] text-center animate-fade-in transition-colors duration-300">
        <div className="bg-blue-600 dark:bg-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-white" />
        </div>
        <h3 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">הפרטים התקבלו!</h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg">רן או אחד מאנשי הצוות יחזרו אליך ב-24 השעות הקרובות.</p>
      </div>
    );
  }

  return (
    <section id="contact" className="py-24 px-4 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/50 dark:from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white">בואו נבדוק התאמה</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">השאירו פרטים ונחזור אליכם עם תוכנית עבודה ראשונית.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 dark:bg-neutral-900/50 p-8 md:p-12 rounded-[3rem] border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-2xl transition-colors duration-300" action="https://formspree.io/f/xwvnbkey" method="POST">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-600 dark:text-gray-400 flex items-center gap-2">
              <User className="w-4 h-4 text-blue-600 dark:text-blue-500" /> שם מלא
            </label>
            <input 
              required 
              name="full-name"
              type="text" 
              placeholder="ישראל ישראלי" 
              className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-6 py-4 text-gray-900 dark:text-white focus:border-blue-500 outline-none transition-all shadow-sm dark:shadow-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-600 dark:text-gray-400 flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600 dark:text-blue-500" /> טלפון
            </label>
            <input 
              required 
              name="phone"
              type="tel" 
              placeholder="050-0000000" 
              className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-6 py-4 text-gray-900 dark:text-white focus:border-blue-500 outline-none transition-all text-left shadow-sm dark:shadow-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-600 dark:text-gray-400 flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-600 dark:text-blue-500" /> כתובת חנות השופיפי
            </label>
            <input 
              required 
              name="store-url"
              type="text" 
              placeholder="www.yourstore.com" 
              className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-6 py-4 text-gray-900 dark:text-white focus:border-blue-500 outline-none transition-all text-left shadow-sm dark:shadow-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-600 dark:text-gray-400 flex items-center gap-2">
              <BarChart className="w-4 h-4 text-blue-600 dark:text-blue-500" /> מחזור חודשי ממוצע
            </label>
            <select name="monthly-revenue" className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-6 py-4 text-gray-900 dark:text-white focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer shadow-sm dark:shadow-none">
              <option value="60-100k">₪60K - ₪100K</option>
              <option value="100-300k">₪100K - ₪300K</option>
              <option value="300-500k">₪300K - ₪500K</option>
              <option value="500k+">₪500K+</option>
            </select>
          </div>

          <div className="md:col-span-2 mt-6">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-black text-2xl py-6 rounded-2xl transition-all flex items-center justify-center gap-4 group shadow-xl shadow-blue-600/20 disabled:opacity-50"
            >
              {isSubmitting ? "שולח..." : "שלח פרטים ובדוק התאמה"}
              <Send className="w-6 h-6 transform group-hover:-translate-x-2 transition-transform" />
            </button>
            <p className="text-center text-gray-500 dark:text-gray-500 text-sm mt-6">
              * אנחנו עובדים רק עם חנויות שיש להן פוטנציאל אמיתי לתוספת של 20% להכנסה החודשית.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;