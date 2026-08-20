import Image from "next/image";
import { Sparkle } from "@/app/components/Sparkle";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] w-full flex-col items-center overflow-hidden bg-hero-blue px-4 pb-12 pt-6 sm:px-8 sm:pb-16 lg:min-h-screen lg:pb-20">
      {/* Monogram logo */}
      <div className="absolute left-4 top-6 sm:left-8 sm:top-8 lg:left-12 lg:top-10">
        <Image
          src="/logo.svg"
          alt="Dr. Kimberly Word"
          width={32}
          height={40}
          className="h-10 w-8 sm:h-12 sm:w-10"
          priority
        />
      </div>

      {/* Top headline */}
      <h1 className="z-10 mt-8 text-center font-serif text-5xl font-light italic tracking-wide text-gold sm:mt-10 sm:text-6xl md:text-7xl lg:mt-12 lg:text-8xl">
        Dr. KIMBERLY
      </h1>

      {/* Sparkle left */}
      <div className="absolute left-[8%] top-[28%] z-10 sm:left-[12%] lg:left-[15%]">
        <Sparkle width={24} height={36} className="opacity-90" />
      </div>

      {/* Hero photo */}
      <div className="relative z-10 mt-4 w-[260px] sm:w-[320px] md:w-[380px] lg:mt-6 lg:w-[420px]">
        <Image
          src="/hero-placeholder.svg"
          alt="Dr. Kimberly Word"
          width={420}
          height={525}
          className="h-auto w-full object-contain"
          priority
        />
      </div>

      {/* "WORD" large behind photo / at bottom */}
      <div className="pointer-events-none absolute bottom-[18%] left-0 right-0 z-0 text-center sm:bottom-[20%] lg:bottom-[22%]">
        <span className="font-serif text-7xl font-light tracking-wide text-gold sm:text-8xl md:text-9xl lg:text-[10rem]">
          WORD
        </span>
      </div>

      {/* Tagline left */}
      <div className="absolute left-[4%] top-[52%] z-10 text-center sm:left-[8%] md:left-[10%]">
        <p className="font-serif text-base italic leading-tight text-gold sm:text-lg md:text-xl">
          Something Beautiful
          <br />
          is Coming
        </p>
      </div>

      {/* Tagline right */}
      <div className="absolute right-[4%] top-[52%] z-10 text-center sm:right-[8%] md:right-[10%]">
        <p className="font-serif text-base italic leading-tight text-gold sm:text-lg md:text-xl">
          Something Beautiful
          <br />
          is Coming
        </p>
      </div>

      {/* Sparkle right */}
      <div className="absolute bottom-[22%] right-[8%] z-10 sm:right-[12%] lg:right-[16%]">
        <Sparkle width={24} height={36} className="opacity-90" />
      </div>
    </section>
  );
}
