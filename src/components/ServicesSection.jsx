"use client";
import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative inline-block"
    >
      <h2 className="text-4xl md:text-5xl font-[800] text-accent mb-4 font-IranYekan">{title}</h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent bottom-0 left-0"
      />
    </motion.div>
    <p className="text-accentDark/80 mt-4 text-lg font-IranYekan max-w-3xl mx-auto">{subtitle}</p>
  </div>
);

const services = [
  {
    title: "کافه و رستوران",
    description: "اگر علاقه‌مند به دنیای پرجنب‌وجوش کافه‌ها و رستوران‌ها هستید و رویای راه‌اندازی کسب‌وکار خود را دارید، دوره‌های تخصصی کافه و رستوران بن‌ژیوار دقیقا همان چیزی است که نیاز دارید!",
    imagePath: "/Scards/cafe.webp",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-6 w-6" fill="currentColor">
        <path d="M96 64c0-17.7 14.3-32 32-32l320 0 64 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L96 64zM480 224l32 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0 0 128zM32 416l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
      </svg>
    ),
  },
  {
    title: "کسب و کار",
    description: "در دوره‌های کسب و کار بن‌ژیوار، شما با اصول و مفاهیم کلیدی راه‌اندازی و مدیریت یک کسب و کار موفق آشنا می‌شوید و مهارت‌های لازم برای موفقیت در دنیای تجارت را کسب می‌کنید.",
    imagePath: "/Scards/business.webp",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
        <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "توسعه فردی",
    description: "در مجتمع آموزشی بن‌ژیوار، ما به اهمیت توسعه فردی به عنوان یکی از کلیدی‌ترین عوامل موفقیت در زندگی شخصی و حرفه‌ای باور داریم. این مفهوم شامل بهبود مداوم مهارت‌ها، تقویت توانایی‌های فردی و افزایش اعتماد به نفس است.",
    imagePath: "/Scards/self.webp",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "معماری داخلی",
    description: "در دوره‌های معماری داخلی مجتمع آموزشی بن‌ژیوار، مهارت‌های اساسی و پیشرفته برای طراحی و اجرای پروژه‌های معماری داخلی و خارجی به شما آموزش داده می‌شود.",
    imagePath: "/Scards/arch.webp",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
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

      <div className="container mx-auto px-4 relative direction-rtl">
        <SectionTitle
          title="مسیر خودتو پیدا کن!"
          subtitle="آیا به دنبال شغلی هستی که با عشق و علاقه آن را دنبال کنی؟ در مجتمع آموزشی بن‌ژیوار، ما به شما کمک می‌کنیم تا مسیر خود را در زمینه‌های مختلف مانند معماری داخلی، توسعه فردی، کسب‌وکار و کافه و رستوران پیدا کنید. با آموزش‌های تخصصی و راهنمایی‌های حرفه‌ای، آینده‌ای روشن و شغلی پرانرژی را برای خود بسازید!"
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-3xl bg-accent/5 border border-accent/10 backdrop-blur-sm">
                <div className="flex flex-row-reverse h-full">
                  {/* Image Section */}
                  <div className="w-1/3 relative overflow-hidden">
                    <img
                      src={service.imagePath}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="w-2/3 p-6">
                    {/* Top Section */}
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-[600] text-accent font-IranYekan">
                        {service.title}
                      </h3>
                      <div className="p-3 bg-accent/10 rounded-xl backdrop-blur-sm border border-accent/20 text-accent">
                        {service.icon}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                      <p className="text-accentDark text-right font-IranYekan leading-relaxed">
                        {service.description}
                      </p>

                      {/* Read More Button */}
                      <div className="flex justify-end pt-4">
                        <button className="text-accent text-sm font-IranYekan bg-accent/10 px-6 py-2.5 rounded-xl backdrop-blur-sm border border-accent/20 transition-all duration-300 hover:bg-accent/20">
                          مشاهده دوره‌ها
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
