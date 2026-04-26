document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-up"
    );

    if (animatedElements.length) {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 }
        );
        animatedElements.forEach((el) => observer.observe(el));
    }

    // ── Testimonial Slider ──
    const track = document.querySelector(".testimonial-track");
    const cards = document.querySelectorAll(".testimonial-card");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");

    if (track && cards.length && nextBtn && prevBtn) {
        let index = 0;

        function getVisibleCards() {
            if (window.innerWidth <= 640) return 1;
            if (window.innerWidth <= 992) return 2;
            return 3;
        }

        function getCardWidth() {
            return cards[0].offsetWidth + 24;
        }

        function updateSlider() {
            track.style.transform = `translateX(-${index * getCardWidth()}px)`;
        }

        nextBtn.addEventListener("click", () => {
            if (index < cards.length - getVisibleCards()) index++;
            else index = 0;
            updateSlider();
        });

        prevBtn.addEventListener("click", () => {
            if (index > 0) index--;
            else index = cards.length - getVisibleCards();
            updateSlider();
        });

        let startX = 0;
        track.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; });
        track.addEventListener("touchend", (e) => {
            const diff = startX - e.changedTouches[0].clientX;
            if (diff > 50) nextBtn.click();
            else if (diff < -50) prevBtn.click();
        });

        window.addEventListener("resize", () => {
            const vis = getVisibleCards();
            if (index > cards.length - vis) index = Math.max(cards.length - vis, 0);
            updateSlider();
        });

        updateSlider();
    }

    // ── Language Switcher ──
    const langToggle = document.querySelector(".lang-toggle");
    const langDropdown = document.querySelector(".lang-dropdown");
    const langOptions = document.querySelectorAll(".lang-option");

    const translations = {
        en: {
            navHome: "Home",
            navAbout: "About",
            navClasses: "Classes",
            navPlacement: "Placement Test",
            navSample: "Sample Class",
            navContact: "Contact",
            navRegister: "Register",

            heroTitle: 'From Zero to Fluent in <span class="accent-italic">French</span>',
            heroBtn1: "Explore Classes",
            heroBtn2: "Take Placement Test",

            aboutEyebrow: "Who We Are",
            aboutTitle: 'Not just a language class, <span class="accent-italic">a complete experience</span>',
            aboutText: "Our programs are designed to help you succeed in French exams and move forward with your immigration goals. With small classes (maximum 10 students), expert instructors, and continuous support, you'll build real confidence in speaking and understanding French. And the best part? High-quality learning, at a price that makes sense.",

            stat1Label: "Years of Excellence",
            stat2Label: "Students",
            stat3Label: "Different Schedules",
            stat4Label: "Student Satisfaction",

            featuresEyebrow: "Our Advantages",
            featuresTitle: 'Why Choose <span class="accent-italic">Voilà</span>',
            feature1Title: "Small Class Sizes",
            feature1Text: "Maximum 10 students per class means personalized attention and stronger progress.",
            feature2Title: "Proven Methodology",
            feature2Text: "Our curriculum blends communication, structure, and fluency-building practice.",
            feature3Title: "Certified Instructors",
            feature3Text: "Every instructor is experienced, supportive, and committed to meaningful outcomes.",
            feature4Title: "Flexible Learning",
            feature4Text: "Choose online or in-person classes — group or private — designed to fit your schedule and learning style.",

            classesEyebrow: "Popular Now",
            classesTitle: 'Featured <span class="accent-italic">Classes</span>',
            classesLink: "View All Classes →",
            class1Title: "A1 | Beginner",
            class1Text: "Start from zero and build your foundation in French. Learn basic vocabulary, simple sentences, and everyday communication.",
            class2Title: "A2 | Elementary",
            class2Text: "Strengthen your basics and start expressing yourself more confidently. Understand common conversations and speak in simple situations.",
            class3Title: "B1 | Intermediate",
            class3Text: "Develop fluency and handle real-life conversations with ease. Improve grammar, expand vocabulary, and speak more naturally.",
            class4Title: "Exam Preparation (TEF/TCF)",
            class4Text: "Get fully prepared for French exams and boost your PR chances. Focused practice, strategies, and real exam simulations.",
            class1Meta1: "12 Weeks",
            class1Meta2: "Beginner",
            class1Meta3: "In-Person | Online",
            class2Meta1: "12 Weeks",
            class2Meta2: "Elementary",
            class2Meta3: "In-Person | Online",
            class3Meta1: "9 Weeks",
            class3Meta2: "Intermediate",
            class3Meta3: "In-Person | Online",
            class4Meta1: "5 Weeks",
            class4Meta2: "Upper-Intermediate",
            class4Meta3: "In-Person | Online",

            testimonialsEyebrow: "Testimonials",
            testimonialsTitle: "What Students Say",
            t1: '"The conversation practice is incredibly helpful. It makes learning feel natural and engaging."',
            t2: '"The classes are practical, interactive, and completely stress-free. I actually enjoy learning French."',
            t3: '"Being able to speak in class, participate in activities, and get immediate feedback on pronunciation and grammar is extremely valuable."',
            t4: '"The classes are very interactive — everyone participates, and it never feels like a one-sided lecture."',
            t5: '"The teacher explains key points clearly and always encourages us to speak and participate."',
            t6: '"The instructor is patient, supportive, and highly organized. You can really feel the progress."',

            faqEyebrow: "FAQ",
            faqTitle: 'Common <span class="accent-italic">Questions</span>',
            faq1Q: "How do I know which level is right for me?",
            faq1A: "We recommend taking our placement test before registering so we can match you with the right class.",
            faq2Q: "What is the class size?",
            faq2A: "Most small-group classes are capped at 10 students to preserve quality and interaction.",
            faq3Q: "Can I switch between online and in-person classes?",
            faq3A: "Yes. Depending on availability, we can usually place you in a format that suits your schedule.",
            faq4Q: "What can you tell me about your instructors and teaching experience?",
            faq4A: "Our instructors have several years of experience teaching French in both Iran and Canada. They hold advanced certifications and focus on practical teaching to help you speak with confidence.",
            faq5Q: "How long does it take to reach B2 from zero?",
            faq5A: "With consistent study around 2 hours per day, you should expect at least one year to reach a B2 level.",
            faq6Q: "Can I get a refund if I need to cancel?",
            faq6A: "Refund policies depend on the class type and the time of cancellation.",

            ctaTitle: 'Start Your French <span class="accent-italic">Journey Today</span>',
            ctaText: "Take the first step toward fluency. Whether you are a complete beginner or refining advanced skills, there is a class for you.",
            ctaBtn1: "Register Now",
            ctaBtn2: "Try a Free Class",

            footerLogo: "Voilà <span>Language Studio</span>",
            footerDesc: "Excellence in language education. We believe in the transformative power of learning.",
            footerQuick: "Quick Links",
            footerLevels: "Levels",
            footerContact: "Contact",
            footerMain: "Main",
            footerAbout: "About Us",
            footerClasses: "Classes",
            footerPlacement: "Placement Test",
            footerSample: "Sample Class",
            footerFooterContact: "Contact",
            footerExam: "Exam Preparation",
            footerAddress: "Mel Lastman Sq., North York, Toronto",
            footerCopy: "© 2026 Voilà Language Studio. All rights reserved.",
            privacy: "Privacy Policy",
            terms: "Terms"
        },

        fa: {
            navHome: "خانه",
            navAbout: "درباره ما",
            navClasses: "کلاس‌ها",
            navPlacement: "تعیین سطح",
            navSample: "کلاس نمونه",
            navContact: "تماس",
            navRegister: "ثبت‌نام",

            heroTitle: 'از صفر تا تسلط در <span class="accent-italic">فرانسه</span>',
            heroBtn1: "دیدن کلاس‌ها",
            heroBtn2: "تعیین سطح",

            aboutEyebrow: "ما که هستیم",
            aboutTitle: 'فقط یک کلاس زبان نیست، <span class="accent-italic">یک تجربه کامل است</span>',
            aboutText: "برنامه‌های ما طوری طراحی شده‌اند که به شما کمک کنند در آزمون‌های فرانسه موفق شوید و برای اهداف مهاجرتی خود پیش بروید. با کلاس‌های کوچک، مدرس‌های حرفه‌ای و پشتیبانی مداوم، واقعاً در صحبت کردن و فهمیدن فرانسه اعتمادبه‌نفس پیدا می‌کنید. و بهترین بخش؟ آموزش باکیفیت با قیمتی منطقی.",

            stat1Label: "سال تجربه",
            stat2Label: "زبان‌آموز",
            stat3Label: "برنامه زمانی مختلف",
            stat4Label: "رضایت زبان‌آموزان",

            featuresEyebrow: "مزیت‌های ما",
            featuresTitle: 'چرا <span class="accent-italic"><bdi dir=&quot;ltr&quot;>Voilà</bdi></span>؟',
            feature1Title: "کلاس‌های کم‌جمعیت",
            feature1Text: "حداکثر ۱۰ زبان‌آموز در هر کلاس یعنی توجه بیشتر و پیشرفت بهتر.",
            feature2Title: "متد آموزشی مؤثر",
            feature2Text: "برنامه درسی ما ترکیبی از ارتباط، ساختار و تمرین روان‌سازی زبان است.",
            feature3Title: "مدرس‌های حرفه‌ای",
            feature3Text: "همه مدرس‌ها باتجربه، حمایتگر و متعهد به نتیجه واقعی هستند.",
            feature4Title: "یادگیری منعطف",
            feature4Text: "کلاس‌های آنلاین یا حضوری، گروهی یا خصوصی، متناسب با زمان‌بندی و سبک یادگیری شما.",

            classesEyebrow: "محبوب‌ترین‌ها",
            classesTitle: 'کلاس‌های <span class="accent-italic">ویژه</span>',
            classesLink: "دیدن همه کلاس‌ها ←",
            class1Title: "A1 | مبتدی",
            class1Text: "از صفر شروع کنید و پایه فرانسه را بسازید. واژگان پایه، جمله‌های ساده و ارتباط روزمره را یاد بگیرید.",
            class2Title: "A2 | مقدماتی",
            class2Text: "پایه‌های خود را قوی‌تر کنید و با اعتمادبه‌نفس بیشتری صحبت کنید.",
            class3Title: "B1 | متوسط",
            class3Text: "روانی خود را تقویت کنید و مکالمات واقعی را راحت‌تر مدیریت کنید.",
            class4Title: "آمادگی آزمون (TEF/TCF)",
            class4Text: "برای آزمون‌های فرانسه کاملاً آماده شوید و شانس PR خود را بالا ببرید.",
            class1Meta1: "۱۲ هفته",
            class1Meta2: "مبتدی",
            class1Meta3: "حضوری | آنلاین",
            class2Meta1: "۱۲ هفته",
            class2Meta2: "مقدماتی",
            class2Meta3: "حضوری | آنلاین",
            class3Meta1: "۹ هفته",
            class3Meta2: "متوسط",
            class3Meta3: "حضوری | آنلاین",
            class4Meta1: "۵ هفته",
            class4Meta2: "متوسط رو به بالا",
            class4Meta3: "حضوری | آنلاین",

            testimonialsEyebrow: "نظرات",
            testimonialsTitle: "زبان‌آموزان چه می‌گویند",
            t1: "«تمرین مکالمه واقعاً خیلی کمک‌کننده است. باعث می‌شود یادگیری طبیعی و جذاب باشد.»",
            t2: "«کلاس‌ها کاربردی، تعاملی و کاملاً بدون استرس هستند. واقعاً از یادگیری فرانسه لذت می‌برم.»",
            t3: "«اینکه در کلاس صحبت می‌کنیم، در فعالیت‌ها شرکت می‌کنیم و بازخورد فوری می‌گیریم واقعاً ارزشمند است.»",
            t4: "«کلاس‌ها خیلی تعاملی هستند و اصلاً حس سخنرانی یک‌طرفه نمی‌دهند.»",
            t5: "«مدرس نکات مهم را خیلی واضح توضیح می‌دهد و همیشه ما را به صحبت کردن تشویق می‌کند.»",
            t6: "«مدرس صبور، حمایتگر و بسیار منظم است. واقعاً می‌شود پیشرفت را حس کرد.»",

            faqEyebrow: "سوالات متداول",
            faqTitle: 'سوالات <span class="accent-italic">رایج</span>',
            faq1Q: "از کجا بفهمم چه سطحی برای من مناسب است؟",
            faq1A: "پیشنهاد می‌کنیم قبل از ثبت‌نام تعیین سطح بدهید تا شما را در کلاس مناسب قرار دهیم.",
            faq2Q: "تعداد زبان‌آموزان هر کلاس چقدر است؟",
            faq2A: "بیشتر کلاس‌های گروهی ما حداکثر ۱۰ نفره هستند تا کیفیت و تعامل حفظ شود.",
            faq3Q: "می‌توانم بین کلاس آنلاین و حضوری جابه‌جا شوم؟",
            faq3A: "بله، بسته به ظرفیت معمولاً می‌توانیم شما را در فرمتی قرار دهیم که با برنامه‌تان هماهنگ باشد.",
            faq4Q: "درباره مدرس‌ها و تجربه تدریسشان چه می‌توانید بگویید؟",
            faq4A: "مدرس‌های ما چندین سال تجربه تدریس فرانسه در ایران و کانادا دارند و با رویکردی کاربردی به شما کمک می‌کنند با اعتمادبه‌نفس صحبت کنید.",
            faq5Q: "از صفر تا B2 چقدر زمان می‌برد؟",
            faq5A: "اگر روزانه حدود ۲ ساعت مطالعه مداوم داشته باشید، حداقل حدود یک سال زمان نیاز دارید.",
            faq6Q: "اگر بخواهم کنسل کنم، امکان بازگشت وجه هست؟",
            faq6A: "سیاست بازگشت وجه به نوع کلاس و زمان لغو بستگی دارد.",

            ctaTitle: 'مسیر <span class="accent-italic">فرانسه</span> را از امروز شروع کن',
            ctaText: "اولین قدم را برای رسیدن به تسلط بردار. چه کاملاً مبتدی باشی و چه بخواهی مهارتت را بالاتر ببری، برایت کلاسی هست.",
            ctaBtn1: "ثبت‌نام",
            ctaBtn2: "کلاس آزمایشی رایگان",

            footerLogo: '<bdi dir=&quot;ltr&quot;>Voilà <span>Language Studio</span></bdi>',
            footerDesc: "آموزش زبان با کیفیت. ما به قدرت تحول‌آفرین یادگیری باور داریم.",
            footerQuick: "لینک‌های سریع",
            footerLevels: "سطوح",
            footerContact: "تماس",
            footerMain: "صفحه اصلی",
            footerAbout: "درباره ما",
            footerClasses: "کلاس‌ها",
            footerPlacement: "تعیین سطح",
            footerSample: "کلاس نمونه",
            footerFooterContact: "تماس",
            footerExam: "آمادگی آزمون",
            footerAddress: "مل لستمن اسکوئر، نورث یورک، تورنتو",
            footerCopy: "© 2026 <bdi dir=&quot;ltr&quot;>Voilà Language Studio</bdi>. تمامی حقوق محفوظ است.",
            privacy: "حریم خصوصی",
            terms: "قوانین"
        }
    };

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";

        // ── Nav ──
        document.querySelector(".nav-home").textContent = translations[lang].navHome;
        document.querySelector(".nav-about").textContent = translations[lang].navAbout;
        document.querySelector(".nav-classes").textContent = translations[lang].navClasses;
        document.querySelector(".nav-placement").textContent = translations[lang].navPlacement;
        document.querySelector(".nav-sample").textContent = translations[lang].navSample;
        document.querySelector(".nav-contact").textContent = translations[lang].navContact;
        const registerBtn = document.querySelector(".nav-register-btn");
        if (registerBtn) registerBtn.textContent = translations[lang].navRegister;

        // ── Hero ──
        document.querySelector(".hero-title").innerHTML = translations[lang].heroTitle;
        document.querySelector(".hero-btn-1").textContent = translations[lang].heroBtn1;
        document.querySelector(".hero-btn-2").textContent = translations[lang].heroBtn2;

        // ── About ──
        document.querySelector(".about-eyebrow").textContent = translations[lang].aboutEyebrow;
        document.querySelector(".about-title").innerHTML = translations[lang].aboutTitle;
        document.querySelector(".about-text").textContent = translations[lang].aboutText;
        document.querySelector(".stat-1-label").textContent = translations[lang].stat1Label;
        document.querySelector(".stat-2-label").textContent = translations[lang].stat2Label;
        document.querySelector(".stat-3-label").textContent = translations[lang].stat3Label;
        document.querySelector(".stat-4-label").textContent = translations[lang].stat4Label;

        // ── Features ──
        document.querySelector(".features-eyebrow").textContent = translations[lang].featuresEyebrow;
        document.querySelector(".features-title").innerHTML = translations[lang].featuresTitle;
        document.querySelector(".feature-1-title").textContent = translations[lang].feature1Title;
        document.querySelector(".feature-1-text").textContent = translations[lang].feature1Text;
        document.querySelector(".feature-2-title").textContent = translations[lang].feature2Title;
        document.querySelector(".feature-2-text").textContent = translations[lang].feature2Text;
        document.querySelector(".feature-3-title").textContent = translations[lang].feature3Title;
        document.querySelector(".feature-3-text").textContent = translations[lang].feature3Text;
        document.querySelector(".feature-4-title").textContent = translations[lang].feature4Title;
        document.querySelector(".feature-4-text").textContent = translations[lang].feature4Text;

        // ── Classes ──
        document.querySelector(".classes-eyebrow").textContent = translations[lang].classesEyebrow;
        document.querySelector(".classes-title").innerHTML = translations[lang].classesTitle;
        document.querySelector(".classes-link").textContent = translations[lang].classesLink;
        document.querySelector(".class-1-title").textContent = translations[lang].class1Title;
        document.querySelector(".class-1-text").textContent = translations[lang].class1Text;
        document.querySelector(".class-2-title").textContent = translations[lang].class2Title;
        document.querySelector(".class-2-text").textContent = translations[lang].class2Text;
        document.querySelector(".class-3-title").textContent = translations[lang].class3Title;
        document.querySelector(".class-3-text").textContent = translations[lang].class3Text;
        document.querySelector(".class-4-title").textContent = translations[lang].class4Title;
        document.querySelector(".class-4-text").textContent = translations[lang].class4Text;
        document.querySelector(".class-1-meta-1").textContent = translations[lang].class1Meta1;
        document.querySelector(".class-1-meta-2").textContent = translations[lang].class1Meta2;
        document.querySelector(".class-1-meta-3").textContent = translations[lang].class1Meta3;
        document.querySelector(".class-2-meta-1").textContent = translations[lang].class2Meta1;
        document.querySelector(".class-2-meta-2").textContent = translations[lang].class2Meta2;
        document.querySelector(".class-2-meta-3").textContent = translations[lang].class2Meta3;
        document.querySelector(".class-3-meta-1").textContent = translations[lang].class3Meta1;
        document.querySelector(".class-3-meta-2").textContent = translations[lang].class3Meta2;
        document.querySelector(".class-3-meta-3").textContent = translations[lang].class3Meta3;
        document.querySelector(".class-4-meta-1").textContent = translations[lang].class4Meta1;
        document.querySelector(".class-4-meta-2").textContent = translations[lang].class4Meta2;
        document.querySelector(".class-4-meta-3").textContent = translations[lang].class4Meta3;

        // ── Testimonials ──
        document.querySelector(".testimonials-eyebrow").textContent = translations[lang].testimonialsEyebrow;
        document.querySelector(".testimonials-title").textContent = translations[lang].testimonialsTitle;
        document.querySelector(".testimonial-1-text").textContent = translations[lang].t1;
        document.querySelector(".testimonial-2-text").textContent = translations[lang].t2;
        document.querySelector(".testimonial-3-text").textContent = translations[lang].t3;
        document.querySelector(".testimonial-4-text").textContent = translations[lang].t4;
        document.querySelector(".testimonial-5-text").textContent = translations[lang].t5;
        document.querySelector(".testimonial-6-text").textContent = translations[lang].t6;

        // ── FAQ ──
        document.querySelector(".faq-eyebrow").textContent = translations[lang].faqEyebrow;
        document.querySelector(".faq-title").innerHTML = translations[lang].faqTitle;
        document.querySelector(".faq-1-q").textContent = translations[lang].faq1Q;
        document.querySelector(".faq-1-a").textContent = translations[lang].faq1A;
        document.querySelector(".faq-2-q").textContent = translations[lang].faq2Q;
        document.querySelector(".faq-2-a").textContent = translations[lang].faq2A;
        document.querySelector(".faq-3-q").textContent = translations[lang].faq3Q;
        document.querySelector(".faq-3-a").textContent = translations[lang].faq3A;
        document.querySelector(".faq-4-q").textContent = translations[lang].faq4Q;
        document.querySelector(".faq-4-a").textContent = translations[lang].faq4A;
        document.querySelector(".faq-5-q").textContent = translations[lang].faq5Q;
        document.querySelector(".faq-5-a").textContent = translations[lang].faq5A;
        document.querySelector(".faq-6-q").textContent = translations[lang].faq6Q;
        document.querySelector(".faq-6-a").textContent = translations[lang].faq6A;

        // ── CTA ──
        document.querySelector(".cta-title").innerHTML = translations[lang].ctaTitle;
        document.querySelector(".cta-text").textContent = translations[lang].ctaText;
        document.querySelector(".cta-btn-1").textContent = translations[lang].ctaBtn1;
        document.querySelector(".cta-btn-2").textContent = translations[lang].ctaBtn2;

        // ── Footer ──
        document.querySelector(".footer-logo").innerHTML = translations[lang].footerLogo;
        document.querySelector(".footer-desc").textContent = translations[lang].footerDesc;
        document.querySelector(".footer-quick-title").textContent = translations[lang].footerQuick;
        document.querySelector(".footer-levels-title").textContent = translations[lang].footerLevels;
        document.querySelector(".footer-contact-title").textContent = translations[lang].footerContact;
        document.querySelector(".footer-main-link").textContent = translations[lang].footerMain;
        document.querySelector(".footer-about-link").textContent = translations[lang].footerAbout;
        document.querySelector(".footer-classes-link").textContent = translations[lang].footerClasses;
        document.querySelector(".footer-placement-link").textContent = translations[lang].footerPlacement;
        const sampleLink = document.querySelector(".footer-sampleClasses-link, .footer-sample-link");
        if (sampleLink) sampleLink.textContent = translations[lang].footerSample;
        document.querySelector(".footer-contact-link").textContent = translations[lang].footerFooterContact;
        document.querySelector(".footer-exam-text").textContent = translations[lang].footerExam;
        document.querySelector(".footer-address").textContent = translations[lang].footerAddress;
        document.querySelector(".footer-copy").innerHTML = translations[lang].footerCopy;
        document.querySelector(".privacy-link").textContent = translations[lang].privacy;
        document.querySelector(".terms-link").textContent = translations[lang].terms;

        localStorage.setItem("siteLanguage", lang);
    }

    if (langToggle && langDropdown) {
        langToggle.addEventListener("click", () => langDropdown.classList.toggle("show"));
        document.addEventListener("click", (e) => {
            if (!e.target.closest(".language-switcher")) langDropdown.classList.remove("show");
        });
    }

    langOptions.forEach((option) => {
        option.addEventListener("click", () => {
            setLanguage(option.dataset.lang);
            langDropdown.classList.remove("show");
        });
    });

    const savedLanguage = localStorage.getItem("siteLanguage") || "en";
    setLanguage(savedLanguage);
});
