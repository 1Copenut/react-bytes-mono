import PageProps from "../../types/PageProps";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const AdminIndex = ({ title }: PageProps) => {
  const documentTitle = useDocumentTitle;
  documentTitle(title);

  return (
    <>
      <h1>Admin Index</h1>
      <p>Excuse me! This is a restricted area!</p>
    </>
  );
};

export default AdminIndex;
