"use strict";

/* =========================
   IMAGE BASE URL
========================= */

const base = "https://dipanshu-raj.netlify.app/assets/";

/* =========================
   SKILLS
========================= */

const skills = [
    ["python", "Python", "Beginner"],
    ["web", "HTML & CSS", "Beginner"],
    ["github", "GitHub", "Beginner"],
    ["ai", "AI & Technology", "Exploring"],
    ["problem", "Problem Solving", "Always"],
    ["communication", "Communication", "Learning"],
    ["adaptability", "Adaptability", "Growing"]
];

document.querySelector("#skill-grid").innerHTML = skills
    .map(
        (skill) => `
      <article class="skill reference-skill">
        <span
          class="reference-icon icon-${skill[0]}"
          role="img"
          aria-label="${skill[1]} icon"
        ></span>

        <div class="reference-skill-copy">
          <h3>${skill[1]}</h3>

          <p class="reference-level">
            <span aria-hidden="true">•</span>
            ${skill[2]}
          </p>
        </div>
      </article>
    `
    )
    .join("");

/* =========================
   PROJECT DATA
========================= */

const projects = [
    {
        name: "Aurora AI",
        category: "AI VOICE ASSISTANT",
        image: "project-aurora.png",

        description:
            "Aurora AI is an AI assistant project focused on exploring voice-based interaction, conversational AI, and intelligent assistance.",

        detail:
            "Areas of exploration include AI-powered conversations, voice interaction, assistant interfaces, and real-time conversational experiences. These are project directions; individual completed capabilities have not been verified."
    },

    {
        name: "Alice AI",
        category: "PERSONAL AI ASSISTANT",
        image: "project-alice.png",

        description:
            "Alice AI is a personal AI assistant project focused on conversational interaction, voice-based assistance, and exploring desktop automation.",

        detail:
            "Areas of exploration include voice conversations, conversation history, desktop application interaction, computer automation, and screen understanding. These are exploration goals, not a claim that all features are complete."
    },

    {
        name: "Daily Spending Tracker",
        category: "PERSONAL FINANCE / EXPENSE TRACKING",
        image: "project-spending-tracker.png",

        description:
            "A project exploring a simple way to record and monitor everyday expenses through a user-friendly interface.",

        detail:
            "A personal project shared by Dipanshu. The supplied image is shown here; source code and a working demo have not been provided for feature verification."
    }
];

/* =========================
   RENDER PROJECTS
========================= */

document.querySelector("#project-list").innerHTML = projects
    .map(
        (project, index) => `
      <article class="project-row">
        <button
          class="project-image"
          type="button"
          data-project="${index}"
          aria-label="View ${project.name} details"
        >
          <img
            src="${base + project.image}"
            alt="${project.name} project image supplied by Dipanshu"
            loading="lazy"
          >
        </button>

        <div class="project-info">
          <div class="project-number">
            0${index + 1} / EXPLORATIONS
          </div>

          <span class="category">${project.category}</span>

          <h3>${project.name}</h3>

          <p>${project.description}</p>

          <button
            type="button"
            data-project="${index}"
          >
            View Project Details
            <span>↗</span>
          </button>
        </div>
      </article>
    `
    )
    .join("");

/* =========================
   BOOTCAMP GALLERY
========================= */

const gallery = [
    {
        src: base + "bootcamp-robot.jpg",
        alt: "Robotics activity at the Sanskriti University bootcamp"
    },

    {
        src: base + "bootcamp-hardware.png",
        alt: "Hands-on hardware activity at the bootcamp"
    },

    {
        src: base + "bootcamp-group.jpg",
        alt: "Bootcamp group at Sanskriti University"
    },

    {
        src:
            "https://cdn.phototourl.com/member/2026-10-09-4dcdfe1f-ce1f-4037-b128-08a22d63f819.webp",
        alt: "A moment from Dipanshu’s technology bootcamp"
    },

    {
        src:
            "https://cdn.phototourl.com/member/2026-10-09-72b6b9cb-9c57-4eac-a0f8-c1e57b5159ef.webp",
        alt: "Technology bootcamp memories in Mathura"
    }
];

document.querySelector("#gallery").innerHTML = gallery
    .map(
        (photo, index) => `
      <button
        type="button"
        data-gallery="${index}"
        aria-label="Enlarge: ${photo.alt}"
      >
        <img
          src="${photo.src}"
          alt="${photo.alt}"
          loading="lazy"
        >

        <span>↗</span>
      </button>
    `
    )
    .join("");

/* =========================
   PROJECT DIALOG
========================= */

const dialog = document.querySelector("#detail-dialog");
const content = document.querySelector("#dialog-content");

document.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => {
        const project = projects[Number(button.dataset.project)];

        content.innerHTML = `
      <img
        src="${base + project.image}"
        alt="${project.name} project image"
      >

      <h3>${project.name}</h3>

      <p>${project.description}</p>

      <p>${project.detail}</p>

      <p class="status">
        STUDENT PROJECT · RELEASE STATUS NOT PROVIDED
      </p>

      <p>
        Repository, verified technology stack,
        and live demo links have not been supplied.
      </p>
    `;

        dialog.showModal();
    });
});

/* =========================
   GALLERY LIGHTBOX
========================= */

document.querySelectorAll("[data-gallery]").forEach((button) => {
    button.addEventListener("click", () => {
        const photo = gallery[Number(button.dataset.gallery)];

        content.innerHTML = `
      <img
        src="${photo.src}"
        alt="${photo.alt}"
      >

      <p style="margin: 16px 0 0">
        ${photo.alt}
      </p>
    `;

        dialog.showModal();
    });
});

document.querySelector(".close-dialog").addEventListener("click", () => {
    dialog.close();
});

dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;

    const rectangle = dialog.getBoundingClientRect();

    const clickedOutside =
        event.clientX < rectangle.left ||
        event.clientX > rectangle.right ||
        event.clientY < rectangle.top ||
        event.clientY > rectangle.bottom;

    if (clickedOutside) {
        dialog.close();
    }
});

/* =========================
   MOBILE NAVIGATION
========================= */

const menu = document.querySelector(".menu");
const nav = document.querySelector("#navigation");

function closeMenu() {
    menu.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
}

menu.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";

    menu.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("open", open);
});

nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
});

/* =========================
   SCROLL REVEALS
========================= */

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.08
        }
    );

    document
        .querySelectorAll(
            ".about-grid, .education-grid, .skill, .project-row, " +
            ".section-heading, .timeline li, .contact-grid"
        )
        .forEach((element) => {
            element.classList.add("reveal");
            observer.observe(element);
        });

    const sections = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                nav.querySelectorAll("a").forEach((link) => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === "#" + entry.target.id
                    );
                });
            });
        },
        {
            rootMargin: "-15% 0px -55% 0px"
        }
    );

    document.querySelectorAll("main section[id]").forEach((section) => {
        sections.observe(section);
    });
}

/* =========================
   PROGRESS AND BACK TO TOP
========================= */

const progress = document.querySelector(".progress");
const backTop = document.querySelector(".back-top");

window.addEventListener(
    "scroll",
    () => {
        const length =
            document.documentElement.scrollHeight - window.innerHeight;

        const percentage =
            length > 0 ? (window.scrollY / length) * 100 : 0;

        progress.style.width = percentage + "%";

        backTop.classList.toggle("visible", window.scrollY > 600);
    },
    {
        passive: true
    }
);

/* =========================
   YEAR AND INDIA TIME
========================= */

document.querySelector("#year").textContent = new Date().getFullYear();

function updateTime() {
    document.querySelector("#india-time").textContent =
        new Intl.DateTimeFormat("en-GB", {
            timeZone: "Asia/Kolkata",
            hour: "2-digit",
            minute: "2-digit"
        }).format(new Date());
}

updateTime();
setInterval(updateTime, 60000);

/* =========================
   CONTACT FORM
========================= */

const form = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const name = data.get("name").trim();
    const subject = data.get("subject").trim();
    const message = data.get("message").trim();

    if (name.length < 2 || !subject || message.length < 10) {
        feedback.textContent =
            "Please enter your name, a subject, and a message of at least 10 characters.";

        return;
    }

    const button = form.querySelector("button");

    button.disabled = true;
    button.textContent = "Preparing email…";

    try {
        const body =
            `Name: ${name}\n` +
            `Email: ${data.get("email")}\n\n` +
            message;

        window.location.href =
            "mailto:dr0324099@gmail.com" +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        feedback.textContent =
            "Email draft prepared. Complete sending in your email app. " +
            "If it did not open, email dr0324099@gmail.com directly.";
    } catch {
        feedback.textContent =
            "Could not open your email app. " +
            "Please email dr0324099@gmail.com directly.";
    } finally {
        setTimeout(() => {
            button.disabled = false;
            button.innerHTML = "Send Message <span>↗</span>";
        }, 600);
    }
});

/* =========================
   IMAGE ERROR HANDLING
========================= */

document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
        if (!image.classList.contains("qr-logo")) {
            image.classList.add("image-failed");
        }
    });
});

/* =========================
   CINEMATIC MOTION
========================= */

(() => {
    const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    const fine = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
    );

    let paused = reduced.matches;

    const hero = document.querySelector(".hero");
    const heading = hero.querySelector("h1");

    /* Headline entrance */

    const lines = heading.innerHTML.split(/<br\s*\/?\s*>/i);

    heading.innerHTML = lines
        .map(
            (line, index) => `
        <span class="hero-line">
          <span style="--line: ${index}">${line}</span>
        </span>
      `
        )
        .join("");

    /* Floating gold particles */

    const dust = document.createElement("div");

    dust.className = "hero-dust";
    dust.setAttribute("aria-hidden", "true");

    dust.innerHTML = Array.from(
        {
            length: 24
        },
        (_, index) => `
      <i
        style="
          --x: ${(index * 37) % 100}%;
          --size: ${(index % 3) + 1}px;
          --duration: ${12 + (index % 9)}s;
          --delay: -${index * 0.9}s;
        "
      ></i>
    `
    ).join("");

    hero.prepend(dust);

    /* Respect system motion preferences */

    function syncMotion() {
        document.body.classList.toggle("motion-paused", paused);

        if (paused) {
            document
                .querySelectorAll("[data-motion-transform]")
                .forEach((element) => {
                    element.style.transform = "";
                });
        }
    }

    syncMotion();

    reduced.addEventListener("change", (event) => {
        paused = event.matches;
        syncMotion();
    });

    /* Staggered skill entrances */

    document.querySelectorAll(".skill").forEach((element, index) => {
        element.style.setProperty(
            "--reveal-delay",
            `${(index % 3) * 95}ms`
        );
    });

    /* Additional scroll entrances */

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1
            }
        );

        document
            .querySelectorAll(
                ".gallery button, .journey-intro, .contact h2"
            )
            .forEach((element) => {
                element.classList.add("reveal");
                observer.observe(element);
            });
    }

    /* Mouse-follow spotlight */

    let frame = 0;
    let pointer = null;

    hero.addEventListener("pointermove", (event) => {
        if (paused || !fine.matches) return;

        pointer = {
            x: event.clientX,
            y: event.clientY
        };

        if (frame) return;

        frame = requestAnimationFrame(() => {
            frame = 0;

            const rectangle = hero.getBoundingClientRect();

            hero.style.setProperty(
                "--spot-x",
                `${pointer.x - rectangle.left}px`
            );

            hero.style.setProperty(
                "--spot-y",
                `${pointer.y - rectangle.top}px`
            );
        });
    });

    /* 3D card tilt */

    document
        .querySelectorAll(".reference-skill, .project-image")
        .forEach((card) => {
            card.dataset.motionTransform = "";

            let animationFrame = 0;

            card.addEventListener("pointermove", (event) => {
                if (paused || !fine.matches) return;

                const x = event.clientX;
                const y = event.clientY;

                cancelAnimationFrame(animationFrame);

                animationFrame = requestAnimationFrame(() => {
                    const rectangle = card.getBoundingClientRect();

                    const dx =
                        (x - rectangle.left) / rectangle.width - 0.5;

                    const dy =
                        (y - rectangle.top) / rectangle.height - 0.5;

                    card.style.transform =
                        `perspective(900px) ` +
                        `rotateX(${-dy * 7}deg) ` +
                        `rotateY(${dx * 9}deg) ` +
                        "translateY(-3px)";

                    card.style.setProperty(
                        "--shine-x",
                        `${x - rectangle.left}px`
                    );

                    card.style.setProperty(
                        "--shine-y",
                        `${y - rectangle.top}px`
                    );
                });
            });

            card.addEventListener("pointerleave", () => {
                cancelAnimationFrame(animationFrame);
                card.style.transform = "";
            });
        });

    /* Magnetic buttons */

    document
        .querySelectorAll(".actions .button, .actions .text-link")
        .forEach((button) => {
            button.dataset.motionTransform = "";

            button.addEventListener("pointermove", (event) => {
                if (paused || !fine.matches) return;

                const rectangle = button.getBoundingClientRect();

                const x =
                    (event.clientX -
                        rectangle.left -
                        rectangle.width / 2) * 0.12;

                const y =
                    (event.clientY -
                        rectangle.top -
                        rectangle.height / 2) * 0.18;

                button.style.transform = `translate(${x}px, ${y}px)`;
            });

            button.addEventListener("pointerleave", () => {
                button.style.transform = "";
            });
        });

    /* Hero photo parallax */

    const visual = document.querySelector(".hero-visual");

    visual.dataset.motionTransform = "";

    let scrollFrame = 0;

    window.addEventListener(
        "scroll",
        () => {
            if (paused || !fine.matches || scrollFrame) return;

            scrollFrame = requestAnimationFrame(() => {
                scrollFrame = 0;

                const rectangle = hero.getBoundingClientRect();

                if (rectangle.bottom > 0) {
                    visual.style.transform =
                        `translateY(${Math.min(window.scrollY * 0.1, 65)}px)`;
                }
            });
        },
        {
            passive: true
        }
    );

    /* Pause decorative animation in background tabs */

    document.addEventListener("visibilitychange", () => {
        document.body.classList.toggle(
            "motion-paused",
            paused || document.hidden
        );
    });
})();