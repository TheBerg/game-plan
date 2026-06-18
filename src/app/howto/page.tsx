"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";

const videos = [
  {
    title: "Swing Catalyst",
    description:
      "Learn how to use the Swing Catalyst pressure plate and motion capture system — from setup and calibration to reading your data.",
    href: "https://drive.google.com/drive/folders/1sSv8Gnni8rMtop5GxQ7f1vG-w4kwwoNQ?usp=drive_link",
  },
  {
    title: "Foresight",
    description:
      "Step-by-step guides for the Foresight GC Quad launch monitor — how to set up sessions, interpret ball flight data, and get the most out of your time on the simulator.",
    href: "https://drive.google.com/drive/folders/1FKExFTLwKQ6d9ZC_yWEz-8FGzmBVzGOF?usp=drive_link",
  },
];

export default function HowToVideosPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Technology Guides"
            title="How-To Videos"
            description="Quick reference guides for the technology at Game Plan Golf Performance. Select a system below to access the video library."
          />
        </div>
      </section>

      {/* Cards */}
      <section className="pb-24 md:pb-32 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((item, i) => (
              <FadeIn key={item.title} delay={0.1 * i}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-brand-gray-950 border border-brand-gray-800 hover:border-brand-green rounded-lg p-8 transition-colors h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-brand-green text-sm font-semibold tracking-widest uppercase">
                      How-To Videos
                    </span>
                    <svg
                      className="w-5 h-5 text-brand-gray-500 group-hover:text-brand-green transition-colors shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-brand-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <p className="mt-6 text-brand-green text-sm font-semibold">
                    View Videos →
                  </p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
