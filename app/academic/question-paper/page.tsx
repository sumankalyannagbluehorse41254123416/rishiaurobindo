import QuestionPaperBanner from "@/components/academic/question-paper/QuestionPaperBanner";
import QuestionPaperData from "@/components/academic/question-paper/QuestionPaperData";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Question Paper",
    description:
        "Question Paper"
};
export default function QuestionPaper() {
    return (
        <>
            <QuestionPaperBanner />
            <QuestionPaperData />
        </>
    );
}