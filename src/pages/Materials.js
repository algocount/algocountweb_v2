import { Container, Col } from "react-bootstrap";
import MaterialCard from "../components/MaterialCard";
import Layout from "../components/layout/Layout";

import materialsList from "../materials.json";

const Materials = () => {
  return (
    <Layout>
      <Container className="col-container">
        <Col md={9}>
          <h1 className="intro header">Materials</h1>
            <div style={{display:"flex", flexWrap:"wrap"}}>
            {materialsList.map((item) => (
                <MaterialCard {...item} />
            ))}
            </div>
          </Col>
      </Container>
    </Layout>
  );
};

export default Materials;
