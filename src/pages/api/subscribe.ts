export const prerender = false;
import type { APIRoute } from 'astro';
import { createClient } from '@sanity/client';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const email = data.email?.trim().toLowerCase();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), { status: 400 });
    }

    const client = createClient({
      projectId: 'dmsuaqcf',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2023-05-03',
      token: import.meta.env.SANITY_API_TOKEN || process.env.SANITY_API_TOKEN,
    });

    // Check if already subscribed
    const existing = await client.fetch(`*[_type == "subscriber" && email == $email][0]`, { email });

    if (!existing) {
      await client.create({
        _type: 'subscriber',
        email: email,
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return new Response(JSON.stringify({ error: 'Failed to subscribe. Please try again later.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
