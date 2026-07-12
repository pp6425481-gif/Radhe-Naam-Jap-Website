/* ==========================================================
   RADHE NAAM JAP WEBSITE
   Version : 3.0.0
   File    : script.js
   Part    : 1
   Author  : Piyush Pal
========================================================== */

"use strict";

/* ==========================================================
   DOM ELEMENTS
========================================================== */

const loader = document.getElementById("loader");

const header = document.getElementById("header");

const progressBar = document.getElementById("progressBar");

const cursorGlow = document.querySelector(".cursor-glow");

const menuToggle = document.getElementById("menuToggle");

const nav = document.querySelector(".nav");

const navLinks = document.querySelectorAll(".nav-links a");

const currentYear = document.getElementById("currentYear");

/* ==========================================================
   WINDOW LOAD
========================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

    }, 700);

});

/* ==========================================================
   CURRENT YEAR
========================================================== */

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}

/* ==========================================================
   HEADER SCROLL EFFECT
========================================================== */

function updateHeader() {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    }

    else {

        header.classList.remove("scrolled");

    }

}

updateHeader();

window.addEventListener("scroll", updateHeader);

/* ==========================================================
   SCROLL PROGRESS BAR
========================================================== */

function updateProgressBar() {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = (scrollTop / pageHeight) * 100;

    progressBar.style.width = progress + "%";

}

updateProgressBar();

window.addEventListener("scroll", updateProgressBar);

/* ==========================================================
   CURSOR GLOW
========================================================== */

if (cursorGlow) {

    document.addEventListener("mousemove", (e) => {

        cursorGlow.style.left = e.clientX + "px";

        cursorGlow.style.top = e.clientY + "px";

    });

}

/* ==========================================================
   MOBILE MENU
========================================================== */

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");

        nav.classList.toggle("active");

    });

}

/* ==========================================================
   CLOSE MENU AFTER CLICK
========================================================== */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");

        nav.classList.remove("active");

    });

});

/* ==========================================================
   ESC KEY CLOSE MENU
========================================================== */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        menuToggle.classList.remove("active");

        nav.classList.remove("active");

    }

});

/* ==========================================================
   CLICK OUTSIDE MENU
========================================================== */

document.addEventListener("click", (e) => {

    if (

        nav.classList.contains("active") &&

        !nav.contains(e.target) &&

        !menuToggle.contains(e.target)

    ) {

        menuToggle.classList.remove("active");

        nav.classList.remove("active");

    }

});

/* ==========================================================
   PART 1 END
========================================================== */

/* ==========================================================
   PART 2
   SMOOTH SCROLL + ACTIVE NAV + FAQ + ANIMATION
========================================================== */

/* ==========================================================
   SMOOTH SCROLL
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});

/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {

    const scrollY = window.pageYOffset;

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        const id = section.getAttribute("id");

        const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);

        if (!navLink) return;

        if (

            scrollY >= sectionTop &&

            scrollY < sectionTop + sectionHeight

        ) {

            navLinks.forEach(link => link.classList.remove("active"));

            navLink.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();

/* ==========================================================
   FADE-UP ANIMATION
========================================================== */

const fadeElements = document.querySelectorAll(

    ".feature-card, .stat-box, .preview-phone, .preview-content, .download-card, .faq-item"

);

fadeElements.forEach(item => {

    item.classList.add("fade-up");

});

const fadeObserver = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},

{

    threshold: 0.15

}

);

fadeElements.forEach(item => {

    fadeObserver.observe(item);

});

/* ==========================================================
   FAQ ACCORDION
========================================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    const answer = item.querySelector(".faq-answer");

    button.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                other.classList.remove("active");

                other.querySelector(".faq-answer").style.maxHeight = null;

            }

        });

        item.classList.toggle("active");

        if (item.classList.contains("active")) {

            answer.style.maxHeight = answer.scrollHeight + "px";

        }

        else {

            answer.style.maxHeight = null;

        }

    });

});

/* ==========================================================
   BUTTON RIPPLE EFFECT
========================================================== */

const rippleButtons = document.querySelectorAll(

    ".btn-primary, .btn-secondary, .download-btn, .download-big"

);

rippleButtons.forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";

        ripple.style.height = size + "px";

        ripple.style.left = e.clientX - rect.left - size / 2 + "px";

        ripple.style.top = e.clientY - rect.top - size / 2 + "px";

        ripple.style.position = "absolute";

        ripple.style.borderRadius = "50%";

        ripple.style.background = "rgba(255,255,255,.35)";

        ripple.style.pointerEvents = "none";

        ripple.style.transform = "scale(0)";

        ripple.style.transition =

            "transform .6s ease, opacity .6s ease";

        this.appendChild(ripple);

        requestAnimationFrame(() => {

            ripple.style.transform = "scale(3)";

            ripple.style.opacity = "0";

        });

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/* ==========================================================
   PART 2 END
========================================================== */

/* ==========================================================
   PART 3
   SCREENSHOT SLIDER + COUNTER + PARALLAX
========================================================== */

/* ==========================================================
   SCREENSHOT IMAGES
========================================================== */

const screenshots = [

    "images/screenshots/screenshot1.png",
    "images/screenshots/screenshot2.png",
    "images/screenshots/screenshot3.png",
    "images/screenshots/screenshot4.png",
    "images/screenshots/screenshot5.png"

];

const phoneScreen = document.getElementById("phoneScreen");

const previewImage = document.getElementById("previewImage");

let screenshotIndex = 0;

/* ==========================================================
   CHANGE SCREENSHOT
========================================================== */

function changeScreenshot() {

    screenshotIndex++;

    if (screenshotIndex >= screenshots.length) {

        screenshotIndex = 0;

    }

    if (phoneScreen) {

        phoneScreen.style.opacity = "0";

    }

    if (previewImage) {

        previewImage.style.opacity = "0";

    }

    setTimeout(() => {

        if (phoneScreen) {

            phoneScreen.src = screenshots[screenshotIndex];

            phoneScreen.style.opacity = "1";

        }

        if (previewImage) {

            previewImage.src = screenshots[screenshotIndex];

            previewImage.style.opacity = "1";

        }

    }, 300);

}

if (phoneScreen) {

    phoneScreen.style.transition = "opacity .5s ease";

}

if (previewImage) {

    previewImage.style.transition = "opacity .5s ease";

}

setInterval(changeScreenshot, 3500);

/* ==========================================================
   STATS COUNTER
========================================================== */

const counters = document.querySelectorAll(".stat-box h2");

const counterObserver = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const original = counter.textContent.trim();

        let target = 0;

        let suffix = "";

        if (original.includes("10")) {

            target = 10000;

            suffix = "+";

        }

        else if (original.includes("4.9")) {

            target = 49;

            suffix = "";

        }

        else if (original.includes("100")) {

            target = 100;

            suffix = "%";

        }

        else if (original.includes("24")) {

            target = 24;

            suffix = "×7";

        }

        let current = 0;

        const speed = target / 80;

        const timer = setInterval(() => {

            current += speed;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            if (target === 49) {

                counter.textContent = (current / 10).toFixed(1) + "★";

            }

            else if (target === 10000) {

                counter.textContent =

                    Math.floor(current / 1000) + "K" + suffix;

            }

            else {

                counter.textContent =

                    Math.floor(current) + suffix;

            }

        }, 20);

        counterObserver.unobserve(counter);

    });

},

{

    threshold: .5

}

);

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/* ==========================================================
   FLOATING CARD PARALLAX
========================================================== */

const floatingCards = document.querySelectorAll(".floating-card");

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - .5) * 20;

    const y = (e.clientY / window.innerHeight - .5) * 20;

    floatingCards.forEach((card, index) => {

        const depth = (index + 1) * 0.8;

        card.style.transform =

            `translate(${x * depth}px, ${y * depth}px)`;

    });

});

/* ==========================================================
   HERO PHONE FLOAT
========================================================== */

const phoneWrapper = document.querySelector(".phone-wrapper");

if (phoneWrapper) {

    let angle = 0;

    setInterval(() => {

        angle += 0.03;

        phoneWrapper.style.transform =

            `translateY(${Math.sin(angle) * 8}px)`;

    }, 20);

}

/* ==========================================================
   IMAGE PRELOAD
========================================================== */

screenshots.forEach(src => {

    const img = new Image();

    img.src = src;

});

/* ==========================================================
   PART 3 END
========================================================== */

/* ==========================================================
   PART 4
   DOWNLOAD + VERSION + TOAST + UTILITIES
========================================================== */

/* ==========================================================
   CONFIG
========================================================== */

const APP_VERSION = "v2.0.0";

/*
Replace with your APK URL
*/

const APK_URL =
"https://github.com/pp6425481-gif/Radhe-Naam-Jap/releases/download/v1.0.3/app-release.apk";

/* ==========================================================
   VERSION
========================================================== */

const appVersion = document.getElementById("appVersion");

if (appVersion) {

    appVersion.textContent = APP_VERSION;

}

/* ==========================================================
   DOWNLOAD BUTTONS
========================================================== */

const downloadButtons = [

    document.getElementById("downloadButton"),

    document.getElementById("heroDownload"),

    document.getElementById("downloadApk")

];

downloadButtons.forEach(button => {

    if (!button) return;

    button.addEventListener("click", function (e) {

        e.preventDefault();

        showToast("Preparing APK Download...");

        setTimeout(() => {

            window.open(APK_URL, "_blank");

        }, 600);

    });

});

/* ==========================================================
   TOAST
========================================================== */

const toast = document.createElement("div");

toast.id = "toast";

toast.style.position = "fixed";

toast.style.left = "50%";

toast.style.bottom = "30px";

toast.style.transform = "translateX(-50%)";

toast.style.padding = "15px 28px";

toast.style.background = "rgba(25,8,58,.95)";

toast.style.color = "#fff";

toast.style.borderRadius = "50px";

toast.style.border = "1px solid rgba(255,255,255,.12)";

toast.style.backdropFilter = "blur(20px)";

toast.style.zIndex = "999999";

toast.style.opacity = "0";

toast.style.transition = ".35s";

toast.style.pointerEvents = "none";

document.body.appendChild(toast);

function showToast(message) {

    toast.textContent = message;

    toast.style.opacity = "1";

    toast.style.bottom = "40px";

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {

        toast.style.opacity = "0";

        toast.style.bottom = "30px";

    }, 2500);

}

/* ==========================================================
   SCROLL TO TOP BUTTON
========================================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "scrollTop";

topButton.style.position = "fixed";

topButton.style.right = "25px";

topButton.style.bottom = "25px";

topButton.style.width = "55px";

topButton.style.height = "55px";

topButton.style.borderRadius = "50%";

topButton.style.background =
"linear-gradient(135deg,#7c3aed,#c084fc)";

topButton.style.color = "#fff";

topButton.style.fontSize = "22px";

topButton.style.border = "none";

topButton.style.cursor = "pointer";

topButton.style.opacity = "0";

topButton.style.pointerEvents = "none";

topButton.style.transition = ".35s";

topButton.style.zIndex = "999";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.opacity = "1";

        topButton.style.pointerEvents = "auto";

    }

    else {

        topButton.style.opacity = "0";

        topButton.style.pointerEvents = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================================
   KEYBOARD SHORTCUTS
========================================================== */

document.addEventListener("keydown", e => {

    if (e.key === "Home") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

    if (e.key.toLowerCase() === "d") {

        showToast("Opening Download...");

        setTimeout(() => {

            window.open(APK_URL, "_blank");

        }, 500);

    }

});

/* ==========================================================
   IMAGE ERROR HANDLING
========================================================== */

document.querySelectorAll("img").forEach(img => {

    img.onerror = function () {

        console.warn("Missing Image:", this.src);

        this.style.opacity = ".35";

    };

});

/* ==========================================================
   PAGE VISIBILITY
========================================================== */

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        console.log("Page Hidden");

    }

    else {

        console.log("Page Visible");

    }

});

/* ==========================================================
   PART 4 END
========================================================== */

/* ==========================================================
   PART 5
   PREMIUM EFFECTS + FINAL POLISH
========================================================== */

/* ==========================================================
   HERO PARALLAX
========================================================== */

const hero = document.querySelector(".hero");

if (hero) {

    hero.addEventListener("mousemove", (e) => {

        const x =
            (e.clientX / window.innerWidth - 0.5) * 20;

        const y =
            (e.clientY / window.innerHeight - 0.5) * 20;

        const phone =
            document.querySelector(".phone-wrapper");

        if (phone) {

          phoneWrapper.style.transform =
`translateY(${Math.sin(angle) * 8}px)`;
        }

    });

}

/* ==========================================================
   MAGNETIC BUTTONS
========================================================== */

const magneticButtons = document.querySelectorAll(

    ".btn-primary, .download-btn, .download-big"

);

magneticButtons.forEach(button => {

    button.addEventListener("mousemove", e => {

        const rect = button.getBoundingClientRect();

        const x =
            e.clientX - rect.left - rect.width / 2;

        const y =
            e.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.15}px,${y * 0.15}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translate(0,0)";

    });

});

/* ==========================================================
   HERO GLOW FOLLOW
========================================================== */

const heroGlow = document.createElement("div");

heroGlow.style.position = "absolute";

heroGlow.style.width = "400px";

heroGlow.style.height = "400px";

heroGlow.style.borderRadius = "50%";

heroGlow.style.pointerEvents = "none";

heroGlow.style.filter = "blur(70px)";

heroGlow.style.opacity = ".35";

heroGlow.style.background =
"radial-gradient(circle, rgba(168,85,247,.8), transparent)";

heroGlow.style.zIndex = "0";

if (hero) {

    hero.appendChild(heroGlow);

    hero.addEventListener("mousemove", e => {

        const rect = hero.getBoundingClientRect();

        heroGlow.style.left =
            e.clientX - rect.left - 200 + "px";

        heroGlow.style.top =
            e.clientY - rect.top - 200 + "px";

    });

}

/* ==========================================================
   TYPING EFFECT
========================================================== */

const badge = document.querySelector(".hero-badge");

if (badge) {

    const originalText = badge.textContent.trim();

    badge.textContent = "";

    let index = 0;

    function typeText() {

        if (index < originalText.length) {

            badge.textContent += originalText.charAt(index);

            index++;

            setTimeout(typeText, 50);

        }

    }

    setTimeout(typeText, 1200);

}

/* ==========================================================
   STAGGER REVEAL
========================================================== */

const cards = document.querySelectorAll(

    ".feature-card"

);

cards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.08}s`;

});

/* ==========================================================
   RAF SCROLL OPTIMIZATION
========================================================== */

let ticking = false;

window.addEventListener("scroll", () => {

    if (!ticking) {

        window.requestAnimationFrame(() => {

            updateHeader();

            updateProgressBar();

            ticking = false;

        });

        ticking = true;

    }

});

/* ==========================================================
   CONSOLE BRANDING
========================================================== */

console.log(

"%c🚀 RADHE NAAM JAP WEBSITE",

"color:#c084fc;font-size:22px;font-weight:bold;"

);

console.log(

"%cBuilt By Piyush Pal",

"color:#ffd166;font-size:14px;"

);

console.log(

"%cVersion 3.0 Production Build",

"color:#ffffff;font-size:12px;"

);

/* ==========================================================
   FINAL INIT
========================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    showToast("Welcome To Radhe Naam Jap ✨");

});

/* ==========================================================
   SECURITY (LIGHT)
========================================================== */

document.addEventListener("contextmenu", e => {

    e.preventDefault();

});

/* ==========================================================
   IMAGE FADE IN
========================================================== */

document.querySelectorAll("img").forEach(img => {

    img.style.opacity = "0";

    img.onload = () => {

        img.style.transition =
            "opacity .6s ease";

        img.style.opacity = "1";

    };

});

/* ==========================================================
   END OF FILE
========================================================== */