"use strict";

/* =========================
   SETTINGS
========================= */

const IMAGE_BASE = "https://dipanshu-raj.netlify.app/assets/";

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

const finePointer = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
);

function motionAllowed() {
    return !reducedMotion.matches;
}

/* =========================
   SKILLS
========================= */

const skills = [{
        icon: "python",
        name: "Python",
        level: "Beginner"
    },
    {
        icon: "web",
        name: "HTML & CSS",
        level: "Beginner"
    },
    {
        icon: "github",
        name: "GitHub",
        level: "Beginner"
    },
    {
        icon: "ai",
        name: "AI & Technology",
        level: "Exploring"
    },
    {
        icon: "problem",
        name: "Problem Solving",
        level: "Always"
    },
    {
        icon: "communication",
        name: "Communication",
        level: "Learning"
    },
    {
        icon: "adaptability",
        name: "Adaptability",
        level: "Growing"
    }
];

document.querySelector("#skills-grid").innerHTML = skills
    .map(
        (skill, index) => `
      <div
        class="reveal"
        style="--delay: ${(index % 3) * 75}ms; display: contents;"
      >
        <article class="skill-card tilt-card" data-tilt="6">
          <span class="skill-number">
            ${String(index + 1).padStart(2, "0")}
          </span>

          <span
            class="skill-icon icon-${skill.icon}"
            role="img"
            aria-label="${skill.name} icon"
          ></span>

          <div>
            <h3>${skill.name}</h3>
            <p>${skill.level}</p>
          </div>
        </article>
      </div>
    `
    )
    .join("");

/*
  Use direct grid children so the 2 + 2 + 3 desktop layout
  remains predictable.
*/
document.querySelectorAll("#skills-grid > div").forEach((wrapper) => {
    const card = wrapper.querySelector(".skill-card");
    wrapper.replaceWith(card);
});

/* =========================
   PROJECTS
========================= */

const projects = [{
        name: "Aurora AI",
        category: "AI VOICE ASSISTANT",
        image: IMAGE_BASE + "project-aurora.png",

        description: "An AI assistant project focused on exploring voice-based interaction, conversational AI, and intelligent assistance.",

        details: "This project explores assistant interfaces and conversational experiences. Voice interaction and AI-powered conversations are areas of exploration; individual completed capabilities have not been verified."
    },
    {
        name: "Alice AI",
        category: "PERSONAL AI ASSISTANT",
        image: IMAGE_BASE + "project-alice.png",

        description: "A personal AI assistant project exploring conversational interaction, voice-based assistance, and desktop automation.",

        details: "Areas of exploration include voice conversations, conversation history, application interaction, automation, and screen understanding. These describe project directions rather than a claim that every capability is complete."
    },
    {
        name: "Daily Spending Tracker",
        category: "PERSONAL FINANCE / EXPENSE TRACKING",
        image: IMAGE_BASE + "project-spending-tracker.png",

        description: "A project exploring a simple way to record and monitor everyday expenses through a user-friendly interface.",

        details: "A personal project shared by Dipanshu. The supplied project image is available here. A source repository and working demo have not been supplied for feature verification."
    }
];

document.querySelector("#project-grid").innerHTML = projects
    .map(
        (project, index) => `
      <div
        class="project-reveal reveal"
        style="--delay: ${index * 100}ms"
      >
        <article class="project-card tilt-card" data-tilt="5">
          <button
            type="button"
            class="project-image-button"
            data-project="${index}"
            data-cursor="VIEW ↗"
            aria-label="View ${project.name} details"
          >
            <span class="project-index">
              PROJECT / ${String(index + 1).padStart(2, "0")}
            </span>

            <img
              src="${project.image}"
              alt="${project.name} project image"
              loading="lazy"
            >
          </button>

          <div class="project-body">
            <span class="project-category">
              ${project.category}
            </span>

            <h3>${project.name}</h3>

            <p>${project.description}</p>

            <button
              class="project-details"
              type="button"
              data-project="${index}"
              data-cursor="VIEW ↗"
            >
              Explore project
              <span>↗</span>
            </button>
          </div>
        </article>
      </div>
    `
    )
    .join("");

/*
  Keep project cards as direct grid children.
  Their entrance is handled by the observer below.
*/
document.querySelectorAll(".project-reveal").forEach((wrapper) => {
    const card = wrapper.querySelector(".project-card");
    wrapper.replaceWith(card);
});

/* =========================
   BOOTCAMP PHOTOS
========================= */

const bootcampPhotos = [{
        src: IMAGE_BASE + "bootcamp-robot.jpg",
        title: "Robotics & practical learning",
        alt: "Robotics activity at the Sanskriti University bootcamp"
    },
    {
        src: IMAGE_BASE + "bootcamp-hardware.png",
        title: "Hands-on hardware exploration",
        alt: "Hands-on hardware activity at the bootcamp"
    },
    {
        src: IMAGE_BASE + "bootcamp-group.jpg",
        title: "Learning together",
        alt: "Bootcamp group photograph at Sanskriti University"
    },
    {
        src: "https://cdn.phototourl.com/member/2026-10-09-4dcdfe1f-ce1f-4037-b128-08a22d63f819.webp",
        title: "A moment from the bootcamp",
        alt: "A photograph from Dipanshu's technology bootcamp"
    },
    {
        src: "https://cdn.phototourl.com/member/2026-10-09-72b6b9cb-9c57-4eac-a0f8-c1e57b5159ef.webp",
        title: "Experiences worth remembering",
        alt: "Technology bootcamp memories in Mathura"
    }
];

const bootcampTrack = document.querySelector("#bootcamp-track");

bootcampTrack.innerHTML = bootcampPhotos
    .map(
        (photo, index) => `
      <figure class="bootcamp-slide">
        <button
          type="button"
          data-photo="${index}"
          data-cursor="OPEN ↗"
          aria-label="Enlarge ${photo.alt}"
        >
          <img
            src="${photo.src}"
            alt="${photo.alt}"
            loading="lazy"
          >
          <span aria-hidden="true">↗</span>
        </button>

        <figcaption>
          ${photo.title}
          <span>${String(index + 1).padStart(2, "0")}</span>
        </figcaption>
      </figure>
    `
    )
    .join("");

function scrollGallery(direction) {
    const slide = bootcampTrack.querySelector(".bootcamp-slide");

    if (!slide) return;

    const gap = parseFloat(getComputedStyle(bootcampTrack).gap) || 22;
    const distance = slide.getBoundingClientRect().width + gap;

    bootcampTrack.scrollBy({
        left: distance * direction,
        behavior: motionAllowed() ? "smooth" : "auto"
    });
}

document.querySelector("#gallery-prev").addEventListener("click", () => {
    scrollGallery(-1);
});

document.querySelector("#gallery-next").addEventListener("click", () => {
    scrollGallery(1);
});

bootcampTrack.addEventListener("keydown", (event) => {
    if (event.target !== bootcampTrack) return;

    if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollGallery(1);
    }

    if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollGallery(-1);
    }
});

/* =========================
   MODAL / LIGHTBOX
========================= */

const viewer = document.querySelector("#viewer");
const viewerContent = document.querySelector("#viewer-content");
const viewerClose = document.querySelector(".viewer-close");

let lastModalTrigger = null;

function openViewer(markup, trigger) {
    lastModalTrigger = trigger;

    viewerContent.innerHTML = markup;
    document.body.classList.add("dialog-open");

    viewer.showModal();
    hideCustomCursor();
}

function closeViewer() {
    viewer.close();
}

viewerClose.addEventListener("click", closeViewer);

viewer.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");

    if (lastModalTrigger) {
        lastModalTrigger.focus({
            preventScroll: true
        });
    }
});

viewer.addEventListener("click", (event) => {
    if (event.target !== viewer) return;

    const rect = viewer.getBoundingClientRect();

    if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
    ) {
        closeViewer();
    }
});

document.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => {
        const project = projects[Number(button.dataset.project)];

        openViewer(
            `
        <img src="${project.image}" alt="${project.name} project image">

        <span class="viewer-label">
          ${project.category}
        </span>

        <h3 id="viewer-title">${project.name}</h3>

        <p>${project.description}</p>
        <p>${project.details}</p>

        <p>
          Release status, verified technology stack, repository,
          and live demo links have not been provided.
        </p>
      `,
            button
        );
    });
});

document.querySelectorAll("[data-photo]").forEach((button) => {
    button.addEventListener("click", () => {
        const photo = bootcampPhotos[Number(button.dataset.photo)];

        openViewer(
            `
        <img src="${photo.src}" alt="${photo.alt}">
        <h3 id="viewer-title">${photo.title}</h3>
        <p>Sanskriti University, Mathura, Uttar Pradesh.</p>
      `,
            button
        );
    });
});

/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    mainNav.classList.remove("open");
}

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Open navigation" : "Close navigation"
    );

    mainNav.classList.toggle("open", !isOpen);
});

mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) {
        closeMenu();
    }
});

/* =========================
   SCROLL REVEALS
========================= */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("in");
                revealObserver.unobserve(entry.target);
            });
        }, {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

    const cardObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                if (motionAllowed()) {
                    entry.target.animate(
                        [{
                                opacity: 0,
                                translate: "0 35px"
                            },
                            {
                                opacity: 1,
                                translate: "0 0"
                            }
                        ], {
                            duration: 700,
                            easing: "cubic-bezier(.16,1,.3,1)"
                        }
                    );
                }

                cardObserver.unobserve(entry.target);
            });
        }, {
            threshold: 0.12
        }
    );

    document.querySelectorAll(".skill-card, .project-card").forEach((card) => {
        cardObserver.observe(card);
    });

    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                mainNav.querySelectorAll("a").forEach((link) => {
                    const active =
                        link.getAttribute("href") === "#" + entry.target.id;

                    link.classList.toggle("active", active);

                    if (active) {
                        link.setAttribute("aria-current", "location");
                    } else {
                        link.removeAttribute("aria-current");
                    }
                });
            });
        }, {
            rootMargin: "-15% 0px -60% 0px"
        }
    );

    document.querySelectorAll("main section[id]").forEach((section) => {
        sectionObserver.observe(section);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("in");
    });
}

/* =========================
   SCROLL PROGRESS / TIMELINE
========================= */

const scrollProgress = document.querySelector(".scroll-progress");
const backToTop = document.querySelector(".back-to-top");
const timeline = document.querySelector(".timeline");

let scrollScheduled = false;

function updateScrollEffects() {
    scrollScheduled = false;

    const maximumScroll =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress =
        maximumScroll > 0 ? window.scrollY / maximumScroll : 0;

    scrollProgress.style.width = `${progress * 100}%`;
    backToTop.classList.toggle("visible", window.scrollY > 550);

    const rect = timeline.getBoundingClientRect();

    const timelineProgress = Math.min(
        1,
        Math.max(
            0,
            (window.innerHeight * 0.8 - rect.top) / rect.height
        )
    );

    timeline.style.setProperty(
        "--timeline-progress",
        reducedMotion.matches ? 1 : timelineProgress
    );
}

window.addEventListener(
    "scroll",
    () => {
        if (scrollScheduled) return;

        scrollScheduled = true;
        requestAnimationFrame(updateScrollEffects);
    }, {
        passive: true
    }
);

window.addEventListener("resize", updateScrollEffects);

updateScrollEffects();

/* =========================
   TIME / COPYRIGHT
========================= */

document.querySelector("#year").textContent = new Date().getFullYear();

function updateIndiaTime() {
    document.querySelector("#india-time").textContent =
        new Intl.DateTimeFormat("en-GB", {
            timeZone: "Asia/Kolkata",
            hour: "2-digit",
            minute: "2-digit"
        }).format(new Date());
}

updateIndiaTime();
setInterval(updateIndiaTime, 60000);

/* =========================
   CONTACT FORM
========================= */

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const data = new FormData(contactForm);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (name.length < 2 || !subject || message.length < 10) {
        formStatus.textContent =
            "Please enter your name, a subject, and a message of at least 10 characters.";
        return;
    }

    const submitButton = contactForm.querySelector('button[type="submit"]');

    submitButton.disabled = true;
    submitButton.textContent = "Preparing your draft…";

    const body =
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        message;

    try {
        window.location.href =
            "mailto:dr0324099@gmail.com" +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        formStatus.textContent =
            "Your draft is ready to open in your email app. " +
            "Press Send there to finish. If nothing opened, " +
            "email dr0324099@gmail.com directly.";
    } catch {
        formStatus.textContent =
            "Your email app could not be opened. " +
            "Please email dr0324099@gmail.com directly.";
    } finally {
        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.innerHTML = "Prepare my message <span>↗</span>";
        }, 600);
    }
});

/* =========================
   CUSTOM CURSOR
========================= */

const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");
const cursorLabel = cursorRing.querySelector("span");
const mouseLight = document.querySelector(".mouse-light");

let cursorActive = false;
let cursorVisible = false;

let pointerX = window.innerWidth / 2;
let pointerY = window.innerHeight / 2;
let ringX = pointerX;
let ringY = pointerY;

let cursorFrame = 0;
let previousFrameTime = 0;
let lastParticleTime = 0;

function hideCustomCursor() {
    cursorVisible = false;
    cursorDot.style.opacity = "0";
    cursorRing.style.opacity = "0";

    if (cursorFrame) {
        cancelAnimationFrame(cursorFrame);
        cursorFrame = 0;
    }
}

function animateCursor(time) {
    if (!cursorActive || !cursorVisible || document.hidden) {
        cursorFrame = 0;
        return;
    }

    const delta = Math.min(time - previousFrameTime || 16, 40);
    previousFrameTime = time;

    const ease = 1 - Math.pow(0.82, delta / 16.67);

    ringX += (pointerX - ringX) * ease;
    ringY += (pointerY - ringY) * ease;

    cursorDot.style.transform =
        `translate3d(${pointerX}px, ${pointerY}px, 0)`;

    cursorRing.style.transform =
        `translate3d(${ringX}px, ${ringY}px, 0)`;

    mouseLight.style.transform =
        `translate3d(${ringX}px, ${ringY}px, 0)`;

    if (
        Math.abs(pointerX - ringX) > 0.1 ||
        Math.abs(pointerY - ringY) > 0.1
    ) {
        cursorFrame = requestAnimationFrame(animateCursor);
    } else {
        cursorFrame = 0;
    }
}

function startCursorFrame() {
    if (!cursorFrame) {
        previousFrameTime = performance.now();
        cursorFrame = requestAnimationFrame(animateCursor);
    }
}

function syncCursorMode() {
    cursorActive = finePointer.matches && motionAllowed();

    document.body.classList.toggle("cursor-enabled", cursorActive);

    if (!cursorActive) {
        hideCustomCursor();

        document.querySelectorAll(".tilt-card, .magnetic").forEach((element) => {
            element.style.transform = "";
        });
    }
}

syncCursorMode();

finePointer.addEventListener("change", syncCursorMode);
reducedMotion.addEventListener("change", syncCursorMode);

function createParticle(x, y) {
    const particle = document.createElement("span");

    particle.className = "pointer-particle";
    particle.setAttribute("aria-hidden", "true");

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    document.body.append(particle);

    particle.addEventListener("animationend", () => {
        particle.remove();
    }, {
        once: true
    });

    setTimeout(() => particle.remove(), 700);
}

document.addEventListener(
    "pointermove",
    (event) => {
        if (!cursorActive || event.pointerType === "touch") return;

        if (viewer.open) {
            hideCustomCursor();
            return;
        }

        pointerX = event.clientX;
        pointerY = event.clientY;

        if (!cursorVisible) {
            ringX = pointerX;
            ringY = pointerY;
            cursorVisible = true;
        }

        cursorDot.style.opacity = "1";
        cursorRing.style.opacity = "1";

        const target = event.target;

        const isText = Boolean(target.closest("input, textarea"));
        const viewTarget = target.closest("[data-cursor]");
        const isLink = Boolean(target.closest("a, button"));

        cursorRing.classList.toggle("is-text", isText);
        cursorRing.classList.toggle("is-view", Boolean(viewTarget) && !isText);
        cursorRing.classList.toggle("is-link", isLink && !viewTarget && !isText);

        cursorDot.classList.toggle("is-hidden", Boolean(viewTarget) || isText);

        cursorLabel.textContent =
            viewTarget && !isText ? viewTarget.dataset.cursor : "";

        startCursorFrame();

        const now = performance.now();

        if (!isText && now - lastParticleTime > 55) {
            lastParticleTime = now;
            createParticle(pointerX, pointerY);
        }
    }, {
        passive: true
    }
);

document.documentElement.addEventListener("pointerleave", hideCustomCursor);
window.addEventListener("blur", hideCustomCursor);

document.addEventListener("pointerdown", (event) => {
    if (
        !cursorActive ||
        viewer.open ||
        event.button !== 0 ||
        event.target.closest("input, textarea")
    ) {
        return;
    }

    const ripple = document.createElement("span");

    ripple.className = "click-ripple";
    ripple.setAttribute("aria-hidden", "true");

    ripple.style.left = `${event.clientX - 6}px`;
    ripple.style.top = `${event.clientY - 6}px`;

    document.body.append(ripple);

    setTimeout(() => ripple.remove(), 650);
});

/* =========================
   3D TILT
========================= */

document.querySelectorAll(".tilt-card").forEach((card) => {
    let scheduledFrame = 0;

    card.addEventListener("pointermove", (event) => {
        if (!finePointer.matches || !motionAllowed()) return;

        const x = event.clientX;
        const y = event.clientY;

        cancelAnimationFrame(scheduledFrame);

        scheduledFrame = requestAnimationFrame(() => {
            const rect = card.getBoundingClientRect();

            const dx = (x - rect.left) / rect.width - 0.5;
            const dy = (y - rect.top) / rect.height - 0.5;

            const strength = Number(card.dataset.tilt) || 6;

            card.style.transform =
                `perspective(1100px) ` +
                `rotateX(${-dy * strength}deg) ` +
                `rotateY(${dx * strength}deg) ` +
                "translateY(-3px)";

            card.style.setProperty("--shine-x", `${x - rect.left}px`);
            card.style.setProperty("--shine-y", `${y - rect.top}px`);
        });
    });

    card.addEventListener("pointerleave", () => {
        cancelAnimationFrame(scheduledFrame);
        card.style.transform = "";
    });
});

/* =========================
   MAGNETIC BUTTONS
========================= */

document.querySelectorAll(".magnetic").forEach((element) => {
    element.addEventListener("pointermove", (event) => {
        if (!finePointer.matches || !motionAllowed()) return;

        const rect = element.getBoundingClientRect();

        const x =
            (event.clientX - rect.left - rect.width / 2) * 0.12;

        const y =
            (event.clientY - rect.top - rect.height / 2) * 0.15;

        element.style.transform = `translate(${x}px, ${y}px)`;
    });

    element.addEventListener("pointerleave", () => {
        element.style.transform = "";
    });
});

/* =========================
   IMAGE FALLBACK
========================= */

document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
        if (!image.classList.contains("logo-qr")) {
            image.classList.add("image-error");
        }
    });
});

/* =========================
   BACKGROUND TAB OPTIMIZATION
========================= */

document.addEventListener("visibilitychange", () => {
    document.body.classList.toggle("page-hidden", document.hidden);

    if (document.hidden) {
        hideCustomCursor();
    }
});
