"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiChevronDown } from "react-icons/hi";
import { faqItems } from "@/lib/data/faq";

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const reduceMotion = useReducedMotion();

  return (
    <div className="border border-[#e2e8f0] rounded-2xl bg-white overflow-hidden">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4338ca]/50 focus-visible:ring-offset-2 rounded-2xl"
        >
          <span className="font-semibold text-[#0f172a] text-[15px] sm:text-base">
            {question}
          </span>
          <HiChevronDown
            aria-hidden="true"
            className={`flex-shrink-0 text-[#4338ca] transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            size={20}
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-slate-600 text-[15px] leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="section-padding bg-white" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-max max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">Frequently asked questions</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Everything shop owners ask us before getting started.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <AccordionItem
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onToggle={() =>
                  setOpenId((prev) => (prev === item.id ? null : item.id))
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
