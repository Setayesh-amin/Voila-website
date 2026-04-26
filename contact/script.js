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
            title: "Contact",
            navHome: "Home",
            navAbout: "About",
            navClasses: "Classes",
            navPlacement: "Placement Test",
            navSample: "Sample Class",
            navContact: "Contact",

            heroEyebrow: "Get In Touch",
            heroTitle: 'Contact <span class="accent-italic">Us</span>',
            heroSubtitle: "Have questions about our programs? We're here to help.",

            infoTitle: "Voilà Language Studio",
            infoText: "Visit us or reach out through any of the channels below. We typically respond within 24 hours.",
            addressLabel: "Address",
            phoneLabel: "Phone",
            emailLabel: "Email",
            hoursLabel: "Office Hours",
            addressValue: "Mel Lastman Sq., North York, Toronto",
            hoursValue: "Mon–Fri: 9:00 AM – 8:00 PM\nSat: 9:00 AM – 2:00 PM",
            followUs: "Follow Us",

            formTitle: "Send a Message",
            formSubtitle: "We'd love to hear from you.",
            fullName: "Full Name *",
            email: "Email *",
            phone: "Phone",
            subject: "Subject",
            message: "Message *",
            messagePlaceholder: "How can we help?",
            submitBtn: "Send Message",
            successMessage: "Your message was sent successfully.",

            mapText: "Mel Lastman Sq., North York, Toronto",

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
            title: "تماس",
            navHome: "خانه",
            navAbout: "درباره ما",
            navClasses: "کلاس‌ها",
            navPlacement: "تعیین سطح",
            navSample: "کلاس نمونه",
            navContact: "تماس",

            heroEyebrow: "در تماس باشید",
            heroTitle: 'تماس <span class="accent-italic">با ما</span>',
            heroSubtitle: "اگر درباره برنامه‌ها سوالی دارید، اینجاییم که کمک کنیم.",

            infoTitle: "<bdi dir=&quot;ltr&quot;>Voilà Language Studio</bdi>",
            infoText: "از طریق راه‌های زیر با ما در تماس باشید. معمولاً ظرف ۲۴ ساعت پاسخ می‌دهیم.",
            addressLabel: "آدرس",
            phoneLabel: "تلفن",
            emailLabel: "ایمیل",
            hoursLabel: "ساعات کاری",
            addressValue: "مل لستمن اسکوئر، نورث یورک، تورنتو",
            hoursValue: "دوشنبه تا جمعه: ۹ صبح تا ۸ شب\nشنبه: ۹ صبح تا ۲ بعدازظهر",
            followUs: "ما را دنبال کنید",

            formTitle: "ارسال پیام",
            formSubtitle: "خوشحال می‌شویم از شما بشنویم.",
            fullName: "نام کامل *",
            email: "ایمیل *",
            phone: "تلفن",
            subject: "موضوع",
            message: "پیام *",
            messagePlaceholder: "چطور می‌توانیم کمک کنیم؟",
            submitBtn: "ارسال پیام",
            successMessage: "پیام شما با موفقیت ارسال شد.",

            mapText: "مل لستمن اسکوئر، نورث یورک، تورنتو",

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

    function setText(selector, value) {
        const element = document.querySelector(selector);
        if (element && value !== undefined) element.textContent = value;
    }

    function setHtml(selector, value) {
        const element = document.querySelector(selector);
        if (element && value !== undefined) element.innerHTML = value;
    }

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
        const t = translations[lang] || translations.en;

        document.title = t.title;

        setText(".nav-home", t.navHome);
        setText(".nav-about", t.navAbout);
        setText(".nav-classes", t.navClasses);
        setText(".nav-placement", t.navPlacement);
        setText(".nav-sample", t.navSample);
        setText(".nav-contact", t.navContact);

        setText(".contact-eyebrow", t.heroEyebrow);
        setHtml(".contact-title", t.heroTitle);
        setText(".contact-subtitle", t.heroSubtitle);

        setHtml(".info-title", t.infoTitle);
        setText(".info-text", t.infoText);
        setText(".info-label-address", t.addressLabel);
        setText(".info-label-phone", t.phoneLabel);
        setText(".info-label-email", t.emailLabel);
        setText(".info-label-hours", t.hoursLabel);
        setText(".info-address", t.addressValue);
        setHtml(".info-hours", t.hoursValue.replace("\n", "<br>"));
        setText(".follow-label", t.followUs);

        setText('label[for="fullName"]', t.fullName);
        setText('label[for="email"]', t.email);
        setText('label[for="phone"]', t.phone);
        setText('label[for="subject"]', t.subject);
        setText('label[for="message"]', t.message);

        setText(".form-title", t.formTitle);
        setText(".form-subtitle", t.formSubtitle);
        setText(".submit-btn", t.submitBtn);

        const messageField = document.getElementById("message");
        if (messageField) messageField.placeholder = t.messagePlaceholder;

        setHtml(".footer-logo", t.footerLogo);
        setText(".footer-quick-title", t.footerQuick);
        setText(".footer-levels-title", t.footerLevels);
        setText(".footer-contact-title", t.footerContact);
        setText(".footer-main-link", t.footerMain);
        setText(".footer-about-link", t.footerAbout);
        setText(".footer-classes-link", t.footerClasses);
        setText(".footer-placement-link", t.footerPlacement);
        setText(".footer-sample-link", t.footerSample);
        setText(".footer-contact-link", t.footerFooterContact);
        setText(".footer-desc", t.footerDesc);
        setText(".footer-exam-text", t.footerExam);
        setText(".footer-address", t.footerAddress);
        setHtml(".footer-copy", t.footerCopy);
        setText(".privacy-link", t.privacy);
        setText(".terms-link", t.terms);

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

    const contactForm = document.getElementById("contactForm");
    const contactMessage = document.getElementById("contactMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", async(e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            contactMessage.textContent = "Sending..."; // یا معادل فارسی: در حال ارسال...
            contactMessage.style.color = "#666";

            try {
                const response = await fetch(contactForm.action, {
                    method: "POST",
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    contactMessage.textContent = "Message sent! We'll contact you soon.";
                    contactMessage.style.color = "green";
                    contactForm.reset();
                } else {
                    throw new Error();
                }
            } catch (error) {
                contactMessage.textContent = "Oops! There was a problem sending your message.";
                contactMessage.style.color = "red";
            }
        });
    }
    const savedLanguage = localStorage.getItem("siteLanguage") || "en";
    setLanguage(savedLanguage);
});
