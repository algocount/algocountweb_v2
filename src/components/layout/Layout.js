import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Navbar />
        <Container>
          <Row className="justify-content-md-center">
            <Col md={8} style={{paddingTop:"2.5em", paddingBottom:"5em"}}>{props.children}</Col>
          </Row>
        </Container>
      <Footer />
    </>
  );
};

export default Layout;
