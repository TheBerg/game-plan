import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Become a Member",
  description:
    "Sign up for a Game Plan Golf Performance practice membership. Unlimited GC Quad bay time, high-speed video, and private facility access in San Marcos, CA.",
  path: "/join",
  keywords: [
    "golf membership signup San Marcos",
    "join golf practice facility",
    "GC Quad membership",
  ],
});

export default function JoinLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
