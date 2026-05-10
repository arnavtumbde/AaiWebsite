import { createClient } from '@sanity/client';
import { SIGNATURE_HEADER_NAME, isValidSignature } from '@sanity/webhook';
import { Resend } from 'resend';

const resend = new Resend("re_Tme8FvU6_8A7ovGsn1YFMMFZ6NnatyA8s");
const secret = process.env.SANITY_WEBHOOK_SECRET;
const client = createClient({
  projectId: "dmsuaqcf",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-05-03",
  token: "skCUE58mnXxICWR0SKSUcG4A3axvQuB56dw8UtugXyUgCuDEjeopQWuwPk4gO8EQJZZdjXfgJrWKq5FUOeQIGMAzvZmTihrM0NZGn2c8pntWsXncXC3KTNImuvIJIc1PJLIVjhOBIFdb6rU3jQYF232p031SvlenCGds7zXah20OZcJkGAOo"
});
const POST = async ({ request, url }) => {
  try {
    const signature = request.headers.get(SIGNATURE_HEADER_NAME);
    const bodyText = await request.text();
    if (!secret || !signature || !isValidSignature(bodyText, signature, secret)) {
      console.warn("Webhook signature validation failed.");
      return new Response("Invalid signature", { status: 401 });
    }
    const payload = JSON.parse(bodyText);
    if (payload._type !== "post") {
      return new Response("Not a post event", { status: 200 });
    }
    const { title, slug, emailSummary } = payload;
    if (!emailSummary || emailSummary.trim() === "") {
      console.log("No email summary provided. Skipping broadcast.");
      return new Response("Skipped: No email summary", { status: 200 });
    }
    const subscribers = await client.fetch(`*[_type == "subscriber"]{ email }`);
    if (!subscribers || subscribers.length === 0) {
      console.log("No subscribers found.");
      return new Response("No subscribers", { status: 200 });
    }
    const emails = subscribers.map((s) => s.email);
    const postUrl = new URL(`/blog/${slug?.current || ""}`, url.origin).toString();
    const batch = emails.map((email) => ({
      from: "Editorial <hello@yourdomain.com>",
      // Replace with your verified Resend domain
      to: [email],
      subject: `New Story: ${title}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1F2937; line-height: 1.6; padding: 20px;">
          <h2 style="font-size: 24px; border-bottom: 1px solid #E2E8F0; padding-bottom: 16px; font-weight: normal;">${title}</h2>
          <p style="font-size: 16px; margin: 24px 0; color: #475569;">${emailSummary}</p>
          <a href="${postUrl}" style="display: inline-block; padding: 12px 24px; background-color: #C2410C; color: white; text-decoration: none; border-radius: 6px; font-family: sans-serif; font-weight: 500; font-size: 14px;">Read the full story</a>
          <p style="font-size: 13px; color: #94A3B8; margin-top: 48px; border-top: 1px solid #E2E8F0; padding-top: 16px;">
            Thank you for being part of this journey.<br/>
            <small>If you'd like to unsubscribe, please reply to this email.</small>
          </p>
        </div>
      `
    }));
    await resend.batch.send(batch);
    console.log(`Successfully broadcasted to ${emails.length} subscribers.`);
    return new Response(JSON.stringify({ success: true, sentCount: emails.length }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return new Response(JSON.stringify({ error: "Webhook processing failed" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
