"use client";

import { useState, FormEvent } from "react";
import FadeIn from "@/components/FadeIn";
import { HOURS, ADDRESS, PHONE, EMAIL, BOOKING_URL } from "@/lib/constants";
import Button from "@/components/Button";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    /*
      [REPLACE] Connect this form to your actual form handling:
      Options:
      - Formspree (add action URL to form)
      - Netlify Forms (add netlify attribute)
      - Custom API endpoint
      - Email service (SendGrid, Resend, etc.)
    */
    console.log("Form submitted:", formState);
    setSubmitted(true);
  }

  const inputClasses =
    "w-full bg-brand-gray-950 border border-brand-gray-800 rounded-lg px-4 py-3 text-white text-sm placeholder-brand-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors";

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block text-brand-green text-sm font-semibold tracking-widest uppercase mb-4">
              Contact
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Let&apos;s Talk About Your Game
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-brand-gray-300 max-w-2xl mx-auto">
              Questions about lessons, memberships, or training? We&apos;re here
              to help. All sessions are by appointment — reach out to get
              started.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-12 md:py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
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
                      Message Sent
                    </h3>
                    <p className="text-brand-gray-400 text-sm">
                      We&apos;ll get back to you within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-heading text-xl font-bold text-white mb-2">
                      Send a Message
                    </h2>
                    <p className="text-brand-gray-400 text-sm mb-6">
                      Or skip the form and{" "}
                      <a
                        href={BOOKING_URL}
                        className="text-brand-green hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        book directly online
                      </a>
                      .
                    </p>

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
                          required
                          className={inputClasses}
                          placeholder="Your name"
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
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
                          required
                          className={inputClasses}
                          placeholder="you@email.com"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-brand-gray-300 mb-1.5"
                        >
                          Phone{" "}
                          <span className="text-brand-gray-500">
                            (optional)
                          </span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className={inputClasses}
                          placeholder="(555) 000-0000"
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              phone: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="interest"
                          className="block text-sm font-medium text-brand-gray-300 mb-1.5"
                        >
                          I&apos;m interested in
                        </label>
                        <select
                          id="interest"
                          className={inputClasses}
                          value={formState.interest}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              interest: e.target.value,
                            })
                          }
                        >
                          <option value="">Select one</option>
                          <option value="lessons">Lessons</option>
                          <option value="membership">Practice Membership</option>
                          <option value="training">Personal Training</option>
                          <option value="sim-rental">SIM Rental</option>
                          <option value="3d-screening">3D Movement Screening</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-brand-gray-300 mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className={inputClasses}
                        placeholder="Tell us about your goals, experience level, or any questions you have."
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-green text-brand-dark font-semibold tracking-wide uppercase text-sm px-6 py-3 rounded hover:bg-brand-green-hover transition-colors active:scale-[0.98]"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Info */}
            <div className="space-y-8">
              {/* Appointment notice */}
              <FadeIn delay={0.1}>
                <div className="bg-brand-green/5 border border-brand-green/20 rounded-lg p-6">
                  <div className="flex gap-3">
                    <svg
                      className="w-5 h-5 text-brand-green shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        All sessions are by appointment only
                      </p>
                      <p className="text-brand-gray-400 text-sm mt-1">
                        This ensures you get dedicated time with our team and
                        equipment — no waiting, no crowds. Book online or
                        contact us to schedule.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Hours */}
              <FadeIn delay={0.15}>
                <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6">
                  <h3 className="font-heading text-lg font-bold text-white mb-4">
                    Hours
                  </h3>
                  <ul className="space-y-2">
                    {HOURS.map((item) => (
                      <li
                        key={item.days}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-brand-gray-400">{item.days}</span>
                        <span className="text-brand-gray-200">
                          {item.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Location */}
              <FadeIn delay={0.2}>
                <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6">
                  <h3 className="font-heading text-lg font-bold text-white mb-4">
                    Location
                  </h3>
                  <p className="text-brand-gray-300 text-sm">
                    {ADDRESS.full}
                    {/* [REPLACE] Add full street address when available */}
                  </p>
                  {PHONE && (
                    <p className="text-brand-gray-300 text-sm mt-2">
                      Phone:{" "}
                      <a
                        href={`tel:${PHONE}`}
                        className="text-brand-green hover:underline"
                      >
                        {PHONE}
                      </a>
                    </p>
                  )}
                  {EMAIL && (
                    <p className="text-brand-gray-300 text-sm mt-1">
                      Email:{" "}
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-brand-green hover:underline"
                      >
                        {EMAIL}
                      </a>
                    </p>
                  )}
                </div>
              </FadeIn>

              {/* Map placeholder */}
              <FadeIn delay={0.25}>
                <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg overflow-hidden">
                  {/*
                    [REPLACE] Embed Google Maps iframe here:
                    <iframe
                      src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Game Plan Golf Performance location"
                    />
                  */}
                  <div className="h-[300px] flex items-center justify-center bg-brand-gray-900">
                    <div className="text-center">
                      <svg
                        className="w-8 h-8 text-brand-gray-600 mx-auto mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-brand-gray-500 text-sm">
                        Google Maps embed
                      </p>
                      <p className="text-brand-gray-600 text-xs mt-1">
                        {ADDRESS.full}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Quick book */}
              <FadeIn delay={0.3}>
                <Button href={BOOKING_URL} size="lg" className="w-full" external>
                  Book Online Now
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
