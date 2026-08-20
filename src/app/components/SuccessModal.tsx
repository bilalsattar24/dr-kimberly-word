"use client";

import { useEffect } from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export function SuccessModal({ isOpen, onClose, message }: SuccessModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-hero-blue/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-title"
      onClick={onClose}
    >
      <div
        className="max-w-md rounded-sm bg-cream p-8 text-center shadow-2xl sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <h3
          id="success-title"
          className="font-serif text-2xl italic text-hero-blue sm:text-3xl"
        >
          Welcome
        </h3>
        <p className="mt-4 font-sans text-base leading-7 text-forest">
          {message}
        </p>
        <button
          onClick={onClose}
          className="mt-6 inline-flex items-center justify-center rounded-sm bg-gradient-to-r from-gold to-gold-light px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
        >
          Close
        </button>
      </div>
    </div>
  );
}
