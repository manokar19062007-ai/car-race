// ===============================
// Loader
// ===============================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        if (loader) {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }
    }, 1200);
});

// ===============================
// Mobile Menu
// ===============================

const menu = document.getElementById("menu");
const navLinks = document.querySelector(".nav-links");

if (menu) {
    menu.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        menu.innerHTML = navLinks.classList.contains("active")
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });
}

// ===============================
// Close Menu on Link Click
// ===============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        if(menu){
            menu.innerHTML =
            '<i class="fa-solid fa-bars"></i>';
        }

    });

});

// ===============================
// Sticky Navbar
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.style.background="#000";
        navbar.style.padding="15px 8%";
        navbar.style.boxShadow="0 5px 20px rgba(0,0,0,.4)";

    }else{

        navbar.style.background="rgba(0,0,0,.7)";
        navbar.style.padding="18px 8%";
        navbar.style.boxShadow="none";

    }

});

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
// ===============================
// FAQ Accordion
// ===============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const answer = item.querySelector("p");

    if (answer) {
        answer.style.display = "none";
    }

    item.addEventListener("click", () => {

        faqItems.forEach(faq => {
            if (faq !== item) {
                const p = faq.querySelector("p");
                if (p) p.style.display = "none";
            }
        });

        if (answer) {
            answer.style.display =
                answer.style.display === "block" ? "none" : "block";
        }

    });
});

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".hero-info h2, .box h4");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    if (isNaN(target)) return;

    let count = 0;

    const updateCounter = () => {

        count += Math.ceil(target / 100);

        if (count < target) {

            counter.innerText = count + "+";
            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});

// ===============================
// Progress Bar Animation
// ===============================

const progressBars = document.querySelectorAll(".progress span");

function animateBars() {

    progressBars.forEach(bar => {

        const width = bar.innerText;

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.width = width;

        }, 300);

    });

}

window.addEventListener("load", animateBars);

// ===============================
// Testimonial Auto Slider
// ===============================

const testimonialContainer =
document.querySelector(".testimonial-container");

if (testimonialContainer) {

    let scrollAmount = 0;

    setInterval(() => {

        scrollAmount += 350;

        if (scrollAmount >= testimonialContainer.scrollWidth) {
            scrollAmount = 0;
        }

        testimonialContainer.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });

    }, 3500);

}

// ===============================
// Contact Form Validation
// ===============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                input.style.border = "1px solid red";
                valid = false;

            } else {

                input.style.border = "1px solid #0f0";

            }

        });

        if (valid) {

            alert("Message Sent Successfully!");

            form.reset();

        }

    });

}

// ===============================
// Scroll Reveal
// ===============================

const revealElements =
document.querySelectorAll(
".section-title, .car-card, .box, .gallery img, .testimonial-card, .faq-item"
);

function reveal() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "0.7s";

});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ===============================
// Gallery Hover Effect
// ===============================

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

// ===============================
// Button Ripple Effect
// ===============================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const x = e.offsetX;
        const y = e.offsetY;

        circle.style.left = x + "px";
        circle.style.top = y + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});

console.log("🚗 Race X Showroom Loaded Successfully!");