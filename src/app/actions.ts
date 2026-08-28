"use server";

import { z } from "zod";

const HIGHLEVEL_CONTACTS_URL =
  "https://services.leadconnectorhq.com/contacts/upsert";
const HIGHLEVEL_LOCATION_ID =
  process.env.HIGHLEVEL_LOCATION_ID ?? "MtFXDR5Qpw4DicJPApnd";

const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export type SubscribeState =
  | { success: false; message: string; fieldErrors?: { email?: string[] } }
  | { success: true; message: string };

export async function subscribeToList(
  _prevState: SubscribeState,
  formData: FormData
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
  const apiKey = process.env.HIGHLEVEL_API_KEY;

  if (!apiKey) {
    return {
      success: false,
      message: "Invitation list is not configured. Please try again later.",
    };
  }

  try {
    const response = await fetch(HIGHLEVEL_CONTACTS_URL, {
      method: "POST",
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Version: "2021-07-28",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        locationId: HIGHLEVEL_LOCATION_ID,
        email,
        source: "Website Newsletter",
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("HighLevel upsert failed:", response.status, details);
      return {
        success: false,
        message:
          "We couldn’t add you to the list right now. Please try again later.",
      };
    }

    return {
      success: true,
      message:
        "Your email has been added to the invitation list. Please check your email later.",
    };
  } catch (error) {
    console.error("HighLevel error:", error);
    return {
      success: false,
      message:
        "We couldn’t add you to the list right now. Please try again later.",
    };
  }
}
