import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
// import styles from "./markdown.module.css";
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
    font-size: 3em;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -1.3px;
  }
  h2 {
    font-family: "Inter", sans-serif;
    font-size: 1.8em;
    font-weight: 600;
    letter-spacing: -0.8px;
    padding-top: 2em;
  }
  h3 {
    font-family: "Inter", sans-serif;
    font-size: 1em;
    font-weight: 400;
    padding-top: 2.5em;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  p {
    font-family: "EB Garamond", serif;
    color: #444;
    font-size: 1.3em;
    font-weight: 500;
    letter-spacing: 0.5px;
  }
  a {
    font-family: "EB Garamond", serif;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: #000;
  }
  li {
    margin-bottom: 1em;
    margin-left: 1em;
    font-family: "EB Garamond", serif;
    color: #444;
    font-weight: 500;
    letter-spacing: 0.5px;
    list-style-type: square;
    list-style-position: outside;
  }
`;

const Header = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 1em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const MaterialsArticle = (props) => {
  return (
    <Layout>
      <Header>
        <Link
          to="/materials"
          style={{ opacity: "0.7", color: "black", textDecoration: "none" }}
        >
          Materials
        </Link>
        <span style={{ fontWeight: "600" }}>{` / ${props.title}`}</span>
      </Header>
      <Img
        src={"." + props.imgUrl}
        alt={props.title}
        style={{ width: "100%" }}
      />
      <div style={{ marginTop: "2.5em"}}>
        <StyledMarkdown
          children={props.content}
          style={{ marginTop: "1.5em" }}
        />
       </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            marginTop: "4em",
          }}
        >
          {props.resUrl !== "" ? (
            <a href={props.resUrl} target={"_blank"} rel="noreferrer">
              <StyledButton>Browse Materials</StyledButton>
            </a>
          ) : null}
        </div>

        <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: "4em",
        }}
      >
      
      {props.file !== "" ? (<a href={props.file} download target={"_blank"} rel="noreferrer">
          <StyledButton>Download</StyledButton>
        </a>) : null}
        
      </div>
    </Layout>
  );
};

export default MaterialsArticle;
