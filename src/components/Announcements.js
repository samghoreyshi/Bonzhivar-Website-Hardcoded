"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

const Announcements = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [bookmarked, setBookmarked] = useState({});

  const announcements = [
    {
      id: 1,
      title: "مدیریت پروژه ویژه معماران داخلی",
      date: "۱۷ دی ۱۴۰۲",
      category: "آموزشی",
      description: "مدیریت پروژه ویژه معماران داخلی یک دوره آموزشی است که بر اهمیت و اصول مدیریت پروژه در زمینه معماری داخلی تمرکز دارد. در این دوره، معماران داخلی با مفاهیم کلیدی مدیریت زمان، منابع، بودجه و هماهنگی تیم‌های کاری آشنا می‌شوند تا بتوانند پروژه‌های معماری داخلی را از شروع تا پایان به‌طور مؤثر و کارآمد هدایت کنند. این دوره به معماران کمک می‌کند تا مهارت‌های لازم برای برنامه‌ریزی، اجرای پروژه‌ها و نظارت بر کیفیت را به دست آورده و به یک مدیر پروژه حرفه‌ای تبدیل شوند."
,
      imagePath: "/events/arch-manage.webp",
      status: "Upcoming",
    },
    {
      id: 2,
      title: "Serious Plays | بازی‌های جدی",
      date: "۱۷ دی ۱۴۰۲",
      category: "کارگاه",
      description: "بازی‌های جدی یا Serious Plays نوعی از بازی‌ها هستند که هدف اصلی آن‌ها سرگرمی نیست، بلکه استفاده از بازی‌ها به منظور حل مشکلات واقعی، آموزش مفاهیم پیچیده و ارتقاء مهارت‌های مختلف است. در آموزش معماری داخلی، بازی‌های جدی می‌توانند ابزارهای مفیدی برای یادگیری عمیق‌تر مفاهیم مانند طراحی فضا، اصول زیبایی‌شناسی و چالش‌های عملی باشند. این بازی‌ها به دانشجویان این امکان را می‌دهند تا در یک محیط شبیه‌سازی‌شده، به طور فعال با مسائل روبه‌رو شوند و راه‌حل‌های خلاقانه پیدا کنند. تاریخ برگزاری: 1، 8 و 15 بهمن ماه، ساعت 10 الی 13."
,
      imagePath: "/events/Serious-Plays.webp",
      status: "Upcoming",
    },
    {
      id: 3,
      title: "Gamification | بازی‌وار‌سازی در آموزش معماری داخلی",
      date: "۱۷ دی ۱۴۰۲",
      category: "آموزشی",
      description: "بازی‌وار‌سازی یا Gamification یک رویکرد نوین در آموزش است که با استفاده از اصول و مکانیزم‌های بازی‌ها، تجربه یادگیری را جذاب‌تر و تعاملی‌تر می‌کند. در آموزش معماری داخلی، این روش می‌تواند به دانشجویان کمک کند تا مفاهیم پیچیده طراحی فضا، رنگ‌ها، و اصول زیبایی‌شناسی را از طریق بازی‌ها و چالش‌های عملی یاد بگیرند. با استفاده از بازی‌وار‌سازی، دانش‌آموزان می‌توانند در یک محیط پویا و رقابتی مهارت‌های خود را تقویت کرده و یادگیری را به یک تجربه سرگرم‌کننده و انگیزشی تبدیل کنند. تاریخ برگزاری: 18، 19 و 25 بهمن ماه، ساعت 10 الی 13."
,
      imagePath: "/events/gamifications.webp",
      status: "Upcoming",
    },
  ];

  const toggleBookmark = (id) => {
    setBookmarked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[url('/patterns/grid.svg')] bg-repeat opacity-10"></div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative text-center"
          >
            <div className="relative inline-block">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent bottom-0 left-0"
              />
              <h2 className="text-4xl md:text-5xl text-accent font-IranYekan direction-rtl font-[800] py-3">
                آخرین رویدادها
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Announcements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {announcements.map((announcement) => (
            <motion.div
              key={announcement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setSelectedAnnouncement(announcement)}
              className="group cursor-pointer shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col"
            >
              <img src={announcement.imagePath} alt={announcement.title} className="w-full h-48 object-cover" />
              <div className="p-4 bg-[#f9f7f1] flex-grow flex flex-col">
                {/* Flex container for Category and Status Tags */}
                <div className="flex items-center space-x-2 mb-2">
                  {/* Category Badge */}
                  <span className="inline-block px-2 py-1 text-xs font-IranYekan text-accent/90 bg-accent/5 rounded-full">
                    {announcement.category}
                  </span>

                  {/* Status Tag */}
                  <span className={`inline-block px-2 py-1 text-xs font-IranYekan text-white rounded-full ${announcement.status === 'Upcoming' ? 'bg-accent' : announcement.status === 'Ongoing' ? 'bg-accent' : 'bg-accent'}`}>
                    {announcement.status === 'Upcoming' ? 'به زودی' : announcement.status === 'Ongoing' ? 'در حال حاضر' : 'تکمیل شده'}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-IranYekan text-accent font-[600] mb-1 direction-rtl">
                  {announcement.title}
                </h3>

                {/* Date */}
                <p className="text-sm text-accentDark/70 font-IranYekan mb-2 direction-rtl">
                  {announcement.date}
                </p>

                {/* Description */}
                <p className="text-accentDark font-IranYekan text-right leading-relaxed line-clamp-3 direction-rtl mb-auto">
                  {announcement.description}
                </p>

                {/* Read More Button */}
                <div className="mt-4">
                  <button className="w-full py-2 bg-accent text-white rounded-lg hover:bg-accent/80 transition duration-200">
                    بیشتر بخوانید
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedAnnouncement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAnnouncement(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-background rounded-2xl overflow-hidden max-w-lg w-full h-[80vh] flex flex-col"
            >
              {/* Modal Content */}
              <div className="p-6 flex-grow overflow-y-auto">
                <img src={selectedAnnouncement.imagePath} alt={selectedAnnouncement.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
                
                <div className="flex justify-between items-start mb-4">
                  <button
                    onClick={() => setSelectedAnnouncement(null)}
                    className="text-accentDark hover:text-accent transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-IranYekan text-accent/90 bg-accent/5">
                    {selectedAnnouncement.category}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-IranYekan text-accent font-[600] direction-rtl">
                    {selectedAnnouncement.title}
                  </h3>
                  <p className="text-sm text-accentDark/70 font-IranYekan direction-rtl">
                    {selectedAnnouncement.date}
                  </p>
                  <p className="text-accentDark font-IranYekan text-right leading-relaxed direction-rtl">
                    {selectedAnnouncement.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center p-4 border-t">
                <Link href="/contact">
                  <button className="px-4 py-2 sm:px-6 sm:py-2 bg-accent/10 hover:bg-accent/15 text-accent rounded-lg font-IranYekan transition-colors duration-200 text-sm sm:text-base">
                    تماس با ما
                  </button>
                </Link>
                <button
                  onClick={() => {
                    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(selectedAnnouncement.title + ' - مجتمع مهارت آموزی بن‌ژیوار')}`;
                    window.open(telegramUrl, '_blank');
                  }}
                  className="px-4 py-2 sm:px-6 sm:py-2 bg-accent/10 hover:bg-accent/15 text-accent rounded-lg font-IranYekan transition-colors duration-200 flex items-center text-sm sm:text-base"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2 2 4-4 2 2 4-4 2 2-6 6-2-2-4 4-2-2z" />
                  </svg>
                  اشتراک گذاری در تلگرام
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Announcements;
