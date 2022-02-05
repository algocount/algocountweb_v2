import { Container, Row, Col } from 'react-bootstrap';

//TO-DO: SET BREAKPOINTS

const Footer = () => {
  return (
    <footer>
        <Container fixed="bottom">
          <Row>
              <Col>Funded by:</Col>
              <Col>Partners</Col>
              <Col>Contacts</Col>
          </Row>
        </Container>
    </footer>
  )
};

export default Footer;
