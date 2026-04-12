import React from 'react';
import { ArrowLeft, CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveGrid from './InteractiveGrid';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('contact-quick');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-4 text-right transition-colors duration-300" dir="rtl">
      {/* Visual Hook - Grid & Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e3a8a_0%,transparent_50%)] opacity-10 dark:opacity-30"></div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 dark:via-blue-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 dark:via-purple-500/50 to-transparent"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
        
        {/* Animated Grid */}
        <InteractiveGrid />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 px-6 py-2 rounded-full mb-10 animate-fade-in group hover:border-blue-500/40 transition-colors shadow-sm dark:shadow-none">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Shopify_Logo.png" alt="Shopify" className="h-5 object-contain grayscale group-hover:grayscale-0 transition-all dark:invert dark:brightness-200" />
          <span className="text-gray-900 dark:text-white text-sm font-bold tracking-widest uppercase font-assistant">The #1 Choice for Shopify Scale</span>
        </div>

        <h1 className="text-6xl md:text-[9rem] font-black leading-[0.85] mb-10 tracking-tighter font-assistant">
          <span className="block text-gray-900 dark:text-white mb-4">אנחנו הפאנל הכי</span>
          <span className="block bg-gradient-to-r from-blue-600 via-blue-400 to-purple-600 dark:from-blue-400 dark:via-blue-100 dark:to-purple-500 bg-clip-text text-transparent italic drop-shadow-[0_0_30px_rgba(59,130,246,0.1)] dark:drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            משתלם של החנות שלך
          </span>
        </h1>

        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 leading-tight font-assistant font-light">
            אנחנו מנהלים לך את התפוצה <span className="text-gray-900 dark:text-white font-bold underline decoration-blue-500">מא' ועד ת'</span> 
            <br />
            ולוקחים רק אחוז נמוך מהתוצאות שהבאנו.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider text-sm font-assistant">
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-500 dark:text-yellow-400" /> ₪10M+ הכנסות שייצרנו</span>
            <span className="flex items-center gap-2 border-x border-gray-200 dark:border-white/10 px-6"><Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" /> ניהול של רן מנכ"ל Optimize</span>
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" /> מותאם ל-60K+ חודשי</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <a href="#contact-quick" onClick={scrollToContact} className="w-full sm:w-auto px-14 py-7 bg-blue-600 dark:bg-white text-white dark:text-black text-2xl font-black rounded-2xl hover:bg-blue-700 dark:hover:bg-blue-600 dark:hover:text-white transition-all transform hover:scale-110 shadow-[0_0_50px_rgba(59,130,246,0.2)] dark:shadow-[0_0_50px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3 font-assistant">
            בואו נכניס יותר כסף
            <ArrowLeft className="h-6 w-6" />
          </a>
          <Link to="/results" className="w-full sm:w-auto px-14 py-7 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white text-2xl font-bold rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-3 group backdrop-blur-md font-assistant shadow-sm dark:shadow-none">
            הוכחות בשטח
          </Link>
        </div>

        <div className="mt-24 pt-16 border-t border-gray-200 dark:border-white/5 grid grid-cols-2 md:grid-cols-4 gap-12 font-assistant">
            <div>
                <p className="text-4xl md:text-5xl font-black text-blue-600 dark:text-blue-400 mb-2">27%</p>
                <p className="text-gray-500 text-sm font-bold uppercase">תוספת מחזור ממוצעת</p>
            </div>
            <div>
                <p className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2">14x</p>
                <p className="text-gray-500 text-sm font-bold uppercase">ROAS ממוצע</p>
            </div>
            <div>
                <p className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2">60</p>
                <p className="text-gray-500 text-sm font-bold uppercase">ימים לתוצאות שיא</p>
            </div>
            <div>
                <p className="text-4xl md:text-5xl font-black text-purple-600 dark:text-purple-400 mb-2">₪10M</p>
                <p className="text-gray-500 text-sm font-bold uppercase">יצרנו ללקוחות</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;