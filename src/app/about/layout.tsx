import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Game Plan Golf Performance is a data-driven golf coaching facility in San Marcos, CA. Featured in Forbes. Home of a World Long Drive Champion. Not a simulator bar — a performance facility.",
  path: "/about",
  keywords: [
    "Game Plan Golf Performance",
    "golf facility San Marcos",
    "Forbes golf coaching",
    "golf performance center San Diego",
  ],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
