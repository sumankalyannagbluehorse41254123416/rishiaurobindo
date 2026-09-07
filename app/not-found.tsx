import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Rishi Aurobindo Shikshan Mahavidyalaya",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="py-5 my-5">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="display-1 fw-bold text-primary mb-3">404</h1>
            <h2 className="mb-3 fw-bold">Page Not Found</h2>
            <p className="text-muted mb-4 lead">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link href="/" className="btn_theme text-decoration-none">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
