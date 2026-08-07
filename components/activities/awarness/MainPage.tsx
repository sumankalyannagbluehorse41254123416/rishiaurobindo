interface MainPageProps {
  section?: {
    title?: string;
    shortDescription?: string;
  };
}


export default function MainPage({
  section,
}: MainPageProps) {

  return (
    <div className="container">

      <div className="text-center py-5">

        {section?.title && (
          <h3>
            {section.title}
          </h3>
        )}


        {section?.shortDescription && (
          <p>
            {section.shortDescription}
          </p>
        )}

      </div>

    </div>
  );
}