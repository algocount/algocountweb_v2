import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import styles from "./markdown.module.css";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: none;
  background-color: black;
  color: white;
  padding: 0.5em 0.75em;
  border: none;

  &:hover {
    color: white;
  }

  @media only screen and (max-width: 750px) {
    font-size: 0.85em;
  }
`;

const MaterialsArticle = (props) => {
  return (
    <Layout>
      <h2 className="intro header">
        <Link
          to="/materials"
          style={{ opacity: "0.7", color: "black", textDecoration: "none" }}
        >
          Materials
        </Link>
        <span style={{ fontWeight: "600" }}>{` / ${props.title}`}</span>
      </h2>
      <img
        src={"." + props.imgUrl}
        alt={props.title}
        style={{ width: "100%" }}
      />
      <div style={{ marginTop: "2.5em" }}>
        <Markdown children={props.content} style={{ marginTop: "1.5em" }} />
        <div style={{ display: "flex", width: "100%", flexDirection:"row", justifyContent: "flex-end", marginTop:"4em" }}>
          <a href={props.resUrl} target={"_blank"} rel="noreferrer">
            <StyledButton>Go to the risorsa!</StyledButton>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default MaterialsArticle;
