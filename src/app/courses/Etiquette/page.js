import React from "react";
import Accordion from "../components/accordion";
import CourseCard from "../components/coursecard";
import CTA from "../components/cta";
import SlidingCard from "../components/slideup";
import Link from "next/link";
import Image from "next/image";
import Etiquettebanner from "../../../../public/Etiquette/banner.webp";

const Etiquette = () => {
  return (
    <>
      <section className="w-full h-full bg-background sm:px-20 sm:py-5">
        <div className="w-full h-[200px] sm:h-[400px] sm:rounded-3xl overflow-hidden">
          <Image
            src={Etiquettebanner}
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
              <h1 className="">دوره جامع آداب معاشرت</h1>
            </div>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl leading-relaxed">
              دوره آداب معاشرت با هدف آموزش اصول رفتاری و مهارت‌های ارتباطی در
              فضای اجتماعی و حرفه‌ای طراحی شده است. این دوره شامل مباحث مختلفی
              در زمینه رفتارهای اجتماعی، ارتباطات دیجیتال، تفاوت‌های فرهنگی،
              آداب در محیط‌های اجتماعی و حرفه‌ای، و اصول اساسی برای تعاملات
              آنلاین و حضوری است.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 w-full h-full">
              <div className="w-full h-[400px] sm:w-1/2">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/Etiquette/1.webp"
                  alt="آموزش عملی بازسازی ساختمان با استفاده از جدیدترین تکنیک‌ها و ابزارهای حرفه‌ای"
                />
              </div>
              <div className="w-full h-[400px] sm:w-1/2">
                <img
                  className="w-full h-full  object-cover rounded-lg"
                  src="/Etiquette/2.webp"
                  alt="تیم متخصص بازسازی در حال نوسازی و بهبود دیوارها و سقف یک ساختمان قدیمی"
                />
              </div>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent text-2xl sm:text-4xl">
              اهمیت دوره آداب معاشرت
            </h2>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl">
              آداب اجتماعی نقش بسیار مهمی در زندگی شخصی و حرفه‌ای افراد ایفا
              می‌کنند. دلایل اهمیت یادگیری و رعایت آداب اجتماعی عبارتند از:
              <ul className="mt-5">
                <li>
                  <h3 className="text-2xl font-IranYekan font-bold text-accent">
                    ایجاد اولین تأثیر مثبت
                  </h3>
                  <p className="mt-2">
                    اولین برخورد و نحوه معرفی خود، بسیار تأثیرگذار است و
                    می‌تواند دیدگاه دیگران را نسبت به شما شکل دهد. رعایت آداب
                    اجتماعی، نشان‌دهنده‌ی شخصیت و احترام به دیگران است و در
                    شکل‌گیری یک تأثیر اولیه مثبت اهمیت دارد.
                  </p>
                </li>
                <li className="mt-5">
                  <h3 className="text-2xl font-IranYekan font-bold text-accent">
                    افزایش احترام و اعتماد
                  </h3>
                  <p className="mt-2">
                    افراد با رعایت آداب اجتماعی و احترام به دیگران، به‌راحتی
                    احترام و اعتماد اطرافیان را جلب می‌کنند. این ویژگی‌ها در
                    روابط اجتماعی، کاری و حتی خانوادگی به افزایش ارتباطات سازنده
                    و سالم کمک می‌کند.
                  </p>
                </li>
                <li className="mt-5">
                  <h3 className="text-2xl font-IranYekan font-bold text-accent">
                    بهبود مهارت‌های ارتباطی
                  </h3>
                  <p className="mt-2">
                    آداب اجتماعی اصولی مانند نحوه گفت‌وگو، گوش دادن، پرسیدن
                    سوال‌های مناسب و اجتناب از قضاوت‌های سطحی را آموزش می‌دهد.
                    این مهارت‌ها باعث بهبود روابط و کاهش سوءتفاهم‌ها می‌شوند.
                  </p>
                </li>
              </ul>
            </p>
            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/Etiquette/3.webp"
                  alt="آموزش عملی بازسازی ساختمان با استفاده از جدیدترین تکنیک‌ها و ابزارهای حرفه‌ای"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              مزایای شرکت در این دوره
            </h2>
            <ul className="mt-2 direction-rtl font-IranYekan text-accentDark">
              <li>
                <h3 className="text-2xl font-IranYekan font-bold text-accent">
                  افزایش اعتماد به نفس و جذابیت اجتماعی
                </h3>
                <p className="mt-2">
                  یادگیری مهارت‌های رفتاری باعث می‌شود در هر جمعی با اعتماد به
                  نفس و تاثیرگذار حاضر شوید.
                </p>
              </li>
              <li className="mt-5">
                <h3 className="text-2xl font-IranYekan font-bold text-accent">
                  تقویت ارتباطات کاری و شخصی
                </h3>
                <p className="mt-2">
                  با رعایت آداب اجتماعی، روابط کاری و شخصی خود را بهبود بخشید و
                  احترام بیشتری به دست آورید.
                </p>
              </li>
              <li className="mt-5">
                <h3 className="text-2xl font-IranYekan font-bold text-accent">
                  کاهش سوءتفاهم‌ها و تنش‌ها
                </h3>
                <p className="mt-2">
                  یادگیری نحوه برخورد مناسب در موقعیت‌های مختلف، به کاهش
                  تعارض‌ها و افزایش تفاهم کمک می‌کند.
                </p>
              </li>
              <li className="mt-5">
                <h3 className="text-2xl font-IranYekan font-bold text-accent">
                  آشنایی با تفاوت‌های فرهنگی و بین‌المللی
                </h3>
                <p className="mt-2">
                  با اصول رفتاری در فرهنگ‌های مختلف آشنا شوید و برای سفرها و
                  تعاملات بین‌المللی آماده‌تر شوید.
                </p>
              </li>
              <li className="mt-5">
                <h3 className="text-2xl font-IranYekan font-bold text-accent">
                  ارتقاء مهارت‌های ارتباط دیجیتال
                </h3>
                <p className="mt-2">
                  در دنیای آنلاین امروز، نتیکت یا آداب دیجیتال از شما فردی
                  حرفه‌ای و مودب می‌سازد که ارتباطات خود را به‌خوبی مدیریت
                  می‌کند.
                </p>
              </li>
            </ul>

            <CTA />
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              سر فصل های دوره
            </h2>
            <div className="w-full">
              <Accordion title="آداب سلام و احوال‌پرسی">
                <p>انواع احوال‌پرسی‌ها در فرهنگ‌های مختلف و روش‌های صحیح.</p>
              </Accordion>
              <Accordion title="معرفی و آداب گفت‌وگو">
                <p>
                  اصول اولیه معرفی خود و دیگران در موقعیت‌های مختلف و نحوه
                  برقراری گفت‌وگوهای کوتاه و بلند.
                </p>
              </Accordion>
              <Accordion title="رعایت فاصله اجتماعی و احترام به حریم شخصی ">
                <p>
                  توضیح در مورد نحوه حفظ حریم شخصی و فاصله مناسب در ارتباطات.
                </p>
              </Accordion>
              <Accordion title="آداب دعوت و پذیرش دعوت‌ها">
                <p>نحوه دعوت و برخورد با دعوت‌ها در محیط‌های اجتماعی.</p>
              </Accordion>
              <Accordion title="آداب ارتباطات دیجیتال و آنلاین">
                <p>
                  نتیکت چیست و اهمیت آن: آشنایی با اصول رفتار در فضای آنلاین.
                  آداب استفاده از ایمیل و پیام‌رسان‌ها: نحوه استفاده از ایمیل،
                  پیام‌های رسمی و چت‌های آنلاین با رعایت اصول حرفه‌ای. آداب
                  حضور در شبکه‌های اجتماعی: نکاتی برای استفاده مناسب از شبکه‌های
                  اجتماعی و رعایت حریم خصوصی.
                </p>
              </Accordion>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              سوالات متداول
            </h2>
            <div className="w-full">
              <Accordion title="این دوره مناسب چه افرادی است؟">
                <p>
                  این دوره برای همه کسانی است که علاقه‌مند به یادگیری دوره آداب معاشرت هستند؛.
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

export default Etiquette;
