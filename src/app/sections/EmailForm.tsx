import Script from "next/script";
import { Sparkle } from "@/app/components/Sparkle";

const FORM_ID = "tSOQPbyIH3OSsZcVqTwZ";

export function EmailForm() {
  return (
    <section className="relative w-full bg-ivory px-6 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-xl">
        <div className="w-full overflow-hidden rounded-lg">
          <iframe
            src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
            style={{
              width: "100%",
              height: "100%",
              minHeight: 640,
              border: "none",
              borderRadius: 8,
            }}
            id={`inline-${FORM_ID}`}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Dr. Kimberly Word Rebrand Newsletter"
            data-height="undefined"
            data-layout-iframe-id={`inline-${FORM_ID}`}
            data-form-id={FORM_ID}
            data-cookie-consent="true"
            data-cookie-consent-provider="auto"
            title="Dr. Kimberly Word Rebrand Newsletter"
          />
        </div>

        <p className="mt-6 font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-forest">
          Join the list to receive your invitation
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <Sparkle width={24} height={36} />
      </div>

      <footer className="mt-12">
        <p className="font-sans text-xs text-forest-muted">
          &copy; Dr Kimberly Word 2026
        </p>
      </footer>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
