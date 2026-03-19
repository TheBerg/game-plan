import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Golf Lessons",
  description:
    "Data-driven golf coaching in San Marcos, CA. GC Quad launch monitors, high-speed video, and force plates power every lesson. Tailored improvement plans based on your data.",
  path: "/lessons",
  keywords: [
    "golf lessons San Marcos",
    "golf coaching North County San Diego",
    "GC Quad golf lessons",
    "data-driven golf coaching",
  ],
});

export default function LessonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
