"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { BOOKING_URL, ADDRESS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="inline-block text-brand-green text-sm font-semibold tracking-widest uppercase mb-4">
                About
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                Golf Is Hard.
                <br />
                We Take It Seriously.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg md:text-xl text-brand-gray-300 leading-relaxed">
                Game Plan Golf Performance exists because most golfers deserve
                better than guesswork. We built a facility around a simple idea:
                measure everything, coach from the data, and give every golfer
                access to the same tools the pros use.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Ryan's Story */}
      <section className="py-20 md:py-28 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                {/*
                  [REPLACE] Image: Professional headshot or coaching photo of Ryan
                  Aspect ratio: 3:4 (portrait)
                  Alt: "Ryan — Founder of Game Plan Golf Performance"
                */}
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Ryan — Founder of Game Plan Golf Performance"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <div>
              <FadeIn>
                <span className="text-brand-green text-sm font-semibold tracking-widest uppercase">
                  Meet the Founder
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
                  Ryan
                </h2>
              </FadeIn>

              {/*
                [PERSONALIZE THIS]
                Replace the following paragraphs with Ryan's actual story.
                Key points to cover:
                - How he got into golf / coaching
                - What led him to open Game Plan
                - His coaching philosophy in his own words
                - Personal details that make him relatable (family, local ties, etc.)
                Keep the tone confident but approachable — not a resume, a story.
              */}
              <FadeIn delay={0.1}>
                <div className="space-y-4 text-brand-gray-300 leading-relaxed">
                  <p>
                    [PERSONALIZE THIS] Ryan founded Game Plan Golf Performance
                    with a conviction that every golfer — not just tour
                    professionals — deserves access to real performance data and
                    coaching built on evidence rather than opinion.
                  </p>
                  <p>
                    [PERSONALIZE THIS] With certifications from NASM, the
                    Titleist Performance Institute (TPI Level 2 Fitness &amp;
                    Power), and Golf Digest, Ryan brings a rare combination of
                    golf coaching expertise and athletic performance training
                    under one roof.
                  </p>
                  <p>
                    [PERSONALIZE THIS] His approach is straightforward: measure
                    what&apos;s happening, identify what needs to change, build a
                    plan, and track progress. No guessing. No generic tips. Just
                    data-backed coaching tailored to each individual.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-4">
                  {[
                    "NASM-CPT",
                    "TPI Level 2 Fitness",
                    "TPI Level 2 Power",
                    "Golf Digest Certified",
                  ].map((cert) => (
                    <span
                      key={cert}
                      className="bg-brand-gray-950 border border-brand-gray-800 text-brand-gray-200 text-xs font-semibold px-3 py-1.5 rounded"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Forbes Feature */}
      <section className="py-16 md:py-20 bg-brand-green/5 border-y border-brand-green/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            {/* [REPLACE] Add actual Forbes logo image */}
            <p className="font-heading text-3xl md:text-4xl font-bold text-white tracking-wide mb-4">
              Forbes
            </p>
            <p className="text-brand-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Game Plan Golf Performance was featured by Scott Kramer in Forbes
              (August 2025) for its data-driven approach to golf coaching and
              its commitment to making tour-level technology accessible to
              everyday golfers.
            </p>
            <p className="text-brand-gray-500 text-sm mt-4">
              {/* [REPLACE] Add link to actual Forbes article */}
              Scott Kramer, Forbes — August 2025
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sofia's Story */}
      <section className="py-20 md:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <span className="text-brand-green text-sm font-semibold tracking-widest uppercase">
                  World Champion
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
                  Sofia — Ultimate Long Drive World Champion
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="space-y-4 text-brand-gray-300 leading-relaxed">
                  <p>
                    Sofia trained at Game Plan Golf Performance and went on to
                    win the Ultimate Long Drive World Championship — a testament
                    to what happens when talent meets data-driven coaching and
                    serious physical preparation.
                  </p>
                  <p>
                    Her training combined GC Quad launch monitor sessions to
                    optimize ball speed and launch conditions, force plate
                    analysis to maximize ground reaction forces, and a
                    golf-specific athletic training program built for power.
                  </p>
                  <p>
                    Sofia&apos;s success isn&apos;t just a headline for us —
                    it&apos;s proof that the methodology works at the highest
                    level. The same data-first approach we used with Sofia is
                    available to every golfer who walks through our door.
                  </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} direction="right">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                {/*
                  [REPLACE] Image: Sofia competing or training — ideally at the World Championship
                  or in a powerful, athletic moment at the facility
                  Aspect ratio: 4:3
                  Alt: "Sofia — Ultimate Long Drive World Champion, trained at Game Plan"
                */}
                <Image
                  src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80"
                  alt="Sofia — Ultimate Long Drive World Champion, trained at Game Plan"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-brand-dark/80 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-brand-green font-heading font-bold text-sm">
                    World Champion
                  </p>
                  <p className="text-white text-xs">
                    Ultimate Long Drive Championship
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Facility */}
      <section className="py-20 md:py-28 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Facility"
            title="A Performance Facility, Not a Simulator Bar"
            description="Game Plan is an appointment-based, fully staffed golf performance center. Every session is coached or supported. This isn't a place to grab a beer and hit balls — it's where you come to get better."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Appointment-Based",
                description:
                  "Every session is scheduled. No walk-up crowds, no waiting for a bay. Your time is your time.",
              },
              {
                title: "Fully Staffed",
                description:
                  "A trained professional is always present. Whether you're in a lesson or a practice session, support is available.",
              },
              {
                title: "Professional Environment",
                description:
                  "Designed for focused work. Climate-controlled bays, professional-grade equipment, zero distractions.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={0.1 * i}>
                <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6">
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brand-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Location callout */}
      <section className="py-20 md:py-28 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Located in {ADDRESS.city}, {ADDRESS.state}
            </h2>
            <p className="mt-4 text-lg text-brand-gray-300">
              In the heart of North County San Diego, serving golfers from
              Carlsbad to Escondido and everywhere in between.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={BOOKING_URL} size="lg" external>
                Book a Session
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Get Directions
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
