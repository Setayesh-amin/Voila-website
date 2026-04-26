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

    const toggleBtn = document.querySelector(".lang-toggle");
    const dropdown = document.querySelector(".lang-dropdown");
    const langOptions = document.querySelectorAll(".lang-option");

    const translations = {
        en: {
            title: "Placement Test",
            navHome: "Home",
            navAbout: "About",
            navClasses: "Classes",
            navPlacement: "Placement Test",
            navSample: "Sample Class",
            navContact: "Contact",

            heroEyebrow: "Assessment",
            heroTitle: 'Placement <span class="accent-italic">Test</span>',
            heroSubtitle: "Find your perfect starting point. Our placement test helps us recommend the right class for you.",

            processEyebrow: "Process",
            processTitle: 'How It <span class="accent-italic">Works</span>',
            step1Label: "Step 1",
            step1Title: "Submit Request",
            step1Text: "Fill out the form below with your details and preferred language.",
            step2Label: "Step 2",
            step2Title: "Take the Test",
            step2Text: "Complete a short written or oral assessment so we can place you accurately.",
            step3Label: "Step 3",
            step3Title: "Get Your Level",
            step3Text: "We’ll recommend the most suitable class and next step for your learning journey.",

            formTitle: "Request Your Test",
            formSubtitle: "Fill in your details and we’ll arrange your placement assessment.",
            fullName: "Full Name *",
            email: "Email *",
            phone: "Phone",
            language: "Language *",
            currentLevel: "Current Level",
            preferredDate: "Preferred Date",
            labelTime: "Preferred Time Slot",
            selectTime: "Select a time range",
            notes: "Additional Notes",
            selectLanguage: "Select language",
            selfAssessment: "Self-assessment",
            notesPlaceholder: "Any specific goals or concerns...",
            submitBtn: "Submit Request",
            successMessage: "Your request was submitted successfully.",
            loadingMessage: "Submitting...",
            errorMessage: "Submission failed.",

            footerQuick: "Quick Links",
            footerLevels: "Levels",
            footerContact: "Contact",
            footerMain: "Main",
            footerAbout: "About Us",
            footerClasses: "Classes",
            footerPlacement: "Placement Test",
            footerSample: "Sample Class",
            footerFooterContact: "Contact",
            footerLogo: "Voilà <span>Language Studio</span>",
            footerDesc: "Excellence in language education. We believe in the transformative power of learning.",
            footerExam: "Exam Preparation",
            footerAddress: "Mel Lastman Sq., North York, Toronto",
            footerCopy: "© 2026 Voilà Language Studio. All rights reserved.",
            privacy: "Privacy Policy",
            terms: "Terms"
        },

        fa: {
            title: "تعیین سطح",
            navHome: "خانه",
            navAbout: "درباره ما",
            navClasses: "کلاس‌ها",
            navPlacement: "تعیین سطح",
            navSample: "کلاس نمونه",
            navContact: "تماس",

            heroEyebrow: "ارزیابی",
            heroTitle: 'آزمون <span class="accent-italic">تعیین سطح</span>',
            heroSubtitle: "نقطه شروع مناسب خودت را پیدا کن. این ارزیابی به ما کمک می‌کند کلاس درست را به تو پیشنهاد بدهیم.",

            processEyebrow: "مراحل",
            processTitle: 'روند <span class="accent-italic">کار</span>',
            step1Label: "مرحله ۱",
            step1Title: "ارسال درخواست",
            step1Text: "فرم زیر را با اطلاعات خودت و زبان موردنظرت پر کن.",
            step2Label: "مرحله ۲",
            step2Title: "انجام ارزیابی",
            step2Text: "یک ارزیابی کوتاه کتبی یا شفاهی انجام می‌دهی تا سطح تو دقیق‌تر مشخص شود.",
            step3Label: "مرحله ۳",
            step3Title: "دریافت نتیجه",
            step3Text: "ما مناسب‌ترین کلاس و قدم بعدی را به تو پیشنهاد می‌کنیم.",

            formTitle: "درخواست آزمون",
            formSubtitle: "اطلاعاتت را وارد کن تا ارزیابی تعیین سطح را برایت هماهنگ کنیم.",
            fullName: "نام کامل *",
            email: "ایمیل *",
            phone: "تلفن",
            language: "زبان *",
            currentLevel: "سطح فعلی",
            preferredDate: "تاریخ ترجیحی",
            labelTime: "بازه زمانی ترجیحی",
            selectTime: "یک بازه زمانی انتخاب کنید",
            notes: "توضیحات بیشتر",
            selectLanguage: "انتخاب زبان",
            selfAssessment: "ارزیابی شخصی",
            notesPlaceholder: "هدف یا نکته خاصی داری؟",
            submitBtn: "ارسال درخواست",
            successMessage: "درخواست شما با موفقیت ثبت شد.",
            loadingMessage: "در حال ارسال...",
            errorMessage: "ارسال انجام نشد.",

            footerQuick: "لینک‌های سریع",
            footerLevels: "سطوح",
            footerContact: "تماس",
            footerMain: "صفحه اصلی",
            footerAbout: "درباره ما",
            footerClasses: "کلاس‌ها",
            footerPlacement: "تعیین سطح",
            footerSample: "کلاس نمونه",
            footerFooterContact: "تماس",
            footerLogo: '<bdi dir=&quot;ltr&quot;>Voilà <span>Language Studio</span></bdi>',
            footerDesc: "آموزش زبان با کیفیت. ما به قدرت تحول‌آفرین یادگیری باور داریم.",
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
        document.title = translations[lang].title;

        document.querySelector(".label-time").textContent = translations[lang].labelTime;
        document.querySelector(".option-select-time").textContent = translations[lang].selectTime;

        document.querySelector(".nav-home").textContent = translations[lang].navHome;
        document.querySelector(".nav-about").textContent = translations[lang].navAbout;
        document.querySelector(".nav-classes").textContent = translations[lang].navClasses;
        document.querySelector(".nav-placement").textContent = translations[lang].navPlacement;
        document.querySelector(".nav-sample").textContent = translations[lang].navSample;
        document.querySelector(".nav-contact").textContent = translations[lang].navContact;

        document.querySelector(".placement-eyebrow").textContent = translations[lang].heroEyebrow;
        document.querySelector(".placement-title").innerHTML = translations[lang].heroTitle;
        document.querySelector(".placement-subtitle").textContent = translations[lang].heroSubtitle;

        document.querySelector(".process-eyebrow").textContent = translations[lang].processEyebrow;
        document.querySelector(".process-title").innerHTML = translations[lang].processTitle;
        document.querySelector(".step-1-label").textContent = translations[lang].step1Label;
        document.querySelector(".step-1-title").textContent = translations[lang].step1Title;
        document.querySelector(".step-1-text").textContent = translations[lang].step1Text;
        document.querySelector(".step-2-label").textContent = translations[lang].step2Label;
        document.querySelector(".step-2-title").textContent = translations[lang].step2Title;
        document.querySelector(".step-2-text").textContent = translations[lang].step2Text;
        document.querySelector(".step-3-label").textContent = translations[lang].step3Label;
        document.querySelector(".step-3-title").textContent = translations[lang].step3Title;
        document.querySelector(".step-3-text").textContent = translations[lang].step3Text;

        document.querySelector(".form-title").textContent = translations[lang].formTitle;
        document.querySelector(".form-subtitle").textContent = translations[lang].formSubtitle;
        document.querySelector(".label-name").textContent = translations[lang].fullName;
        document.querySelector(".label-email").textContent = translations[lang].email;
        document.querySelector(".label-phone").textContent = translations[lang].phone;
        document.querySelector(".label-language").textContent = translations[lang].language;
        document.querySelector(".label-level").textContent = translations[lang].currentLevel;
        document.querySelector(".label-date").textContent = translations[lang].preferredDate;
        document.querySelector(".label-notes").textContent = translations[lang].notes;
        document.querySelector(".option-select-language").textContent = translations[lang].selectLanguage;
        document.querySelector(".option-self-assessment").textContent = translations[lang].selfAssessment;
        document.querySelector(".notes-placeholder").placeholder = translations[lang].notesPlaceholder;
        document.querySelector(".form-submit-btn").textContent = translations[lang].submitBtn;

        document.querySelector(".footer-quick-title").textContent = translations[lang].footerQuick;
        document.querySelector(".footer-levels-title").textContent = translations[lang].footerLevels;
        document.querySelector(".footer-contact-title").textContent = translations[lang].footerContact;
        document.querySelector(".footer-main-link").textContent = translations[lang].footerMain;
        document.querySelector(".footer-about-link").textContent = translations[lang].footerAbout;
        document.querySelector(".footer-classes-link").textContent = translations[lang].footerClasses;
        document.querySelector(".footer-placement-link").textContent = translations[lang].footerPlacement;
        document.querySelector(".footer-sample-link").textContent = translations[lang].footerSample;
        document.querySelector(".footer-contact-link").textContent = translations[lang].footerFooterContact;
        document.querySelector(".footer-logo").innerHTML = translations[lang].footerLogo;
        document.querySelector(".footer-desc").textContent = translations[lang].footerDesc;
        document.querySelector(".footer-exam-text").textContent = translations[lang].footerExam;
        document.querySelector(".footer-address").textContent = translations[lang].footerAddress;
        document.querySelector(".footer-copy").innerHTML = translations[lang].footerCopy;
        document.querySelector(".privacy-link").textContent = translations[lang].privacy;
        document.querySelector(".terms-link").textContent = translations[lang].terms;

        localStorage.setItem("siteLanguage", lang);
    }

    if (toggleBtn && dropdown) {
        toggleBtn.addEventListener("click", (e) => {
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
            const selectedLang = option.dataset.lang;
            setLanguage(selectedLang);
            dropdown.classList.remove("show");
        });
    });

    const placementForm = document.getElementById("placementForm");
    const formMessage = document.getElementById("formMessage");

    if (placementForm) {
        placementForm.addEventListener("submit", async(e) => {
            e.preventDefault();

            const savedLanguage = localStorage.getItem("siteLanguage") || "en";
            const formData = new FormData(placementForm); // استفاده از FormData برای Formspree راحت‌تر است

            try {
                formMessage.textContent = translations[savedLanguage].loadingMessage;
                formMessage.style.color = "#666";

                const response = await fetch("https://formspree.io/f/xwvarrvd", {
                    method: "POST",
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formMessage.textContent = translations[savedLanguage].successMessage;
                    formMessage.style.color = "green";
                    placementForm.reset();
                } else {
                    const data = await response.json();
                    throw new Error(data.error || translations[savedLanguage].errorMessage);
                }
            } catch (error) {
                formMessage.textContent = translations[savedLanguage].errorMessage;
                formMessage.style.color = "red";
                console.error(error);
            }
        });
    }
    const savedLanguage = localStorage.getItem("siteLanguage") || "en";
    setLanguage(savedLanguage);
});
