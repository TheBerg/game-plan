"use client";

import { useState, FormEvent } from "react";
import FadeIn from "@/components/FadeIn";
import { submitInquiry } from "@/app/actions/inquiry";

const inputClasses =
  "w-full bg-brand-gray-950 border border-brand-gray-800 rounded-lg px-4 py-3 text-white text-sm placeholder-brand-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors";

export default function JoinPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = await submitInquiry("membership", new FormData(e.currentTarget));
    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error);
    }
    setLoading(false);
  }

  return (
    <>
      <section className="pt-32 pb-4 md:pt-40 md:pb-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block text-brand-green text-sm font-semibold tracking-widest uppercase mb-4">
              Memberships
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Become a Member
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-brand-gray-300 max-w-2xl mx-auto leading-relaxed">
              Fill out the form below and we&apos;ll reach out to get you started.
              Membership is $149/month — no contract, cancel anytime.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-brand-dark">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-brand-green mb-4">
                    <svg
                      className="w-12 h-12 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    You&apos;re on your way.
                  </h3>
                  <p className="text-brand-gray-400 text-sm">
                    We&apos;ll reach out within one business day to get you set up.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-heading text-xl font-bold text-white mb-6">
                    Membership Inquiry
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-brand-gray-300 mb-1.5"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={inputClasses}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-brand-gray-300 mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={inputClasses}
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-brand-gray-300 mb-1.5"
                    >
                      Phone{" "}
                      <span className="text-brand-gray-500">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={inputClasses}
                      placeholder="(555) 000-0000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-brand-gray-300 mb-1.5"
                    >
                      Questions or comments{" "}
                      <span className="text-brand-gray-500">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className={inputClasses}
                      placeholder="Anything you'd like us to know before we reach out?"
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand-green text-brand-dark font-semibold tracking-wide uppercase text-sm px-6 py-3 rounded hover:bg-brand-green-hover transition-colors active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending…" : "Request Membership"}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
