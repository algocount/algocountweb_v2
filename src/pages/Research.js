import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import {
  Body,
  Header,
  Intro,
  ListItem,
  SubHead,
} from "../components/typeComponents";

const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  padding: 1em 0em;
  margin-top: 3em;
  justify-items: center;
  grid-gap: 1em;

  @media only screen and (max-width: 980px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    flex-direction: column;
    margin-top: 1em;
  }
`;

const BtnWrapper = styled.a`
  @media only screen and (max-width: 980px) {
    width: 100%;
  }
`;

const StyledButton = styled.button`
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: none;
  color: black;
  background-color: white;
  padding: 0.75em 1em;
  border: none;
  border: 0.75px solid black;
  //box-shadow: 0 1px 6px 0 rgb(0 0 0 / 24%);
  transition: all 0.3s cubic-bezier(0.5, 0.06, 0.01, 0.99);

  &:hover {
    transform: scale(1.025);
    box-shadow: 0 1px 6px 0 rgb(0 0 0 / 24%);
    color: black;
    font-weight: 600;
  }

  @media only screen and (max-width: 980px) {
    padding: 0.5em 0.75em;
    font-size: 0.85em;
    width: 100%;
  }
`;

const Research = () => {
  return (
    <Layout>
      <Header>THE RESEARCH PROCESS</Header>
      <Intro>
        The Algocount project unfolded around three main empirical phases:
      </Intro>

      <BtnContainer>
        <BtnWrapper href="research#digital-methods">
          <StyledButton>Digital&nbsp;Methods</StyledButton>
        </BtnWrapper>
        <BtnWrapper href="research#focus-groups">
          <StyledButton>Focus&nbsp;Groups</StyledButton>
        </BtnWrapper>
        <BtnWrapper href="research#interviews">
          <StyledButton>Interviews</StyledButton>
        </BtnWrapper>
      </BtnContainer>

      <SubHead id="digital-methods">Digital Methods</SubHead>
      <section>
        <Body>
          In a first phase, the research has consisted in the ‘reverse
          engineering’ of algorithmic content circulation on 5 digital
          platforms:: Facebook, Twitter, YouTube, TikTok and Reddit. This was
          conducted in accordance with digital methods (Rogers, 2013)
          principles, and focusing on the macro-topic of the circulation of
          information around the Covid-19 pandemic. The research has taken the
          form of a data sprint, held in January 2021. This allowed to generate
          insights about:
        </Body>
        <ul>
          <ListItem>
            the main actors involved in the discussion of informational content
            about Covid-19 on digital platforms in Italy;
          </ListItem>
          <ListItem>
            the mediation role played by algorithms in the access to information
            about Covid-19 from the general public in the Italian context.
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
          among MUST attendees. Focus groups allowed to generate insights about
        </Body>
        <ul>
          <ListItem>
            how much do individuals know about the role recommendation and
            personalization algorithms play in their access to diversified and
            quality information;
          </ListItem>
          <ListItem>
            the opinions, attitudes and perceptions about algorithms by users of
            social media platforms for informational purposes.
          </ListItem>
        </ul>
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
          context. Interviews allowed to generate insights about:
        </Body>
        <ul>
          <ListItem>
            what can and should be done to enhance algorithmic accountability
            and transparency in their role as mediators of public opinion
            processes;
          </ListItem>
          <ListItem>
            which key actors should get involved in the debate about algorithmic
            transparency, accountability and governance.
          </ListItem>
        </ul>
      </section>
    </Layout>
  );
};

export default Research;
