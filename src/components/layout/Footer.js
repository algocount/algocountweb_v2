import { Container, Row, Col } from "react-bootstrap";
import cariplo from "../../assets/cariplo.svg";
import unimi from "../../assets/unimi.svg";
import polimi from "../../assets/polimi.svg";
import density from "../../assets/density.svg";
import { FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";

//TO-DO: SET BREAKPOINTS

const Footer = () => {
  return (
    <Container as="footer" fixed="bottom">

      <Container style={{ fontFamily: "'Inter', sans-serif", paddingBottom:"1em" }}>

        <Row style={{display: "flex", justifyContent:"space-evenly"}}>

          <Col md={2} className="logo-box">
            <p>Funded by:</p>
            <div className="inner-logo-box">
            <a className="logo" style={{justifyContent:"flex-start"}} href="https://www.fondazionecariplo.it/">
              <img src={cariplo} alt="fondazione cariplo"/>
            </a>
            </div>
          </Col>

          <Col md={4} className="logo-box">
            <p>Partners</p>
            <div className="inner-logo-box">
              <a className="logo" href="https://www.unimi.it" alt="università degli studi di milano statale">
                <img src={unimi} />
              </a>
              <a className="logo" href="https://www.polimi.it" alt="politecnico di milano">
                <img src={polimi} />
              </a>
              <a className="logo" href="https://www.densitydesign.org" alt="laboratorio di ricerca density design">
                <img src={density} />
              </a>
            </div>
          </Col>

          <Col md= {4} className="contacts">
            <p>Contacts</p>

            <div className="contact-link-container">
              <a
                style={{ color: "black", display: "flex" }}
                href="mailto:algocountproject@gmail.com"
              >
                <FaEnvelope size={24} style={{padding:".2em"}} />
                <p className="contact-link">algocountproject@gmail.com</p>
              </a>

              <a
                style={{ color: "black", display: "flex" }}
                href="https://twitter.com/algocount"
              >
                <FaTwitter size={24} style={{padding:".2em"}}/>
                <p className="contact-link">@algocount</p>
              </a>

              <a
                style={{
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                }}
                href="https://www.facebook.com/algocount/"
              >
                <FaFacebook size={24} style={{padding:".2em"}}/>
                <p className="contact-link">@algocount</p>
              </a>
            </div>
          </Col>

        </Row>

      </Container>

    </Container>
  );
};

export default Footer;
