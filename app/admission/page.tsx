import AdmissionInfo from "@/components/admission/AdmissionInfo";
import PageTitle from "@/components/admission/PageTitle";

import FeeStructure from "@/components/admission/FeeStructure";

export default function Admission() {
  return (
    <div>
      <PageTitle />
      <AdmissionInfo />
      <FeeStructure />
    </div>
  );
}