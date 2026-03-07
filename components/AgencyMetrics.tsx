import React from 'react';
import { Target, Users, TrendingDown, Infinity } from 'lucide-react';

const AgencyMetrics: React.FC = () => {
  const metrics = [
    {
      label: 'ROAS ממוצע',
      value: '14.2x',
      description: 'החזר על הוצאות הדיוור שלנו לאחר עלויות שירות ותוכנה',
      icon: Target,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      label: 'שיעור שימור לקוחות',
      value: '98%',
      description: 'לקוחות שנשארים איתנו חודש אחרי חודש בגלל התוצאות',
      icon: Users,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      label: 'אופטימיזציה של CAC',
      value: '-32%',
      description: 'הפחתה בעלות רכישת לקוח (Blended) בזכות עליה ב-Retention',
      icon: TrendingDown,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      label: 'גידול ב-LTV',
      value: '+45%',
      description: 'עליה בערך חיי הלקוח בתוך 12 חודשי פעילות',
      icon: Infinity,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    }
  ];

  return (
    <section className="py-24 px-4 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">המספרים שמאחורי ההצלחה</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            אנחנו מודדים את עצמנו לפי השורה התחתונה שלכם. אלו המדדים הממוצעים של Optimize עבור חנויות שופיפי פעילות.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="relative p-10 bg-white/5 border border-white/10 rounded-[3rem] group hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-all"></div>
              
              <div className={`w-16 h-16 ${metric.bgColor} rounded-2xl flex items-center justify-center mb-8`}>
                <metric.icon className={`h-8 w-8 ${metric.color}`} />
              </div>
              
              <div className="space-y-4">
                <p className="text-5xl font-black text-white tracking-tighter">{metric.value}</p>
                <h3 className="text-xl font-bold text-gray-200">{metric.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencyMetrics;