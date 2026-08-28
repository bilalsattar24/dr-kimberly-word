"use server";

import { z } from "zod";

const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export type SubscribeState =
  | { success: false; message: string; fieldErrors?: { email?: string[] } }
  | { success: true; message: string };

export async function subscribeToList(
  _prevState: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  const raw = { email: formData.get("email") };
  const parsed = emailSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please enter a valid email address.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const { email } = parsed.data;
  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (!webhookUrl) {
    return {
      success: false,
      message: "Invitation list is not configured. Please try again later.",
    };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("GHL webhook error:", res.status, text);
      throw new Error(`GHL webhook returned ${res.status}`);
    }

    return {
      success: true,
      message: "Check your inbox for your invitation.",
    };
  } catch (error) {
    console.error("GHL webhook error:", error);
    return {
      success: false,
      message:
        "We couldn’t add you to the list right now. Please try again later.",
    };
  }
}
