import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
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
  h2{
    font-family: "Inter", sans-serif;
    font-size: 1.8em; 
    font-weight: 600;
    letter-spacing: -.8px;
    padding-top: 2em;
  }
  h3{
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
    letter-spacing: .5px;
  }
  a{
    font-family: "EB Garamond", serif;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: #000;
  }
  li{
    margin-bottom: 1em;
    margin-left: 1em;
    font-family: "EB Garamond", serif;
    color: #444;
    font-weight: 500;
    letter-spacing: .5px;
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
`

const Article = (props) => {
  return (
    <Layout>
      <Header className="intro header">
        <Link
          to="/events"
          style={{ opacity: "0.7", color: "black", textDecoration: "none" }}
        >
          Events
        </Link>
        <span style={{ fontWeight: "600" }}>{` / ${props.title}`}</span>
      </Header>
        <Img src={"." + props.imgUrl} alt={props.title} />
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
      
      {props.resUrl !== "" ? (<a href={props.resUrl} target={"_blank"} rel="noreferrer">
          <StyledButton>Read More</StyledButton>
        </a>) : null}
        
      </div>
    </Layout>
  );
};

export default Article;
