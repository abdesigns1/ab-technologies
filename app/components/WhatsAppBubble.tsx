"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  "",
);
const whatsappMessage =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
  "Hi ABNIXX Tech, I would like to make an enquiry.";

export default function WhatsAppBubble() {
  const [showPrompt, setShowPrompt] = useState(true);

  if (!whatsappNumber) {
    return null;
  }

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <div className="fixed bottom-24 right-6 z-50 flex items-end gap-3">
      {showPrompt && (
        <div className="relative hidden max-w-[240px] rounded-lg border border-emerald-200 bg-white/95 p-3 pr-10 text-left shadow-xl shadow-emerald-950/10 backdrop-blur transition-all duration-300 dark:border-emerald-900/50 dark:bg-zinc-900/95 dark:shadow-black/30 sm:block">
          <button
            type="button"
            onClick={() => setShowPrompt(false)}
            aria-label="Close WhatsApp chat prompt"
            className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with ABNIXX Tech on WhatsApp"
            className="block transition hover:-translate-y-0.5"
          >
            <span className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.16)]" />
              Always active
            </span>
            <span className="block text-sm font-semibold leading-5 text-zinc-950 dark:text-white">
              Need help? Send us a direct message.
            </span>
          </a>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ABNIXX Tech on WhatsApp"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1ebe5d] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-white dark:shadow-black/30 dark:focus:ring-offset-zinc-950"
      >
        <BsWhatsapp className="h-7 w-7" />
      </a>
    </div>
  );
}
