import Layout from "../components/layout/Layout";
import { Container, Col } from "react-bootstrap";

const News = () => {
  return (
    <Layout>
      <Container className="col-container">
        <Col md={6}>
          <Container>
            <h1 className="intro header">RECENT ACTIVITIES</h1>
            <p className="intro body">
              The Algocount project consists of seven actions; of these, two
              concern the collection of primary empirical data, and one concerns
              the implementation of a Communication Plan aimed at the
              dissemination of research findings and the engagement of the
              general public.
            </p>
          </Container>
        </Col>
      </Container>
    </Layout>
  );
};

export default News;
