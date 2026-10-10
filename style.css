/* =========================
   THEME
========================= */

:root {
    --paper: #f7f5ef;
    --white: #ffffff;
    --ink: #182033;
    --muted: #666b78;
    --blue: #3155f5;
    --orange: #f8754d;
    --peach: #ffe1d2;
    --lavender: #e9eaff;
    --line: #18203322;
    --heading: "Space Grotesk", sans-serif;
    --body: "DM Sans", sans-serif;
    --journey-image: url("https://cdn.phototourl.com/member/2026-10-09-3e853f4f-5c75-4fb4-8a2f-b670aa5ed147.png");
    --skill-image: url("https://cdn.phototourl.com/member/2026-10-09-03a44fae-7073-4c9b-8d4b-e22308b885fc.png");
}

* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
}

body {
    margin: 0;
    background: var(--paper);
    color: var(--ink);
    font-family: var(--body);
    line-height: 1.7;
    overflow-x: clip;
}

body.dialog-open {
    overflow: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

button,
input,
textarea {
    font: inherit;
}

button {
    cursor: pointer;
}

button,
a {
    -webkit-tap-highlight-color: transparent;
}

button {
    color: inherit;
}

img {
    display: block;
    max-width: 100%;
}

h1,
h2,
h3,
p,
figure {
    margin: 0;
}

h1,
h2,
h3 {
    font-family: var(--heading);
}

h1,
h2 {
    letter-spacing: -0.065em;
}

p {
    color: var(--muted);
}

button,
a,
input,
textarea {
    outline-offset: 5px;
}

:focus-visible {
    outline: 3px solid var(--orange);
}

::selection {
    background: var(--blue);
    color: white;
}

.section-shell {
    padding-left: max(6%, calc((100vw - 1320px) / 2));
    padding-right: max(6%, calc((100vw - 1320px) / 2));
}

.section {
    padding-top: 100px;
    padding-bottom: 100px;
}

.section-kicker {
    display: flex;
    justify-content: space-between;
    gap: 25px;
    padding-bottom: 22px;
    margin-bottom: 55px;
    border-bottom: 1px solid var(--line);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.6px;
}

.eyebrow {
    color: var(--blue);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.7px;
    margin-bottom: 20px;
}

h2 {
    font-size: clamp(38px, 4.9vw, 68px);
    line-height: 1.06;
    font-weight: 600;
}

.text-blue {
    color: var(--blue);
}

.text-orange {
    color: var(--orange);
}

.section-heading {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 50px;
    margin-bottom: 45px;
}

.section-heading>p,
.section-heading>.bootcamp-intro {
    max-width: 400px;
}

.section-heading p {
    font-size: 14px;
}

.skip-link {
    position: fixed;
    top: -100px;
    left: 20px;
    z-index: 1000;
    padding: 12px 20px;
    background: var(--blue);
    color: white;
}

.skip-link:focus {
    top: 15px;
}

.scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 3px;
    z-index: 300;
    background: linear-gradient(90deg, var(--blue), var(--orange));
}

/* =========================
   MOUSE EFFECTS
========================= */

.mouse-light {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 650px;
    height: 650px;
    margin: -325px 0 0 -325px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 10;

    background:
        radial-gradient(circle,
            #3155f508 0,
            #f8754d06 35%,
            transparent 68%);
}

.cursor-dot,
.cursor-ring {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
    z-index: 500;
    border-radius: 50%;
    opacity: 0;
}

.cursor-dot {
    width: 6px;
    height: 6px;
    margin: -3px;
    background: var(--blue);
}

.cursor-ring {
    width: 36px;
    height: 36px;
    margin: -18px;
    border: 1.5px solid var(--blue);
    display: none;
    place-items: center;

    transition:
        width 0.2s,
        height 0.2s,
        margin 0.2s,
        background 0.2s,
        border-color 0.2s;
}

.cursor-ring span {
    font-family: var(--heading);
    font-size: 9px;
    font-weight: 700;
    white-space: nowrap;
}

.cursor-ring.is-link {
    width: 56px;
    height: 56px;
    margin: -28px;
    background: #3155f510;
}

.cursor-ring.is-view {
    width: 76px;
    height: 76px;
    margin: -38px;
    background: var(--blue);
    border-color: var(--blue);
    color: white;
}

.cursor-ring.is-text {
    width: 20px;
    height: 35px;
    margin: -17px 0 0 -10px;
    border-radius: 7px;
}

.cursor-ring.is-hidden,
.cursor-dot.is-hidden {
    opacity: 0 !important;
}

.cursor-enabled .cursor-dot,
.cursor-enabled .cursor-ring,
.cursor-enabled .mouse-light {
    display: grid;
}

.cursor-enabled,
.cursor-enabled a,
.cursor-enabled button {
    cursor: none;
}

.cursor-enabled input,
.cursor-enabled textarea {
    cursor: text;
}

.pointer-particle {
    position: fixed;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--blue);
    pointer-events: none;
    z-index: 490;
    animation: particle-fade 550ms ease-out forwards;
}

.pointer-particle:nth-of-type(even) {
    background: var(--orange);
}

.click-ripple {
    position: fixed;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid var(--blue);
    pointer-events: none;
    z-index: 480;
    animation: ripple-out 600ms ease-out forwards;
}

/* =========================
   HEADER
========================= */

.site-header {
    position: sticky;
    top: 0;
    z-index: 100;
    min-height: 88px;
    padding: 0 4%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
    background: #f7f5efeb;
    backdrop-filter: blur(18px);
    border-bottom: 1px solid var(--line);
}

.brand {
    display: inline-flex;
    align-items: center;
    gap: 12px;
}

.brand-logo {
    display: block;
    position: relative;
    width: 43px;
    height: 43px;
    border-radius: 12px;
    flex-shrink: 0;

    background:
        #182033 url("https://dipanshu-raj.netlify.app/assets/logo-dk.png") center / 85% no-repeat;
}

.logo-qr {
    width: 100%;
    height: 100%;
    opacity: 0;
    object-fit: contain;
}

.brand-name {
    font-family: var(--heading);
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.8px;
}

.brand-dot {
    color: var(--orange);
}

.brand-name small {
    display: block;
    font-family: var(--body);
    font-size: 6px;
    letter-spacing: 1.7px;
    color: var(--muted);
    margin-top: -2px;
}

#main-nav {
    display: flex;
    align-items: center;
    gap: 23px;
}

#main-nav a {
    font-size: 11px;
    font-weight: 600;
    position: relative;
}

#main-nav a:not(.nav-cta)::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -8px;
    height: 2px;
    background: var(--blue);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s;
}

#main-nav a.active::after,
#main-nav a:hover::after {
    transform: scaleX(1);
}

.nav-cta {
    padding: 11px 17px;
    border: 1px solid var(--ink);
    border-radius: 30px;
}

.menu-toggle {
    display: none;
    border: 0;
    background: none;
    width: 44px;
    height: 44px;
    padding: 9px;
}

.menu-toggle span {
    display: block;
    height: 2px;
    background: var(--ink);
    margin: 6px 0;
    transition: transform 0.25s;
}

/* =========================
   HERO
========================= */

.hero {
    padding-top: 28px;
    position: relative;
    overflow: hidden;
}

.hero-meta {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    font-size: 9px;
    letter-spacing: 1.3px;
    color: var(--muted);
}

.status-dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    background: var(--orange);
    border-radius: 50%;
    margin-right: 8px;
    box-shadow: 0 0 0 4px #f8754d16;
}

.hero-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
    gap: 55px;
    padding: 65px 0 55px;
}

.hero h1 {
    font-size: clamp(66px, 7.25vw, 110px);
    font-weight: 600;
    line-height: 0.99;
}

.hero h1 em {
    color: var(--blue);
    font-style: normal;
}

.title-line {
    display: block;
    overflow: hidden;
    padding-bottom: 0.09em;
    margin-bottom: -0.09em;
}

.title-line>span {
    display: block;
    animation: title-in 1.1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.title-line:nth-child(2)>span {
    animation-delay: 0.12s;
}

.title-line:nth-child(3)>span {
    animation-delay: 0.24s;
}

.title-line:nth-child(4)>span {
    animation-delay: 0.36s;
}

.title-outline {
    color: transparent;
    -webkit-text-stroke: 1.5px var(--ink);
}

.orange-word {
    color: var(--orange);
}

.blue-dot {
    color: var(--blue);
}

.hero-description {
    margin-top: 25px;
    font-size: 14px;
    max-width: 460px;
}

.hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
    margin-top: 28px;
}

.button {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
    min-height: 49px;
    padding: 13px 20px;
    border-radius: 9px;
    font-size: 11px;
    font-weight: 700;
    border: 1px solid transparent;
    position: relative;
    overflow: hidden;

    transition:
        background 0.25s,
        color 0.25s,
        box-shadow 0.25s,
        transform 0.2s;
}

.button-blue {
    background: var(--blue);
    color: white;
}

.button-blue:hover {
    background: #2444d6;
    box-shadow: 0 9px 0 #3155f518;
}

.button-outline {
    background: transparent;
    border-color: var(--line);
}

.button-outline:hover {
    border-color: var(--blue);
    color: var(--blue);
}

.button span {
    display: inline-block;
    font-size: 17px;
    transition: transform 0.25s;
}

.button:hover span {
    transform: translate(3px, -3px);
}

.button::after {
    content: "";
    position: absolute;
    top: -100%;
    bottom: -100%;
    left: -60%;
    width: 30%;
    background: linear-gradient(90deg, transparent, #ffffff30, transparent);
    transform: rotate(25deg);
    transition: left 0.6s;
}

.button:hover::after {
    left: 140%;
}

.hero-note {
    display: flex;
    align-items: center;
    gap: 13px;
    margin-top: 30px;
}

.mini-star {
    display: block;
    color: var(--orange);
    font-size: 37px;
    line-height: 1;
}

.hero-note p {
    font-size: 10px;
}

.hero-note strong {
    font-weight: 500;
    color: var(--ink);
}

.hero-enter {
    animation: slide-up 0.9s 0.45s both;
}

.hero-art {
    position: relative;
    padding: 30px 0;
    perspective: 1100px;
}

.portrait-scene {
    height: 530px;
    position: relative;
    border-radius: 160px 160px 28px 28px;
    background: var(--lavender);
    border: 1px solid #3155f52a;
    overflow: hidden;
    transform-style: preserve-3d;
    box-shadow: 18px 20px 0 #18203308;
    animation: portrait-in 1.2s 0.25s both;
}

.portrait-grid {
    position: absolute;
    inset: 0;
    opacity: 0.5;

    background-image:
        linear-gradient(#3155f513 1px, transparent 1px),
        linear-gradient(90deg, #3155f513 1px, transparent 1px);

    background-size: 36px 36px;
}

.portrait-circle {
    position: absolute;
    width: 340px;
    height: 340px;
    border-radius: 50%;
    background: var(--orange);
    top: 115px;
    left: 50%;
    transform: translateX(-50%);
}

.portrait-topline {
    position: absolute;
    left: 35px;
    right: 35px;
    top: 72px;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    gap: 15px;
    font-size: 7px;
    font-weight: 700;
    letter-spacing: 1.2px;
}

.hero-photo {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 88%;
    object-fit: contain;
    object-position: bottom;
    z-index: 2;
}

.portrait-bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    background: #182033eb;
    padding: 18px 25px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
}

.portrait-bottom span {
    font-size: 7px;
    letter-spacing: 1.6px;
}

.portrait-bottom strong {
    font-family: var(--heading);
    font-size: 13px;
    font-weight: 500;
}

.floating-label {
    position: absolute;
    z-index: 5;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 11px;
    font-weight: 700;
    padding: 13px 17px;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: white;
    box-shadow: 0 15px 40px #1820330d;
    animation: float-label 5s ease-in-out infinite;
}

.floating-label span {
    font-family: var(--heading);
    color: var(--blue);
    font-size: 22px;
}

.label-code {
    top: 75px;
    left: -35px;
    transform: rotate(-7deg);
}

.label-ai {
    right: -20px;
    bottom: 105px;
    animation-delay: -2.5s;
}

.label-ai span {
    color: var(--orange);
}

.orbit-sticker {
    position: absolute;
    right: -17px;
    top: -5px;
    z-index: 5;
    width: 104px;
    height: 104px;
    border-radius: 50%;
    background: var(--blue);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: rotate(13deg);
    box-shadow: 0 0 0 7px var(--paper);
}

.orbit-sticker span {
    font-size: 8px;
    letter-spacing: 1.5px;
}

.orbit-sticker b {
    font-size: 35px;
    line-height: 1.1;
}

.hero-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    border-top: 1px solid var(--line);
    padding: 22px 0;
}

.scroll-hint {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 1px;
}

.scroll-hint>span {
    width: 27px;
    height: 35px;
    display: grid;
    place-items: center;
    border: 1px solid var(--line);
    border-radius: 20px;
    font-size: 17px;
}

.hero-bottom p {
    font-size: 9px;
}

.hero-bottom p span {
    padding: 0 10px;
    color: var(--orange);
}

/* =========================
   MARQUEE
========================= */

.marquee {
    background: var(--blue);
    color: white;
    overflow: hidden;
    padding: 18px 0;
}

.marquee-track {
    display: flex;
    width: max-content;
    animation: marquee-slide 26s linear infinite;
}

.marquee-group {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    gap: 45px;
    padding-right: 45px;
}

.marquee-group span {
    font-family: var(--heading);
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 1px;
}

.marquee-group b {
    color: #ffbd9e;
    font-size: 28px;
    line-height: 1;
}

/* =========================
   ABOUT
========================= */

.about-grid {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 9%;
    align-items: center;
}

.about-visual {
    position: relative;
}

.about-image-wrap {
    height: 465px;
    background: var(--peach);
    border-radius: 18px;
    overflow: hidden;
}

.about-image-wrap img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: bottom;
}

.about-caption {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 18px;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 1.4px;
}

.about-caption b {
    color: var(--blue);
    font-size: 24px;
}

.about-sticker {
    position: absolute;
    top: 25px;
    right: -25px;
    padding: 14px;
    background: var(--blue);
    color: white;
    font-family: var(--heading);
    font-size: 11px;
    font-weight: 700;
    line-height: 1.3;
    transform: rotate(9deg);
}

.about-copy h2 {
    margin-bottom: 25px;
}

.about-copy>p:not(.eyebrow) {
    font-size: 13px;
    margin-bottom: 16px;
}

.about-copy strong {
    color: var(--ink);
}

.about-facts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-top: 28px;
    padding-top: 20px;
    border-top: 1px solid var(--line);
}

.about-facts small {
    display: block;
    font-size: 7px;
    color: var(--muted);
    letter-spacing: 1px;
}

.about-facts strong {
    display: block;
    font-size: 11px;
    margin-top: 4px;
}

.signature {
    width: 140px;
    max-height: 65px;
    object-fit: contain;
    margin-top: 20px;
}

.manifesto {
    display: flex;
    align-items: flex-start;
    gap: 35px;
    margin-top: 75px;
    padding-top: 40px;
    border-top: 1px solid var(--line);
}

.manifesto-symbol {
    color: var(--orange);
    font-size: 100px;
    font-family: Georgia, serif;
    line-height: 0.9;
}

.manifesto p {
    max-width: 950px;
    font-family: var(--heading);
    font-size: clamp(25px, 3.2vw, 43px);
    color: var(--ink);
    line-height: 1.3;
    letter-spacing: -1.5px;
}

.manifesto p span {
    color: var(--blue);
}

/* =========================
   EDUCATION
========================= */

.education-section {
    background: #eeeef8;
}

.education-card {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 65px;
    align-items: center;
}

.pill {
    display: inline-block;
    padding: 7px 12px;
    border-radius: 30px;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 1px;
}

.pill-blue {
    color: var(--blue);
    background: #3155f510;
}

.education-copy h2 {
    margin: 22px 0;
}

.education-copy h3 {
    font-size: 20px;
    margin-bottom: 5px;
}

.education-copy p {
    margin-bottom: 17px;
    font-size: 13px;
}

.education-copy .education-degree {
    color: var(--blue);
    font-weight: 600;
}

.education-location {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 9px;
    letter-spacing: 1.2px;
    font-weight: 700;
    margin-top: 25px;
}

.education-location span {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: var(--orange);
    display: grid;
    place-items: center;
    font-size: 20px;
}

.education-image img {
    width: 100%;
    height: 380px;
    object-fit: contain;
    border-radius: 20px;
    background: #182033;
}

.education-image figcaption {
    margin-top: 15px;
    font-size: 11px;
    color: var(--muted);
}

/* =========================
   SKILLS
========================= */

.skills-grid {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 17px;
}

.skill-card {
    grid-column: span 3;
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 25px;
    min-height: 120px;
    border: 1px solid var(--line);
    border-radius: 15px;
    background: white;
    overflow: hidden;
    transform-style: preserve-3d;
    transition: border-color 0.3s, box-shadow 0.3s;
}

.skill-card:nth-child(n + 5) {
    grid-column: span 2;
}

.skill-card:hover {
    border-color: #3155f560;
    box-shadow: 0 15px 40px #3155f50a;
}

.skill-icon {
    display: block;
    width: 65px;
    height: 65px;
    flex: 0 0 65px;
    border-radius: 17px;
    background-image: var(--skill-image);
    background-size: 1061px 437px;
    background-repeat: no-repeat;
}

.icon-python {
    background-position: -74px -41px;
}

.icon-web {
    background-position: -566px -41px;
}

.icon-github {
    background-position: -74px -177px;
    border-radius: 50%;
}

.icon-ai {
    background-position: -566px -177px;
}

.icon-problem {
    background-position: -74px -315px;
}

.icon-communication {
    background-position: -402px -315px;
}

.icon-adaptability {
    background-position: -731px -315px;
    border-radius: 50%;
}

.skill-card h3 {
    font-size: 18px;
    letter-spacing: -0.6px;
}

.skill-card p {
    font-size: 11px;
    color: var(--blue);
    margin-top: 5px;
}

.skill-card p::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 5px;
    background: var(--orange);
    border-radius: 50%;
    margin-right: 7px;
    vertical-align: middle;
}

.skill-number {
    position: absolute;
    right: 15px;
    top: 10px;
    font-size: 8px;
    color: #18203355;
}

.skills-footnote {
    font-size: 11px;
    margin-top: 25px;
}

/* =========================
   PROJECTS
========================= */

.projects-section {
    background: var(--ink);
    color: white;
}

.projects-section .section-kicker {
    border-color: #ffffff24;
}

.projects-section .section-heading p {
    color: #b2b8c9;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 23px;
}

.project-card {
    min-width: 0;
    position: relative;
    background: #222b40;
    border: 1px solid #ffffff18;
    border-radius: 19px;
    overflow: hidden;
    transform-style: preserve-3d;
    transition: border-color 0.3s, box-shadow 0.3s;
}

.project-card:hover {
    border-color: #9bb0ff88;
    box-shadow: 0 25px 60px #0003;
}

.project-image-button {
    width: 100%;
    padding: 27px;
    border: 0;
    background: var(--lavender);
    position: relative;
    display: block;
}

.project-card:nth-child(2) .project-image-button {
    background: var(--peach);
}

.project-card:nth-child(3) .project-image-button {
    background: #d9ece4;
}

.project-image-button img {
    width: 100%;
    height: 215px;
    object-fit: contain;
    transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.project-card:hover .project-image-button img {
    transform: translateY(-5px) scale(1.035);
}

.project-index {
    position: absolute;
    top: 12px;
    left: 17px;
    font-size: 9px;
    color: var(--ink);
    font-weight: 700;
}

.project-body {
    padding: 25px;
}

.project-category {
    display: block;
    color: #9cb0ff;
    font-size: 8px;
    letter-spacing: 1.2px;
    font-weight: 700;
    margin-bottom: 12px;
}

.project-body h3 {
    font-size: 25px;
    line-height: 1.15;
    letter-spacing: -1px;
    margin-bottom: 13px;
}

.project-body p {
    color: #bac0ce;
    font-size: 12px;
}

.project-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: none;
    border: 0;
    border-top: 1px solid #ffffff25;
    color: white;
    margin-top: 25px;
    padding: 17px 0 0;
    font-size: 10px;
    font-weight: 600;
}

.project-details span {
    font-size: 20px;
    color: var(--orange);
}

/* Shine follows the mouse */
.tilt-card::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    opacity: 0;

    background:
        radial-gradient(380px circle at var(--shine-x, 50%) var(--shine-y, 50%),
            #3155f515,
            transparent 70%);

    transition: opacity 0.25s;
}

.project-card::after {
    background:
        radial-gradient(380px circle at var(--shine-x, 50%) var(--shine-y, 50%),
            #ffffff12,
            transparent 70%);
}

.tilt-card:hover::after {
    opacity: 1;
}

/* =========================
   BOOTCAMP SLIDER
========================= */

.bootcamp-section {
    overflow: hidden;
}

.bootcamp-intro p {
    margin-bottom: 22px;
}

.gallery-controls {
    display: flex;
    align-items: center;
    gap: 10px;
}

.circle-button {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    background: transparent;
    border: 1px solid var(--line);
    border-radius: 50%;
    font-size: 22px;
    transition: background 0.25s, color 0.25s;
}

.circle-button:hover {
    color: white;
    background: var(--blue);
    border-color: var(--blue);
}

.gallery-controls>span {
    margin-left: 10px;
    font-size: 7px;
    letter-spacing: 1px;
}

.bootcamp-track {
    display: flex;
    gap: 22px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: var(--blue) #e5e6eb;

    padding:
        10px max(6%, calc((100vw - 1320px) / 2)) 30px;

    scroll-padding-left: max(6%, calc((100vw - 1320px) / 2));
}

.bootcamp-slide {
    flex: 0 0 440px;
    scroll-snap-align: start;
    margin: 0;
}

.bootcamp-slide button {
    display: block;
    width: 100%;
    border: 0;
    padding: 0;
    background: #e1e3e9;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
}

.bootcamp-slide img {
    width: 100%;
    height: 310px;
    object-fit: cover;
    transition: transform 0.7s;
}

.bootcamp-slide button:hover img {
    transform: scale(1.05);
}

.bootcamp-slide button>span {
    position: absolute;
    right: 15px;
    bottom: 15px;
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    background: var(--paper);
    border-radius: 50%;
    font-size: 22px;
}

.bootcamp-slide figcaption {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    font-size: 10px;
    margin-top: 15px;
}

.bootcamp-slide figcaption span {
    color: var(--blue);
    font-weight: 700;
}

.bootcamp-themes {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 35px;
}

.bootcamp-themes span {
    padding-top: 17px;
    border-top: 1px solid var(--line);
    font-size: 11px;
    font-weight: 500;
}

/* =========================
   JOURNEY
========================= */

.journey-section {
    position: relative;
    color: white;

    background:
        linear-gradient(100deg, #172034f5, #172034e8),
        var(--journey-image) center / cover;
}

.journey-section .section-kicker {
    border-color: #ffffff25;
}

.journey-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10%;
}

.journey-copy .eyebrow {
    color: #aebdff;
}

.journey-copy h2 {
    margin-bottom: 25px;
}

.journey-copy h2 span {
    color: #ffac8f;
}

.journey-copy p:not(.eyebrow) {
    color: #bfc6d6;
    font-size: 13px;
    margin-bottom: 17px;
    max-width: 400px;
}

.journey-arrow {
    display: inline-block;
    color: #aebdff;
    font-size: 100px;
    line-height: 1;
    margin-top: 20px;
}

.timeline {
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
    --timeline-progress: 0;
}

.timeline::before,
.timeline::after {
    content: "";
    position: absolute;
    top: 22px;
    bottom: 40px;
    left: 21px;
    width: 2px;
}

.timeline::before {
    background: #ffffff20;
}

.timeline::after {
    background: var(--orange);
    transform-origin: top;
    transform: scaleY(var(--timeline-progress));
}

.timeline li {
    position: relative;
    z-index: 1;
    display: flex;
    gap: 23px;
    padding-bottom: 35px;
}

.timeline-number {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
    background: #243047;
    border: 1px solid #ffffff35;
    border-radius: 50%;
    font-size: 10px;
    font-weight: 700;
    transition: background 0.5s, border-color 0.5s;
}

.timeline li.in .timeline-number {
    background: var(--blue);
    border-color: #99afff;
}

.timeline small {
    font-size: 7px;
    letter-spacing: 1.5px;
    color: #abb9ee;
}

.timeline h3 {
    font-size: 20px;
    line-height: 1.3;
    letter-spacing: -0.5px;
    margin: 7px 0;
}

.timeline p {
    color: #bfc6d6;
    font-size: 12px;
}

/* =========================
   CONTACT
========================= */

.contact-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 55px;
}

.contact-heading h2 {
    font-size: clamp(55px, 8vw, 112px);
}

.contact-spark {
    font-size: 160px;
    color: var(--orange);
    line-height: 1;
    margin-right: 6%;
    animation: slow-turn 25s linear infinite;
}

.contact-grid {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 9%;
}

.contact-copy>p {
    font-size: 14px;
    margin-bottom: 30px;
}

.contact-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    border-bottom: 1px solid var(--line);
    padding: 20px 0;
    font-size: 16px;
    overflow-wrap: anywhere;
}

.contact-link small {
    display: block;
    font-size: 7px;
    color: var(--muted);
    letter-spacing: 1.5px;
    margin-bottom: 5px;
}

.contact-link b {
    font-size: 25px;
    color: var(--blue);
    transition: transform 0.25s;
}

.contact-link:hover b {
    transform: translate(4px, -4px);
}

.contact-form {
    padding: 32px;
    border-radius: 20px;
    background: white;
    border: 1px solid var(--line);
}

.contact-form h3 {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    font-size: 24px;
    letter-spacing: -0.8px;
    margin-bottom: 25px;
}

.contact-form h3 span {
    color: var(--orange);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}

.contact-form label {
    display: block;
    font-size: 10px;
    font-weight: 600;
    margin-bottom: 17px;
}

.contact-form input,
.contact-form textarea {
    display: block;
    width: 100%;
    border: 1px solid #18203320;
    padding: 12px 13px;
    background: var(--paper);
    color: var(--ink);
    border-radius: 7px;
    margin-top: 7px;
    font-size: 12px;
    resize: vertical;
}

.contact-form input:focus,
.contact-form textarea:focus {
    border-color: var(--blue);
}

.contact-form .button {
    width: 100%;
}

.contact-form .button:disabled {
    opacity: 0.7;
    cursor: wait;
}

.form-note {
    font-size: 10px;
    margin-top: 12px;
}

#form-status {
    font-size: 11px;
    color: var(--blue);
    margin-top: 10px;
}

/* =========================
   FOOTER
========================= */

.site-footer {
    padding-top: 40px;
    padding-bottom: 25px;
    background: #eaeaf2;
}

.footer-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    padding-bottom: 30px;
}

.footer-top p {
    max-width: 280px;
    font-size: 11px;
}

.footer-top-link {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 1px;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    border-top: 1px solid var(--line);
    padding-top: 20px;
    font-size: 8px;
    color: var(--muted);
}

.footer-bottom nav {
    display: flex;
    gap: 18px;
}

.back-to-top {
    position: fixed;
    right: 22px;
    bottom: 22px;
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--blue);
    color: white;
    z-index: 80;
    opacity: 0;
    pointer-events: none;
    transform: translateY(10px);
    transition: opacity 0.25s, transform 0.25s;
}

.back-to-top.visible {
    opacity: 1;
    pointer-events: auto;
    transform: none;
}

/* =========================
   MODAL
========================= */

#viewer {
    width: min(850px, 92vw);
    max-height: 90vh;
    padding: 40px;
    border: 0;
    border-radius: 18px;
    background: var(--paper);
    color: var(--ink);
    box-shadow: 0 30px 100px #0004;
    cursor: auto;
}

#viewer::backdrop {
    background: #111827dc;
    backdrop-filter: blur(10px);
}

#viewer[open] {
    animation: modal-enter 0.3s ease-out;
}

.viewer-close {
    position: absolute;
    right: 12px;
    top: 5px;
    width: 35px;
    height: 35px;
    border: 0;
    background: none;
    font-size: 30px;
    cursor: pointer;
}

#viewer img {
    width: 100%;
    max-height: 60vh;
    object-fit: contain;
    border-radius: 8px;
}

#viewer h3 {
    font-size: 30px;
    letter-spacing: -1px;
    margin: 23px 0 12px;
}

#viewer p {
    font-size: 13px;
    margin-top: 10px;
}

.viewer-label {
    display: inline-block;
    margin-top: 20px;
    font-size: 8px;
    letter-spacing: 1px;
    padding: 7px 11px;
    border-radius: 20px;
    color: var(--blue);
    background: #3155f511;
}

/* =========================
   REVEAL ANIMATIONS
========================= */

.reveal {
    opacity: 0;
    transform: translateY(35px);
    transition:
        opacity 0.8s ease,
        transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
    transition-delay: var(--delay, 0ms);
}

.reveal.from-left {
    transform: translateX(-50px);
}

.reveal.from-right {
    transform: translateX(50px);
}

.reveal.in {
    opacity: 1;
    transform: none;
}

.image-error {
    min-height: 120px;
    color: var(--ink);
}

.page-hidden *,
.page-hidden *::before,
.page-hidden *::after {
    animation-play-state: paused !important;
}

/* =========================
   KEYFRAMES
========================= */

@keyframes title-in {
    from {
        transform: translateY(115%) rotate(3deg);
        opacity: 0;
    }

    to {
        transform: none;
        opacity: 1;
    }
}

@keyframes slide-up {
    from {
        transform: translateY(22px);
        opacity: 0;
    }

    to {
        transform: none;
        opacity: 1;
    }
}

@keyframes portrait-in {
    from {
        opacity: 0;
        scale: 0.94;
    }

    to {
        opacity: 1;
        scale: 1;
    }
}

@keyframes float-label {

    0%,
    100% {
        translate: 0 0;
    }

    50% {
        translate: 0 -12px;
    }
}

@keyframes marquee-slide {
    to {
        transform: translateX(-50%);
    }
}

@keyframes slow-turn {
    to {
        transform: rotate(360deg);
    }
}

@keyframes particle-fade {
    to {
        opacity: 0;
        transform: translateY(20px) scale(0);
    }
}

@keyframes ripple-out {
    to {
        opacity: 0;
        transform: scale(7);
    }
}

@keyframes modal-enter {
    from {
        opacity: 0;
        transform: translateY(20px) scale(0.97);
    }

    to {
        opacity: 1;
        transform: none;
    }
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1150px) {
    #main-nav {
        gap: 15px;
    }

    .brand-name {
        font-size: 17px;
    }

    .brand-name small {
        font-size: 5px;
    }

    .hero-grid {
        gap: 35px;
    }

    .hero h1 {
        font-size: 82px;
    }

    .portrait-scene {
        height: 470px;
    }

    .portrait-circle {
        width: 290px;
        height: 290px;
    }

    .floating-label {
        font-size: 9px;
        padding: 10px 12px;
    }

    .skill-card {
        gap: 14px;
        padding: 20px;
    }

    .skill-card h3 {
        font-size: 16px;
    }

    .project-image-button {
        padding: 20px;
    }

    .project-image-button img {
        height: 180px;
    }

    .project-body {
        padding: 21px;
    }
}

@media (max-width: 950px) {
    .site-header {
        min-height: 76px;
    }

    .menu-toggle {
        display: block;
    }

    #main-nav {
        display: none;
        position: absolute;
        top: 76px;
        left: 0;
        right: 0;
        background: var(--paper);
        padding: 20px 6% 30px;
        border-bottom: 1px solid var(--line);
        flex-direction: column;
        align-items: stretch;
        gap: 0;
    }

    #main-nav.open {
        display: flex;
    }

    #main-nav a {
        padding: 12px 5px;
        font-size: 14px;
    }

    #main-nav a::after {
        display: none;
    }

    #main-nav a.active {
        color: var(--blue);
    }

    #main-nav .nav-cta {
        text-align: center;
        margin-top: 10px;
    }

    .menu-toggle[aria-expanded="true"] span:first-child {
        transform: translateY(4px) rotate(45deg);
    }

    .menu-toggle[aria-expanded="true"] span:last-child {
        transform: translateY(-4px) rotate(-45deg);
    }

    .section {
        padding-top: 75px;
        padding-bottom: 75px;
    }

    .hero-grid {
        gap: 28px;
    }

    .hero h1 {
        font-size: 66px;
    }

    .portrait-scene {
        height: 440px;
    }

    .portrait-topline {
        left: 23px;
        right: 23px;
        font-size: 6px;
    }

    .orbit-sticker {
        width: 85px;
        height: 85px;
        right: -5px;
    }

    .label-code {
        left: -15px;
    }

    .label-ai {
        right: -10px;
    }

    .about-grid {
        gap: 6%;
    }

    .about-image-wrap {
        height: 400px;
    }

    .education-card {
        gap: 35px;
    }

    .skill-card:nth-child(n + 5) {
        grid-column: span 3;
    }

    .skill-card:last-child {
        grid-column: span 6;
    }

    .project-grid {
        grid-template-columns: 1fr 1fr;
    }

    .project-card:last-child {
        grid-column: 1 / -1;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .journey-grid {
        gap: 6%;
    }

    .contact-grid {
        gap: 5%;
    }

    .contact-form {
        padding: 25px;
    }
}

@media (max-width: 700px) {
    html {
        scroll-padding-top: 85px;
    }

    .section-shell {
        padding-left: 6%;
        padding-right: 6%;
    }

    .hero-meta {
        font-size: 7px;
        letter-spacing: 0.7px;
    }

    .hero-grid {
        grid-template-columns: 1fr;
        padding-top: 40px;
        padding-bottom: 25px;
        gap: 30px;
    }

    .hero h1 {
        font-size: clamp(61px, 13vw, 91px);
    }

    .hero-description {
        font-size: 13px;
    }

    .hero-actions {
        gap: 10px;
    }

    .button {
        font-size: 10px;
        padding: 12px 16px;
        gap: 16px;
    }

    .hero-art {
        width: min(100%, 420px);
        margin: auto;
        padding: 25px 8px;
    }

    .portrait-scene {
        height: 475px;
    }

    .portrait-circle {
        width: 310px;
        height: 310px;
    }

    .label-code {
        left: -5px;
    }

    .label-ai {
        right: -3px;
    }

    .hero-bottom p {
        max-width: 180px;
        text-align: right;
        font-size: 8px;
    }

    .hero-bottom p span {
        padding: 0 4px;
    }

    .marquee {
        padding: 15px 0;
    }

    .marquee-group {
        gap: 25px;
        padding-right: 25px;
    }

    .marquee-group span {
        font-size: 13px;
    }

    .section {
        padding-top: 60px;
        padding-bottom: 60px;
    }

    .section-kicker {
        font-size: 8px;
        letter-spacing: 0.8px;
        margin-bottom: 35px;
    }

    .section-kicker>span:last-child {
        text-align: right;
        max-width: 160px;
    }

    .section-heading {
        display: block;
        margin-bottom: 30px;
    }

    .section-heading>p,
    .section-heading>.bootcamp-intro {
        margin-top: 22px;
        max-width: none;
    }

    .section-heading p {
        font-size: 13px;
    }

    .about-grid,
    .education-card,
    .journey-grid,
    .contact-grid {
        grid-template-columns: 1fr;
        gap: 35px;
    }

    .about-visual {
        max-width: 420px;
        width: 100%;
        margin: auto;
    }

    .about-image-wrap {
        height: 410px;
    }

    .about-sticker {
        right: -8px;
    }

    .about-facts {
        gap: 10px;
    }

    .about-facts strong {
        font-size: 10px;
    }

    .manifesto {
        margin-top: 45px;
        padding-top: 30px;
        gap: 18px;
    }

    .manifesto-symbol {
        font-size: 70px;
    }

    .manifesto p {
        letter-spacing: -1px;
    }

    .education-image img {
        height: 290px;
    }

    .skills-grid {
        gap: 13px;
    }

    .skill-card {
        padding: 20px;
    }

    .project-grid {
        grid-template-columns: 1fr;
        gap: 22px;
    }

    .project-card:last-child {
        display: block;
        grid-column: auto;
    }

    .project-image-button img {
        height: 240px;
    }

    .project-body h3 {
        font-size: 27px;
    }

    .bootcamp-slide {
        flex-basis: 83vw;
    }

    .bootcamp-slide img {
        height: 280px;
    }

    .bootcamp-track {
        padding-left: 6%;
        padding-right: 6%;
        scroll-padding-left: 6%;
    }

    .bootcamp-themes {
        grid-template-columns: 1fr 1fr;
        gap: 15px;
    }

    .bootcamp-themes span {
        font-size: 10px;
    }

    .journey-arrow {
        display: none;
    }

    .timeline h3 {
        font-size: 19px;
    }

    .contact-heading {
        margin-bottom: 30px;
    }

    .contact-heading h2 {
        font-size: clamp(55px, 12vw, 83px);
    }

    .contact-spark {
        font-size: 75px;
        margin-right: 0;
    }

    .contact-link {
        font-size: 15px;
    }

    .footer-top {
        flex-wrap: wrap;
        gap: 20px;
    }

    .footer-top p {
        order: 3;
        max-width: none;
        width: 100%;
    }

    .footer-bottom {
        flex-wrap: wrap;
        gap: 15px;
    }

    .footer-bottom>span:last-child {
        width: 100%;
    }

    #viewer {
        padding: 38px 20px 25px;
    }

    .reveal.from-left,
    .reveal.from-right {
        transform: translateY(30px);
    }

    .reveal.in {
        transform: none;
    }
}

@media (max-width: 480px) {

    .skill-card,
    .skill-card:nth-child(n + 5),
    .skill-card:last-child {
        grid-column: 1 / -1;
    }

    .skill-card h3 {
        font-size: 18px;
    }

    .form-row {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .contact-form {
        padding: 22px;
    }

    .portrait-scene {
        height: 430px;
    }

    .portrait-circle {
        width: 270px;
        height: 270px;
    }

    .portrait-bottom strong {
        font-size: 11px;
    }

    .hero-actions .button {
        width: 100%;
    }

    .hero-note {
        margin-top: 23px;
    }
}

/* =========================
   REDUCED MOTION
========================= */

@media (prefers-reduced-motion: reduce) {

    html,
    .bootcamp-track {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation: none !important;
        transition: none !important;
    }

    .reveal,
    .reveal.from-left,
    .reveal.from-right {
        opacity: 1;
        transform: none;
    }

    .cursor-dot,
    .cursor-ring,
    .mouse-light,
    .pointer-particle,
    .click-ripple {
        display: none !important;
    }
}
