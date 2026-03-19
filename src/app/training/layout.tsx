import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Personal Training",
  description:
    "Golf-specific athletic training in San Marcos, CA. NASM-CPT, TPI Level 2 Fitness & Power certified. 3D movement screening, customized programs, adult and junior options.",
  path: "/training",
  keywords: [
    "golf personal training San Marcos",
    "TPI fitness training San Diego",
    "golf athletic training North County",
    "3D movement screening golf",
  ],
});

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
