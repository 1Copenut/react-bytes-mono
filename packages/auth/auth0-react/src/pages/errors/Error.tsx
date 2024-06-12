import { useRouteError } from "react-router-dom";

import PageProps from "../../types/PageProps";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

// TODO: Add to README See https://stackoverflow.com/a/75948984 for error typing
const Error = ({ title }: PageProps) => {
  const documentTitle = useDocumentTitle;
  documentTitle(title);

  const error = useRouteError();
  console.error(error);

  return (
    <>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </p>
    </>
  );
};

export default Error;
