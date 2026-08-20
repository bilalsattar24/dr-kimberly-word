import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export { resend };

export function invitationEmailHtml() {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Invitation</title>
  </head>
  <body style="margin:0;padding:0;background:#f9f6f0;color:#1b4f72;font-family:Georgia,serif;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#1b4f72; padding: 48px 24px;">
      <tr>
        <td align="center">
          <h1 style="color:#c9a227;font-size:32px;margin:0 0 16px;font-weight:400;">Dr. Kimberly Word</h1>
          <p style="color:#f9f6f0;font-size:16px;margin:0;">Something Beautiful is Coming</p>
        </td>
      </tr>
    </table>
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 48px 24px; max-width: 600px; margin: 0 auto;">
      <tr>
        <td>
          <p style="font-size:18px;line-height:1.6;margin:0 0 24px;">
            Thank you for joining the list. Your invitation is on its way.
          </p>
          <p style="font-size:16px;line-height:1.6;margin:0 0 24px;">
            I’m creating a new space dedicated to helping you live with greater joy, clarity, purpose, and abundance. I can’t wait to share it with you.
          </p>
          <p style="font-size:16px;line-height:1.6;margin:0 0 24px;font-style:italic;">
            I hope you’ll join me.<br/>
            — Dr. Kimberly Word
          </p>
        </td>
      </tr>
    </table>
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 24px; max-width: 600px; margin: 0 auto;">
      <tr>
        <td>
          <p style="font-size:12px;color:#4a7c59;margin:0;">
            You received this because you joined the invitation list.
            <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#4a7c59;text-decoration:underline;">Unsubscribe</a>
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;
}
