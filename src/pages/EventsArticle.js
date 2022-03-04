import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
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

const Img = styled.div`
  width: 100%;
  height: auto;
  padding: 0;
  aspect-ratio: 21/9;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

const StyledMarkdown = styled(Markdown)`
  h1 {
    font-family: "Inter", sans-serif;
    font-size: 2.875em;
    letter-spacing: -1.8px;
    font-weight: 600;
    line-height: 0.9;
    margin-bottom: 0.5em;
    margin-top: 1.5em;
  }
  p {
    font-family: "EB Garamond", serif;
    font-size: 1.25em;
    font-weight: 400;
    letter-spacing: 0.5px;
  }
`;

const Article = (props) => {
  return (
    <Layout>
      <h2 className="intro header">
        <Link
          to="/events"
          style={{ opacity: "0.7", color: "black", textDecoration: "none" }}
        >
          Events
        </Link>
        <span style={{ fontWeight: "600" }}>{` / ${props.title}`}</span>
      </h2>
      {props.imgUrl !== "\r" ? (
        <Img src={"." + props.imgUrl} alt={props.title} />
      ) : null}
      <StyledMarkdown children={props.content} />
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: "4em",
        }}
      >
      
        <a href={props.resUrl} target={"_blank"} rel="noreferrer">
          <StyledButton>Go to the risorsa!</StyledButton>
        </a>
      </div>
    </Layout>
  );
};

export default Article;
