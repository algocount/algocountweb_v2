import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <Container style={{minHeight: "100%"}}>
        <Row style={{justifyContent: "center", minHeight: "100%"}}>
          <Col md={8} sm={10} style={{  paddingTop:     "2.5em", 
                                        paddingBottom:  "5em", 
                                        paddingLeft:    "1.5em", 
                                        paddingRight:   "1.5em",   
                                        }}>
            {props.children}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
