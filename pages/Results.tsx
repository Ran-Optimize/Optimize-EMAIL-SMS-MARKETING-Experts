
import React from 'react';
import { TrendingUp, BarChart, ShoppingBag, Target, CheckCircle2 } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const Results: React.FC = () => {
  const pieChartStudies = [
    {
      image: "/21-percent.png",
      title: "השפעה על סך המכירות",
      desc: "פילוח מקורות ההכנסה וההשפעה הישירה של מערך האימייל וה-SMS על המחזור הכולל."
    },
    {
      image: "/22-percent.png",
      title: "השפעה על סך המכירות",
      desc: "פילוח מקורות ההכנסה וההשפעה הישירה של מערך האימייל וה-SMS על המחזור הכולל."
    },
    {
      image: "/23-percent.png",
      title: "השפעה על סך המכירות",
      desc: "פילוח מקורות ההכנסה וההשפעה הישירה של מערך האימייל וה-SMS על המחזור הכולל."
    }
  ];

  const horizontalStudies = [
    {
      image: "/51.png",
      title: "גידול במחזור המכירות",
      desc: "תוצאות מוכחות של גידול בהכנסות כתוצאה מאופטימיזציה של קמפיינים ואוטומציות."
    },
    {
      image: "/56.png",
      title: "גידול במחזור המכירות",
      desc: "תוצאות מוכחות של גידול בהכנסות כתוצאה מאופטימיזציה של קמפיינים ואוטומציות."
    },
    {
      image: "/64k.png",
      title: "גידול במחזור המכירות",
      desc: "תוצאות מוכחות של גידול בהכנסות כתוצאה מאופטימיזציה של קמפיינים ואוטומציות."
    },
    {
      image: "/71k.png",
      title: "גידול במחזור המכירות",
      desc: "תוצאות מוכחות של גידול בהכנסות כתוצאה מאופטימיזציה של קמפיינים ואוטומציות."
    }
  ];

  return (
    <div className="pb-24 text-right bg-white dark:bg-black transition-colors duration-300" dir="rtl">
      {/* Results Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/50 dark:from-blue-900/40 via-transparent to-transparent opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <div className="bg-purple-100 dark:bg-purple-600/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-purple-200 dark:border-white/20 transition-colors">
            <TrendingUp className="h-10 w-10 text-purple-600 dark:text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 dark:text-white">התוצאות מדברות</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            אנחנו לא מוכרים הבטחות, אנחנו מוכרים נתונים. הנה הצצה לחלק מהחשבונות שניהלנו בחודשים האחרונים.
          </p>
        </div>
      </section>

      {/* Top Section: Pie Charts */}
      <section className="max-w-7xl mx-auto px-4 mt-16 space-y-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-blue-600 dark:text-blue-500 mb-4 tracking-tighter uppercase">השפעה כוללת ומקורות מכירה</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">פילוח מקורות ההכנסה וההשפעה הישירה של המערך שלנו על המחזור הכולל</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pieChartStudies.map((study, idx) => (
                <div key={idx} className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-[3rem] p-6 md:p-8 hover:border-blue-500/50 transition-all group relative overflow-hidden shadow-xl dark:shadow-none flex flex-col">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="flex-grow flex items-center justify-center bg-gray-50 dark:bg-black/50 rounded-2xl overflow-hidden mb-6 border border-gray-100 dark:border-white/5 p-4">
                        <img src={study.image} alt="Case Study Data" className="w-full h-auto object-contain rounded-xl shadow-sm" referrerPolicy="no-referrer" />
                    </div>

                    <div className="mt-auto">
                        <h3 className="text-2xl font-black mb-2 text-gray-900 dark:text-white">{study.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-medium">{study.desc}</p>
                        
                        <div className="pt-6 border-t border-gray-200 dark:border-white/5 flex items-center justify-between transition-colors">
                             <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-bold">
                                <CheckCircle2 className="h-5 w-5" />
                                <span>נתונים מאומתים</span>
                             </div>
                             <div className="text-gray-400 dark:text-white/40 font-bold text-sm italic">Verified Result</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Bottom Section: Horizontal Charts */}
      <section className="max-w-6xl mx-auto px-4 mt-24 space-y-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-blue-600 dark:text-blue-500 mb-4 tracking-tighter uppercase">צמיחה במחזורים ואחוזי השפעה</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">תוצאות מוכחות של גידול בהכנסות כתוצאה מאופטימיזציה של קמפיינים ואוטומציות</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {horizontalStudies.map((study, idx) => (
                <div key={idx} className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-[3rem] p-6 md:p-8 hover:border-blue-500/50 transition-all group relative overflow-hidden shadow-xl dark:shadow-none flex flex-col">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="flex-grow flex items-center justify-center bg-gray-50 dark:bg-black/50 rounded-2xl overflow-hidden mb-6 border border-gray-100 dark:border-white/5 p-4">
                        <img src={study.image} alt="Case Study Data" className="w-full h-auto object-contain rounded-xl shadow-sm" referrerPolicy="no-referrer" />
                    </div>

                    <div className="mt-auto">
                        <h3 className="text-2xl font-black mb-2 text-gray-900 dark:text-white">{study.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-medium">{study.desc}</p>
                        
                        <div className="pt-6 border-t border-gray-200 dark:border-white/5 flex items-center justify-between transition-colors">
                             <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-bold">
                                <CheckCircle2 className="h-5 w-5" />
                                <span>נתונים מאומתים</span>
                             </div>
                             <div className="text-gray-400 dark:text-white/40 font-bold text-sm italic">Verified Result</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Stats Summary */}
      <section className="mt-32 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 mb-32">
        {[
            { label: 'לקוחות פעילים', val: '25+' },
            { label: 'מיליוני ש"ח שיוצרו', val: '₪10M+' },
            { label: 'מיילים שנשלחו', val: '2.4M' },
            { label: 'אחוז הצלחה', val: '98%' }
        ].map((stat, i) => (
            <div key={i} className="text-center p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 transition-colors shadow-sm dark:shadow-none">
                <p className="text-4xl font-black text-gray-900 dark:text-white mb-2">{stat.val}</p>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
        ))}
      </section>

      <LeadForm />
    </div>
  );
};

export default Results;
