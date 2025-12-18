import React from 'react';

const faqs = [
    {
        question: "روند صدور کارنامه به چه صورت است؟",
        answer: (
            <p>
                پس از <span className="text-indigo-700">ثبت نهایی نمرات دبیران</span>، سامانه بلافاصله آماده صدور کارنامه‌ها می‌شود.
                شما می‌توانید تنها با <span className="text-indigo-700">چند کلیک</span> کارنامه تمامی دانش‌آموزان را صادر و در صورت نیاز چاپ کنید.
            </p>
        ),
    },
    {
        question: "آیا ظرفیت اجرای سامانه محدود است؟",
        answer: (
            <p>
                بله. با توجه به <span className="text-indigo-700">بازه زمانی کوتاه ۷ تا ۱۰ روزه</span> مدارس برای صدور کارنامه،
                ظرفیت <span className="text-indigo-700">پیاده‌سازی و پشتیبانی سامانه</span> در این بازه زمانی محدود است.
            </p>
        ),
    },
    {
        question: "پیاده‌سازی سامانه چقدر زمان می‌برد؟",
        answer: (
            <p>
                در صورت وارد شدن نمره دانش‌آموزان، پیاده‌سازی سامانه در <span className="text-indigo-700">کوتاه‌ترین زمان ممکن </span>
                و متناسب با شرایط فشرده مدارس انجام می‌شود.
            </p>
        ),
    },
    {
        question: "چطور می‌توانم از کیفیت خروجی کارنامه‌ها مطمئن شوم؟",
        answer: (
            <p>
                قبل از هر تصمیم نهایی، می‌توانید <span className="text-indigo-700">درخواست مشاوره</span> ثبت کنید
                تا <span className="text-indigo-700">نمونه کارنامه</span> بر اساس داده‌های سال‌های گذشته مدرسه شما آماده و ارائه شود.
            </p>
        ),
    },
    {
        question: "آیا استفاده از سامانه باعث افزایش حجم کار کادر مدرسه می‌شود؟",
        answer: (
            <p>
                خیر. این سامانه به‌گونه‌ای طراحی شده که پس از ثبت نمرات،
                فرآیند صدور کارنامه را <span className="text-indigo-700">ساده‌تر و سریع‌تر</span> کرده
                و فشار کاری کادر آموزشی را کاهش دهد.
            </p>
        ),
    },
    {
        question: "آیا این سامانه جایگزین سیستم فعلی مدرسه می‌شود؟",
        answer: (
            <p>
                خیر. سامانه به‌عنوان یک <span className="text-indigo-700">ابزار مکمل آموزشی</span> عمل می‌کند
                و بدون تداخل با سیستم‌های موجود، فقط فرآیند صدور کارنامه را بهبود می‌دهد.
            </p>
        ),
    },
    {
        question: "آیا سامانه فقط امکان چاپ کارنامه را دارد؟",
        answer: (
            <p>
                خیر. علاوه بر چاپ، امکان <span className="text-indigo-700">میزبانی آنلاین کارنامه‌ها</span> نیز وجود دارد.
                برای هر دانش‌آموز یک <span className="text-indigo-700">لینک اختصاصی</span> تولید می‌شود
                که این امکان را دارد تا به صورت اتوماتیک برای والدین ارسال شود.
            </p>
        ),
    },
    {
        question: "کارنامه‌ها در چه فرمتی ارائه می‌شوند؟",
        answer: (
            <p>
                کارنامه هر دانش‌آموز به صورت <span className="text-indigo-700">فایل PDF استاندارد </span>
                با کیفیت بالا و کاملاً مناسب چاپ در اختیار مدرسه قرار می‌گیرد.
            </p>
        ),
    },
    {
        question: "اندازه و ابعاد کارنامه‌ها چگونه است؟",
        answer: (
            <p>
                کارنامه‌ها به‌گونه‌ای طراحی شده‌اند که هم به‌صورت کامل در <span className="text-indigo-700">برگه A4 </span>
                و هم به‌صورت نیمه در <span className="text-indigo-700">برگه A5 </span> قابل چاپ باشند.
            </p>
        ),
    },
    {
        question: "آیا امکان شخصی‌سازی کارنامه با نام و لوگوی مدرسه وجود دارد؟",
        answer: (
            <p>
                بله. کارنامه‌ها می‌توانند با <span className="text-indigo-700">نام، لوگو و هویت بصری مدرسه </span>
                شما شخصی‌سازی شوند.
            </p>
        ),
    },
    {
        question: "آیا سامانه برای پایه نهم و دوازدهم مناسب است؟",
        answer: (
            <p>
                بله. سامانه به‌طور ویژه با تمرکز بر <span className="text-indigo-700">پایه نهم (انتخاب رشته) </span>
                و <span className="text-indigo-700">پایه دوازدهم (آمادگی ورود به دانشگاه) </span> طراحی شده است.
            </p>
        ),
    },
    {
        question: "اطلاعات دانش‌آموزان تا چه حد امن هستند؟",
        answer: (
            <p>
                امنیت و محرمانگی اطلاعات <span className="text-indigo-700">اولویت اصلی</span> ماست.
                اطلاعات صرفاً برای صدور کارنامه استفاده شده و در اختیار <span className="text-indigo-700">شخص ثالث </span> قرار نمی‌گیرد.
            </p>
        ),
    },
    {
        question: "آیا مدارس دولتی هم می‌توانند از این سامانه استفاده کنند؟",
        answer: (
            <p>
                بله. سامانه به‌گونه‌ای طراحی شده که بدون ایجاد تغییر در روندهای اداری مدرسه، به‌عنوان یک ابزار کمکی مورد استفاده قرار گیرد.
            </p>
        ),
    },
    {
        question: "آیا اجرای سامانه نیاز به تجهیزات یا زیرساخت خاصی دارد؟",
        answer: (
            <p>
                خیر. سامانه مبتنی بر وب است و تنها با یک مرورگر اینترنت قابل استفاده می‌باشد.
            </p>
        ),
    },
    {
        question: "آیا امکان استفاده از سامانه فقط برای دوره صدور کارنامه وجود دارد؟",
        answer: (
            <p>
                بله. مدارس می‌توانند صرفاً برای دوره‌ی صدور کارنامه از سامانه استفاده کنند، بدون الزام به استفاده دائمی.
            </p>
        ),
    },
    {
        question: "این سامانه چه تفاوتی در تجربه والدین ایجاد می‌کند؟",
        answer: (
            <p>
                والدین به‌جای دریافت یک کارنامه‌ی ساده، گزارش دقیق، خوانا و حرفه‌ای دریافت می‌کنند که تصویر بهتری از عملکرد تحصیلی فرزندشان ارائه می‌دهد.
            </p>
        ),
    },
    {
        question: "آیا سامانه به ارتقای جایگاه مدرسه کمک می‌کند؟",
        answer: (
            <p>
                بله. ارائه‌ی کارنامه‌های تحلیلی و حرفه‌ای، مدرسه را به‌عنوان یک مجموعه‌ی آینده‌نگر و دقیق معرفی می‌کند.
            </p>
        ),
    },
    {
        question: "آیا امکان ارائه کارنامه آنلاین برای والدین وجود دارد؟",
        answer: (
            <p>
                بله. هر کارنامه دارای لینک اختصاصی است که می‌تواند به‌صورت امن برای والدین ارسال شود.
            </p>
        ),
    },
    {
        question: "آیا سامانه برای مدارس با تعداد دانش‌آموز بالا مناسب است؟",
        answer: (
            <p>
                بله. سامانه برای مقیاس‌های مختلف طراحی شده و توانایی صدور هم‌زمان کارنامه برای تعداد بالای دانش‌آموزان را دارد.
            </p>
        ),
    },
];


const FaqList = () => {
    return (
        <div>
            <div className="mt-16 text-center">
                <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
                    سوالات متداول
                </h1>
                <p className="text-lg mt-4 text-slate-500 mx-auto max-w-xl">
                    پاسخ به سوالات متداول شما
                </p>
            </div>
            <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                {faqs.map((item) => (
                    <div className="py-5" key={item.question}>
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>{item.question}</span>
                                <span className="transition group-open:rotate-180 ">
                                    <svg
                                        fill="none"
                                        height="24"
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="text-neutral-600 mt-3 group-open:animate-fadeIn text-justify pl-10">
                                {item.answer}
                            </div>
                        </details>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqList;
