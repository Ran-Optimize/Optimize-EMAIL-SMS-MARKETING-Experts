import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-white/10 py-16 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-right" dir="rtl">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 bg-clip-text text-transparent mb-6 block">
            OPTIMIZE
          </Link>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md mb-8">
            אנחנו עוזרים לחנויות שופיפי לצמוח מעבר למחזור ה-60K באמצעות שיווק חכם, מבוסס דאטה ותוצאות.
          </p>
          <div className="flex gap-4 justify-end md:justify-start flex-row-reverse">
            <a href="https://www.youtube.com/@Optimize-Agency" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors cursor-pointer text-gray-900 dark:text-white" title="YouTube">
              <span className="font-bold">Yt</span>
            </a>
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer text-gray-900 dark:text-white">
              <span className="font-bold">In</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer text-gray-900 dark:text-white">
              <span className="font-bold">Ig</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer text-gray-900 dark:text-white">
                <span className="font-bold">Wa</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-6">ניווט מהיר</h4>
          <ul className="space-y-4 text-gray-600 dark:text-gray-400">
            <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">דף הבית</Link></li>
            <li><Link to="/emails" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">מיילים של לקוחות</Link></li>
            <li><Link to="/results" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">קייס סטאדי</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-6">צרו קשר</h4>
          <ul className="space-y-4 text-gray-600 dark:text-gray-400">
            <li>משרדי החברה: תל אביב</li>
            <li>contact@optimizeagency.co</li>
            <li>Ran - CEO & Founder</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-white/5 text-center text-gray-500 text-sm transition-colors duration-300">
        <p dir="ltr">.Optimize Agency. All rights reserved 2026 &copy;</p>
        <p className="mt-2">Built for high-performance Shopify stores.</p>
      </div>
    </footer>
  );
};

export default Footer;