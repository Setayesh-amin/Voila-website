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

    const courseSelect = document.getElementById("course");
    const classOptionGroup = document.getElementById("classOptionGroup");
    const classOptionSelect = document.getElementById("classOption");
    const notesField = document.getElementById("notes");

    const summaryDefault = document.getElementById("summaryDefault");
    const summaryContent = document.getElementById("summaryContent");
    const summaryCourseTitle = document.getElementById("summaryCourseTitle");
    const summaryCourseText = document.getElementById("summaryCourseText");
    const summaryDuration = document.getElementById("summaryDuration");
    const summaryLevel = document.getElementById("summaryLevel");
    const summaryFormat = document.getElementById("summaryFormat");
    const summarySchedule = document.getElementById("summarySchedule");
    const summaryPrice = document.getElementById("summaryPrice");

    const registrationForm = document.getElementById("registrationForm");
    const formMessage = document.getElementById("formMessage");

    const translations = {
        en: {
            title: "Registration",
            navHome: "Home",
            navAbout: "About",
            navClasses: "Classes",
            navPlacement: "Placement Test",
            navSample: "Sample Class",
            navContact: "Contact",
            navRegister: "Register",

            heroEyebrow: "Enrollment",
            heroTitle: 'Register <span class="accent-italic">Now</span>',
            heroSubtitle: "Secure your spot in one of our language programs. Complete the form below to begin your enrollment.",

            formTitle: "Enrollment Form",
            formSubtitle: "Fill in your details to register for a course.",
            fullName: "Full Name *",
            email: "Email *",
            phone: "Phone",
            course: "Select Course *",
            classOption: "Available Class *",
            notes: "Notes",
            selectCourse: "Choose a course",
            selectClass: "Choose a class option",
            noClassAvailable: "No class available right now",
            notesPlaceholder: "Any special requests or questions...",
            submitBtn: "Complete Registration",
            successMessage: "Redirecting to secure payment...",

            summaryTitle: "Course Summary",
            summaryDefault: "Select a course to see the summary.",

            duration: "Duration",
            level: "Level",
            format: "Format",
            schedule: "Schedule",
            price: "Price",

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
            terms: "Terms",
            classSummaryText: "Selected class option for your enrollment."
        },

        fa: {
            title: "ثبت‌نام",
            navHome: "خانه",
            navAbout: "درباره ما",
            navClasses: "کلاس‌ها",
            navPlacement: "تعیین سطح",
            navSample: "کلاس نمونه",
            navContact: "تماس",
            navRegister: "ثبت‌نام",

            heroEyebrow: "ثبت‌نام",
            heroTitle: 'همین حالا <span class="accent-italic">ثبت‌نام کن</span>',
            heroSubtitle: "جای خودت را در یکی از برنامه‌های زبانی ما رزرو کن. فرم زیر را کامل کن تا ثبت‌نامت شروع شود.",

            formTitle: "فرم ثبت‌نام",
            formSubtitle: "اطلاعاتت را وارد کن تا برای یک دوره ثبت‌نام شوی.",
            fullName: "نام کامل *",
            email: "ایمیل *",
            phone: "تلفن",
            course: "انتخاب دوره *",
            classOption: "کلاس‌های موجود *",
            notes: "توضیحات",
            selectCourse: "یک دوره انتخاب کنید",
            selectClass: "یک گزینه کلاس انتخاب کنید",
            noClassAvailable: "فعلاً کلاسی برای این سطح موجود نیست",
            notesPlaceholder: "درخواست یا سوال خاصی داری؟",
            submitBtn: "تکمیل ثبت‌نام",
            successMessage: "در حال انتقال به درگاه پرداخت امن...",

            summaryTitle: "خلاصه دوره",
            summaryDefault: "برای دیدن خلاصه، یک دوره انتخاب کنید.",

            duration: "مدت",
            level: "سطح",
            format: "فرمت",
            schedule: "زمان‌بندی",
            price: "هزینه",

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
            terms: "قوانین",
            classSummaryText: "کلاس انتخاب‌شده برای ثبت‌نام شما."
        }
    };

    function getCurrentLanguage() {
        return localStorage.getItem("siteLanguage") || "en";
    }

    function setText(selector, value) {
        const element = document.querySelector(selector);
        if (element && value !== undefined) element.textContent = value;
    }

    function setHtml(selector, value) {
        const element = document.querySelector(selector);
        if (element && value !== undefined) element.innerHTML = value;
    }

    const courseTranslations = {
        fa: {
            a1: {
                title: "A1 | مبتدی",
                description: "از صفر شروع کنید و پایه زبان فرانسه خود را بسازید.",
                duration: "۱۲ هفته",
                summaryLevel: "مبتدی",
                format: "حضوری | آنلاین",
                classOptions: {
                    "a1-mon": {
                        name: "کلاس دوشنبه",
                        schedule: "دوشنبه‌ها - ساعت ۶ عصر",
                        duration: "۱۲ هفته",
                        format: "حضوری"
                    },
                    "a1-wed": {
                        name: "آنلاین چهارشنبه",
                        schedule: "چهارشنبه‌ها - ساعت ۷ عصر",
                        duration: "۱۲ هفته",
                        format: "آنلاین"
                    }
                }
            },
            a2: {
                title: "A2 | مقدماتی",
                description: "پایه‌های خود را تقویت کنید و با اعتمادبه‌نفس بیشتری صحبت کنید.",
                duration: "۱۲ هفته",
                summaryLevel: "مقدماتی",
                format: "حضوری | آنلاین",
                classOptions: {
                    "a2-tue": {
                        name: "کلاس سه‌شنبه",
                        schedule: "سه‌شنبه‌ها - ساعت ۶ عصر",
                        duration: "۱۲ هفته",
                        format: "حضوری"
                    }
                }
            },
            b1: {
                title: "B1 | متوسط",
                description: "روانی و مهارت مکالمه در موقعیت‌های واقعی را تقویت کنید.",
                duration: "۹ هفته",
                summaryLevel: "متوسط",
                format: "حضوری | آنلاین",
                classOptions: {
                    "b1-thu": {
                        name: "آنلاین پنجشنبه",
                        schedule: "پنجشنبه‌ها - ساعت ۶ عصر",
                        duration: "۹ هفته",
                        format: "آنلاین"
                    }
                }
            },
            exam: {
                title: "آمادگی آزمون (TEF/TCF)",
                description: "آمادگی هدفمند برای آزمون‌های زبان فرانسه.",
                duration: "۵ هفته",
                summaryLevel: "متوسط رو به بالا",
                format: "آنلاین",
                classOptions: {
                    "exam-sat": {
                        name: "کلاس فشرده شنبه",
                        schedule: "شنبه‌ها - ساعت ۱۰ صبح",
                        duration: "۵ هفته",
                        format: "آنلاین"
                    }
                }
            }
        }
    };

    function getCourseText(course, field) {
        const lang = getCurrentLanguage();
        return courseTranslations[lang]?.[course.id]?.[field] || course[field] || "";
    }

    function getClassText(course, cls, field) {
        const lang = getCurrentLanguage();
        return courseTranslations[lang]?.[course.id]?.classOptions?.[cls.id]?.[field] || cls[field] || "";
    }

    function setLanguage(lang) {
        const t = translations[lang] || translations.en;

        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
        document.title = t.title;
        localStorage.setItem("siteLanguage", lang);

        setText(".nav-home", t.navHome);
        setText(".nav-about", t.navAbout);
        setText(".nav-classes", t.navClasses);
        setText(".nav-placement", t.navPlacement);
        setText(".nav-sample", t.navSample);
        setText(".nav-contact", t.navContact);
        setText(".nav-register-btn", t.navRegister);

        setText(".register-eyebrow", t.heroEyebrow);
        setHtml(".register-title", t.heroTitle);
        setText(".register-subtitle", t.heroSubtitle);

        setText(".form-title", t.formTitle);
        setText(".form-subtitle", t.formSubtitle);
        setText(".label-name", t.fullName);
        setText(".label-email", t.email);
        setText(".label-phone", t.phone);
        setText(".label-course", t.course);
        setText(".label-class-option", t.classOption);
        setText(".label-notes", t.notes);
        setText(".form-submit-btn", t.submitBtn);
        if (notesField) notesField.placeholder = t.notesPlaceholder;

        setText(".summary-title", t.summaryTitle);

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

        loadCourses();
        resetClassOptions();
        resetSummary();
    }

    function resetClassOptions() {
        if (!classOptionSelect || !classOptionGroup) return;

        classOptionSelect.innerHTML = `<option value="">${translations[getCurrentLanguage()].selectClass}</option>`;
        classOptionGroup.style.display = "none";
        classOptionSelect.required = false;
    }

    function resetSummary() {
        if (!summaryDefault || !summaryContent) return;

        summaryDefault.style.display = "block";
        summaryDefault.textContent = translations[getCurrentLanguage()].summaryDefault;
        summaryContent.classList.remove("active");

        summaryCourseTitle.textContent = "";
        summaryCourseText.textContent = "";
        summaryDuration.textContent = "";
        summaryLevel.textContent = "";
        summaryFormat.textContent = "";
        summarySchedule.textContent = "";
        summaryPrice.textContent = "";
    }

    function showSummary(data) {
        const lang = getCurrentLanguage();

        summaryDefault.style.display = "none";
        summaryContent.classList.add("active");

        summaryCourseTitle.textContent = data.title || "";
        summaryCourseText.textContent = data.description || data.text || "";
        summaryDuration.textContent = `${translations[lang].duration}: ${data.duration || ""}`;
        summaryLevel.textContent = `${translations[lang].level}: ${data.summaryLevel || data.level || ""}`;
        summaryFormat.textContent = `${translations[lang].format}: ${data.format || ""}`;
        summarySchedule.textContent = data.schedule ? `${translations[lang].schedule}: ${data.schedule}` : "";
        summaryPrice.textContent = `${translations[lang].price}: ${data.price || ""}`;
    }

    function loadCourses() {
        if (!courseSelect || typeof coursesData === "undefined" || !Array.isArray(coursesData)) return;

        const currentValue = courseSelect.value;

        courseSelect.innerHTML = `<option value="">${translations[getCurrentLanguage()].selectCourse}</option>`;

        coursesData.forEach(course => {
            const option = document.createElement("option");
            option.value = course.id;
            option.textContent = getCourseText(course, "title");
            courseSelect.appendChild(option);
        });

        if ([...courseSelect.options].some(option => option.value === currentValue)) {
            courseSelect.value = currentValue;
        }
    }

    function loadClasses(courseId) {
        if (typeof coursesData === "undefined" || !Array.isArray(coursesData)) return;

        const course = coursesData.find(c => c.id === courseId);

        classOptionSelect.innerHTML = `<option value="">${translations[getCurrentLanguage()].selectClass}</option>`;

        if (!course) {
            classOptionGroup.style.display = "none";
            classOptionSelect.required = false;
            return;
        }

        const classOptions = Array.isArray(course.classOptions) ? course.classOptions : [];

        if (!classOptions.length) {
            classOptionGroup.style.display = "flex";
            classOptionSelect.innerHTML = `<option value="">${translations[getCurrentLanguage()].noClassAvailable}</option>`;
            classOptionSelect.required = false;
            return;
        }

        classOptions.forEach(cls => {
            const option = document.createElement("option");
            option.value = cls.id;
            option.textContent = `${getClassText(course, cls, "name")} | ${getClassText(course, cls, "schedule")}`;
            classOptionSelect.appendChild(option);
        });

        classOptionGroup.style.display = "flex";
        classOptionSelect.required = true;
    }

    function handleCourseChange() {
        if (typeof coursesData === "undefined" || !Array.isArray(coursesData)) return;

        const selectedCourse = coursesData.find(course => course.id === courseSelect.value);

        if (!selectedCourse) {
            resetClassOptions();
            resetSummary();
            return;
        }

        loadClasses(selectedCourse.id);

        showSummary({
            title: getCourseText(selectedCourse, "title"),
            description: getCourseText(selectedCourse, "description"),
            duration: getCourseText(selectedCourse, "duration"),
            summaryLevel: getCourseText(selectedCourse, "summaryLevel"),
            format: getCourseText(selectedCourse, "format"),
            price: selectedCourse.price || ""
        });
    }

    function handleClassChange() {
        if (typeof coursesData === "undefined" || !Array.isArray(coursesData)) return;

        const selectedCourse = coursesData.find(course => course.id === courseSelect.value);

        if (!selectedCourse) {
            resetSummary();
            return;
        }

        if (!classOptionSelect.value) {
            showSummary({
                title: getCourseText(selectedCourse, "title"),
                description: getCourseText(selectedCourse, "description"),
                duration: getCourseText(selectedCourse, "duration"),
                summaryLevel: getCourseText(selectedCourse, "summaryLevel"),
                format: getCourseText(selectedCourse, "format"),
                price: selectedCourse.price || ""
            });
            return;
        }

        const selectedClass = (selectedCourse.classOptions || []).find(
            cls => cls.id === classOptionSelect.value
        );

        if (!selectedClass) return;

        showSummary({
            title: getClassText(selectedCourse, selectedClass, "name") || getCourseText(selectedCourse, "title"),
            text: translations[getCurrentLanguage()].classSummaryText,
            duration: getClassText(selectedCourse, selectedClass, "duration") || getCourseText(selectedCourse, "duration"),
            level: getCourseText(selectedCourse, "summaryLevel"),
            format: getClassText(selectedCourse, selectedClass, "format") || getCourseText(selectedCourse, "format"),
            schedule: getClassText(selectedCourse, selectedClass, "schedule"),
            price: selectedClass.price || selectedCourse.price || ""
        });
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

    if (courseSelect) courseSelect.addEventListener("change", handleCourseChange);
    if (classOptionSelect) classOptionSelect.addEventListener("change", handleClassChange);

    if (registrationForm) {
        registrationForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const selectedCourse = coursesData.find(course => course.id === courseSelect.value);
            if (!selectedCourse) {
                formMessage.textContent = "Please select a course.";
                formMessage.style.color = "red";
                return;
            }

            const selectedText = courseSelect.options[courseSelect.selectedIndex].text;

            const link110 = "https://buy.stripe.com/14A9AU5O5aEG9Rr5iC3VC00";
            const link135 = "https://buy.stripe.com/9B6aEYekB5km0gR4ey3VC01";

            formMessage.textContent = translations[getCurrentLanguage()].successMessage;
            formMessage.style.color = "#28a745";

            if (selectedText.includes("Exam") || selectedText.includes("TEF") || selectedText.includes("TCF")) {
                window.location.href = link135;
            } else {
                window.location.href = link110;
            }
        });
    }

    // خط ۲۷۲ به بعد را با این جایگزین کنید:
    loadCourses();
    resetClassOptions();
    resetSummary();

    const params = new URLSearchParams(window.location.search);
    const level = params.get("level");

    if (level && typeof coursesData !== "undefined" && Array.isArray(coursesData)) {
        const exists = coursesData.some(course => course.id === level);
        if (exists) {
            courseSelect.value = level;
            handleCourseChange();
        }
    }
}); // این پرانتز و آکولا برای بستن کل فایل است
