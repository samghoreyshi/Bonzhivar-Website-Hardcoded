'use client';
import { useState, useEffect } from 'react';

const announcements = [
  {
    id: 1,
    title: 'ورکشاپ رایگان: "بایو دیزاین – تلفیق طبیعت و نوآوری در طراحی"',
    date: '۱۴۰۳/۰۹/۱۱',
    eventDate: 'دوشنبه ۱۹ آذر ۱۴۰۳ - ساعت ۱٤:۰۰',
    description: 'آشنایی با بایو دیزاین، تلفیق طبیعت و نوآوری در طراحی',
    tag: 'ورکشاپ',
    image: '/announce/2.webp',
    courseDetails: {
      duration: '۳ ساعت',
      sections: [
        {
          title: 'بخش اول: مقدمه و آشنایی با بایو دیزاین',
          duration: '۳۰ دقیقه',
          topics: [
            'تعریف بایو دیزاین',
            'چرا بایو دیزاین؟',
            'تاریخچه مختصر بایو دیزاین'
          ]
        },
        {
          title: 'بخش دوم: اصول و فرآیند بایو دیزاین',
          duration: '۶۰ دقیقه',
          topics: [
            'اصول کلیدی بایو دیزاین',
            'فرآیند طراحی در بایو دیزاین',
            'کاربردها و مثال‌ها'
          ]
        },
        {
          title: 'بخش سوم: کار عملی',
          duration: '۶۰ دقیقه',
          topics: [
            'نمایش و تحلیل پروژه‌های واقعی',
            'بررسی فرآیند طراحی'
          ]
        },
        {
          title: 'بخش چهارم: نتیجه‌گیری',
          duration: '۳۰ دقیقه',
          topics: [
            'آینده بایو دیزاین',
            'پرسش و پاسخ'
          ]
        }
      ],
      hasVideo: true
    }
  },
  {
    id: 2,
    title: 'ورکشاپ رایگان: "مبانی معماری داخلی، دکوراسیون داخلی و طراحی داخلی"',
    date: '۱۴۰۳/۰۹/۱۱',
    eventDate: 'دوشنبه ۱۲ آذر ۱۴۰۳ - ساعت ۱٤:۰۰',
    description: 'آشنایی با مبانی معماری داخلی، دکوراسیون داخلی و طراحی داخلی',
    tag: 'ورکشاپ',
    image: '/announce/1.webp',
    courseDetails: {
      duration: '۳ ساعت',
      sections: [
        {
          title: 'بخش اول: معماری داخلی',
          duration: '۶۰ دقیقه',
          topics: [
            'تعریف معماری داخلی',
            'نحوه تعامل با ساختار ساختمان',
            'توجه به عملکرد فضا و نیاز کاربران',
            'اصول اصلی معماری داخلی',
            'تناسبات و مقیاس‌ها',
            'نور و روشنایی (طبیعی و مصنوعی)',
            'مصالح و مواد (ویژگی‌ها و کاربردها)'
          ]
        },
        {
          title: 'بخش دوم: دکوراسیون داخلی',
          duration: '۴۵ دقیقه',
          topics: [
            'تعریف دکوراسیون داخلی',
            'تمرکز بر جزئیات تزئینی و سبک فضا دهی',
            'اصول کلیدی در دکوراسیون داخلی',
            'رنگ شناسی: انتخاب رنگ مناسب و ترکیب رنگ‌ها',
            'مبلمان و چیدمان: قواعد انتخاب و هماهنگی با فضا',
            'اکسسوری‌ها و جزئیات تکمیلی'
          ]
        },
        {
          title: 'بخش سوم: طراحی داخلی',
          duration: '۴۵ دقیقه',
          topics: [
            'تعریف طراحی داخلی',
            'رابطه بین طراحی داخلی و معماری داخلی',
            'فرآیند طراحی (از ایده تا اجرا)',
            'کاربری فضا: طراحی برای کاربردهای مختلف (مسکونی، تجاری و اداری)',
            'توجه به تجربه کاربر در فضا'
          ]
        },
        {
          title: 'بخش چهارم: بخش‌های الهام بخش',
          duration: '۳۰ دقیقه',
          topics: [
            'نمایش نمونه‌های موفق',
            'نمایش تصاویر یا ویدئوهای پروژه',
            'پرسش و پاسخ و نتیجه‌گیری'
          ]
        }
      ],
      hasVideo: true
    }
  }
];

export default function Announcements() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-4">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Featured Announcement */}
        <div className="lg:col-span-2 relative group">
          <div className="relative h-full bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl overflow-hidden border border-accent/10">
            {/* Image with gradient overlay */}
            <div className="absolute inset-0">
              <img
                key={activeIndex}
                src={announcements[activeIndex].image}
                alt={announcements[activeIndex].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 animate-fadeIn"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-black/80 pointer-events-none"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-end p-6 text-right">
              <div className="space-y-4">
                <div className="flex items-center justify-end gap-3">
                  <span key={activeIndex} className="text-white/80 text-sm animate-fadeIn">
                    {announcements[activeIndex].date}
                  </span>
                  <span key={activeIndex + "-tag"} className="bg-accent/20 backdrop-blur-xl text-white px-4 py-1.5 rounded-full text-sm font-medium border border-white/10 animate-fadeIn">
                    {announcements[activeIndex].tag}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h2 key={activeIndex + "-title"} className="text-2xl font-bold text-white font-IranYekan leading-tight group-hover:text-accent transition-colors duration-300 animate-fadeIn">
                    {announcements[activeIndex].title}
                  </h2>
                  <p key={activeIndex + "-desc"} className="text-white/90 font-IranYekan text-sm line-clamp-2 animate-fadeIn">
                    {announcements[activeIndex].description}
                  </p>
                  <p key={activeIndex + "-event"} className="text-accent font-IranYekan text-sm animate-fadeIn">
                    {announcements[activeIndex].eventDate}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    onClick={() => setSelectedAnnouncement(announcements[activeIndex])}
                    className={'bg-accent/20 backdrop-blur-xl text-white px-6 py-2 rounded-full text-sm font-medium border border-white/10 hover:bg-accent/30 transition-all duration-300 hover:scale-105'}
                  >
                    مشاهده جزئیات
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
              <div
                className="h-full bg-accent/50 transition-all duration-300 ease-out"
                style={{ width: `${((activeIndex + 1) / announcements.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex flex-col gap-4">
          {announcements.map((announcement, index) => (
            <button
              key={announcement.id}
              onClick={() => setActiveIndex(index)}
              className={`group p-4 rounded-2xl transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-accent/20 ring-2 ring-accent ring-offset-4 ring-offset-background'
                  : 'bg-accent/5 hover:bg-accent/10 hover:ring-1 hover:ring-accent/50 hover:ring-offset-2 hover:ring-offset-background'
              }`}
            >
              <div className="flex flex-col space-y-3">
                <div className="flex justify-between items-center">
                  <span className="bg-accent/20 backdrop-blur-xl text-accent px-3 py-1 rounded-full text-xs font-medium border border-accent/10">
                    {announcement.tag}
                  </span>
                  <span className="text-accent/60 text-xs">
                    {announcement.date}
                  </span>
                </div>
                <h3 className="font-IranYekan text-accent font-semibold line-clamp-2 text-right group-hover:text-accent/80 transition-colors duration-300">
                  {announcement.title}
                </h3>
                <p className="text-accent text-xs font-IranYekan text-right">
                  {announcement.eventDate}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedAnnouncement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedAnnouncement(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-4xl bg-background rounded-3xl overflow-hidden transform transition-all max-h-[90vh] overflow-y-auto">
            {/* Image Section */}
            <div className="relative h-48 lg:h-64">
              <img 
                src={selectedAnnouncement.image}
                alt={selectedAnnouncement.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
            </div>

            {/* Content Section */}
            <div className="relative -mt-20">
              {/* Header */}
              <div className="px-8 space-y-6">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setSelectedAnnouncement(null)}
                    className="text-accentLight hover:text-accent transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="flex items-center gap-3">
                    <span className="text-accentLight text-sm backdrop-blur-xl px-4 py-1.5 rounded-full bg-accent/5 border border-accent/10">
                      {selectedAnnouncement.date}
                    </span>
                    <span className="text-accentLight text-accent px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-xl border border-accent/20">
                      {selectedAnnouncement.tag}
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-accent font-IranYekan leading-tight text-right">
                  {selectedAnnouncement.title}
                </h2>
              </div>

              {/* Course Content */}
              {selectedAnnouncement.courseDetails && (
                <div className="mt-8 px-8 pb-8">
                  <div className="space-y-8">
                    {/* Time Info */}
                    <div className="flex items-center justify-end gap-2 text-accent/60 text-sm">
                      <span>مدت زمان: {selectedAnnouncement.courseDetails.duration}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>

                    {/* Course Sections */}
                    <div className="grid gap-6">
                      {selectedAnnouncement.courseDetails.sections.slice(0, -2).map((section, index) => (
                        <div key={index} className="bg-accent/5 rounded-2xl p-6 space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-accent/40 text-sm">{section.duration}</span>
                            <h3 className="text-lg font-bold text-accent text-right">{section.title}</h3>
                          </div>
                          <div className="pr-6 space-y-3 text-right">
                            <div className="relative">
                              <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-accent/20 to-transparent rounded-full -mr-6"></div>
                              <ul className="space-y-2 text-accent/70">
                                {section.topics.map((topic, topicIndex) => (
                                  <li key={topicIndex}>{topic}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Last Two Sections in Two Columns */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {selectedAnnouncement.courseDetails.sections.slice(-2).map((section, index) => (
                          <div key={index} className="bg-accent/5 rounded-2xl p-6 space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-accent/40 text-sm">{section.duration}</span>
                              <h3 className="text-lg font-bold text-accent text-right">{section.title}</h3>
                            </div>
                            <div className="pr-6 space-y-3 text-right">
                              <div className="relative">
                                <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-accent/20 to-transparent rounded-full -mr-6"></div>
                                <ul className="space-y-2 text-accent/70 text-right">
                                  {section.topics.map((topic, topicIndex) => (
                                    <li key={topicIndex}>{topic}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer Note */}
                    {selectedAnnouncement.courseDetails.hasVideo && (
                      <div className="flex items-center justify-end gap-2 text-accent/60 text-sm mt-6">
                        <span>همراه با نمایش تصاویر و ویدئوهای جذاب</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
