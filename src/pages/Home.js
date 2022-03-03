import { Container, Row, Col } from "react-bootstrap";
import Logop5 from "../components/p5/Logop5";
import Parallax from "../components/Parallax";
import { Intro, Body, ListItem, SubHead } from "../components/typeComponents";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  CardsContainer,
  MaterialCard,
} from "../components/MaterialsComponents";
import materialsList from "../materials.json";
import eventsList from "../events.json";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container style={{ minHeight: "100%" }}>
        <Row style={{ justifyContent: "center", minHeight: "100%" }}>
          <Col
            md={8}
            sm={10}
            style={{
              paddingTop: "0",
              paddingBottom: "5em",
              paddingLeft: "1.5em",
              paddingRight: "1.5em",
            }}
          >
            <div className="p5-container">
              <Logop5 className="p5-animation" />
              <Container className="hero">
                <h1 className="title">Algocount</h1>
                <h2 className="sub-head">
                  Public Perception of Algorithms&nbsp;in&nbsp;Society:
                  <br></br>
                  Accounting for the Algorithmic Public&nbsp;Opinion
                </h2>
              </Container>
            </div>
            <div style={{ position: "relative" }}>
              <Parallax />
              <Intro>
                The Algocount project seeks to expand our current understanding
                of, and raise awareness about, the role of algorithms in
                society, with a specific focus on the formation of public
                opinion in the Italian context.
              </Intro>
            </div>
            
            <SubHead style={{paddingTop:"3.5em"}}>Recent Activities</SubHead>

            <CardsContainer>
              {eventsList.map((item) => (
                <MaterialCard pageName="events" {...item} />
              ))}
              {materialsList.map((item) => (
                <MaterialCard pageName="events" {...item} />
              ))}
            </CardsContainer>

            <div style={{ marginTop: "4em" }}>
              <Body>
                In the context of a society pervasively intermediated by digital
                technologies, algorithms represent a new and important actor in
                the determination of social relations, cultural patterns and
                economic outcomes.
              </Body>

              <Body>
                Algorithms ‘recommend’ which movies to watch, what items to
                purchase, who to trust when using an online service, and are
                increasingly used as instruments of control for crime
                prevention, financial assessment and economic risk.
              </Body>

              <Body>
                Algorithms, however, also hold an increasingly important role in
                the formation of public opinion, that is now largely mediated by
                social media and digital platforms.
              </Body>

              <Body>
                As the famous Cambridge Analytica scandal revealed in the
                context of the 2016 “Brexit” referendum and the election of
                Donald Trump as President of the United States of America of the
                same year, algorithms bear demonstrable potential to play a key
                role in filtering personalised news content to users based upon
                their preferences and previous consumption, thus affecting what
                information sources users will and will not be able to access.
                Yet, despite their pervasive presence, we still know little
                about them, how they work, how they produce the outcomes we see.
              </Body>

              <Body>
                Building on the understanding of these challenges, Algocount
                seeks to expand our current understanding of, and raise
                awareness about, the role of algorithms in society. To do so, it
                asks the following questions:
              </Body>

              <ul>
                <ListItem>
                  What is the perception about the role of algorithms in the
                  formation of public opinion in Italy? How much do Italians
                  know about algorithms, their power, and the outcomes they
                  produce?
                </ListItem>

                <ListItem>
                  How can we visualise the intervention of algorithms in the
                  formation of public opinion in the Italian context, to the aim
                  of making the processes of information filtering and access by
                  the general public more accountable to public scrutiny?
                </ListItem>

                <ListItem>
                  What policies can be put in place, starting from the Italian
                  context and then at a European and global level, in order to
                  increase transparency, reduce opacity and enhance
                  accountability of the intermediation role algorithms play in
                  the formation of public opinion?
                </ListItem>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
