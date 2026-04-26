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
            }, {
                threshold: 0.15,
            }
        );

        animatedElements.forEach((el) => observer.observe(el));
    }

    const langToggle = document.querySelector(".lang-toggle");
    const langDropdown = document.querySelector(".lang-dropdown");
    const langOptions = document.querySelectorAll(".lang-option");

    const translations = {
        en: {
            title: "About Us",
            navHome: "Home",
            navAbout: "About",
            navClasses: "Classes",
            navPlacement: "Placement Test",
            navSample: "Sample Class",
            navContact: "Contact",
            navRegister: "Register",

            heroEyebrow: "About Us",
            heroTitle: 'The Story Behind <span class="accent-italic">Voilà</span>',
            heroText: "A modern French learning experience built to make fluency feel clear, personal, and achievable",

            story1: "Voilà was created with one clear goal: to make French learning feel more human, practical, and motivating. We believe students learn best when they feel comfortable, supported, and genuinely engaged - not overwhelmed by rigid, outdated methods.",
            story2: "Our approach focuses on communication, confidence, and real progress. Instead of memorizing without purpose, students at Voilà learn how to actually use French in meaningful situations, step by step, with clarity and structure.",
            story3: "Whether you are starting from zero, rebuilding your foundation, or preparing for an exam, Voilà is designed to help you grow with confidence in an environment that feels warm, focused, and effective.",

            valuesEyebrow: "What Drives Us",
            valuesTitle: 'Mission & <span class="accent-italic">Values</span>',
            missionTitle: "Our Mission",
            missionText: "To help students build real confidence in French through clear teaching, practical communication, and a supportive learning environment.",
            visionTitle: "Our Vision",
            visionText: "To create a modern French learning space where students feel understood, motivated, and capable of reaching lasting fluency.",
            approachTitle: "Our Approach",
            approachText: "We teach French through communication, structure, and consistency - combining strong foundations with real-life usage so students can speak with more ease and accuracy.",
            promiseTitle: "Our Promise",
            promiseText: "Every student receives thoughtful guidance, honest feedback, and a learning experience that respects their pace, goals, and personality.",

            teamEyebrow: "Our Team",
            teamTitle: 'Meet the <span class="accent-italic">Teachers</span>',
            teacherName1: "Sogand Fardeamin",
            teacherName2: "Atefeh Gharib Shah",
            teacherName3: "Sobhan Alizadeh",
            teacherName4: "Amir Radaii",
            role1: "Founder of Voilà",
            role2: "French Teacher",
            role3: "French Teacher",
            role4: "French Teacher",
            teacherBio1: "Sogand founded Voilà with a clear vision: to create a warm, structured, and inspiring space where students can build confidence in French step by step.",
            teacherBio2: "Atefeh brings patience, clarity, and practical guidance to every lesson, helping students feel supported as they grow their speaking and grammar skills.",
            teacherBio3: "Sobhan focuses on clear explanations and active communication, making French lessons approachable, organized, and useful for real situations.",
            teacherBio4: "Amir helps students strengthen their foundations with focused practice, steady feedback, and a friendly teaching style that keeps learning moving.",

            differenceEyebrow: "The Voilà Difference",
            differenceTitle: 'Why We\'re <span class="accent-italic">Different</span>',
            differenceText1: "At Voilà, learning French is not about passive studying - it is about building the confidence to actually use the language. We focus on communication, clarity, and steady progress, so students always understand what they are learning and why it matters.",
            differenceText2: "We do not believe in cold, one-size-fits-all teaching. Our lessons are designed to feel supportive, interactive, and goal-oriented, helping each student move forward with more confidence, motivation, and fluency.",

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
            title: "درباره ما",
            navHome: "خانه",
            navAbout: "درباره ما",
            navClasses: "کلاس‌ها",
            navPlacement: "تعیین سطح",
            navSample: "کلاس نمونه",
            navContact: "تماس با ما",
            navRegister: "ثبت‌نام",

            heroEyebrow: "درباره ما",
            heroTitle: 'داستان پشت <span class="accent-italic"><bdi dir=&quot;ltr&quot;>Voilà</bdi></span>',
            heroText: "یک تجربه مدرن برای یادگیری زبان فرانسه که روان صحبت کردن را ساده، شخصی و قابل دستیابی می‌کند",

            story1: "<bdi dir=&quot;ltr&quot;>Voilà</bdi> با یک هدف مشخص ساخته شد: اینکه یادگیری زبان فرانسه انسانی‌تر، کاربردی‌تر و انگیزه‌بخش‌تر باشد. ما باور داریم دانش‌آموزان زمانی بهترین یادگیری را دارند که احساس راحتی، حمایت و درگیری واقعی داشته باشند - نه اینکه با روش‌های خشک و قدیمی تحت فشار قرار بگیرند.",
            story2: "رویکرد ما بر ارتباط، اعتماد به نفس و پیشرفت واقعی تمرکز دارد. به‌جای حفظ کردن بدون هدف، زبان‌آموزان در <bdi dir=&quot;ltr&quot;>Voilà</bdi> یاد می‌گیرند که چگونه فرانسه را در موقعیت‌های واقعی و معنادار، قدم‌به‌قدم با وضوح و ساختار استفاده کنند.",
            story3: "چه از صفر شروع کنید، چه بخواهید پایه‌های خود را تقویت کنید یا برای آزمونی آماده شوید، <bdi dir=&quot;ltr&quot;>Voilà</bdi> طوری طراحی شده که در فضایی گرم، متمرکز و مؤثر، با اعتماد به نفس رشد کنید.",

            valuesEyebrow: "آنچه ما را پیش می‌برد",
            valuesTitle: 'ماموریت و <span class="accent-italic">ارزش‌ها</span>',
            missionTitle: "ماموریت ما",
            missionText: "کمک به زبان‌آموزان برای ساختن اعتماد به نفس واقعی در زبان فرانسه از طریق آموزش شفاف، ارتباط کاربردی و محیطی حمایتی.",
            visionTitle: "چشم‌انداز ما",
            visionText: "ایجاد فضایی مدرن برای یادگیری زبان فرانسه که در آن زبان‌آموزان احساس درک شدن، انگیزه و توانایی رسیدن به تسلط واقعی داشته باشند.",
            approachTitle: "رویکرد ما",
            approachText: "ما فرانسه را از طریق ارتباط، ساختار و استمرار آموزش می‌دهیم - ترکیبی از پایه‌های قوی و کاربرد در دنیای واقعی تا زبان‌آموزان راحت‌تر و دقیق‌تر صحبت کنند.",
            promiseTitle: "تعهد ما",
            promiseText: "هر زبان‌آموز راهنمایی دقیق، بازخورد صادقانه و تجربه‌ای دریافت می‌کند که با سرعت، هدف‌ها و شخصیت او هماهنگ است.",

            teamEyebrow: "تیم ما",
            teamTitle: 'آشنایی با <span class="accent-italic">مدرسان</span>',
            teacherName1: "سوگند فردامین",
            teacherName2: "عاطفه قریب شاه",
            teacherName3: "سبحان علیزاده",
            teacherName4: "امیر ردایی",
            role1: "بنیان‌گذار <bdi dir=&quot;ltr&quot;>Voilà</bdi>",
            role2: "مدرس زبان فرانسه",
            role3: "مدرس زبان فرانسه",
            role4: "مدرس زبان فرانسه",
            teacherBio1: "سوگند، <bdi dir=&quot;ltr&quot;>Voilà Language Studio</bdi> را با این نگاه پایه‌گذاری کرد که یادگیری فرانسه باید گرم، منظم و انگیزه‌بخش باشد؛ فضایی که زبان‌آموزان قدم‌به‌قدم با اعتماد به نفس جلو بروند.",
            teacherBio2: "عاطفه با صبر، شفافیت و راهنمایی کاربردی در هر جلسه به زبان‌آموزان کمک می‌کند تا در مکالمه و گرامر احساس امنیت و پیشرفت بیشتری داشته باشند.",
            teacherBio3: "سبحان روی توضیح‌های روشن و ارتباط فعال تمرکز دارد و کلاس‌های فرانسه را قابل فهم، منظم و کاربردی برای موقعیت‌های واقعی پیش می‌برد.",
            teacherBio4: "امیر به زبان‌آموزان کمک می‌کند پایه‌های خود را با تمرین هدفمند، بازخورد مستمر و فضایی دوستانه تقویت کنند.",

            differenceEyebrow: "تفاوت <bdi dir=&quot;ltr&quot;>Voilà</bdi>",
            differenceTitle: 'چرا ما <span class="accent-italic">متفاوت هستیم</span>',
            differenceText1: "در <bdi dir=&quot;ltr&quot;>Voilà</bdi>، یادگیری فرانسه فقط مطالعه‌ی تئوری نیست - بلکه ساختن اعتماد به نفس برای استفاده واقعی از زبان است. ما روی ارتباط، وضوح و پیشرفت تدریجی تمرکز داریم تا زبان‌آموز همیشه بداند چه چیزی را یاد می‌گیرد و چرا مهم است.",
            differenceText2: "ما به آموزش‌های سرد و یکسان برای همه اعتقادی نداریم. کلاس‌های ما طوری طراحی شده‌اند که حمایتی، تعاملی و هدف‌محور باشند و هر زبان‌آموز را با اعتماد به نفس، انگیزه و تسلط بیشتر به جلو ببرند.",

            footerQuick: "لینک‌های سریع",
            footerLevels: "سطوح",
            footerContact: "تماس",
            footerMain: "صفحه اصلی",
            footerAbout: "درباره ما",
            footerClasses: "کلاس‌ها",
            footerPlacement: "تعیین سطح",
            footerSample: "کلاس نمونه",
            footerFooterContact: "تماس با ما",
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
        const t = translations[lang] || translations.en;

        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
        document.title = t.title;

        setText(".nav-links a:nth-child(1)", t.navHome);
        setText(".nav-links a:nth-child(2)", t.navAbout);
        setText(".nav-links a:nth-child(3)", t.navClasses);
        setText(".nav-links a:nth-child(4)", t.navPlacement);
        setText(".nav-links a:nth-child(5)", t.navSample);
        setText(".nav-links a:nth-child(6)", t.navContact);
        setText(".nav-register-btn", t.navRegister);

        setText(".about-hero .eyebrow", t.heroEyebrow);
        setHtml(".about-hero h1", t.heroTitle);
        setText(".hero-text", t.heroText);

        setHtml(".story-1", t.story1);
        setHtml(".story-2", t.story2);
        setHtml(".story-3", t.story3);

        setText(".values-eyebrow", t.valuesEyebrow);
        setHtml(".values-title", t.valuesTitle);
        setText(".mission-title", t.missionTitle);
        setText(".mission-text", t.missionText);
        setText(".vision-title", t.visionTitle);
        setText(".vision-text", t.visionText);
        setText(".approach-title", t.approachTitle);
        setText(".approach-text", t.approachText);
        setText(".promise-title", t.promiseTitle);
        setText(".promise-text", t.promiseText);

        setText(".team-eyebrow", t.teamEyebrow);
        setHtml(".team-title", t.teamTitle);
        setText(".teacher-name-1", t.teacherName1);
        setText(".teacher-name-2", t.teacherName2);
        setText(".teacher-name-3", t.teacherName3);
        setText(".teacher-name-4", t.teacherName4);
        setHtml(".role-1", t.role1);
        setText(".role-2", t.role2);
        setText(".role-3", t.role3);
        setText(".role-4", t.role4);
        setHtml(".teacher-bio-1", t.teacherBio1);
        setText(".teacher-bio-2", t.teacherBio2);
        setText(".teacher-bio-3", t.teacherBio3);
        setText(".teacher-bio-4", t.teacherBio4);

        setHtml(".difference-eyebrow", t.differenceEyebrow);
        setHtml(".difference-title", t.differenceTitle);
        setHtml(".difference-text-1", t.differenceText1);
        setText(".difference-text-2", t.differenceText2);

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

    langOptions.forEach((option) => {
        option.addEventListener("click", () => {
            const selectedLang = option.dataset.lang;
            setLanguage(selectedLang);
            if (langDropdown) langDropdown.classList.remove("show");
        });
    });

    const savedLanguage = localStorage.getItem("siteLanguage") || "en";
    setLanguage(savedLanguage);
});
