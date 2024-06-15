import { useDocumentTitle } from "../hooks/useDocumentTitle";

import PageProps from "../types/PageProps";

const Index = ({ title }: PageProps) => {
  const documentTitle = useDocumentTitle;
  documentTitle(title);

  return (
    <>
      <h1>Vite + React</h1>
      <p>This will be where I put more interesting content. Soon.</p>
    </>
  );
};

export default Index;
