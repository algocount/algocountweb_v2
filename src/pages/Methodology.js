import { Button } from "react-bootstrap";

const Methodology = () => {
  return (
    <>
      <p>THE RESEARCH PROCESS</p>
      <h1>
        The Algocount project consists of seven actions; of these, two
        concern the collection of primary empirical data, and one
        concerns the implementation of a Communication Plan aimed at the
        dissemination of research findings and the engagement of the
        general public.
      </h1>

      <Button>Digital Methods</Button>
      <Button>Qualitative Interviews</Button>
      <Button>Communication</Button>

      <h2>Digital Methods</h2>
      <section id="phase1">
        <p>
          A particular element of interest is given by the fact that
          algorithms hold an increasingly important role in the
          formation of public opinion, that is now largely mediated by
          social media platforms and digital resources.
        </p>
        <p>
          These platforms are chosen in accordance with their widespread
          use and their relevance as news providers in the Italian
          context. This will allow to obtain a comprehensive data set
          that will generate insights about:
        </p>
          <span>
            <ul>
              <li>
                the main actors involved in the discussion of news
                occurring on digital platforms in Italy;{" "}
              </li>
              <li>
                the mediation role played by social media platforms in
                the access to news from the general public;{" "}
              </li>
              <li>
                the topics that are more likely to be affected to
                algorithmic processes in the formation of an algorithmic
                public sphere;
              </li>
              <li>
                news consumption practices in the digital domain by
                Italian users.
              </li>
            </ul>
          </span>
        <p>
          Data collected from this part of the research will be
          processed to develop a set of visualisations capable of
          providing both general and detailed pictures of the digital
          Italian public sphere, the actors involved, the role of social
          media in algorithmic processes and the attitudes about news
          consumption by Italian users.
        </p>         
      </section>

      <h2>Qualitative Interviews</h2>
      <section id="phase2">
        <div className="bigP">
          <p>
            A particular element of interest is given by the fact that
            algorithms hold an increasingly important role in the
            formation of public opinion, that is now largely mediated by
            social media platforms and digital resources.
          </p>
        </div>
      </section>

      <h2>Communication</h2>
      <section id="phase3">
          <p>The dissemination phase will entail:</p>
          <ul>
            <li>
              <p>
                a set of non-academic outputs (e.g. newspaper or magazine
                articles, podcasts, blogposts/opinion pieces, short
                videos) targeting the general public, written/produced by
                the members of the ALGOCOUNT research team{" "}
              </p>
            </li>
            <li>
              <p>
                the realization of a project website to host data
                visualizations{" "}
              </p>
            </li>
            <li>
              <p>
                a set of workshop activities on “algorithmic literacy”
                addressed to high school students aged 14-18, to be
                carried out in schools in the area of Milan{" "}
              </p>
            </li>
            <li>
              <p>
                a conference/final event hosted at the Science Museum of
                Milan that will mark the end of the project and involve
                stakeholders and the general public in the discussion of
                the main results of the research.{" "}
              </p>
            </li>
          </ul>
          <p>
            At the end of the research we expect we will have attained the
            following results: - to have enhanced the knowledge of and
            about algorithms in society for the general public, policy
            makers, relevant stakeholders and the academic community; - to
            have shed new light on the key issues that concern the
            diffusion of algorithms in society and the normative
            challenges that underpin public decision making processes at a
            local, national and international level for what concerns
            algorithms and their emergent role in society; - to have
            contributed to expanding the current understanding of the role
            of algorithms in the formation of public opinion and culture
            in the Italian context; - to have contributed to an
            enhancement of the relationship between science, technology
            and society by means of fostering greater knowledge and public
            trust about algorithms and, in parallel, having stimulated the
            emergence of a revived call for, and new processes of,
            algorithmic accountability.
          </p>
      </section>
    </>
  );
};

export default Methodology;
