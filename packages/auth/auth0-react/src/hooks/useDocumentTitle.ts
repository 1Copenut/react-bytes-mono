import { useEffect } from "react";

// See https://stackoverflow.com/a/73290933
const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export default useDocumentTitle;
