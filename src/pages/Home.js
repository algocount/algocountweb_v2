import { Container } from "react-bootstrap";
import Layout from "../components/Layout/Layout";
import Logop5 from "../components/p5/Logop5";
import Parallax from "../components/Parallax";
import { Intro } from "../components/typeComponents";

const Home = () => {

  return (
    <Layout>
      <div className="p5-container">
        <Logop5 className="p5-animation"/>
        <Container className="hero">
          <h1 className="title">Algocount</h1>
          <h2 className="sub-head">
            Public Perception of Algorithms&nbsp;in&nbsp;Society: <br></br>
            Accounting for the Algorithmic Public&nbsp;Opinion
          </h2>
        </Container>
      </div>
      <div style={{ position: "relative" }}>
        <Parallax />
        <Intro>
          The Algocount project seeks to expand our current understanding of,
          and raise awareness about, the role of algorithms in society, with a
          specific focus on the formation of public opinion in the Italian
          context.
        </Intro>
      </div> 
    </Layout>
  );
};

export default Home;
