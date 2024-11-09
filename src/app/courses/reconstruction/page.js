import React from "react";
import Accordion from "../components/accordion";
import CourseCard from "../components/coursecard";
import CTA from "../components/cta";
import SlidingCard from "../components/slideup";
import Link from "next/link";
import Image from "next/image";
import ReconBanner from "../../../../public/reconstruction/banner.webp";

const Reconstruction = () => {
  return (
    <>
      <section className="w-full h-full bg-background sm:px-20 sm:py-5">
        <div className="w-full h-[200px] sm:h-[400px] sm:rounded-3xl overflow-hidden">
          <Image
            src={ReconBanner}
            placeholder="blur"
            className="w-full h-full object-cover object-bottom"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-stretch w-full bg-background py-4 ">
          <div className="flex h-full flex-col gap-10 items-end w-full p-5 sm:p-10 sm:border rounded-3xl border-accent/60 sm:shadow-md">
            <div className="w-full flex justify-between items-center font-IranYekan text-right font-extrabold text-accent  text-2xl sm:text-4xl">
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
              <h1 className="">دوره جامع بازسازی ساختمان</h1>
            </div>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl leading-relaxed">
              این دوره جامع بازسازی ساختمان به‌طور ویژه برای کسانی طراحی شده است
              که می‌خواهند از اصول اولیه بازسازی ساختمان تا مهارت‌های پیشرفته
              نوسازی را فرا بگیرند. در این دوره، تمامی تکنیک‌های ضروری و به‌روز
              برای تبدیل ساختمان‌های قدیمی به سازه‌های مدرن و شیک آموزش داده
              می‌شود. شما با روش‌ها و اصولی آشنا می‌شوید که امکان بازسازی کامل و
              حرفه‌ای ساختمان‌ها را فراهم می‌کند و به شما کمک می‌کند تا
              مهارت‌هایی را کسب کنید که در پروژه‌های بازسازی واقعی به‌کار
              بگیرید. اگر به بازسازی و نوسازی ساختمان علاقه‌مندید و به دنبال یک
              نقطه شروع قوی برای ورود به این صنعت هستید، دوره بازسازی ساختمان ما
              بهترین گزینه برای شماست. این دوره شامل آموزش‌های جامع، از
              برنامه‌ریزی و مدیریت پروژه‌های بازسازی تا انتخاب متریال و
              تکنیک‌های اجرایی مدرن است. شرکت در این دوره، شما را برای آینده‌ای
              موفق در صنعت بازسازی ساختمان آماده می‌کند و فرصت‌های شغلی جدیدی را
              برایتان به ارمغان می‌آورد.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 w-full h-full">
              <div className="w-full h-[400px] sm:w-1/2">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/reconstruction/1.webp"
                  alt="آموزش عملی بازسازی ساختمان با استفاده از جدیدترین تکنیک‌ها و ابزارهای حرفه‌ای"
                />
              </div>
              <div className="w-full h-[400px] sm:w-1/2">
                <img
                  className="w-full h-full  object-cover rounded-lg"
                  src="/reconstruction/2.webp"
                  alt="تیم متخصص بازسازی در حال نوسازی و بهبود دیوارها و سقف یک ساختمان قدیمی"
                />
              </div>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent text-2xl sm:text-4xl">
              چرا دوره بازسازی ساختمان؟
            </h2>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl">
              بازسازی ساختمان یک مهارت ارزشمند است که نه تنها به افزایش کیفیت
              زندگی کمک می‌کند، بلکه فرصتی عالی برای کسب درآمد بالا به عنوان یک
              شغل پردرآمد فراهم می‌آورد. در دوره جامع بازسازی ساختمان، شما تمامی
              اصول و تکنیک‌های بازسازی، از مدیریت پروژه‌های بازسازی تا انتخاب
              متریال مناسب و روش‌های اجرایی بازسازی ساختمان را یاد خواهید گرفت.
              این دوره به‌گونه‌ای طراحی شده است که شما را برای اجرای پروژه‌های
              واقعی بازسازی آماده کند و تمامی ابزارها و مهارت‌های لازم برای
              تبدیل ساختمان‌های قدیمی به فضاهای مدرن و جذاب را در اختیارتان قرار
              می‌دهد. با شرکت در این دوره، می‌توانید به دنیای بازسازی ساختمان
              ورود کرده و مهارت‌های عملی و کاربردی برای موفقیت در این صنعت را
              کسب کنید.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/reconstruction/3.webp"
                  alt="آموزش عملی بازسازی ساختمان با استفاده از جدیدترین تکنیک‌ها و ابزارهای حرفه‌ای"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              این دوره شامل چه مباحثی است؟
            </h2>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl">
              در این دوره، شما با تمامی مراحل و فرآیندهای بازسازی ساختمان آشنا
              خواهید شد:
            </p>
            <ul className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl list-disc pl-6 mr-10">
              <li className="mb-2">
                <h3>
                  شناخت ساختمان و عیب‌یابی : یادگیری نحوه تحلیل و بررسی
                  ساختمان‌های قدیمی برای شناسایی مشکلات ساختاری و ظاهری.
                </h3>
              </li>
              <li className="mb-2">
                <h3>
                  برنامه‌ریزی و مدیریت پروژه : آموزش نحوه برنامه‌ریزی و مدیریت
                  بازسازی از ابتدا تا پایان پروژه.
                </h3>
              </li>
              <li className="mb-2">
                <h3>
                  انتخاب و استفاده از متریال‌های جدید : معرفی و آشنایی با
                  جدیدترین متریال‌ها و روش‌های بازسازی.
                </h3>
              </li>
              <li className="mb-2">
                <h3>
                  نصب و اجرای سیستم‌های جدید : آموزش نصب سیستم‌های الکتریکی،
                  تهویه، آب و فاضلاب با تکنولوژی‌های جدید.
                </h3>
              </li>
              <li className="mb-2">
                <h3>
                  دکوراسیون داخلی و طراحی : طراحی و دیزاین داخلی برای ایجاد
                  فضایی زیبا و کاربردی.
                </h3>
              </li>
              <li className="mb-2">
                <h3>
                  ملاحظات ایمنی و استانداردها : آشنایی با استانداردهای ایمنی و
                  نحوه رعایت آنها در بازسازی ساختمان.
                </h3>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/reconstruction/4.webp"
                  alt="آموزش عملی بازسازی ساختمان با استفاده از جدیدترین تکنیک‌ها و ابزارهای حرفه‌ای"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
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
            </ul>
            <CTA />
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              سر فصل های دوره
            </h2>
            <div className="w-full">
              <Accordion title="مبانی بازسازی ساختمان">
                <p>
                  در این بخش از دوره، شما با مفاهیم پایه‌ای بازسازی ساختمان و
                  اهمیت آن در ارتقاء کیفیت زندگی و حفظ ارزش ساختمان آشنا
                  می‌شوید.
                </p>
                <ul className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl list-disc pl-6 mr-10 mt-5">
                  <li>
                    <h3>
                      مبانی بازسازی و انواع بازسازی : معرفی انواع بازسازی مانند
                      بازسازی جزئی، کامل، و تخصصی. دلایل و اهمیت بازسازی ساختمان
                      : بررسی اینکه چرا بازسازی برای افزایش عمر مفید ساختمان
                      ضروری است.
                    </h3>
                  </li>
                  <li>
                    <h3>
                      مراحل ابتدایی بازسازی : راهنمای شروع بازسازی و آماده‌سازی
                      اولیه پروژه.
                    </h3>
                  </li>
                </ul>
              </Accordion>
              <Accordion title=" شناخت ساختمان و تحلیل ساختاری ">
                <p>
                  شناخت عیوب و نیازهای ساختمان، از مراحل مهم بازسازی است که در
                  این بخش به آن پرداخته می‌شود.
                </p>
                <ul className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl list-disc pl-6 mr-10 mt-5">
                  <li>
                    <h3>
                      آشنایی با سیستم‌های ساختمانی : بررسی سیستم‌های مختلف
                      سازه‌ای و تأسیساتی.
                    </h3>
                  </li>
                  <li>
                    <h3>
                      عیب‌یابی و ارزیابی ساختاری ساختمان : آموزش روش‌های شناسایی
                      مشکلات ساختاری و راهکارهای رفع آن‌ها.
                    </h3>
                  </li>
                  <li>
                    <h3>
                      نحوه ارزیابی نیاز به بازسازی : بررسی شاخص‌ها و معیارهای
                      تعیین سطح نیاز به بازسازی.
                    </h3>
                  </li>
                </ul>
              </Accordion>
              <Accordion title=" برنامه‌ریزی و مدیریت پروژه">
                <p>
                  شناخت عیوب و نیازهای ساختمان، از مراحل مهم بازسازی است که در
                  این بخش به آن پرداخته می‌شود.
                </p>
                <ul className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl list-disc pl-6 mr-10 mt-5">
                  <li>
                    <h3>
                      آشنایی با سیستم‌های ساختمانی : بررسی سیستم‌های مختلف
                      سازه‌ای و تأسیساتی.
                    </h3>
                  </li>
                  <li>
                    <h3>
                      عیب‌یابی و ارزیابی ساختاری ساختمان : آموزش روش‌های شناسایی
                      مشکلات ساختاری و راهکارهای رفع آن‌ها.
                    </h3>
                  </li>
                  <li>
                    <h3>
                      نحوه ارزیابی نیاز به بازسازی : بررسی شاخص‌ها و معیارهای
                      تعیین سطح نیاز به بازسازی.
                    </h3>
                  </li>
                </ul>
              </Accordion>
              <Accordion title="انتخاب و نصب متریال‌های جدید">
                <p>
                  در این بخش، نحوه انتخاب بهترین مواد و متریال‌ها برای پروژه‌های
                  بازسازی را یاد می‌گیرید.
                </p>
                <ul className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl list-disc pl-6 mr-10 mt-5">
                  <li>
                    <h3>
                      آشنایی با متریال‌های مدرن : معرفی متریال‌های جدید و مقاوم
                      برای بازسازی.
                    </h3>
                  </li>
                  <li>
                    <h3>
                      اصول انتخاب مواد مناسب : بررسی عواملی که در انتخاب مواد
                      باید در نظر گرفته شوند.
                    </h3>
                  </li>
                  <li>
                    <h3>
                      نحوه نصب و استفاده از متریال‌ها : آموزش تکنیک‌های نصب برای
                      بهینه‌سازی بازسازی.
                    </h3>
                  </li>
                </ul>
              </Accordion>
              <Accordion title="نوسازی سیستم‌های الکتریکی و مکانیکی">
                <p>
                  نوسازی تأسیسات و سیستم‌های ساختمان از مهم‌ترین بخش‌های بازسازی
                  به شمار می‌رود.
                </p>
                <ul className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl list-disc pl-6 mr-10 mt-5">
                  <li>
                    <h3>
                      تجهیزات و سیستم‌های الکتریکی : آموزش نصب و ارتقاء
                      سیستم‌های برقی و نورپردازی.
                    </h3>
                  </li>
                  <li>
                    <h3>
                      سیستم‌های گرمایشی، سرمایشی و تهویه مطبوع : معرفی سیستم‌های
                      جدید و بهینه‌سازی تهویه و گرمایش.
                    </h3>
                  </li>
                  <li>
                    <h3>
                      تأسیسات آب و فاضلاب : آشنایی با اصول لوله‌کشی و سیستم‌های
                      فاضلاب.
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
                <p>
                  این دوره برای همه کسانی است که علاقه‌مند به یادگیری بازسازی و
                  نوسازی ساختمان هستند؛ از مبتدیان تا حرفه‌ای‌ها.
                </p>
              </Accordion>
              <Accordion title="چه ابزارها و تجهیزاتی برای شرکت در دوره لازم است؟">
                <p>
                  ما تمامی تجهیزات و ابزارهای لازم را برای جلسات کارگاهی فراهم
                  می‌کنیم، اما توصیه می‌شود که شرکت‌کنندگان تجهیزات شخصی خود را
                  نیز به همراه داشته باشند.
                </p>
              </Accordion>
              <Accordion title="نحوه ثبت‌نام و شرایط پرداخت">
                <p>
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
          <div className=" flex-col justify-between items-center w-full md:w-[500px] bg-background hidden sm:flex">
            <div className="sticky top-64 w-full">
              <CourseCard
                prof="مهندس نوید سکاکی، مهندس محمد‌رضا حاتمی، مهندس جهانبخش راد"
                type="حضوری"
                pre="ندارد"
                date="۱۷ آبان ۱۴۰۳"
                time="پنج‌شنبه ها ۹ - ۱۶"
                price="۱۰،٥۰۰،۰۰۰ تومان"
                tag1="تعمیرات ساختمان"
                tag2="بازسازی ساختمان"
                tag3=" آموزش نوسازی ساختمان"
                tag4="نقشه کشی تاسیسات"
                tag5="آموزش تخصصی و حرفه‌ای"
              />
            </div>
          </div>
        </div>
      </section>
      <SlidingCard>
        <CourseCard
          prof="مهندس نوید سکاکی، مهندس محمد‌رضا حاتمی، مهندس جهانبخش راد"
          type="حضوری"
          pre="ندارد"
          date="۱۷ آبان ۱۴۰۳"
          time="پنج‌شنبه ها ۹ - ۱۶"
          price="۱۰،٥۰۰،۰۰۰ تومان"
          tag1="تعمیرات ساختمان"
          tag2="بازسازی ساختمان"
          tag3=" آموزش نوسازی ساختمان"
          tag4="نقشه کشی تاسیسات"
          tag5="آموزش تخصصی و حرفه‌ای"
        />
      </SlidingCard>
    </>
  );
};

export default Reconstruction;
