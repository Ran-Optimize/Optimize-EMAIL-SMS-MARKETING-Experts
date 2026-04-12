
import React from 'react';
import { TrendingUp, BarChart, ShoppingBag, Target } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const Results: React.FC = () => {
  const caseStudies = [
    {
      title: "שיפור מחזור חודשי ב-105%!",
      revenue: "₪51,000",
      increase: "+105.7%",
      sales: "324",
      desc: "באמצעות בנייה מחדש של אוטומציות הריטנשן, הצלחנו להכפיל את המחזור החודשי של החנות בתוך 30 יום בלבד.",
      stats: [
        { label: "מכירות מאוטומציות", value: "324" },
        { label: "שיעור צמיחה", value: "105.72%" }
      ]
    },
    {
      title: "שיפור מחזור חודשי ב-36%!",
      revenue: "₪64,500",
      increase: "+36.5%",
      sales: "386",
      desc: "386 מכירות חדשות שהגיעו ישירות דרך פאנל האימייל וה-SMS שלנו עבור חנות נישה בתחום הלייף סטייל.",
      stats: [
        { label: "מכירות מאוטומציות", value: "386" },
        { label: "סה\"כ הכנסות", value: "₪64.5K" }
      ]
    },
    {
      title: "שיפור מחזור חודשי ב-24%!",
      revenue: "₪71,700",
      increase: "+24.9%",
      sales: "460",
      desc: "אופטימיזציה של פאנל 'עגלה נטושה' וסדרות ברוכים הבאים יצרו תוספת משמעותית למחזור הקיים.",
      stats: [
        { label: "סה\"כ מכירות", value: "460" },
        { label: "הכנסה ממדיה", value: "₪71.7K" }
      ]
    },
    {
      title: "שיפור מחזור חודשי ב-7%!",
      revenue: "₪56,500",
      increase: "+7.1%",
      sales: "348",
      desc: "גם בחנויות עם מחזורים גבוהים ויציבים, הצלחנו למצוא עוד 7% של 'כסף על הרצפה' באמצעות דיוור חכם.",
      stats: [
        { label: "מכירות מאוטומציות", value: "348" },
        { label: "סה\"כ הכנסות", value: "₪56.5K" }
      ]
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

      {/* Case Studies Grid */}
      <section className="max-w-6xl mx-auto px-4 mt-16 space-y-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-blue-600 dark:text-blue-500 mb-4 tracking-tighter uppercase">Optimize SMS + EMAIL Agency</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">נתונים של עסקים ששיפרנו להם את מחזורי המכירה בצורה משמעותית</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
                <div key={idx} className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-[3rem] p-8 md:p-12 hover:border-blue-500/50 transition-all group relative overflow-hidden shadow-xl dark:shadow-none">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex justify-between items-start mb-8">
                        <div className="bg-blue-50 dark:bg-blue-600/20 p-4 rounded-2xl transition-colors">
                            <BarChart className="text-blue-600 dark:text-blue-500 h-8 w-8" />
                        </div>
                        <div className="text-left">
                            <p className="text-4xl font-black text-gray-900 dark:text-white">{study.increase}</p>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Growth rate</p>
                        </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900 dark:text-white">{study.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-medium">{study.desc}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                        {study.stats.map((s, i) => (
                            <div key={i} className="bg-gray-50 dark:bg-white/5 p-4 rounded-2xl border border-gray-200 dark:border-white/5 transition-colors">
                                <p className="text-gray-500 text-xs font-bold mb-1 uppercase tracking-tighter">{s.label}</p>
                                <p className="text-2xl font-black text-gray-900 dark:text-white">{s.value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/5 flex items-center justify-between transition-colors">
                         <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-bold">
                            <ShoppingBag className="h-5 w-5" />
                            <span>{study.sales} מכירות חדשות</span>
                         </div>
                         <div className="text-gray-400 dark:text-white/40 font-bold text-sm italic">Verified Result</div>
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
