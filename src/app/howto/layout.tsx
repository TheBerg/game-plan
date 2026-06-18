import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "How-To Videos",
  description:
    "Step-by-step how-to videos for Swing Catalyst and Foresight technology at Game Plan Golf Performance in San Marcos, CA.",
  path: "/howto",
  keywords: [
    "Swing Catalyst how-to",
    "Foresight how-to",
    "golf technology guide",
    "Game Plan Golf Performance",
  ],
});

export default function HowToVideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
