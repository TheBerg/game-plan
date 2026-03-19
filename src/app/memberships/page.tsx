"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { MEMBERSHIP_URL, BOOKING_URL } from "@/lib/constants";

const membership = {
  price: "$149",
  period: "/mo",
  features: [
    "Up to 2 hours of GC Quad bay time per day",
    "Open 5:00 AM – 10:00 PM, every day",
    "Full launch monitor data",
    "Premium range balls included",
    "Online booking access",
    "No contract — cancel anytime",
  ],
};

function CheckIcon() {
  return (
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
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function MembershipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block text-brand-green text-sm font-semibold tracking-widest uppercase mb-4">
              Memberships
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Practice With Purpose
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-brand-gray-300 max-w-2xl mx-auto leading-relaxed">
              Self-serve GC Quad bays. Open 5am to 10pm, every day. Pick the
              plan that fits your schedule and your goals.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Membership */}
      <section className="py-12 md:py-20 bg-brand-dark">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-brand-green/5 border-2 border-brand-green rounded-lg p-8 md:p-10 text-center">
              <span className="inline-block bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                No Contract — Cancel Anytime
              </span>
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
                Practice Membership
              </h3>
              <div className="mt-4 flex items-baseline justify-center">
                <span className="font-heading text-5xl md:text-6xl font-bold text-white">
                  {membership.price}
                </span>
                <span className="text-brand-gray-400 text-lg ml-1">
                  {membership.period}
                </span>
              </div>
              <p className="text-brand-gray-300 mt-4">
                Up to 2 hours per day. Every day. No monthly limits.
              </p>

              <ul className="mt-8 space-y-3 text-left max-w-sm mx-auto">
                {membership.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm">
                    <CheckIcon />
                    <span className="text-brand-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  href={MEMBERSHIP_URL}
                  variant="primary"
                  size="lg"
                  className="w-full"
                  external
                >
                  Become a Member
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Lessons callout */}
      <section className="py-16 bg-brand-green/5 border-y border-brand-green/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
              Want Coaching? Book a Lesson.
            </h2>
            <p className="text-brand-gray-300 text-lg max-w-2xl mx-auto">
              Lessons are available by appointment and booked separately from
              memberships. Pair your practice membership with data-driven
              coaching for the fastest improvement.
            </p>
            <div className="mt-6">
              <Button href={BOOKING_URL} variant="secondary" external>
                Book a Lesson
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SIM Rental */}
      <section className="py-20 md:py-28 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Drop-In Option"
                title="Bay Rental — No Membership Required"
                description="Not ready to commit? Rent a GC Quad bay by the hour. Walk in, hit balls with tour-level data, and see what you've been missing."
                align="left"
              />
              <FadeIn delay={0.2}>
                <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6 inline-block">
                  <p className="text-brand-gray-400 text-sm">
                    Hourly Bay Rental
                  </p>
                  <p className="font-heading text-3xl font-bold text-white mt-1">
                    $60<span className="text-brand-gray-400 text-base font-normal">/hour</span>
                  </p>
                  <p className="text-brand-gray-500 text-xs mt-2">
                    Includes GC Quad data &amp; premium balls
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="mt-6">
                  <Button href={BOOKING_URL} variant="secondary" external>
                    Reserve a Bay
                  </Button>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.2} direction="right">
              <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-8">
                <h3 className="font-heading text-xl font-bold text-white mb-4">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {[
                    "Full GC Quad launch monitor data",
                    "Premium range balls",
                    "Climate-controlled bay",
                    "Multiple course simulations available",
                    "No booking fee — just show up on time",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm">
                      <CheckIcon />
                      <span className="text-brand-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Practice Should Produce Data, Not Just Sweat
            </h2>
            <p className="mt-4 text-lg text-brand-gray-300">
              Every ball you hit in a Game Plan bay generates real performance
              data. That&apos;s practice with a purpose.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={MEMBERSHIP_URL} size="lg" external>
                Choose Your Plan
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Questions? Contact Us
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
