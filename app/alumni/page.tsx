import AlumniGallery from "@/components/alumni/AlumniGallery";
import AlumniInfo from "@/components/alumni/AlumniInfo";
import PageTitle from "@/components/alumni/PageTitle";

export default function AlumniPage() {
  return (
    <>
      <PageTitle />
      <AlumniInfo/>
      <AlumniGallery/>
      </>
  );
}