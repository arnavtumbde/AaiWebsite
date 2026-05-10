import { createClient } from '@sanity/client';

const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const email = data.email?.trim().toLowerCase();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email address" }), { status: 400 });
    }
    const client = createClient({
      projectId: "dmsuaqcf",
      dataset: "production",
      useCdn: false,
      apiVersion: "2023-05-03",
      token: "skCUE58mnXxICWR0SKSUcG4A3axvQuB56dw8UtugXyUgCuDEjeopQWuwPk4gO8EQJZZdjXfgJrWKq5FUOeQIGMAzvZmTihrM0NZGn2c8pntWsXncXC3KTNImuvIJIc1PJLIVjhOBIFdb6rU3jQYF232p031SvlenCGds7zXah20OZcJkGAOo"
    });
    const existing = await client.fetch(`*[_type == "subscriber" && email == $email][0]`, { email });
    if (!existing) {
      await client.create({
        _type: "subscriber",
        email
      });
    }
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Subscription error:", error);
    return new Response(JSON.stringify({ error: "Failed to subscribe. Please try again later." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
