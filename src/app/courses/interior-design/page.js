import React from "react";
import Accordion from "../components/accordion";
import CourseCard from "../components/coursecard";
import CTA from "../components/cta";
import SlidingCard from "../components/slideup";
import Link from "next/link";
import Image from "next/image";
import Interiorbanner from "../../../../public/interior-design/banner.webp";

const InteriorDesing = () => {
  return (
    <>
      <section className="w-full h-full bg-background sm:px-20 sm:py-5">
        <div className="w-full h-[200px] sm:h-[400px] sm:rounded-3xl overflow-hidden">
          <Image
            src={Interiorbanner}
            placeholder="blur"
            className="w-full h-full object-cover object-center"
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
              <h1 className="">
                دوره جامع دکوراسیون داخلی, طراحی و چیدمان فضا
              </h1>
            </div>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl leading-relaxed">
              با شرکت در دوره جامع دکوراسیون داخلی، به تمام مهارت‌های لازم برای
              طراحی فضاهای شگفت‌انگیز و دلنشین دست خواهید یافت. این دوره با هدف
              آموزش حرفه‌ای دکوراسیون داخلی، از مبتدی تا پیشرفته، طراحی شده و به
              شما امکان می‌دهد تا در کنار یادگیری تکنیک‌های کاربردی، با
              نرم‌افزارهای تخصصی و مهارت‌های عملی این حرفه آشنا شوید. دکوراسیون
              داخلی (Interior Decoration) هنر و علم بهینه‌سازی و زیباسازی فضای
              داخلی ساختمان‌هاست، به نحوی که محیط زندگی یا کار، زیبا، کارآمد و
              متناسب با نیازهای کاربران باشد. در دکوراسیون داخلی، انتخاب رنگ‌ها،
              چیدمان مبلمان، نورپردازی، استفاده از متریال‌های مناسب و هماهنگی
              بین اجزا، از اصول اساسی به شمار می‌آیند. طراحی داخلی می‌تواند شامل
              سبک‌های مختلفی مانند مدرن، کلاسیک، مینیمالیستی و صنعتی باشد که هر
              کدام ویژگی‌های خاص خود را دارند.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 w-full h-full">
              <div className="w-full h-[400px] sm:w-1/2">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/interior-design/1.webp"
                  alt="آموزش عملی بازسازی ساختمان با استفاده از جدیدترین تکنیک‌ها و ابزارهای حرفه‌ای"
                />
              </div>
              <div className="w-full h-[400px] sm:w-1/2">
                <img
                  className="w-full h-full  object-cover rounded-lg"
                  src="/interior-design/2.webp"
                  alt="تیم متخصص بازسازی در حال نوسازی و بهبود دیوارها و سقف یک ساختمان قدیمی"
                />
              </div>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent text-2xl sm:text-4xl">
              چرا باید در دوره جامع دکوراسیون داخلی شرکت کنید؟
            </h2>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl">
              این دوره جامع، هنرجویان را به مهارت‌هایی تجهیز می‌کند که برای
              موفقیت در بازار کار دکوراسیون داخلی ضروری هستند. با یادگیری مباحث
              مختلف از جمله طراحی، نرم‌افزارها، و اصول اجرایی، می‌توانید
              پروژه‌های مختلفی را با اعتماد به‌نفس و به صورت حرفه‌ای اجرا کنید.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/interior-design/3.webp"
                  alt="آموزش عملی بازسازی ساختمان با استفاده از جدیدترین تکنیک‌ها و ابزارهای حرفه‌ای"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              مزایای شرکت در دوره جامع دکوراسیون داخلی
            </h2>
            <ul className="mt-2 direction-rtl font-IranYekan text-accentDark">
              <li>
                <h3 className="text-2xl font-IranYekan font-bold text-accent">
                  ایجاد فرصت‌های شغلی متنوع
                </h3>
                <p className="mt-2">
                  دکوراسیون داخلی یک حرفه پرطرفدار و با تقاضای بالا است. آموزش
                  دکوراسیون داخلی می‌تواند افراد را برای ورود به مشاغلی مانند
                  طراح داخلی، مشاور دکوراسیون، یا مدیر پروژه‌های طراحی آماده
                  کند. فارغ‌التحصیلان این رشته می‌توانند در شرکت‌های دکوراسیون
                  داخلی، معماری، یا حتی به صورت آزاد (فریلنسری) مشغول به کار
                  شوند.
                </p>
              </li>
              <li className="mt-5">
                <h3 className="text-2xl font-IranYekan font-bold text-accent">
                  کسب مهارت‌های خلاقانه و فنی
                </h3>
                <p className="mt-2">
                  دکوراسیون داخلی ترکیبی از هنر و علم است؛ افراد علاوه بر
                  یادگیری تکنیک‌های طراحی، اصول زیبایی‌شناسی، ترکیب رنگ‌ها و
                  چیدمان، مهارت‌های خلاقانه خود را نیز تقویت می‌کنند. این آموزش
                  شامل کار با نرم‌افزارهای تخصصی مانند اتوکد، تری دی مکس و
                  فتوشاپ است که در بازار کار بسیار مفید است.
                </p>
              </li>
              <li className="mt-5">
                <h3 className="text-2xl font-IranYekan font-bold text-accent">
                  توانایی بهینه‌سازی فضاها
                </h3>
                <p className="mt-2">
                  با یادگیری دکوراسیون داخلی، هنرجویان می‌توانند فضاهای مختلف را
                  بهینه‌سازی کرده و از فضاهای کوچک‌تر استفاده مؤثرتری ببرند. این
                  مهارت در طراحی منازل کوچک و دفاتر کاری بسیار کاربردی است.
                </p>
              </li>
              <li className="mt-5">
                <h3 className="text-2xl font-IranYekan font-bold text-accent">
                  ایجاد تغییرات مثبت در محیط زندگی و کار
                </h3>
                <p className="mt-2">
                  آموزش دکوراسیون داخلی به افراد امکان می‌دهد تا فضاهایی را خلق
                  کنند که با سلیقه و نیازهای فردی همخوانی داشته باشد و به افزایش
                  رفاه و رضایت کاربران منجر شود.
                </p>
              </li>
              <li className="mt-5">
                <h3 className="text-2xl font-IranYekan font-bold text-accent">
                  افزایش مهارت‌های مدیریتی و پروژه‌ای
                </h3>
                <p className="mt-2">
                  در طی آموزش، هنرجویان با روند اجرای پروژه‌ها، از طراحی تا
                  اجرا، آشنا می‌شوند و مهارت‌های مدیریتی خود را نیز توسعه
                  می‌دهند. این توانایی به آنها کمک می‌کند تا پروژه‌ها را با
                  هماهنگی و مدیریت منابع به بهترین شکل اجرا کنند.
                </p>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/interior-design/4.webp"
                  alt="آموزش عملی بازسازی ساختمان با استفاده از جدیدترین تکنیک‌ها و ابزارهای حرفه‌ای"
                  loading="lazy"
                />
              </div>
            </div>

            <CTA />
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              سر فصل های دوره
            </h2>
            <div className="w-full">
              <Accordion title="مبانی و اصول دکوراسیون داخلی">
                <p>
                  آشنایی با مفاهیم دکوراسیون داخلی و اصول چیدمان سبک‌های مختلف
                  طراحی داخلی مانند مدرن، کلاسیک، صنعتی و مینیمالیستی روانشناسی
                  رنگ‌ها و تأثیر آن‌ها در طراحی فضاها
                </p>
              </Accordion>
              <Accordion title="طراحی و تحلیل فضاهای داخلی">
                <p>
                  شناخت و بررسی انواع فضاهای مسکونی، اداری و تجاری اصول چیدمان
                  و بهینه‌سازی فضا برای دسترسی و کارایی بیشتر طراحی فضاهای
                  مختلف با در نظر گرفتن سلیقه و نیازهای کاربران
                </p>
              </Accordion>
              <Accordion title="آموزش نرم‌افزارهای دکوراسیون داخلی">
                <p>
                اتوکد (AutoCAD): نقشه‌کشی، ترسیم پلان‌ها و چیدمان فضا
                اسکچاپ: نرم افزار سه بعدی
                </p>
              </Accordion>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              سوالات متداول
            </h2>
            <div className="w-full">
              <Accordion title="این دوره مناسب چه افرادی است؟">
                <p>
                  این دوره برای همه کسانی است که علاقه‌مند به یادگیری دکوراسیون
                  داخلی هستند؛ از مبتدیان تا حرفه‌ای‌ها.
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
                prof="نامعلوم"
                type="حضوری"
                pre="ندارد"
                date="نامعلوم"
                time="نامعلوم"
                price="نامعلوم"
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
          prof="نامعلوم"
          type="حضوری"
          pre="ندارد"
          date="نامعلوم"
          time="نامعلوم"
          price="نامعلوم"
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

export default InteriorDesing;
