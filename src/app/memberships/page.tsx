"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { MEMBERSHIP_URL, BOOKING_URL } from "@/lib/constants";

/*
  [REPLACE] Update pricing, tier names, and included features with actual membership details.
  The tiers below are based on the brief ("starting at $29/mo") — verify and adjust all pricing.
*/
const tiers = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    description: "Get consistent practice time with real data feedback.",
    features: [
      "2 GC Quad bay sessions per month (1 hour each)",
      "Premium range balls included",
      "Basic launch monitor data display",
      "Online booking access",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Performance",
    price: "$79",
    period: "/mo",
    description:
      "For the golfer who practices weekly and wants full data access.",
    features: [
      "6 GC Quad bay sessions per month (1 hour each)",
      "Premium range balls included",
      "Full launch monitor data with session history",
      "High-speed video recording access",
      "10% off lesson packages",
      "Priority booking windows",
    ],
    cta: "Join Performance",
    highlighted: true,
  },
  {
    name: "Unlimited",
    price: "$149",
    period: "/mo",
    description: "Maximum access for serious, frequent practice.",
    features: [
      "Unlimited GC Quad bay sessions",
      "Premium range balls included",
      "Full launch monitor data with session history",
      "High-speed video recording access",
      "15% off lesson packages",
      "Priority booking windows",
      "1 complimentary guest pass per month",
    ],
    cta: "Go Unlimited",
    highlighted: false,
  },
];

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
              Every session in a GC Quad bay gives you the same data tour
              players use to refine their game. Pick the plan that matches how
              often you practice.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-12 md:py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map((tier, i) => (
              <FadeIn key={tier.name} delay={0.1 * i}>
                <div
                  className={`rounded-lg p-6 md:p-8 h-full flex flex-col ${
                    tier.highlighted
                      ? "bg-brand-green/5 border-2 border-brand-green relative"
                      : "bg-brand-gray-950 border border-brand-gray-800"
                  }`}
                >
                  {tier.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-green text-brand-dark text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}

                  <div className="mb-6">
                    <h3 className="font-heading text-lg font-bold text-white">
                      {tier.name}
                    </h3>
                    <div className="mt-3 flex items-baseline">
                      <span className="font-heading text-4xl md:text-5xl font-bold text-white">
                        {tier.price}
                      </span>
                      <span className="text-brand-gray-400 text-sm ml-1">
                        {tier.period}
                      </span>
                    </div>
                    <p className="text-brand-gray-400 text-sm mt-3">
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-3 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm">
                        <CheckIcon />
                        <span className="text-brand-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      href={MEMBERSHIP_URL}
                      variant={tier.highlighted ? "primary" : "outline"}
                      className="w-full"
                      external
                    >
                      {tier.cta}
                    </Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SIM Rental */}
      <section className="py-20 md:py-28 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Drop-In Option"
                title="SIM Rental — No Membership Required"
                description="Not ready to commit? Rent a GC Quad bay by the hour. Walk in, hit balls with tour-level data, and see what you've been missing."
                align="left"
              />
              <FadeIn delay={0.2}>
                <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6 inline-block">
                  {/* [REPLACE] Update SIM rental pricing with actual rates */}
                  <p className="text-brand-gray-400 text-sm">
                    Hourly Bay Rental
                  </p>
                  <p className="font-heading text-3xl font-bold text-white mt-1">
                    $40<span className="text-brand-gray-400 text-base font-normal">/hour</span>
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
                    "Staff available for basic setup help",
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
