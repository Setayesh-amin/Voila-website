document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".reveal, .reveal-up");

    if (elements.length) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        elements.forEach(el => observer.observe(el));
    }

    const toggle = document.querySelector(".lang-toggle");
    const dropdown = document.querySelector(".lang-dropdown");
    const langOptions = document.querySelectorAll(".lang-option");

    const translations = {
        en: {
            title: "Sample Classes",
            navHome: "Home",
            navAbout: "About",
            navClasses: "Classes",
            navPlacement: "Placement Test",
            navSample: "Sample Class",
            navContact: "Contact",
            navRegister: "Register",
            heroEyebrow: "Try Before You Join",
            heroTitle: 'Sample <span class="accent-italic">Classes</span>',
            heroSubtitle: "Experience our teaching quality firsthand with real class samples.",
            placeholder: "Sample video coming soon",
            cardTitle1: "Teacher Sogand",
            cardText1: "French teacher",
            cardTitle2: "Teacher Atefeh Gharibshah",
            cardText2: "French teacher",
            cardTitle3: "Teacher Sobhan",
            cardText3: "French teacher",
            cardTitle4: "Teacher Amir",
            cardText4: "French teacher",
            youtubeLink: "YouTube link coming soon",
            youtubeWatch: "Watch on YouTube",
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
            title: "کلاس نمونه",
            navHome: "خانه",
            navAbout: "درباره ما",
            navClasses: "کلاس‌ها",
            navPlacement: "تعیین سطح",
            navSample: "کلاس نمونه",
            navContact: "تماس",
            navRegister: "ثبت‌نام",
            heroEyebrow: "قبل از ثبت‌نام ببینید",
            heroTitle: 'کلاس‌های <span class="accent-italic">نمونه</span>',
            heroSubtitle: "کیفیت تدریس ما را از نزدیک با نمونه کلاس‌های واقعی تجربه کنید.",
            placeholder: "ویدیوی نمونه به‌زودی اضافه می‌شود",
            cardTitle1: "مدرس سوگند",
            cardText1: "مدرس زبان فرانسه",
            cardTitle2: "مدرس عاطفه قریب شاه",
            cardText2: "مدرس زبان فرانسه",
            cardTitle3: "مدرس سبحان",
            cardText3: "مدرس زبان فرانسه",
            cardTitle4: "مدرس امیر",
            cardText4: "مدرس زبان فرانسه",
            youtubeLink: "لینک یوتیوب به‌زودی اضافه می‌شود",
            youtubeWatch: "تماشا در یوتیوب",
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

    function setText(selector, value) {
        const element = document.querySelector(selector);
        if (element && value !== undefined) element.textContent = value;
    }

    function setHtml(selector, value) {
        const element = document.querySelector(selector);
        if (element && value !== undefined) element.innerHTML = value;
    }

    function setLanguage(lang) {
        const t = translations[lang] || translations.en;

        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
        document.title = t.title;

        setText(".nav-home", t.navHome);
        setText(".nav-about", t.navAbout);
        setText(".nav-classes", t.navClasses);
        setText(".nav-placement", t.navPlacement);
        setText(".nav-sample", t.navSample);
        setText(".nav-contact", t.navContact);
        setText(".nav-register-btn", t.navRegister);

        setText(".sample-eyebrow", t.heroEyebrow);
        setHtml(".sample-title", t.heroTitle);
        setText(".sample-subtitle", t.heroSubtitle);
        setText(".video-placeholder-text-1", t.placeholder);
        setText(".video-placeholder-text-2", t.placeholder);
        setText(".video-placeholder-text-3", t.placeholder);
        setText(".video-placeholder-text-4", t.placeholder);
        setText(".sample-card-title-1", t.cardTitle1);
        setText(".sample-card-text-1", t.cardText1);
        setText(".sample-card-title-2", t.cardTitle2);
        setText(".sample-card-text-2", t.cardText2);
        setText(".sample-card-title-3", t.cardTitle3);
        setText(".sample-card-text-3", t.cardText3);
        setText(".sample-card-title-4", t.cardTitle4);
        setText(".sample-card-text-4", t.cardText4);
        setText(".youtube-link-1", t.youtubeLink);
        setText(".youtube-link-2", t.youtubeWatch);
        setText(".youtube-link-3", t.youtubeLink);
        setText(".youtube-link-4", t.youtubeLink);

        setHtml(".footer-logo", t.footerLogo);
        setText(".footer-desc", t.footerDesc);
        setText(".footer-quick-title", t.footerQuick);
        setText(".footer-levels-title", t.footerLevels);
        setText(".footer-contact-title", t.footerContact);
        setText(".footer-main-link", t.footerMain);
        setText(".footer-about-link", t.footerAbout);
        setText(".footer-classes-link", t.footerClasses);
        setText(".footer-placement-link", t.footerPlacement);
        setText(".footer-sample-link", t.footerSample);
        setText(".footer-contact-link", t.footerFooterContact);
        setText(".footer-exam-text", t.footerExam);
        setText(".footer-address", t.footerAddress);
        setHtml(".footer-copy", t.footerCopy);
        setText(".privacy-link", t.privacy);
        setText(".terms-link", t.terms);

        localStorage.setItem("siteLanguage", lang);
    }

    if (toggle && dropdown) {
        toggle.addEventListener("click", (e) => {
            e.stopPropagation();
            dropdown.classList.toggle("show");
        });

        document.addEventListener("click", (e) => {
            if (!e.target.closest(".language-switcher")) {
                dropdown.classList.remove("show");
            }
        });
    }

    langOptions.forEach((option) => {
        option.addEventListener("click", () => {
            setLanguage(option.dataset.lang);
            if (dropdown) dropdown.classList.remove("show");
        });
    });

    const savedLanguage = localStorage.getItem("siteLanguage") || "en";
    setLanguage(savedLanguage);
});
