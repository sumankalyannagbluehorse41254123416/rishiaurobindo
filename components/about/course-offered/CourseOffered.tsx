interface Subsection {
  title?: string;
}

interface Section {
  title?: string;
  subsections?: Subsection[];
}

interface Props {
  section?: Section;
}

export default function CourseOffered({
  section,
}: Props) {
  const subsections =
    section?.subsections || [];

  return (
    <div className="container">
      <div className="w-100 mt-3 text-md-center title-bx1">
        <h3 className="one8">
          {section?.title}
        </h3>
      </div>

      <div className="main-gallery">
        <div className="row mb-5">
          {subsections.map(
            (subsection, index) => (
              <div
                className="col-lg-6 col-sm-12 text-center"
                key={index}
              >
                <div className="courses_in">
                  {subsection?.title}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}