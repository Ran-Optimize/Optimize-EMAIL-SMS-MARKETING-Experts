import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProfitCalculator from '../components/ProfitCalculator';
import WhatWeDo from '../components/WhatWeDo';
import VisualFlow from '../components/VisualFlow';
import AgencyMetrics from '../components/AgencyMetrics';
import LeadForm from '../components/LeadForm';
import { Mail, BarChart3, Zap, ArrowLeft, Gem, CheckCircle2, Send, User, Phone, Globe, BarChart } from 'lucide-react';

const Home: React.FC = () => {
  const [quickSubmitted, setQuickSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleQuickSubmit = async (e: React.FormEvent) => {
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
        setQuickSubmitted(true);
      } else {
        alert("אירעה שגיאה בשליחת הטופס. אנא נסו שוב.");
      }
    } catch (error) {
      alert("שגיאת תקשורת. אנא בדקו את החיבור לאינטרנט.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToNearestContact = (e: React.MouseEvent, elementId: string) => {
    e.preventDefault();
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-hidden bg-neutral-950 font-assistant" dir="rtl">
      <Hero />
      
      {/* Quick Contact Section */}
      <section id="contact-quick" className="py-24 px-4 bg-black relative">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl relative">
             <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/20 blur-[60px]"></div>
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-right">
                   <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">בואו נבדוק התאמה <br/><span className="text-blue-500 italic">לצמיחה של 27%</span></h2>
                   <p className="text-xl text-gray-400 mb-8">השאירו פרטים ונחזור אליכם עם בדיקה ראשונית של פוטנציאל הרווח בחנות שלכם.</p>
                   <ul className="space-y-4 text-white font-bold">
                      <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-500 w-6 h-6" /> ניתוח נתונים ראשוני ללא עלות</li>
                      <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-500 w-6 h-6" /> מודל מבוסס תוצאות בלבד</li>
                      <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-500 w-6 h-6" /> מותאם ל-Shopify בלבד</li>
                   </ul>
                </div>
                <div className="bg-neutral-900/50 p-8 rounded-[2rem] border border-white/5 shadow-2xl">
                    {quickSubmitted ? (
                      <div className="py-12 text-center animate-fade-in">
                        <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-black mb-2">הפרטים התקבלו!</h3>
                        <p className="text-gray-400">רן יחזור אליך בהקדם עם ניתוח מלא.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleQuickSubmit} className="space-y-4" action="https://formspree.io/f/xwvnbkey" method="POST">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                               <label className="text-sm font-bold text-gray-500 flex items-center gap-2"><User className="w-4 h-4" /> שם מלא</label>
                               <input required name="full-name" type="text" placeholder="ישראל ישראלי" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-all text-white" />
                            </div>
                            <div className="space-y-2">
                               <label className="text-sm font-bold text-gray-500 flex items-center gap-2"><Phone className="w-4 h-4" /> טלפון</label>
                               <input required name="phone" type="tel" placeholder="050-0000000" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-all text-left text-white" />
                            </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-500 flex items-center gap-2"><Globe className="w-4 h-4" /> כתובת חנות השופיפי</label>
                           <input required name="store-url" type="text" placeholder="www.yourstore.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-all text-left text-white" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-500 flex items-center gap-2"><BarChart className="w-4 h-4" /> מחזור חודשי ממוצע</label>
                           <select name="monthly-revenue" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer">
                                <option value="60-100k">₪60K - ₪100K</option>
                                <option value="100-300k">₪100K - ₪300K</option>
                                <option value="300-500k">₪300K - ₪500K</option>
                                <option value="500k+">₪500K+</option>
                            </select>
                        </div>
                        <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black text-xl py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-3 group mt-4 disabled:opacity-50">
                           {isSubmitting ? "שולח..." : "שלח פרטים ובדוק התאמה"}
                           <Send className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        </button>
                      </form>
                    )}
                </div>
             </div>
          </div>
        </div>
      </section>

      <ProfitCalculator />
      
      {/* What We Do Section - Updated with CTA scrolling */}
      <WhatWeDo onCtaClick={(e) => scrollToNearestContact(e, 'contact-quick')} />

      <VisualFlow />

      <AgencyMetrics />

      {/* Stacked Showcase Sections */}
      <section className="py-24 px-4 bg-black space-y-12">
        <div className="max-w-6xl mx-auto">
          {/* Emails Showcase */}
          <div className="group bg-neutral-900 border border-white/10 p-12 md:p-20 rounded-[3rem] relative overflow-hidden flex flex-col md:flex-row items-center gap-12 mb-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] pointer-events-none"></div>
            <div className="flex-1 text-center md:text-right">
              <div className="bg-blue-500/20 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto md:mx-0 mb-8">
                <Mail className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-6">המיילים שלנו</h3>
              <p className="text-gray-400 text-xl mb-10 max-w-xl">
                צפו בעיצובים ובקופי שהביאו עשרות אחוזי המרה לחנויות המובילות בישראל. כל מייל הוא יצירת אמנות שיווקית.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/emails" className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 shadow-xl">
                  לצפייה בגלריה המלאה
                  <ArrowLeft className="h-6 w-6" />
                </Link>
                <a href="#contact" onClick={(e) => scrollToNearestContact(e, 'contact')} className="inline-flex items-center justify-center gap-4 bg-white/5 border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
                  תבדקו לי את החנות
                </a>
              </div>
            </div>
            <div className="flex-1 relative h-[500px] w-full">
                <div className="absolute inset-0 flex gap-4 overflow-hidden">
                    <div className="flex-1 space-y-4">
                        <div className="group flex flex-col bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden h-[400px] shadow-2xl">
                           <div className="p-2 border-b border-white/5 flex items-center justify-between bg-neutral-800/50">
                              <div className="flex gap-1">
                                 <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                 <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                 <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                              </div>
                           </div>
                           <div className="flex-grow overflow-y-auto bg-white custom-scrollbar scrollbar-hide hover:scrollbar-default">
                              <img src="https://i.postimg.cc/FzsCLxg2/giggleit-(1).jpg" alt="Email Preview" className="w-full h-auto sharp-image" />
                           </div>
                        </div>
                        <div className="group flex flex-col bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden h-[300px] shadow-2xl">
                           <div className="p-2 border-b border-white/5 flex items-center justify-between bg-neutral-800/50">
                              <div className="flex gap-1">
                                 <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                 <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                 <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                              </div>
                           </div>
                           <div className="flex-grow overflow-y-auto bg-white custom-scrollbar scrollbar-hide hover:scrollbar-default">
                              <img src="https://i.postimg.cc/CxV6gDRh/La-pelota-'glh-ntwsh-5.png" alt="Email Preview" className="w-full h-auto sharp-image" />
                           </div>
                        </div>
                    </div>
                    <div className="flex-1 space-y-4 mt-12">
                        <div className="group flex flex-col bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden h-[300px] shadow-2xl">
                           <div className="p-2 border-b border-white/5 flex items-center justify-between bg-neutral-800/50">
                              <div className="flex gap-1">
                                 <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                 <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                 <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                              </div>
                           </div>
                           <div className="flex-grow overflow-y-auto bg-white custom-scrollbar scrollbar-hide hover:scrollbar-default">
                              <img src="https://i.postimg.cc/BbQ7KCBf/Giggleit-brwkym-hb'ym-2.jpg" alt="Email Preview" className="w-full h-auto sharp-image" />
                           </div>
                        </div>
                        <div className="group flex flex-col bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden h-[400px] shadow-2xl">
                           <div className="p-2 border-b border-white/5 flex items-center justify-between bg-neutral-800/50">
                              <div className="flex gap-1">
                                 <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                 <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                 <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                              </div>
                           </div>
                           <div className="flex-grow overflow-y-auto bg-white custom-scrollbar scrollbar-hide hover:scrollbar-default">
                              <img src="https://i.postimg.cc/V6TDHbyN/winback-2.png" alt="Email Preview" className="w-full h-auto sharp-image" />
                           </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Results Showcase */}
          <div className="group bg-neutral-900 border border-white/10 p-12 md:p-20 rounded-[3rem] relative overflow-hidden flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-[100px] pointer-events-none"></div>
            <div className="flex-1 text-center md:text-right">
              <div className="bg-purple-500/20 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto md:mx-0 mb-8">
                <BarChart3 className="h-10 w-10 text-purple-500" />
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-6">תוצאות וקייס סטאדי</h3>
              <p className="text-gray-400 text-xl mb-10 max-w-xl">
                איך הוספנו 27% למחזור ב-60 יום בלבד? כל המספרים, הצמיחה והנתונים שמוכיחים שהשיטה עובדת.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/results" className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-2xl font-black text-xl hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105 shadow-xl">
                  לצפייה בתוצאות שלנו
                  <ArrowLeft className="h-6 w-6" />
                </Link>
                <a href="#contact" onClick={(e) => scrollToNearestContact(e, 'contact')} className="inline-flex items-center justify-center gap-4 bg-white/5 border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
                  בואו נדבר תכלס
                </a>
              </div>
            </div>
            <div className="flex-1">
                <div className="bg-white/5 rounded-[2rem] p-8 border border-white/10 relative">
                    <div className="flex items-end gap-2 h-48">
                        <div className="flex-1 bg-blue-500/20 h-[30%] rounded-t-lg"></div>
                        <div className="flex-1 bg-blue-500/40 h-[45%] rounded-t-lg"></div>
                        <div className="flex-1 bg-blue-500/60 h-[65%] rounded-t-lg"></div>
                        <div className="flex-1 bg-blue-500 h-[95%] rounded-t-lg shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
                    </div>
                    <div className="mt-6 flex justify-between text-white/40 font-bold">
                        <span>לפני Optimize</span>
                        <span className="text-white font-black">אחרי 60 יום (+27%)</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 px-4 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight">האם העסק שלך מוכן לשלב הבא?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-right">
            <div className="bg-black/20 backdrop-blur-md p-8 rounded-3xl flex items-start gap-6 border border-white/10">
              <CheckCircle2 className="h-10 w-10 text-white shrink-0" />
              <div>
                <h4 className="text-2xl font-black mb-2 italic">מחזור 60K+ בחודש</h4>
                <p className="text-lg opacity-90">העבודה איתנו דורשת דאטה וקהל קיים כדי לייצר תוצאות יוצאות דופן מהיום הראשון.</p>
              </div>
            </div>
            <div className="bg-black/20 backdrop-blur-md p-8 rounded-3xl flex items-start gap-6 border border-white/10">
              <CheckCircle2 className="h-10 w-10 text-white shrink-0" />
              <div>
                <h4 className="text-2xl font-black mb-2 italic">מיקוד בנישה</h4>
                <p className="text-lg opacity-90">אנחנו לא עובדים עם כולם. אנחנו מתמחים בחנויות נישה עם פוטנציאל לקהילה וריטנשן גבוה.</p>
              </div>
            </div>
          </div>
          <button onClick={(e) => scrollToNearestContact(e, 'contact')} className="inline-block mt-16 px-16 py-8 bg-black text-white text-3xl font-black rounded-2xl hover:scale-110 transition-transform shadow-2xl">
            בדקו התאמה לתוספת של 27%
          </button>
        </div>
      </section>

      <LeadForm />
    </div>
  );
};

export default Home;