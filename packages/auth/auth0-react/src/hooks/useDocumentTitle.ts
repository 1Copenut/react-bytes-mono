import { useEffect } from "react";

// TODO: Add to README See https://stackoverflow.com/a/73290933
export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};
