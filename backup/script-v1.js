/* ==========================================
   RADHE NAAM JAP
   SCRIPT.JS V2.0
========================================== */

// ==========================================
// LOADER
// ==========================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 600);

    }

});

// ==========================================
// STICKY HEADER
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background = "rgba(8,8,20,.92)";

        header.style.backdropFilter = "blur(20px)";

        header.style.boxShadow = "0 12px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(9,3,32,.55)";

        header.style.boxShadow = "none";

    }

});

// ==========================================
// SCROLL PROGRESS BAR
// ==========================================

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scroll = document.documentElement.scrollTop;

    const height =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    progressBar.style.width =

        (scroll / height) * 100 + "%";

});

// ==========================================
// BACK TO TOP BUTTON
// ==========================================

const topButton = document.createElement("button");

topButton.id = "topButton";

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log(

"%c🙏 Welcome to Radhe Naam Jap",

"color:#FFD166;font-size:18px;font-weight:bold;"

);


/* ==========================================
   PART 2
   PREMIUM INTERACTIONS
========================================== */

// ==========================================
// SCROLL REVEAL
// ==========================================

const revealElements = document.querySelectorAll(
".card, .stat-card, .faq-item, .download, .screenshot-grid img"
);

const reveal = () => {

    revealElements.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(60px)";

    element.style.transition = "all .7s ease";

});

reveal();

window.addEventListener("scroll", reveal);

// ==========================================
// ACTIVE NAV LINK
// ==========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const top = section.offsetTop - 120;

        const height = section.clientHeight;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================================
// HERO IMAGE PARALLAX
// ==========================================

const heroImage = document.querySelector(".hero-right img");

window.addEventListener("mousemove",(e)=>{

    if(!heroImage) return;

    const x = (window.innerWidth/2 - e.clientX)/40;

    const y = (window.innerHeight/2 - e.clientY)/40;

    heroImage.style.transform =
    `rotateY(${x}deg) rotateX(${-y}deg)`;

});

// ==========================================
// BUTTON RIPPLE
// ==========================================

document.querySelectorAll(

".primary-btn,.download-btn,.download-big"

).forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

// ==========================================
// CURRENT YEAR
// ==========================================

const yearText=document.querySelector("footer");

if(yearText){

yearText.innerHTML=

yearText.innerHTML.replace(

"2026",

new Date().getFullYear()

);

}

// ==========================================
// PERFORMANCE
// ==========================================

window.addEventListener(

"resize",

()=>{

reveal();

}

);

console.log(

"%c✨ Premium Website Loaded",

"color:#8B5CF6;font-size:18px;font-weight:bold;"

);

/* ==========================================
   PART 3
   ADVANCED FEATURES
========================================== */

// ==========================================
// FAQ ACCORDION
// ==========================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const answer = item.querySelector("p");

    if (!answer) return;

    answer.style.maxHeight = "0px";
    answer.style.overflow = "hidden";
    answer.style.transition = "all .4s ease";

    item.querySelector("h3").addEventListener("click", () => {

        faqItems.forEach((other) => {

            if (other !== item) {

                const p = other.querySelector("p");

                if (p) {

                    p.style.maxHeight = "0px";

                }

            }

        });

        if (answer.style.maxHeight === "0px") {

            answer.style.maxHeight = answer.scrollHeight + "px";

        } else {

            answer.style.maxHeight = "0px";

        }

    });

});

// ==========================================
// DOWNLOAD COUNTER
// ==========================================

const downloadButtons = document.querySelectorAll(
".download-btn,.primary-btn,.download-big"
);

let downloads = Number(localStorage.getItem("downloads")) || 0;

downloadButtons.forEach((button)=>{

button.addEventListener("click",()=>{

downloads++;

localStorage.setItem("downloads",downloads);

console.log("Downloads:",downloads);

});

});

// ==========================================
// VISITOR COUNTER
// ==========================================

let visitors = Number(localStorage.getItem("visitors")) || 0;

if(!sessionStorage.getItem("visited")){

visitors++;

localStorage.setItem("visitors",visitors);

sessionStorage.setItem("visited","true");

}

console.log("Visitors:",visitors);

// ==========================================
// IMAGE LAZY LOADING
// ==========================================

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});

// ==========================================
// PREVENT RIGHT CLICK
// ==========================================

document.addEventListener("contextmenu",(e)=>{

e.preventDefault();

});

// ==========================================
// DISABLE F12 SHORTCUTS
// ==========================================

document.addEventListener("keydown",(e)=>{

if(

e.key==="F12" ||

(e.ctrlKey && e.shiftKey && e.key==="I") ||

(e.ctrlKey && e.shiftKey && e.key==="J") ||

(e.ctrlKey && e.key==="U")

){

e.preventDefault();

}

});

// ==========================================
// PAGE LOADED
// ==========================================

console.log(
"%c🙏 Radhe Naam Jap Website Ready",
"font-size:20px;color:#FFD166;font-weight:bold;"
);

/* ==========================================
   MOBILE MENU
========================================== */

const menu = document.querySelector(".menu-toggle");

const nav = document.querySelector(".nav-links");

if(menu && nav){

menu.addEventListener("click",()=>{

menu.classList.toggle("active");

nav.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

menu.classList.remove("active");

nav.classList.remove("active");

});

});

}


/* ==========================================
   SCREENSHOT SLIDER
========================================== */

const screenshots=[

"images/screenshot1.png",

"images/screenshot2.png",

"images/screenshot3.png"

];

let currentShot=0;

const phoneScreen=document.getElementById("phoneScreen");

if(phoneScreen){

setInterval(()=>{

currentShot++;

if(currentShot>=screenshots.length){

currentShot=0;

}

phoneScreen.style.opacity="0";

setTimeout(()=>{

phoneScreen.src=screenshots[currentShot];

phoneScreen.style.opacity="1";

},250);

},3000);

}

/* ==========================================
   MOUSE GLOW EFFECT
========================================== */

const glow = document.querySelector(".mouse-glow");

if (glow) {

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

}

/* ==========================================
   PARALLAX BLOBS
========================================== */

const blobs=document.querySelectorAll(".blob");

window.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

blobs.forEach((blob,index)=>{

const speed=(index+1)*10;

blob.style.transform=

`translate(${x*speed}px,${y*speed}px)`;

});

});

/* ==========================================
   LOAD APP DATA
========================================== */

fetch("data/app.json")

.then(response=>response.json())

.then(data=>{

const version=document.getElementById("appVersion");

if(version){

version.textContent=data.version;

}

const download=document.getElementById("downloadButton");

if(download){

download.href=data.apk;

}

console.log(

"Latest Version:",

data.version

);

})

.catch(error=>{

console.log(error);

});

const big=document.getElementById("downloadBig");

fetch("data/app.json")

.then(r=>r.json())

.then(data=>{

if(big){

big.href=data.apk;

}

});