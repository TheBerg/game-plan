import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Practice Memberships",
  description:
    "Practice memberships starting at $29/month with GC Quad launch monitor bays, premium balls, and high-speed video. SIM rentals also available.",
  path: "/memberships",
  keywords: [
    "golf practice membership San Marcos",
    "golf simulator rental San Diego",
    "GC Quad practice bay",
    "indoor golf practice North County",
  ],
});

export default function MembershipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
