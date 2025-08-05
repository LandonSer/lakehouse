import { redirect } from "next/navigation";
import { navItems } from "../../../data/mock-data";

export default async function SectionRedirect(props: { params: Promise<{ section: string }> }) {
    const params = await props.params;
    const validSections = navItems.map(item => item.name);   
    const target = validSections.includes(params.section)
        ? `#/${params.section}`
        : "/";

    redirect(target);
}