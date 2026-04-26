document.addEventListener("DOMContentLoaded", () => {

    // ── Reveal Animation ──
    const revealObserver = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 }
    );

    function observeAll() {
        document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-up").forEach(el => {
            revealObserver.observe(el);
        });
    }

    // ── Cards ──
    const grid = document.getElementById("classesGrid");
    const fallback = document.getElementById("fallbackGrid");
    const languageButtons = document.querySelectorAll('[data-filter-type="language"]');
    const levelButtons = document.querySelectorAll('[data-filter-type="level"]');

    let currentLanguage = "french";
    let currentLevel = "all";

    function createCard(course, cls) {
        const card = document.createElement("article");
        card.className = "course-card reveal-up";
        card.dataset.language = "french";
        card.dataset.level = course.id;

        card.innerHTML = `
            <div class="course-tags">
                <span>French</span>
                <span>${course.id.toUpperCase()}</span>
            </div>
            <div class="course-body">
                <div class="course-price">${cls.price || course.price || ""}</div>
                <h3>${cls.name}</h3>
                <p>${course.description || ""}</p>
                <div class="course-meta">
                    <span>${cls.duration || course.duration || ""}</span>
                    <span>${course.summaryLevel || ""}</span>
                    <span>${cls.format || course.format || ""}</span>
                </div>
                <div class="course-meta">
                    <span>${cls.schedule || ""}</span>
                </div>
            </div>
            <div class="course-footer">
                <a href="../register.html?level=${course.id}">Enroll →</a>
            </div>
        `;
        return card;
    }

    function render() {
        if (typeof coursesData === "undefined" || !Array.isArray(coursesData)) {
            console.error("coursesData not loaded or invalid.");
            return;
        }
        grid.innerHTML = "";
        if (fallback) fallback.style.display = "none";
        coursesData.forEach(course => {
            if (!course.classOptions) return;
            course.classOptions.forEach(cls => {
                grid.appendChild(createCard(course, cls));
            });
        });
    }

    function filterCards() {
        document.querySelectorAll(".course-card").forEach(card => {
            const langMatch = currentLanguage === "all" || card.dataset.language === currentLanguage;
            const levelMatch = currentLevel === "all" || card.dataset.level === currentLevel;
            card.classList.toggle("hidden", !(langMatch && levelMatch));
        });
    }

    languageButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            languageButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentLanguage = btn.dataset.filter;
            filterCards();
        });
    });

    levelButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            levelButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentLevel = btn.dataset.filter;
            filterCards();
        });
    });

    const params = new URLSearchParams(window.location.search);
    const levelFromUrl = params.get("level");
    if (levelFromUrl) {
        currentLevel = levelFromUrl;
        levelButtons.forEach(btn => {
            btn.classList.toggle("active", btn.dataset.filter === levelFromUrl);
        });
    }

    render();
    observeAll();
    filterCards();

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

            heroEyebrow: "Our Programs",
            heroText: "Explore our French programs designed for every stage of your learning journey.",

            filterLang: "Language:",
            filterLevel: "Level:",

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

            heroEyebrow: "برنامه‌های ما",
            heroText: "کلاس‌های فرانسه ما برای هر مرحله از مسیر یادگیری شما طراحی شده‌اند.",

            filterLang: "زبان:",
            filterLevel: "سطح:",

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

        const t = translations[lang];

        // Nav
        document.querySelector(".nav-home").textContent = t.navHome;
        document.querySelector(".nav-about").textContent = t.navAbout;
        document.querySelector(".nav-classes").textContent = t.navClasses;
        document.querySelector(".nav-placement").textContent = t.navPlacement;
        document.querySelector(".nav-sample").textContent = t.navSample;
        document.querySelector(".nav-contact").textContent = t.navContact;
        const reg = document.querySelector(".nav-register-btn");
        if (reg) reg.textContent = t.navRegister;

        // Hero
        const eyebrow = document.querySelector(".classes-hero .eyebrow");
        if (eyebrow) eyebrow.textContent = t.heroEyebrow;
        const heroText = document.querySelector(".classes-hero .hero-text");
        if (heroText) heroText.textContent = t.heroText;

        // Filters
        const filterGroups = document.querySelectorAll(".filter-group span");
        if (filterGroups[0]) filterGroups[0].textContent = t.filterLang;
        if (filterGroups[1]) filterGroups[1].textContent = t.filterLevel;

        // Footer
        const footerLogo = document.querySelector(".footer-logo");
        if (footerLogo) footerLogo.innerHTML = t.footerLogo;
        const footerDesc = document.querySelector(".footer-desc");
        if (footerDesc) footerDesc.textContent = t.footerDesc;
        document.querySelector(".footer-quick-title").textContent = t.footerQuick;
        document.querySelector(".footer-levels-title").textContent = t.footerLevels;
        document.querySelector(".footer-contact-title").textContent = t.footerContact;
        document.querySelector(".footer-main-link").textContent = t.footerMain;
        document.querySelector(".footer-about-link").textContent = t.footerAbout;
        document.querySelector(".footer-classes-link").textContent = t.footerClasses;
        document.querySelector(".footer-placement-link").textContent = t.footerPlacement;
        const sampleLink = document.querySelector(".footer-sample-link");
        if (sampleLink) sampleLink.textContent = t.footerSample;
        document.querySelector(".footer-contact-link").textContent = t.footerFooterContact;
        document.querySelector(".footer-exam-text").textContent = t.footerExam;
        document.querySelector(".footer-address").textContent = t.footerAddress;
        document.querySelector(".footer-copy").innerHTML = t.footerCopy;
        document.querySelector(".privacy-link").textContent = t.privacy;
        document.querySelector(".terms-link").textContent = t.terms;

        localStorage.setItem("siteLanguage", lang);
    }

    if (langToggle && langDropdown) {
        langToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle("show");
        });

        document.addEventListener("click", (e) => {
            if (!e.target.closest(".language-switcher")) {
                langDropdown.classList.remove("show");
            }
        });
    }

    langOptions.forEach(option => {
        option.addEventListener("click", () => {
            setLanguage(option.dataset.lang);
            langDropdown.classList.remove("show");
        });
    });

    const savedLanguage = localStorage.getItem("siteLanguage") || "en";
    setLanguage(savedLanguage);
});