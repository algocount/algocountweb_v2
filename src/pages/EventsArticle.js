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
  padding: .5em .75em; 
  border: none; 

  &:hover {
      color: white; 
  }

  @media only screen and (max-width: 750px) {
    font-size: .85em;
  }
`;

const StyledMarkdown = styled(Markdown)`
  p{
    font-family: "EB Garamond", serif; 
    font-size: 1.25em; 
    font-weight: 400; 
    letter-spacing: .5px;
  }
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
      {props.imgUrl !== "\r" ? ( <img src={"."+props.imgUrl} alt={props.title}/> ) : null}
      <div style={{ display: "flex", width: "100%", flexDirection:"row", justifyContent: "flex-end", marginTop:"4em" }}>
      <StyledMarkdown children={props.content} />
      <a href={props.resUrl} target={"_blank"} rel="noreferrer">
        <StyledButton>Go to the risorsa!</StyledButton>
      </a>
      </div>
    </Layout>
  );
};

export default Article;
