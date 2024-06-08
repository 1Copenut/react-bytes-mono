import useDocumentTitle from "../hooks/useDocumentTitle";
import PageProps from "../types/pageProps";

const About = ({ title }: PageProps) => {
  const documentTitle = useDocumentTitle;
  documentTitle(title);

  return (
    <>
      <h1>About my app!</h1>
      <p>
        This is my app. It's not exactly ground-breaking, but it does give me
        insights into how I might build an app with authentication. Courtesy of
        Auth0.
      </p>
    </>
  );
};

export default About;
