import { redirect } from "next/navigation";

export default function SectionRedirect({ params }: { params: { section: string } }) {
  const validSections = ["about", "gallery", "contact"];

  const target = validSections.includes(params.section)
    ? `/#${params.section}`
    : "/";

  redirect(target);
}