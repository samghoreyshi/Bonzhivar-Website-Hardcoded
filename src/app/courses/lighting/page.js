import Link  from "next/link";
import Image from "next/image";
import React from "react";
import Accordion from "../components/accordion";
import CourseCard from "../components/coursecard";
import CTA from "../components/cta";
import SlidingCard from "../components/slideup";
import LightBanner from "/public/Lighting/banner.webp"

const Lighting = () => {


  return (
    <>
      <section className="w-full h-full bg-background sm:px-20 sm:py-5">
        <div className="w-full h-[200px] sm:h-[400px] sm:rounded-3xl overflow-hidden">
          <Image src={LightBanner} placeholder="blur" className="w-full h-full object-cover object-bottom" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-stretch w-full  border-accentDark bg-background py-4">
          <div className="flex h-full flex-col gap-10 items-end w-full p-5 sm:p-10 sm:border rounded-3xl border-accent/60 sm:shadow-md">
            <div className="w-full flex justify-between items-center font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              <div className="rotate-45">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="#4F9A85"
                  height={50}
                  width={50}
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </div>
              <h1 className="font-IranYekan font-extrabold ">
                دوره جامع نورپردازی
              </h1>
            </div>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl leading-relaxed">
              این دوره جامع، به شما اصول و تکنیک‌های کاربردی نورپردازی را
              به‌صورت کامل و از پایه تا پیشرفته آموزش می‌دهد. در طول دوره، با
              انواع مختلف نور و نحوه استفاده بهینه از آن‌ها آشنا می‌شوید. اگر به
              دنبال یادگیری نورپردازی صحیح برای عکاسی، طراحی صحنه، یا طراحی
              داخلی هستید و می‌خواهید به یک متخصص در این زمینه تبدیل شوید، این
              دوره دقیقاً برای شماست. آموزش‌های این دوره به شما کمک می‌کند تا
              درک عمیقی از اصول نورپردازی به دست آورید و بتوانید نور را به
              شیوه‌ای خلاقانه به کار ببرید.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <div className="w-full sm:w-1/2">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/Lighting/5.webp"
                  alt="آموزش عملی بازسازی ساختمان با استفاده از جدیدترین تکنیک‌ها و ابزارهای حرفه‌ای"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/Lighting/7.webp"
                  alt="تیم متخصص بازسازی در حال نوسازی و بهبود دیوارها و سقف یک ساختمان قدیمی"
                />
              </div>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent text-2xl sm:text-4xl">
              چرا نورپردازی مهم است؟
            </h2>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl">
              نورپردازی فضای داخلی یکی از عوامل کلیدی در طراحی و دکوراسیون است
              که تأثیر چشمگیری بر جو، عملکرد و حتی احساسات ساکنان آن فضا دارد.
              نورپردازی مناسب می‌تواند یک فضای ساده را به محیطی دلپذیر، گرم و
              کارآمد تبدیل کند. همچنین، نورپردازی درست به افزایش بهره‌وری و
              بهبود روحیه کمک می‌کند و می‌تواند فضاهای کوچک را بزرگ‌تر و فضاهای
              بی‌روح را زنده و جذاب نشان دهد. در طراحی داخلی، نورپردازی به سه
              نوع کلی تقسیم می‌شود: نورپردازی عمومی، نورپردازی متمرکز و
              نورپردازی دکوراتیو. هرکدام از این انواع نورپردازی برای ایجاد
              تأثیرات مختلف به کار می‌روند؛ نور عمومی فضا را روشن و قابل استفاده
              می‌کند، نور متمرکز به نواحی خاصی از فضا تمرکز می‌دهد، و نور
              دکوراتیو به زیبایی‌شناسی و جذابیت فضا کمک می‌کند. این ترکیب، به
              طراحان داخلی اجازه می‌دهد تا نور را به گونه‌ای تنظیم کنند که حس و
              حال خاصی ایجاد شود و هر بخش از فضا کارکرد بهتری داشته باشد.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/Lighting/8.webp"
                  alt="آموزش عملی بازسازی ساختمان با استفاده از جدیدترین تکنیک‌ها و ابزارهای حرفه‌ای"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              این دوره شامل چه مباحثی است؟
            </h2>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl">
              در دوره جامع نورپردازی، سرفصل‌های متنوع و کاربردی برای تسلط شما بر
              اصول و تکنیک‌های نورپردازی در نظر گرفته شده است. این مباحث از اصول
              پایه نورپردازی تا تکنیک‌های پیشرفته را شامل می‌شود:
            </p>
            <ul className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl list-disc pl-6 mr-10">
              <li className="mb-2">
                <h3>
                  آشنایی با انواع نورها: بررسی انواع نور طبیعی و مصنوعی و نحوه
                  تأثیرگذاری آن‌ها بر فضا فیزیک نور: درک اصول فیزیکی نور مانند
                  زاویه، شدت و کیفیت نور و تأثیر آن بر عکاسی و طراحی شناخت
                  تجهیزات نورپردازی: معرفی تجهیزات اصلی و کاربردی نورپردازی شامل
                  فلاش‌ها، رفلکتورها و نورهای LED
                </h3>
              </li>
              <li className="mb-2">
                <h3>
                  اصول نورپردازی داخلی: شناخت انواع نورپردازی داخلی شامل
                  نورپردازی عمومی، متمرکز و دکوراتیو نورپردازی برای فضاهای
                  مختلف: تکنیک‌های نورپردازی برای فضاهایی مانند اتاق نشیمن،
                  آشپزخانه و دفتر کار نحوه تنظیم نور و سایه: روش‌های بهینه‌سازی
                  نور و سایه در فضاهای مختلف به منظور ایجاد حس و جلوه‌ی دلخواه
                </h3>
              </li>
              <li className="mb-2">
                <h3>
                  استفاده از نورهای رنگی: آموزش استفاده از فیلترها و ژل‌های رنگی
                  برای ایجاد نورهای رنگی و جلوه‌های خاص در فضاها تکنیک‌های تنظیم
                  کنتراست: چگونگی استفاده از کنتراست نور برای تأثیرگذاری بیشتر
                  بر مخاطب درک رنگ در نورپردازی: اهمیت رنگ و دمای نور و نحوه
                  تنظیم آن‌ها برای رسیدن به جلوه‌های مختلف در تصاویر
                </h3>
              </li>
              <li className="mb-2">
                <h3>
                  پروژه‌های نهایی: انجام پروژه‌های عملی برای ارزیابی و تقویت
                  مهارت‌های نورپردازی بررسی و تحلیل پروژه‌ها: بازبینی و تحلیل
                  پروژه‌های عملی برای بهبود و درک عمیق‌تر از تکنیک‌های نورپردازی
                  تمرین و تجربه واقعی: تمرین با ابزارهای حرفه‌ای نورپردازی در
                  شرایط واقعی و با استفاده از تکنیک‌های آموخته‌شده
                </h3>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/Lighting/9.webp"
                  alt="آموزش عملی بازسازی ساختمان با استفاده از جدیدترین تکنیک‌ها و ابزارهای حرفه‌ای"
                  loading="lazy"
                />
              </div>
            </div>
            {/* <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              مزایای شرکت در دوره بازسازی ساختمان
            </h2>
            <ul className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl list-disc pl-6 mr-10">
              <li className="mb-2">
                <h3>
                  کسب مهارت‌های عملی و کاربردی: با تمرینات عملی و کارگاهی، شما
                  مهارت‌های لازم برای اجرای پروژه‌های واقعی را به دست خواهید
                  آورد.
                </h3>
              </li>
              <li className="mb-2">
                <h3>
                  دریافت گواهینامه معتبر: در پایان دوره، گواهینامه‌ای به شما
                  اعطا می‌شود که نشان‌دهنده تخصص شما در بازسازی ساختمان است.
                </h3>
              </li>
              <li className="mb-2">
                <h3>
                  آموزش توسط اساتید حرفه‌ای: دوره‌های ما توسط کارشناسانی با
                  تجربه چندین ساله در صنعت ساخت و ساز و بازسازی ارائه می‌شود.
                </h3>
              </li>
              <li className="mb-2">
                <h3>
                  ارتباط با کارآفرینان و شرکت‌های بازسازی: با شرکت در این دوره،
                  به شبکه‌ای از حرفه‌ای‌های صنعت بازسازی متصل می‌شوید که
                  می‌تواند فرصت‌های شغلی جدید برای شما به همراه داشته باشد.
                </h3>
              </li>
            </ul> */}
            <CTA />
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              سر فصل های دوره
            </h2>
            <div className="w-full">
              <Accordion title=" مبانی و اصول نورپردازی">
                <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl">
                  این سرفصل به مفاهیم پایه‌ای نورپردازی می‌پردازد و به شما کمک
                  می‌کند اصول اولیه‌ای که هر طراح یا عکاس باید بداند را درک
                  کنید. در این بخش، با انواع مختلف نور و ویژگی‌های آن‌ها،
                  تجهیزات اساسی نورپردازی و نحوه بهینه‌سازی نور برای کاربردهای
                  مختلف آشنا خواهید شد. این مباحث به شما درک کاملی از چگونگی کار
                  با نور طبیعی و مصنوعی، تنظیم شدت و زاویه نور، و تأثیرگذاری نور
                  بر فضاها و تصاویر می‌دهند.
                </p>
                <ul className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl list-disc pl-6 mr-10 mt-5">
                  <li>
                    <h3>
                      آشنایی با انواع نور و کاربردهای آن‌ها نور طبیعی (نور
                      خورشید) و چگونگی استفاده از آن در ساعات مختلف روز نور
                      مصنوعی (نورهای LED، فلاش، لامپ‌های فلورسنت و تنگستن) و
                      مزایای هر کدام تفاوت‌ها و کاربردهای نور سخت و نور نرم در
                      عکاسی و طراحی داخلی
                    </h3>
                  </li>
                  <li>
                    <h3>
                      اصول فیزیک نور شدت نور و تأثیر آن بر روشنایی و تاریکی
                      تصویر زاویه نور و نحوه استفاده از آن برای ایجاد سایه‌ها و
                      جلوه‌های دراماتیک اصول انکسار و انعکاس نور و کاربردهای
                      آن‌ها در نورپردازی شناخت مفاهیم نور مستقیم و غیرمستقیم و
                      چگونگی کنترل آن‌ها
                    </h3>
                  </li>
                  <li>
                    <h3>
                      شناخت تجهیزات نورپردازی معرفی ابزارهای نورپردازی مانند
                      فلاش‌ها، رفلکتورها، دیفیوزرها، و نورهای LED نحوه انتخاب و
                      استفاده از تجهیزات نورپردازی برای دستیابی به بهترین نتیجه
                      در شرایط مختلف آشنایی با تکنولوژی‌های پیشرفته در
                      نورپردازی، شامل سیستم‌های بی‌سیم و کنترل از راه دور
                    </h3>
                  </li>
                  <li>
                    <h3>
                      درک ویژگی‌های نور (رنگ، دما و کیفیت) رنگ نور و تأثیر آن بر
                      فضای کلی تصویر دمای نور و نحوه تنظیم آن برای رسیدن به
                      توناژهای دلخواه (نور گرم، سرد و نور روز) کیفیت نور: تفاوت
                      نور سخت و نرم و روش‌های کنترل آن‌ها
                    </h3>
                  </li>
                  <li>
                    <h3>
                      نحوه کنترل و تنظیم نور در محیط‌های مختلف استفاده از
                      فیلترها و ژل‌های رنگی برای کنترل رنگ نور تنظیم منابع نور
                      در محیط‌های داخلی و بیرونی آموزش کاربرد وسایل مختلف برای
                      کنترل نور از جمله استفاده از پرده‌ها، دیفیوزرها و
                      بازتاب‌دهنده‌ها
                    </h3>
                  </li>
                </ul>
              </Accordion>
              <Accordion title=" تکنیک‌های نورپردازی داخلی">
                <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl">
                  این بخش از دوره به شما یاد می‌دهد که چگونه با استفاده از
                  تکنیک‌های مختلف نورپردازی، فضاهای داخلی را روشن و جذاب‌تر
                  کنید. از اصول پایه‌ای نورپردازی تا تکنیک‌های پیشرفته برای
                  تنظیم نور و سایه، این سرفصل به شما کمک می‌کند تا با توجه به
                  ویژگی‌های هر فضا، بهترین روش نورپردازی را انتخاب کنید.
                  نورپردازی داخلی نقش مهمی در ایجاد جو و حس فضا دارد و می‌تواند
                  به‌طور مستقیم بر روی راحتی، تمرکز و حتی روحیه افراد تأثیر
                  بگذارد.
                </p>
                <ul className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl list-disc pl-6 mr-10 mt-5">
                  <li>
                    <h3>
                      انواع نورپردازی داخلی و کاربردهای آن نورپردازی عمومی:
                      ایجاد روشنایی کلی برای فضاهای مختلف مانند اتاق نشیمن و
                      آشپزخانه نورپردازی متمرکز: استفاده از نورهای متمرکز برای
                      تأکید بر مناطق خاص مانند تابلوها، قفسه‌ها یا میز غذاخوری
                      نورپردازی دکوراتیو: استفاده از نورپردازی برای تزیین فضا،
                      مثل نورپردازی مخفی در سقف‌ها و دیوارها
                    </h3>
                  </li>
                  <li>
                    <h3>
                      نورپردازی برای فضاهای مختلف داخلی تکنیک‌های نورپردازی برای
                      اتاق‌های مختلف خانه مانند اتاق خواب، حمام، آشپزخانه و
                      پذیرایی نحوه تنظیم نور در فضاهای کوچک و بزرگ برای استفاده
                      بهینه از فضا نورپردازی محیط‌های کاری: نور مناسب برای
                      فضاهای کاری مانند دفتر کار خانگی یا محل مطالعه
                    </h3>
                  </li>
                  <li>
                    <h3>
                      روش‌های تنظیم نور و سایه برای ایجاد عمق تنظیم سایه‌ها
                      به‌منظور ایجاد بعد و عمق در فضا استفاده از نورهای مخفی و
                      چراغ‌های دیواری برای تأثیرگذاری بر حس و فضای اتاق کنترل
                      نور از طریق انتخاب لامپ‌های با شدت و دمای مناسب
                    </h3>
                  </li>
                  <li>
                    <h3>
                      نورپردازی دکوراتیو و افزودن جلوه‌های بصری استفاده از
                      چراغ‌های LED، نوارهای نوری و لامپ‌های آویز برای خلق
                      جلوه‌های بصری و افزودن زیبایی به دکوراسیون تکنیک‌های
                      نورپردازی مخفی و استفاده از چراغ‌های توکار برای ایجاد
                      حس‌های متفاوت نورپردازی پله‌ها، سقف‌های کاذب و دیوارهای
                      برجسته برای جلوه‌های بصری
                    </h3>
                  </li>
                </ul>
              </Accordion>
              <Accordion title="ترکیب نور طبیعی و مصنوعی">
                <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl">
                  در این سرفصل، به اصول ترکیب نور طبیعی و مصنوعی می‌پردازیم و
                  یاد می‌گیریم چگونه با بهره‌گیری از این دو منبع نوری، جلوه‌های
                  زیبا و کاربردی در فضاهای مختلف ایجاد کنیم. نور طبیعی و مصنوعی
                  هرکدام ویژگی‌های منحصربه‌فردی دارند؛ نور طبیعی می‌تواند حس
                  طراوت و شادابی به فضا ببخشد، در حالی که نور مصنوعی قابلیت
                  تنظیم و کنترل بیشتری دارد. ترکیب درست این دو نوع نور، به شما
                  امکان می‌دهد تا به تعادل نوری مناسبی برسید و فضایی دلنشین و
                  جذاب بسازید.
                </p>
                <ul className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl list-disc pl-6 mr-10 mt-5">
                  <li>
                    <h3>
                      مزایای نور طبیعی و مصنوعی درک تأثیرات مثبت نور طبیعی بر
                      روحیه و سلامت افراد انعطاف‌پذیری و قابلیت کنترل نور مصنوعی
                      برای تنظیمات مختلف استفاده از نور طبیعی برای کاهش مصرف
                      انرژی و ایجاد جلوه‌ای گرم و زنده
                    </h3>
                  </li>
                  <li>
                    <h3>
                      شناخت منابع نور طبیعی و بهره‌گیری از آن‌ها نور خورشید
                      به‌عنوان منبع اصلی نور طبیعی و تأثیر آن در طول روز راه‌های
                      بهینه‌سازی ورود نور طبیعی از طریق پنجره‌ها، سقف‌های
                      شیشه‌ای و نورگیرها استفاده از پرده‌ها و سایبان‌ها برای
                      کنترل و فیلتر کردن نور طبیعی
                    </h3>
                  </li>
                  <li>
                    <h3>
                      تنظیم نور مصنوعی برای تکمیل نور طبیعی انتخاب لامپ‌ها و
                      چراغ‌هایی با دمای نوری مشابه نور طبیعی برای افزایش هماهنگی
                      تکنیک‌های نورپردازی لایه‌ای برای ایجاد تعادل میان نور
                      طبیعی و مصنوعی استفاده از نورهای مخفی و دیواری برای
                      برجسته‌سازی و تکمیل نور طبیعی در فضا
                    </h3>
                  </li>
                  <li>
                    <h3>
                      تکنیک‌های ترکیب نور طبیعی و مصنوعی ترکیب نور طبیعی با
                      نورهای سرد یا گرم برای ایجاد حس و حال خاص در فضا
                      هماهنگ‌سازی سایه‌ها و انعکاس‌ها برای ایجاد جلوه‌ای طبیعی و
                      دلپذیر استفاده از چراغ‌های قابل تنظیم برای کنترل شدت نور
                      در روز و شب
                    </h3>
                  </li>
                </ul>
              </Accordion>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              سوالات متداول
            </h2>
            <div className="w-full">
              <Accordion title="این دوره مناسب چه افرادی است؟">
                <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl">
                  این دوره برای همه کسانی است که علاقه‌مند به یادگیری بازسازی و
                  نوسازی ساختمان هستند؛ از مبتدیان تا حرفه‌ای‌ها.
                </p>
              </Accordion>
              <Accordion title="چه ابزارها و تجهیزاتی برای شرکت در دوره لازم است؟">
                <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl">
                  ما تمامی تجهیزات و ابزارهای لازم را برای جلسات کارگاهی فراهم
                  می‌کنیم، اما توصیه می‌شود که شرکت‌کنندگان تجهیزات شخصی خود را
                  نیز به همراه داشته باشند.
                </p>
              </Accordion>
              <Accordion title="نحوه ثبت‌نام و شرایط پرداخت">
                <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl">
                  ثبت‌نام در دوره جامع بازسازی ساختمان به راحتی از طریق سایت
                  امکان‌پذیر است. شما می‌توانید از گزینه‌های پرداخت اقساطی یا
                  یکجا استفاده کنید. برای کسب اطلاعات بیشتر و ثبت‌نام، با ما
                  تماس بگیرید یا فرم زیر را تکمیل کنید.
                </p>
              </Accordion>
            </div>
            {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {books.map((book) => (
                <BookCard
                  key={book.id}
                  cover={book.cover}
                  title={book.title}
                  description={book.description}
                />
              ))}
            </div> */}
          </div>

          <div className="flex-col justify-between items-center w-full md:w-[500px] bg-background hidden sm:flex">
            <div className="sticky top-64 w-full invisible sm:visible">
              <CourseCard
                prof="نامعلوم"
                type="حضوری"
                pre="ندارد"
                date="درحال برنامه‌ریزی"
                time="نامعلوم"
                price="نامعلوم"
                tag1="نورپردازی داخلی"
                tag2="تکنیک‌های نورپردازی"
                tag3="نورپردازی خارجی"
                tag4="فیزیک نور"
                tag5="تجهیزات نورپردازی"
              />
            </div>
          </div>
        </div>
      </section>
      <SlidingCard>
        <CourseCard
          prof="نامعلوم"
          type="حضوری"
          pre="ندارد"
          date="درحال برنامه‌ریزی"
          time="نامعلوم"
          price="نامعلوم"
          tag1="نورپردازی داخلی"
          tag2="تکنیک‌های نورپردازی"
          tag3="نورپردازی خارجی"
          tag4="فیزیک نور"
          tag5="تجهیزات نورپردازی"
        />
      </SlidingCard>
    </>
  );
};

export default Lighting;
