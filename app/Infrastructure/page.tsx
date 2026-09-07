import ComingSoon from "@/components/Infrastructure/ComingSoon";
import PageTitle from "@/components/Infrastructure/PageTitle";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Infrastructure",
    description:
        "Infrastructure"
};
export default function Infrastructure() {
    return (
        <>
            <PageTitle />
            <ComingSoon />
        </>
    );
}
