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
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Shopify_Logo.png" alt="Shopify" className="h-5 object-contain group-hover:grayscale transition-all" />
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
            <span className="flex items-center gap-2 border-x border-gray-200 dark:border-white/10 px-6"><Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" /> ללא סיכון מצדך, שלם רק אם מכרנו לך</span>
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

        <div className="mt-16 flex flex-wrap items-center justify-center gap-10 opacity-70">
            <div className="flex items-center gap-2 group transition-all cursor-pointer">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Shopify_Logo.png" alt="Shopify" className="h-6 object-contain group-hover:grayscale transition-all" />
                 <span className="text-[12px] font-bold text-gray-400 dark:text-white/50 uppercase tracking-widest mt-0.5">Partner</span>
            </div>
            <div className="flex items-center gap-2 group transition-all cursor-pointer">
                 <img src="https://my.flashy.app/he/assets/images/partners/icon-logo-blue.png" alt="Flashy" className="h-7 object-contain group-hover:grayscale transition-all" />
                 <span className="text-[12px] font-bold text-gray-400 dark:text-white/50 uppercase tracking-widest mt-0.5">Partner</span>
            </div>
            <div className="flex items-center gap-2 group transition-all cursor-pointer">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 581 172" className="h-[1.125rem] text-gray-900 dark:text-white group-hover:opacity-50 transition-all" fill="currentColor">
                   <path d="M329.918 34.367a11.85 11.85 0 0 0 8.284-3.315 11.69 11.69 0 0 0 3.576-8.129 11.87 11.87 0 0 0-3.512-8.29 12.03 12.03 0 0 0-8.348-3.488 11.85 11.85 0 0 0-8.185 3.551 11.69 11.69 0 0 0-3.338 8.227 11.5 11.5 0 0 0 3.403 8.065 11.66 11.66 0 0 0 8.12 3.38M410.509 45.371h28.604v2.254a15.3 15.3 0 0 0-4.538 1.558c-2.615 1.215-7.845 7.104-11.86 16.973-6.799 17.148-13.943 37.404-21.442 60.618l-2.792 8.803c-1.223 3.979-2.269 6.576-2.792 8.143s-1.224 3.979-2.438 6.919a38.6 38.6 0 0 1-2.659 6.409c-1.401 2.597-4.016 7.923-6.107 9.525-3.316 2.773-8.2 5.889-14.298 5.37-11.86 0-20.751-8.803-20.928-19.217 0-7.105 4.538-11.779 11.337-11.779 4.884 0 9.236 2.641 9.236 8.134 0 3.988-4.006 8.143-4.006 10.221 0 5.369 3.138 7.922 9.245 7.922 4.875 0 8.864-3.116 11.851-9.349 4.016-7.104 4.361-14.894 1.046-23.557l-25.103-65.98c-5.761-15.237-10.122-20.246-15.521-20.783V45.3h39.578v2.253c-4.707.52-7.144 3.293-7.144 8.31 0 3.636 1.391 9.182 4.006 16.286l4.707 12.81c5.407 13.855 9.75 25.977 12.037 33.601 5.053-15.758 9.751-29.614 14.298-41.736 3.315-9.006 4.884-15.414 4.884-19.226 0-6.752-3.661-9.868-9.245-9.868zM135.158 129.714c-5.052-.88-9.413-5.37-9.413-14.895V0L96.972 6.233v2.43c4.884-.52 9.75 3.802 9.75 12.984v93.172c0 9.006-4.884 14.2-9.75 14.895q-.687.12-1.383.167a15.4 15.4 0 0 1-7.268-1.276c-3.865-1.673-7.091-4.657-9.821-9.111L65.203 98.366a24.44 24.44 0 0 0-11.884-9.785 24.64 24.64 0 0 0-15.418-.779L52.9 71.35c11.328-12.465 21.797-20.432 31.733-23.724V45.37H51.642v2.254c8.545 3.292 8.021 10.564-1.773 22.008l-21.096 24.41V0L0 6.233v2.43c4.884 0 9.75 4.841 9.75 13.327v92.829c0 10.221-4.706 14.2-9.75 14.895v2.254h38.222v-2.254c-6.276-.88-9.414-5.713-9.414-14.895v-17.14l8.19-9.005 19.838 32.378c4.707 7.799 9.068 10.916 16.044 10.916h66.391v-1.761s-1.897-.132-4.113-.493M214.368 118.763V80.029c-.382-25.326-11.072-36.858-35.554-36.858a34.97 34.97 0 0 0-21.619 7.27c-6.453 4.851-9.591 10.397-9.591 16.806 0 6.233 3.484 10.907 9.236 10.907 6.108 0 10.469-3.46 10.469-8.31 0-3.636-2.447-8.662-2.447-12.122 0-6.241 4.716-11.611 12.906-11.611 10.469 0 17.959 7.8 17.959 25.115v10.388l-8.714 2.077c-4.538.88-8.367 1.761-11.337 2.641s-6.798 2.078-11.337 3.803c-9.068 3.469-13.943 6.761-18.135 12.994a18.1 18.1 0 0 0-3.138 10.22c0 14.367 10.113 20.952 24.243 20.952 11.159 0 23.046-5.89 28.418-16.973.077 3.496.92 6.933 2.473 10.071 5.912 11.884 25.493 4.859 25.493 4.859v-2.253c-8.572 1.329-9.281-8.795-9.325-11.242m-18.615-11.99c0 5.713-2.092 10.388-6.275 13.68-4.007 3.293-8.191 5.027-12.552 5.027-8.545 0-14.129-5.546-14.129-15.767 0-4.841 2.659-9.349 4.884-11.945a21.3 21.3 0 0 1 6.107-4.332c2.961-1.558 4.432-2.359 6.453-3.292l7.978-2.94c4.006-1.558 6.444-2.421 7.49-2.94zM581 45.371h-67.818V0H581l-14.236 22.686zM443.147 120.946a45.33 45.33 0 0 1-12.933-32.263 44.5 44.5 0 0 1 3.224-17.337 44.8 44.8 0 0 1 9.709-14.76c8.554-9.014 19.031-13.53 31.263-13.53 12.046 0 22.533 4.516 31.086 13.53a44.2 44.2 0 0 1 9.845 14.722 44 44 0 0 1 3.256 17.375 44.6 44.6 0 0 1-3.276 17.443 44.9 44.9 0 0 1-9.825 14.82c-8.553 8.803-19.04 13.355-31.086 13.355-12.232 0-22.709-4.508-31.263-13.355m46.979-62.916c-3.448-6.699-7.978-10.625-13.296-11.682-10.787-2.156-20.325 8.856-23.879 26.366a82.6 82.6 0 0 0-1.091 23.847 65.8 65.8 0 0 0 6.577 22.889c3.457 6.708 7.978 10.625 13.296 11.681 10.788 2.157 20.6-9.322 24.181-27.008 2.97-14.78 1.463-32.782-5.832-46.102z"/><path d="M340.032 114.819V45.371h-61.383v2.087c8.199 1.215 12.099 7.36 8.377 17.324-19.182 51.78-17.959 49.456-19.182 53.611-1.223-3.988-4.016-13.785-8.545-26.075-4.53-12.289-7.499-20.44-8.722-24.076-4.707-14.376-3.138-19.746 4.538-20.608V45.38h-39.764v2.254c5.93 1.215 11.16 7.966 15.521 20.088l6.107 15.758c6.71 17.025 14.591 40.494 17.223 48.497h13.216c4.255-12.325 21.327-61.508 23.614-66.508 2.464-5.696 5.256-10.01 8.377-12.994a15.54 15.54 0 0 1 5.378-3.722 15.64 15.64 0 0 1 6.446-1.19s9.582 0 9.582 9.182v58.074c0 9.684-4.707 14.2-9.591 14.895v2.254h38.018v-2.254c-5.026-.695-9.21-5.194-9.21-14.895"/></svg>
                 <span className="text-[12px] font-bold text-gray-400 dark:text-white/50 uppercase tracking-widest mt-1">Partner</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;