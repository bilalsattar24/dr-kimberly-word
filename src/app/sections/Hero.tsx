import Image from "next/image";
import { Sparkle } from "@/app/components/Sparkle";

const topClasses =
  "font-serif text-[clamp(2.8rem,12.5vw,6.5rem)] font-bold not-italic tracking-tight text-gold whitespace-nowrap";
const wordClasses =
  "font-serif text-[clamp(3.5rem,16vw,9.5rem)] font-bold not-italic tracking-tight text-gold whitespace-nowrap";

export function Hero() {
  return (
    <section className="relative flex min-h-[70vh] w-full flex-col items-center justify-between overflow-hidden bg-hero-blue px-4 pt-6 pb-10 min-[700px]:min-h-[70vh] min-[700px]:justify-center min-[700px]:py-16 lg:min-h-screen">
      {/* Monogram logo — in-flow on mobile, absolute on tablet/desktop */}
      <div className="z-30 mb-10 min-[700px]:absolute min-[700px]:left-6 min-[700px]:top-4 min-[700px]:mb-0 lg:left-10 lg:top-6">
        <Image
          src="/logo.svg"
          alt="Dr. Kimberly Word"
          width={160}
          height={240}
          className="h-[3.5rem] w-auto min-[700px]:h-[6rem] lg:h-[10rem]"
          priority
        />
      </div>

      {/* Left tagline (desktop/tablet) */}
      <div className="absolute left-[3%] top-1/2 z-20 hidden -translate-y-1/2 text-center min-[700px]:left-[6%] min-[700px]:block lg:left-[10%] xl:left-[12%]">
        <Sparkle
          width={28}
          height={28}
          className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-14 opacity-90"
        />
        <p className="font-serif text-lg font-bold italic leading-tight text-gold-light min-[700px]:text-xl lg:text-2xl">
          Something Beautiful
          <br />
          is Coming
        </p>
      </div>

      {/* Right tagline (desktop/tablet) */}
      <div className="absolute right-[3%] top-1/2 z-20 hidden -translate-y-1/2 text-center min-[700px]:right-[6%] min-[700px]:block lg:right-[10%] xl:right-[12%]">
        <Sparkle
          width={28}
          height={28}
          className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-14 opacity-90"
        />
        <p className="font-serif text-lg font-bold italic leading-tight text-gold-light min-[700px]:text-xl lg:text-2xl">
          Something Beautiful
          <br />
          is Coming
        </p>
      </div>

      {/* Photo + overlapping headings */}
      <div className="relative z-0 w-full">
        {/* Top headline */}
        <h1
          className={`pointer-events-none absolute top-0 left-0 right-0 z-20 -translate-y-1/2 text-center ${topClasses}`}
        >
          Dr. KIMBERLY
        </h1>

        <div className="relative mx-auto w-[60vw] max-w-[240px] sm:max-w-[280px] md:w-[360px] md:max-w-none lg:w-[420px] xl:w-[460px]">
          <Image
            src="/hero_latest.jpg"
            alt="Dr. Kimberly Word"
            width={860}
            height={1080}
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        {/* Bottom headline */}
        <div
          className={`pointer-events-none absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 text-center ${wordClasses}`}
        >
          WORD
        </div>
      </div>

      {/* Mobile tagline (below hero, visible only under 700px) */}
      <div className="z-20 mt-12 text-center min-[700px]:hidden">
        <div className="relative inline-block">
          <Sparkle
            width={22}
            height={22}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-7 opacity-90"
          />
          <p className="font-serif text-base font-bold italic leading-tight text-gold-light">
            Something Beautiful
            <br />
            is Coming
          </p>
        </div>
      </div>
    </section>
  );
}
