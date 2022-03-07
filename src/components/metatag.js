import { Helmet } from "react-helmet";

const Metatag = (props) => {
  return (
    <Helmet>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@algocount" />
      <meta
        name="twitter:image"
        content="https://lucadra.github.io/algocountweb_v2/social-cover.jpg"
      />
      <meta name="twitter:creator" content="@algocount" />

      <meta property="og:title" content="Algocount" />
      <meta
        property="og:description"
        content="Public Perception of Algorithms in Society:
      Accounting for the Algorithmic Public Opinion"
      />
      <meta
        property="og:url"
        content={`https://lucadra.github.io/algocountweb_v2/${props.pageName}`}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://lucadra.github.io/algocountweb_v2/social-cover.jpg"
      />
    </Helmet>
  );
};

export default Metatag;
