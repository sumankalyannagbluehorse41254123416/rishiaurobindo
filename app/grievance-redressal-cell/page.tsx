import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Grievance Redressal Cell",
  description:
    "Grievance Redressal Cell"
};
export default function GrievanceRedressalCell() {
  return (
    <div className="container">
      <div className="text-center py-5">
        <h3>Page Under Maintenance</h3>
        <p>We are currently updating this page. Please check back later.</p>
      </div>
    </div>
  );
}