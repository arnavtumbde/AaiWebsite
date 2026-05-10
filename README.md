# Astitva (अस्तित्व) - An Editorial Blog & Author Portfolio 🖋️

![Astitva Banner](https://img.shields.io/badge/Status-Active-success?style=for-the-badge) ![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Sanity](https://img.shields.io/badge/Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)

> *"Today, I am the author of my own peace. This is my Astitva."*

A custom-built, high-performance editorial website and headless CMS blogging platform created for **Sonali Tumbde**—a Marathi teacher, published author, and survivor. This project was built to provide her with a digital identity ("Astitva") and a zero-friction writing experience.

## 📖 The Story Behind The Code
This isn't just a blog; it is a digital monument to resilience. My mother, Sonali, has 22 years of teaching experience and is the published author of *"Zindagi in Short"*. For years, her voice belonged to everyone else. As her son (and a CSE graduate), I built this platform to give her a premium, distraction-free space to reclaim her narrative and share her writing with the world.

## 🚀 Tech Stack & Architecture

This project strictly follows a **Jamstack** architecture to achieve zero-cost hosting, 100% Lighthouse performance scores, and a seamless authoring experience.

* **Frontend:** [Astro](https://astro.build/) (Static Site Generation for blazing-fast load times and SEO).
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Custom editorial configuration).
* **Animations:** Framer Motion / CSS Scroll-driven animations.
* **Backend / CMS:** [Sanity.io](https://www.sanity.io/) (Headless CMS).
* **Email Automation:** [Resend API](https://resend.com/) (For zero-cost automated newsletter broadcasts).
* **Hosting:** Vercel (Frontend & Serverless Functions) & Sanity Studio (Content Lake).

## ✨ Key Features

* **Scrollytelling "About" Page:** An unorthodox, immersive scroll experience narrated from the perspective of her children, utilizing complex Z-index layering, intersection observers, and dynamic background morphing.
* **Frictionless Publishing:** A completely customized Sanity Studio dashboard. The author simply logs in, writes, and hits "Publish."
* **Automated Webhooks:** Vercel automatically rebuilds and deploys the static site the moment a new article is published in Sanity.
* **Zero-Cost Newsletter:** Integrated Resend API allows the author to automatically notify subscribers via beautifully formatted HTML emails upon publishing.
* **Author Showcase:** Integrated e-commerce portal linking to her published paperback, *"Zindagi in Short"*.
* **Bilingual Typography Design:** Custom font pairing using *Playfair Display* (English) and *Tiro Marathi* (Devanagari script).

## 🛠️ Local Development Setup

To run this project locally, you will need Node.js installed.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/arnavtumbde/AaiWebsite.git](https://github.com/arnavtumbde/AaiWebsite.git)
   cd AaiWebsite
