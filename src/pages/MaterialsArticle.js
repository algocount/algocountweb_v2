import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const MaterialsArticle = (props) => {
  return (
    <Layout>
      <h1 className="intro header">
        <Link
          to="/materials"
          style={{ opacity: "0.7", color: "black", textDecoration: "none" }}
        >
          Materials
        </Link>
        <span style={{ fontWeight: "600" }}>{` / ${props.title}`}</span>
      </h1>
      <img src={"." + props.imgUrl} alt={props.title} style={{width:"100%"}}/>
      <Markdown children={props.content} />
      <a href={props.resUrl}>
        <button>Go to the risorsa!</button>
      </a>
    </Layout>
  );
};

export default MaterialsArticle;
