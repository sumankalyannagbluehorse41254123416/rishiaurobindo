import AlumniGallery from "@/components/alumni/AlumniGallery";
import AlumniInfo from "@/components/alumni/AlumniInfo";
import PageTitle from "@/components/alumni/PageTitle";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Alumni",
  description:
    "Alumni"
};
export default function AlumniPage() {
  return (
    <>
      <PageTitle />
      <AlumniInfo />
      <AlumniGallery />
    </>
  );
}