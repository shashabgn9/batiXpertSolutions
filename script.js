/* ==========================================
   BATIXPERT SOLUTIONS
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       MENU BURGER
    ========================== */

    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");

    if (burger && menu) {

        burger.addEventListener("click", () => {

            menu.classList.toggle("active");

            burger.classList.toggle("active");

        });

        menu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                menu.classList.remove("active");
                burger.classList.remove("active");

            });

        });

    }

    /* ==========================
       HEADER AU SCROLL
    ========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.boxShadow = "0 12px 30px rgba(0,0,0,.12)";
            header.style.background = "rgba(255,255,255,.98)";

        } else {

            header.style.boxShadow = "0 8px 20px rgba(0,0,0,.05)";
            header.style.background = "rgba(255,255,255,.97)";

        }

    });

    /* ==========================
       RETOUR EN HAUT
    ========================== */

    const backToTop = document.getElementById("backToTop");

    function scrollButton() {

        if (!backToTop) return;

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }

    window.addEventListener("scroll", scrollButton);

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }

    /* ==========================
       ANIMATIONS AU SCROLL
    ========================== */

    const animatedElements = document.querySelectorAll(
        ".card, .service-card, .pricing article, .steps-grid div, .about-text, .contact-form"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        }, {

            threshold: 0.15

        });

        animatedElements.forEach(element => {

            element.style.opacity = "0";
            element.style.transform = "translateY(30px)";
            element.style.transition = ".7s ease";

            observer.observe(element);

        });

    }

    /* ==========================
       ANNÉE AUTOMATIQUE
    ========================== */

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        copyright.innerHTML =
            `© ${new Date().getFullYear()} BatiXpert Solutions - Tous droits réservés.`;

    }

    console.log("✅ BatiXpert Solutions chargé.");

});
