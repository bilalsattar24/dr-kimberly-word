"use client";

import { useState, useTransition, useRef } from "react";
import { subscribeToList, SubscribeState } from "@/app/actions";
import { Sparkle } from "@/app/components/Sparkle";

const initialState: SubscribeState = {
  success: false,
  message: "",
};

export function EmailForm() {
  const [state, setState] = useState<SubscribeState>(initialState);
  const [pending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const next = await subscribeToList(initialState, formData);
      setState(next);
      if (next.success) {
        formRef.current?.reset();
      }
    });
  };

  return (
    <section className="relative w-full bg-ivory px-6 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-xl">
        {!state.success ? (
          <>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-3"
            >
              <div className="relative w-full sm:w-auto sm:flex-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="email"
                  placeholder=" "
                  disabled={pending}
                  className="peer h-14 w-full appearance-none rounded-none border-0 bg-white px-4 pt-6 pb-2 font-sans text-sm text-hero-blue placeholder-transparent focus:ring-2 focus:ring-gold focus:outline-none disabled:opacity-60"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-1/2 -translate-y-1/2 origin-top-left font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-forest transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-xs peer-placeholder-shown:font-medium peer-focus:top-3 peer-focus:-translate-y-0 peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  Email Address
                </label>
              </div>

              <button
                type="submit"
                disabled={pending}
                className="h-14 w-full rounded-none bg-gradient-to-r from-gold to-gold-light px-6 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-8"
              >
                {pending ? "Joining..." : "Join the List"}
              </button>
            </form>

            {state.message && !state.success && (
              <p
                className="mt-4 font-sans text-sm text-red-600"
                aria-live="polite"
              >
                {state.message}
              </p>
            )}

            <p className="mt-6 font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-forest">
              Join the list to receive your invitation
            </p>
          </>
        ) : (
          <div className="rounded-sm bg-ivory-light p-8 text-center shadow-sm sm:p-10">
            <h3 className="font-serif text-2xl italic text-hero-blue sm:text-3xl">
              Welcome
            </h3>
            <p className="mt-4 font-sans text-[10px] font-semibold uppercase tracking-[0.25em] leading-relaxed text-forest">
              {state.message}
            </p>
          </div>
        )}
      </div>

      <div className="mt-10 flex justify-center">
        <Sparkle width={24} height={36} />
      </div>

      <footer className="mt-12">
        <p className="font-sans text-xs text-forest-muted">
          &copy; Dr Kimberly Word 2026
        </p>
      </footer>
    </section>
  );
}
