import { Container, Col } from "react-bootstrap";
import Layout from "../components/layout/Layout";

const Project = () => {
  return (
    <Layout>
      <Container className="col-container">
        <Col md={6}>
        <h1 className="intro header">THE ALGOCOUNT PROJECT</h1>
        <p className="intro body">
          In the context of a society pervasively intermediated by digital
          technologies, algorithms represent a new and important actor in the
          determination of social relations, cultural patterns and economic
          outcomes. Algorithms ‘recommend’ which movies to watch, what items to
          purchase, who to trust when using an online service, and are
          increasingly used as instruments of control for crime prevention,
          financial assessment and economic risk.
        </p>
        <p className="expl body">
          A particular element of interest is given by the fact that algorithms
          hold an increasingly important role in the formation of public
          opinion, that is now largely mediated by social media platforms and
          digital resources.
          <br />
          <br />
          <u>
            As the famous Cambridge Analytica scandal revealed in the context of
            the 2016 “Brexit” referendum and the election of Donald Trump as
            President of the United States of America of the same year
          </u>
          , algorithms bear demonstrable potential to play a key role in
          filtering personalised news content to users based upon their
          preferences and previous consumption, thus affecting what information
          sources users will and will not be able to access. <br />
          <br />
          Yet, despite their pervasive presence, we still know little about
          them, how they work, how they produce the outcomes we see. Building on
          the understanding of these challenges, <em>Algocount</em> seeks to
          expand our current understanding of, and raise awareness about, the
          role of algorithms in society, with a specific focus on the formation
          of public opinion in the Italian context. To this end, it asks the
          following questions:
        </p>
        <ul>
          <li>
            <p className="expl">
              What is the perception about the role of algorithms in the
              formation of public opinion in Italy? How much do Italians know
              about algorithms, their power, and the outcomes they produce?
            </p>
          </li>
          <li>
            <p className="expl">
              How can we visualise the intervention of algorithms in the
              formation of public opinion in the Italian context, to the aim of
              making the processes of information filtering and access by the
              general public more accountable to public scrutiny?
            </p>
          </li>
          <li>
            <p className="expl">
              What policies can be put in place, starting from the Italian
              context and then at a European and global level, in order to
              increase transparency, reduce opacity and enhance accountability
              of the intermediation role algorithms play in the formation of
              public opinion?
            </p>
          </li>
        </ul>
        </Col>
      </Container>
    </Layout>
  );
};

export default Project;
