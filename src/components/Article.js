import React from "react";
import { Container, Col } from "react-bootstrap";
import Layout from "./layout/Layout";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";

const Article = (props) => {
  return (
    <Layout>
      <Container>
        <Col md={8}>
          <h1 className="intro header">
            <Link
              to="/materials"
              style={{ opacity: "0.7", color: "black", textDecoration: "none" }}
            >
              Materials
            </Link>
            <span style={{ fontWeight: "600" }}>{` / ${props.title}`}</span>
          </h1>
          <img src={props.imgUrl.replace(".","")}/>
          <Markdown children={props.content} />
          <a href={props.resUrl}>
          <button>Go to the risorsa!</button>
          </a>
        </Col>
      </Container>
    </Layout>
  );
};

export default Article;
