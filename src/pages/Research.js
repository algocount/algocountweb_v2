import Layout from "../components/Layout/Layout";
import { Header, Intro, SubHead, ListItem, Body } from "../components/typeComponents";

const Research = () => {
  return (
    <Layout>
      <Header>THE RESEARCH PROCESS</Header>
      <Intro>
        The Algocount project unfolded around three main empirical phases:
      </Intro>

      <div>
        <a href="#digital-methods">
          <button className="method-button">Digital Methods</button>
        </a>
        <a href="#focus-groups">
          <button className="method-button">Qualitative Interviews</button>
        </a>
        <a href="#interviews">
          <button className="method-button">Communication</button>
        </a>
      </div>

      <SubHead id="digital-methods">Digital Methods</SubHead>
      <section>
        <Body>
          In a first phase, the research has consisted in the ‘reverse
          engineering’ of algorithmic content circulation on 5 digital
          platforms: Facebook, Twitter, YouTube, TikTok and Reddit. This was
          conducted in accordance with digital methods (Rogers, 2013)
          principles, and focusing on the macro-topic of the circulation of
          information around the Covid-19 pandemic. The research has taken the
          form of a data sprint, held in January 2021. This allowed to generate
          insights about:
        </Body>
        <ul>
          <ListItem>
            the main actors involved in the discussion of informational content
            about Covid-19 on digital platforms in Italy
          </ListItem>
          <ListItem>
            the mediation role played by algorithms in the access to information
            about Covid-19 from the general public in the Italian context
          </ListItem>
        </ul>
        <Body>
          Data collected in this phase of the research has consented to develop
          a set of visualisations capable of providing both general and detailed
          pictures of the Italian digital public sphere, the actors involved,
          the role of social media in algorithmic processes and the attitudes
          about news consumption by Italian users.
        </Body>
      </section>

      <SubHead id="focus-groups">Focus Groups</SubHead>
      <section>
        <Body>
          In a second phase, a set of 5 focus groups with Italian-based ordinary
          users of social media platforms, who regularly use digital resources
          to access informational content, have been conducted to investigate
          the ‘algorithmic imaginaries’ (Bucher, 2017) of Italian social media
          users. This has involved 33 participants, of which 16 males and 17
          females. These were conducted in collaboration with MUST (Science and
          Technology Museum Leonardo da Vinci, Milan), collecting participants
          among MUST attendees.
        </Body>
      </section>

      <SubHead id="interviews">Interviews to key informants</SubHead>
      <section>
        <Body>
          In a third phase, we interviewed 50 international key informants in
          the fields of academic research, software development, activism,
          policy and media to gather their expert opinions about the
          ‘algorithmic public opinion’, in Italy and beyond. This is
          propaedeutic to gather evidence upon which to base the development of
          a set of policy proposals resulting from the Algocount research,
          concerning algorithmic awareness in the Italian (and European)
          context.
        </Body>
      </section>
    </Layout>
  );
};

export default Research;
