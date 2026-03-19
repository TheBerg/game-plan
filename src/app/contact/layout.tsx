import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Game Plan Golf Performance in San Marcos, CA. Book a lesson, ask about memberships, or schedule a training session. All sessions by appointment.",
  path: "/contact",
  keywords: [
    "contact Game Plan Golf",
    "book golf lesson San Marcos",
    "golf coaching appointment San Diego",
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
