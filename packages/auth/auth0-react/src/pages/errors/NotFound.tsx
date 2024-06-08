import PageProps from "../../types/PageProps";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

// See https://stackoverflow.com/a/75948984 for error typing
const NotFound = ({ title }: PageProps) => {
  const documentTitle = useDocumentTitle;
  documentTitle(title);

  return (
    <>
      <h1>Sorry hoss!</h1>
      <p>We can&rsquo;t seem to find that page right now.</p>
    </>
  );
};

export default NotFound;
