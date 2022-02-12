import { Container, Col } from "react-bootstrap";
import Layout from "../components/layout/Layout";

const Consortium = () => {
  return (
    <Layout>
      <Container style={{ display: "flex", justifyContent: "center", width:"100%" }} className="top-margin">
        <Col md={10} style={{padding:"1em"}}>
          {
            //UNIMI
          }
          <Container>
            <h1 className="intro header">The Research Team</h1>
          </Container>

          <Container className="col-container consortium-card">
            <Col md={2} style={{padding:"1em"}}>
              <h1 className="intro header">Beneficiary</h1>
            </Col>

            <Col md={5} style={{padding:"1em"}}>
              <div>
                <h2 className="intro body">University of Milan</h2>
                <h3 className="intro header">
                  Deparment of social and political sciences
                </h3>
              </div>
              <div className="top-margin">
                <h4>Scientific Coordinator</h4>
                <p>Dr.Alessandro Gandini</p>
              </div>
            </Col>

            <Col md={5} style={{padding:"1em"}}>
              <h4>Research Team</h4>
              <p>
                Lorenzo Mosca - <em>Project Coordinator</em>
              </p>
              <p>
                Luisa Leonini - <em>Team Member</em>
              </p>
              <p>
                Marco Orofino - <em>Team Member</em>
              </p>
              <p>
                Alessandro Provetti - <em>Team Member</em>
              </p>
              <p>
                Sergio Splendore - <em>Team Member</em>
              </p>
            </Col>
          </Container>

          {
            //POLIMI
          }

          <Container className="consortium-card">
            <Col md={2}>
              <h1 className="intro header">Partner</h1>
            </Col>

            <Col md={5}>
              <div>
                <h2 className="intro body">Politecnico di Milano</h2>
                <h3 className="intro header">DensityDesign Research Lab</h3>
              </div>

              <div className="top-margin">
                <h4>Co-Coordinator</h4>
                <p>Dr.Michele Mauri</p>
              </div>
            </Col>

            <Col md={5}>
              <h4>Research Team</h4>
              <p>
                Beatrice Gobbo - <em>PhD Student</em>
              </p>
              <p>
                Maria de Los Àngeles Briones Rojas - <em>Post. Doc</em>
              </p>
            </Col>
          </Container>
        </Col>
      </Container>
    </Layout>
  );
};

export default Consortium;
