import React from "react";
import Accordion from "../components/accordion";
import CourseCard from "../components/coursecard";
import CTA from "../components/cta";
import SlidingCard from "../components/slideup";
import Link from "next/link";
import Image from "next/image";
import Interiorbanner from "../../../../public/interiorarc/banner.webp";

const InteriorArc = () => {
  return (
    <>
      <section className="w-full h-full bg-background sm:px-20 sm:py-5">
        <div className="w-full h-[200px] sm:h-[400px] sm:rounded-3xl overflow-hidden">
          <Image
            src={Interiorbanner}
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
              <h1 className="">
                دوره جامع معماری داخلی: زبان طراحی و خلاقیت در فضا
              </h1>
            </div>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl leading-relaxed">
              معماری داخلی یکی از هیجان‌انگیزترین و خلاقانه‌ترین رشته‌ها در
              دنیای هنر و طراحی است. این حوزه نه تنها به زیبایی محیط زندگی و کار
              شما معنا می‌بخشد، بلکه بیانگر شخصیت، تفکر و ارزش‌های شما در فضایی
              است که در آن زندگی می‌کنید. این دوره به شما کمک می‌کند تا با
              یادگیری اصول و قواعد معماری داخلی، فضایی را طراحی کنید که
              بازتاب‌دهنده سبک زندگی و خلاقیت منحصربه‌فرد شما باشد.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 w-full h-full">
              <div className="w-full h-[400px] sm:w-1/2">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/interiorarc/1.webp"
                  alt="آموزش عملی بازسازی ساختمان با استفاده از جدیدترین تکنیک‌ها و ابزارهای حرفه‌ای"
                />
              </div>
              <div className="w-full h-[400px] sm:w-1/2">
                <img
                  className="w-full h-full  object-cover rounded-lg"
                  src="/interiorarc/2.webp"
                  alt="تیم متخصص بازسازی در حال نوسازی و بهبود دیوارها و سقف یک ساختمان قدیمی"
                />
              </div>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent text-2xl sm:text-4xl">
              معماری داخلی ، زبانی برای بیان خلاقیت
            </h2>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl">
              یادگیری معماری داخلی شباهت زیادی به یادگیری یک زبان جدید دارد.
              همان‌طور که برای مسلط شدن بر یک زبان باید واژگان و دستور زبان را
              یاد بگیرید، در طراحی داخلی نیز باید عناصر و اصول طراحی را
              بیاموزید. در این دوره، شما با واژگان طراحی مانند مواد، سبک، فرم،
              نورپردازی، رنگ، الگوها، بافت، خط و حجم آشنا خواهید شد. این عناصر،
              ابزارهایی هستند که شما را قادر می‌سازند تا فضاهایی منحصر به فرد و
              دلنشین خلق کنید.
              <br /> علاوه بر این، همان‌طور که دستور زبان به شما کمک می‌کند تا
              جملات معنا‌دار بسازید، در طراحی داخلی نیز قواعدی مانند تعادل،
              ریتم، تأکید، مقیاس، تناسب، وحدت، تنوع و هارمونی به شما کمک می‌کنند
              تا عناصر مختلف طراحی را به شکلی هماهنگ و جذاب در کنار هم قرار
              دهید. با یادگیری این اصول، شما قادر خواهید بود فضاهایی خلق کنید که
              نه تنها از لحاظ بصری زیبا باشند، بلکه حس آرامش و هماهنگی را به
              کاربران آن فضا منتقل کنند.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/interiorarc/3.webp"
                  alt="آموزش عملی بازسازی ساختمان با استفاده از جدیدترین تکنیک‌ها و ابزارهای حرفه‌ای"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              خلاقیت و نوآوری درمعماری داخلی
            </h2>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl">
              اما معماری داخلی تنها به رعایت قواعد خلاصه نمی‌شود؛ این حوزه جایی
              است که خلاقیت و نوآوری شما می‌تواند در اوج خود قرار گیرد. همان‌طور
              که نویسندگان بزرگ با تغییر و شکستن قواعد زبان آثار بی‌نظیری خلق
              می‌کنند، در این دوره نیز شما می‌آموزید که چگونه از مرزهای رایج
              طراحی فراتر بروید و سبک‌های جدیدی خلق کنید. طراحی داخلی یک هنر
              پویا و در حال تغییر است، و با یادگیری این دوره شما همواره در خط
              مقدم تغییرات و گرایش‌های جدید طراحی خواهید بود.
            </p>
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              یک اثر زنده و در حال تغییر
            </h2>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl">
              معماری داخلی هیچ‌گاه ایستا نیست؛ همان‌طور که زندگی ما در حال تغییر
              است، فضاهایی که در آن زندگی و کار می‌کنیم نیز باید تغییر کنند. این
              دوره به شما آموزش می‌دهد که چگونه فضاهای خود را با نیازها و تحولات
              زندگی مدرن تطبیق دهید. از تغییرات در سبک‌های معماری گرفته تا
              نوآوری در نورپردازی و استفاده از مواد جدید، این دوره به شما دانش و
              مهارت‌هایی می‌دهد که بتوانید با تحولات زمان همراه باشید و
              به‌روزرسانی‌های لازم را در طراحی‌های خود ایجاد کنید.
            </p>
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              چرا این دوره برای شما مناسب است؟
            </h2>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl">
              اگر به دنبال یادگیری اصول و فنون حرفه‌ای معماری داخلی هستید، اگر
              به خلق فضاهایی زیبا، کارآمد و متناسب با نیازهای مدرن علاقه دارید،
              اگر به دنبال راهی برای بیان خلاقیت خود در دنیای طراحی هستید، این
              دوره برای شما طراحی شده است. ما در این دوره به شما کمک می‌کنیم تا
              نه تنها به یک طراح داخلی حرفه‌ای تبدیل شوید، بلکه خلاقیت و نوآوری
              را در کارهای خود به‌کار بگیرید و فضاهایی طراحی کنید که زندگی و کار
              شما را بهبود بخشند. سرفصل‌های دوره جامع معماری داخلی به صورت
              ساختارمند و با هدف پوشش کامل مباحث ضروری این حوزه تنظیم شده‌اند.
              این سرفصل‌ها شامل موضوعات پایه تا پیشرفته، و همچنین پروژه‌های عملی
              است تا شرکت‌کنندگان را برای ورود به بازار کار طراحی داخلی آماده
              کند.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/interiorarc/4.webp"
                  alt="آموزش عملی بازسازی ساختمان با استفاده از جدیدترین تکنیک‌ها و ابزارهای حرفه‌ای"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              مزایای شرکت در دوره معماری داخلی
            </h2>
            <CTA />
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              سر فصل های دوره
            </h2>
            <div className="w-full">
              <Accordion title="مبانی طراحی داخلی">
                <p>
                  تعریف معماری داخلی و آشنایی با تفاوت آن با دکوراسیون داخلی
                  بررسی نقش و اهمیت طراحی داخلی در بهبود کیفیت فضا شناخت
                  مفاهیم اصلی طراحی: خط، فرم، رنگ، بافت و فضا اصول طراحی داخلی:
                  تعادل، تناسب، ریتم، تأکید، هارمونی
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
              <Accordion title="آشنایی با سبک‌های معماری داخلی">
                <p>
                  تحلیل و مقایسه سبک‌های مختلف معماری داخلی: oسبک مدرن oسبک
                  کلاسیک oسبک مینیمال oسبک صنعتی oسبک بوهمین oو دیگر سبک‌های
                  محبوب تطبیق سبک‌های مختلف با نیازها و فضاهای گوناگون (مسکونی،
                  اداری، تجاری)
                </p>
              </Accordion>
              <Accordion title="رنگ‌شناسی در طراحی داخلی">
                <p>
                  تئوری رنگ‌ها و روانشناسی رنگ‌ها انتخاب رنگ مناسب برای فضاهای
                  مختلف (خانگی، تجاری، اداری) ایجاد پالت‌های رنگی متناسب با سبک
                  و روحیه فضا تأثیر نورپردازی بر رنگ‌ها
                </p>
              </Accordion>
              <Accordion title="نورپردازی داخلی">
                <p>
                  انواع نورپردازی (نور طبیعی و مصنوعی) اصول نورپردازی در
                  فضاهای مسکونی و تجاری تکنیک‌های خلق اتمسفر با نور آشنایی با
                  نرم‌افزار Dialux برای طراحی نورپردازی
                </p>
              </Accordion>
              <Accordion title="مواد و متریال در طراحی داخلی">
                <p>
                  معرفی متریال‌های رایج در طراحی داخلی: چوب، فلز، سنگ، شیشه،
                  پلاستیک و… انتخاب متریال مناسب بر اساس سبک و کاربری فضا
                  ترکیب مواد برای ایجاد جلوه‌های بصری و کاربردی ویژگی‌های مواد
                  پایدار و سازگار با محیط زیست
                </p>
              </Accordion>
              <Accordion title="مبلمان و چیدمان فضا">
                <p>
                  اصول انتخاب و چیدمان مبلمان در فضا تناسب ابعاد و کاربری
                  مبلمان با فضا تکنیک‌های بهینه‌سازی فضا با استفاده از مبلمان
                  چندمنظوره ترکیب مبلمان با دکوراسیون و ایجاد هماهنگی بصری
                </p>
              </Accordion>
              <Accordion title="طراحی فضای مسکونی">
                <p>
                  اصول طراحی داخلی اتاق نشیمن، اتاق خواب، آشپزخانه و حمام خلق
                  فضاهای دنج و آرامش‌بخش در محیط‌های مسکونی رعایت نیازهای
                  روزمره خانوار و بهینه‌سازی فضاهای زندگی
                </p>
              </Accordion>
              <Accordion title="طراحی فضای تجاری و اداری">
                <p>
                  اصول طراحی داخلی فروشگاه‌ها، رستوران‌ها، و کافه‌ها طراحی
                  دفاتر کاری با توجه به نیازهای اداری و بهره‌وری خلق تجربه
                  مشتری در فضاهای تجاری از طریق طراحی کارآمد تحلیل نیازهای
                  عملکردی و بصری در فضاهای کاری
                </p>
              </Accordion>
              <Accordion title="آموزش نرم‌افزارهای طراحی داخلی">
                <p>
                  AutoCAD: ترسیم نقشه‌های دو بعدی و دقیق 3D Max: مدل‌سازی
                  سه‌بعدی و ایجاد تصاویر واقع‌گرایانه از فضاها V-Ray: رندرینگ
                  حرفه‌ای و شبیه‌سازی نور و متریال Photoshop: ویرایش تصاویر و
                  آماده‌سازی طرح‌های گرافیکی برای ارائه پروژه‌ها Dialux: طراحی
                  و تحلیل نورپردازی فضاهای داخلی
                </p>
              </Accordion>
              <Accordion title="طراحی پایدار و سبز">
                <p>
                  مبانی طراحی پایدار و نقش آن در معماری داخلی استفاده از مواد
                  و متریال‌های طبیعی و بازیافتی طراحی فضاهای کارآمد از لحاظ مصرف
                  انرژی و بهره‌وری منابع
                </p>
              </Accordion>
              <Accordion title="مهارت‌های ارتباطی و ارائه پروژه">
                <p>
                  تکنیک‌های ارائه و متقاعدسازی در ارائه طرح‌های داخلی
                  آماده‌سازی فایل‌های ارائه به‌صورت حرفه‌ای روش‌های ارتباط موثر
                  با مشتریان و کارفرمایان
                </p>
              </Accordion>
              <Accordion title="استانداردها و قوانین طراحی داخلی">
                <p>
                  آشنایی با قوانین و مقررات مربوط به طراحی داخلی ملاحظات ایمنی
                  و بهداشتی در طراحی فضاهای داخلی بررسی استانداردهای طراحی
                  داخلی در پروژه‌های واقعی
                </p>
              </Accordion>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              سوالات متداول
            </h2>
            <div className="w-full">
              <Accordion title="این دوره مناسب چه افرادی است؟">
                <p>
                  این دوره برای همه کسانی است که علاقه‌مند به یادگیری معماری داخلی هستند؛ از مبتدیان تا حرفه‌ای‌ها.
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

export default InteriorArc;
