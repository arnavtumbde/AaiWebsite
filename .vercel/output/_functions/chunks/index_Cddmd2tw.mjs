import { createClient } from '@sanity/client';
import { c as createComponent } from './astro-component_DLnGmj6Z.mjs';
import 'piccolore';
import { n as createRenderInstruction, h as addAttribute, r as renderTemplate, o as renderComponent, p as renderHead, q as renderSlot, m as maybeRenderHead } from './entrypoint_Do4hzOcE.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const sanityClient = createClient(
  { "apiVersion": "2023-05-03", "projectId": "dmsuaqcf", "dataset": "production", "useCdn": false }
);

globalThis.sanityClient = sanityClient;

const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description = "A digital garden where I share my experiences, musings on life, and the little things that make it beautiful.",
    image = "/ogp2.png",
    // The beautiful background photo as default share image
    type = "website"
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site || Astro2.url.origin);
  const ogImageURL = new URL(image, Astro2.url.origin);
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(type, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImageURL, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(ogImageURL, "content")}><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&display=swap" rel="stylesheet">`;
}, "D:/AaiWebsite/src/components/SEO.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, image, type } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "image": image, "type": type })}${renderHead()}</head> <body class="min-h-screen flex flex-col"> <header class="w-full max-w-4xl mx-auto px-6 py-8"> <nav class="flex justify-between items-center"> <a href="/" class="text-2xl font-serif font-bold text-deep-charcoal hover:text-warm-rust transition-colors duration-300">
Editorial.
</a> <div class="space-x-6 text-sm font-medium text-slate-gray"> <a href="/" class="hover:text-warm-rust transition-colors duration-300">Home</a> <a href="#" class="hover:text-warm-rust transition-colors duration-300">About</a> </div> </nav> </header> <main class="flex-grow w-full max-w-4xl mx-auto px-6 py-8"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="w-full max-w-4xl mx-auto px-6 py-12 mt-12 border-t border-slate-gray/20 text-center"> <p class="text-sm text-slate-gray">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Editorial. All rights reserved.
</p> </footer> </body></html>`;
}, "D:/AaiWebsite/src/layouts/Layout.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const photos = [
    "/ogp2.png",
    // Main portrait
    "/ogp.png",
    // Landscape/Scenery
    "/p1.png",
    // Detail/Tea/Books
    "/p2.png"
    // Candid or secondary portrait
  ];
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col lg:flex-row items-center justify-between gap-16 py-16 md:py-24"> <!-- Left Column: The Welcome Text --> <div class="flex-1 space-y-8 text-center lg:text-left z-10"> <div class="space-y-4"> <span class="text-warm-rust font-medium uppercase tracking-widest text-sm">Welcome</span> <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-deep-charcoal">
Thoughts, Stories <br> <span class="text-warm-rust italic font-serif font-light">& Reflections</span> </h1> </div> <p class="text-lg md:text-xl text-slate-gray max-w-lg leading-relaxed mx-auto lg:mx-0">
A digital garden where I share my experiences, musings on life, and the little things that make it beautiful.
</p> <div class="pt-6 flex flex-col items-center lg:items-start"> <img src="/signature-placeholder.svg" alt="Author Signature" class="h-14 opacity-80 mix-blend-multiply" onerror="this.style.display='none'"> <p class="text-sm text-slate-gray mt-3 italic font-serif">Grab a cup of tea and stay a while.</p> </div> </div> <!-- Right Column: The 4-Photo Editorial Collage --> <div class="flex-1 w-full max-w-2xl relative flex items-center justify-center lg:justify-end min-h-[500px]"> <!-- Decorative background shape --> <div class="absolute w-[120%] h-[120%] bg-warm-rust/5 rounded-full blur-3xl -z-10"></div> <div class="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square max-w-[500px]"> <!-- Photo 1: Main Portrait (Large, slightly off-center) --> <div class="absolute top-0 right-8 w-3/5 aspect-[3/4] z-20 group"> <img${addAttribute(photos[0], "src")} alt="Main Portrait" class="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-warm-pearl transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-1"> </div> <!-- Photo 2: Landscape/Scenery (Bottom Left, wide) --> <div class="absolute bottom-4 left-0 w-1/2 aspect-[4/3] z-30 group"> <img${addAttribute(photos[1], "src")} alt="Scenery" class="w-full h-full object-cover rounded-xl shadow-lg border-4 border-warm-pearl transition-transform duration-700 group-hover:-translate-y-1 group-hover:-rotate-2"> </div> <!-- Photo 3: Detail shot (Top Left, square) --> <div class="absolute top-12 left-4 w-1/3 aspect-square z-10 group"> <img${addAttribute(photos[2], "src")} alt="Details" class="w-full h-full object-cover rounded-full shadow-md border-4 border-warm-pearl opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"> </div> <!-- Photo 4: Secondary/Candid (Bottom Right, small) --> <div class="absolute -bottom-8 right-12 w-1/4 aspect-[3/4] z-40 group"> <img${addAttribute(photos[3], "src")} alt="Candid" class="w-full h-full object-cover rounded-lg shadow-md border-2 border-warm-pearl transition-transform duration-700 group-hover:rotate-3 group-hover:scale-110"> </div> </div> </div> </section>`;
}, "D:/AaiWebsite/src/components/Hero.astro", void 0);

const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostCard;
  const { title, excerpt, date, slug, imageUrl, category } = Astro2.props;
  const authorAvatar = "/p1.png";
  return renderTemplate`${maybeRenderHead()}<article class="group flex flex-col gap-4"> <a${addAttribute(`/blog/${slug}`, "href")} class="block overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100"> <img${addAttribute(imageUrl, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"> </a> <div class="space-y-3"> <div class="flex items-center gap-3 text-sm text-slate-gray"> <span class="text-warm-rust font-medium uppercase tracking-wider text-xs">${category}</span> <span>&bull;</span> <div class="flex items-center gap-2"> <img${addAttribute(authorAvatar, "src")} alt="Author" class="w-5 h-5 rounded-full object-cover"> <time${addAttribute(date, "datetime")}>${date}</time> </div> </div> <a${addAttribute(`/blog/${slug}`, "href")} class="block group-hover:text-warm-rust transition-colors duration-300"> <h3 class="text-2xl font-bold leading-snug">${title}</h3> </a> <p class="text-slate-gray line-clamp-2 leading-relaxed"> ${excerpt} </p> </div> </article>`;
}, "D:/AaiWebsite/src/components/PostCard.astro", void 0);

const $$SubscribeForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full max-w-xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-gray/10 text-center relative z-10"> <h3 class="text-2xl md:text-3xl font-serif font-bold text-deep-charcoal mb-4">Join the Reading List</h3> <p class="text-slate-gray mb-8 leading-relaxed">
Subscribe to get notified whenever I publish a new story. No spam, just words from the heart.
</p> <form id="subscribe-form" class="flex flex-col sm:flex-row gap-3"> <input type="email" id="email-input" placeholder="Your email address..." required class="flex-1 px-5 py-3 rounded-xl border border-slate-gray/20 bg-warm-pearl/30 focus:outline-none focus:ring-2 focus:ring-warm-rust/50 focus:border-warm-rust transition-all text-deep-charcoal"> <button type="submit" id="submit-button" class="px-8 py-3 bg-deep-charcoal text-white font-medium rounded-xl hover:bg-warm-rust transition-colors duration-300 flex items-center justify-center min-w-[140px] shadow-sm"> <span id="button-text">Subscribe</span> <svg id="loading-spinner" class="animate-spin hidden h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path> </svg> </button> </form> <p id="form-message" class="mt-4 text-sm hidden"></p> </div> ${renderScript($$result, "D:/AaiWebsite/src/components/SubscribeForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/AaiWebsite/src/components/SubscribeForm.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await sanityClient.fetch(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "imageUrl": mainImage.asset->url,
  "category": categories[0]->title,
  publishedAt,
  excerpt
}`);
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Editorial | Thoughts, Stories & Reflections" }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, {})}  ${maybeRenderHead()}<div class="w-full h-px bg-slate-gray/20 my-16"></div>  <section> <div class="flex items-end justify-between mb-10"> <h2 class="text-3xl font-serif font-bold text-deep-charcoal">Latest Writing</h2> <a href="#" class="text-sm font-medium text-warm-rust hover:underline underline-offset-4 mb-1">View all &rarr;</a> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "title": post.title, "excerpt": post.excerpt, "date": formatDate(post.publishedAt), "slug": post.slug, "category": post.category || "Uncategorized", "imageUrl": post.imageUrl || "https://images.unsplash.com/photo-1499744632587-7798360ba20f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" })}`)} </div> </section>  <section class="mt-24 mb-12"> ${renderComponent($$result2, "SubscribeForm", $$SubscribeForm, {})} </section> ` })}`;
}, "D:/AaiWebsite/src/pages/index.astro", void 0);

const $$file = "D:/AaiWebsite/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
