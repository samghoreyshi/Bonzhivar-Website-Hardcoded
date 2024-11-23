import React from "react";
import Accordion from "../components/accordion";
import CourseCard from "../components/coursecard";
import CTA from "../components/cta";
import SlidingCard from "../components/slideup";
import Link from "next/link";
import Image from "next/image";
import Interiorbanner from "../../../../public/colorapp/banner.webp";

const InteriorDesing = () => {
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
              <h1 className="">دوره آموزشی کاربرد رنگ در معماری داخلی</h1>
            </div>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl leading-relaxed">
              در دوره آموزشی کاربرد رنگ در معماری داخلی، شما با اصول و تکنیک‌های
              استفاده از رنگ در طراحی فضاهای داخلی آشنا خواهید شد. این دوره برای
              علاقمندان و حرفه‌ای‌های معماری داخلی طراحی شده تا بتوانند از علم
              رنگ‌شناسی برای ایجاد فضاهای دلنشین و کاربردی بهره‌مند شوند.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 w-full h-full">
              <div className="w-full h-[400px] sm:w-1/2">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/colorapp/1.webp"
                  alt="آموزش عملی بازسازی ساختمان با استفاده از جدیدترین تکنیک‌ها و ابزارهای حرفه‌ای"
                />
              </div>
              <div className="w-full h-[400px] sm:w-1/2">
                <img
                  className="w-full h-full  object-cover rounded-lg"
                  src="/colorapp/2.webp"
                  alt="تیم متخصص بازسازی در حال نوسازی و بهبود دیوارها و سقف یک ساختمان قدیمی"
                />
              </div>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent text-2xl sm:text-4xl">
              نقش رنگ‌ها درمعماری داخلی و تأثیر آن بر احساسات و رفتار
            </h2>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl">
              رنگ یکی از مهم‌ترین و قدرتمندترین عناصر در معماری داخلی است که
              تأثیری مستقیم بر احساسات، حال و هوا و انرژی هر فضا دارد. هر آنچه
              در اطرافمان می‌بینیم، از دیوارها و مبلمان گرفته تا جزئیات کوچک،
              همگی دارای رنگ هستند و همین رنگ‌ها با تحریک حواس ما، واکنش‌های
              پیچیده‌ای را ایجاد می‌کنند. استفاده درست از رنگ‌ها می‌تواند فضایی
              آرامش‌بخش، انرژی‌بخش یا حتی الهام‌بخش به وجود آورد و ما را به
              فضایی دلنشین و مطلوب هدایت کند. تأثیرات روانشناختی رنگ‌ها نیز از
              مهم‌ترین جنبه‌هایی است که طراحان حرفه‌ای به دقت به آن توجه
              می‌کنند. رنگ‌های گرم مثل قرمز و نارنجی انرژی و شوق را در فضا زنده
              می‌کنند، در حالی که رنگ‌های سرد مانند آبی و سبز، حس آرامش و طراوت
              را به محیط می‌آورند. انتخاب و ترکیب درست رنگ‌ها در طراحی داخلی
              می‌تواند فضای زندگی شما را به محلی دلپذیر و سازگار با نیازهای
              روحی‌تان تبدیل کند و باعث شود که از هر لحظه حضورتان در آنجا لذت
              ببرید. اگر می‌خواهید در دکوراسیون داخلی خود به انتخابی هوشمندانه و
              مؤثر برسید، آشنایی با روانشناسی رنگ‌ها و تأثیر آن‌ها بر محیط
              اطراف، قدم اول و کلیدی است.
            </p>
            <h2 className="font-IranYekan text-right font-bold text-accent text-2xl sm:text-4xl">
              چرا کاربرد رنگ در دکوراسیون داخلی اهمیت دارد؟
            </h2>
            <p className="font-IranYekan text-accentDark text-sm sm:text-base text-justify direction-rtl">
              رنگ در طراحی داخلی نه تنها بر زیبایی و جذابیت فضا تاثیر دارد، بلکه
              می‌تواند فضا را بزرگ‌تر، کوچک‌تر، روشن‌تر یا حتی دلگیرتر نشان دهد.
              به همین دلیل، دوره آموزشی ما در آموزشگاه بن ژیوار به علاقمندان کمک
              می‌کند تا با اصول روانشناسی رنگ‌ها و ترکیب آن‌ها آشنا شوند و
              بتوانند با اطمینان بیشتری رنگ‌های مناسب برای هر فضا انتخاب کنند.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/colorapp/3.webp"
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
              <Accordion title=" مقدمه‌ای بر تئوری رنگ">
                <p>
                  تعریف رنگ و تئوری‌های پایه رنگ‌های اصلی، فرعی و ترکیبی چرخه
                  رنگ و کاربرد آن در طراحی
                </p>
              </Accordion>
              <Accordion title="اصول ترکیب رنگ در معماری داخلی">
                <p>
                  استفاده از هارمونی‌ها و کنتراست‌ها ترکیب رنگ‌های گرم و سرد
                  تکنیک‌های ترکیب رنگ با توجه به ابعاد و کاربرد فضا
                </p>
              </Accordion>
              <Accordion title="تاثیر نور و سایه بر رنگ‌ها">
                <p>
                  تاثیر نور طبیعی و مصنوعی بر جلوه رنگ‌ها انتخاب رنگ مناسب بر
                  اساس میزان نور فضا تکنیک‌های نورپردازی برای تقویت زیبایی
                  رنگ‌ها
                </p>
              </Accordion>
              <Accordion title="استفاده از نرم‌افزارهای طراحی رنگ در معماری داخلی">
                <p>
                  معرفی نرم‌افزارهای کاربردی (مانند فتوشاپ و تری‌دی‌مکس) تمرین
                  عملی طراحی رنگ در نرم‌افزارها پروژه عملی ترکیب رنگ برای یک
                  فضای مشخص
                </p>
              </Accordion>
              <Accordion title="پروژه نهایی: طراحی رنگ در یک فضای واقعی">
                <p>
                  انتخاب یک فضای داخلی (منزل یا محل کار) اجرای ترکیب رنگ مناسب
                  برای فضا با توجه به نیازهای مشتری تحلیل و ارائه پروژه به
                  اساتید و هم‌دوره‌ها
                </p>
              </Accordion>
            </div>
            <h2 className="font-IranYekan text-right font-bold text-accent  text-2xl sm:text-4xl">
              سوالات متداول
            </h2>
            <div className="w-full">

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
