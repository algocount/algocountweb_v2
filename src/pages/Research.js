import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import {
  Body,
  Header,
  Intro,
  ListItem,
  OListItem,
  SubHead,
} from "../components/typeComponents";

const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  width: 100%;
  padding: 1em 0em;
  margin-top: 3em;
  justify-items: center;
  grid-gap: 1em;

  @media only screen and (max-width: 980px) {
    grid-template-rows: repeat(4, auto);
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

const Linka = styled.a`
  font-family: "EB Garamond", serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: #000;`;


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
        <BtnWrapper href="research#dissemination">
          <StyledButton>Dissemination</StyledButton>
        </BtnWrapper>
      </BtnContainer>

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

      <SubHead id="dissemination">Dissemination</SubHead>
      <section>
        <Body>The dissemination work has consisted in:</Body>
        <ol type="a">
          <OListItem>
            A set of non-academic outputs (e.g. newspaper or magazine articles,
            podcasts, blogposts/opinion pieces, short videos) targeting the
            general public, written/produced by the members of the ALGOCOUNT
            research team. These are:
            <ol>
              <OListItem>
                <b>
                  Meet me tonight – La notte dei ricercatori, 28/11/2020 (public
                  talk) :{" "}
                </b>
                This event consisted in a seminar on algorithms and their role
                in processes of public opinion formation held in the context of
                the public event <i>Meet me tonight</i>, which took place online on
                28 November 2020, with the participation of Alessandro Gandini.
              </OListItem>
              <OListItem>
                <b>Milano Digital Week, 18/2/2021 (public talk): </b>
                This event consisted in a seminar on algorithms and the ‘black
                box’, addressed to the general public. This was held in the
                context of the <i>Milano Digital Week</i>, and took place online on 18
                February 2021, with the participation of Alessandro Gandini.
              </OListItem>
              <OListItem>
                <b>Podcast interview, Micromega: </b> This consisted in a
                podcast interview of Alessandro Gandini about algorithms and
                societal implications, conducted by journalist Valerio Nicolosi
                for the magazine <i>Micromega</i>. It can be accessed <Linka href="https://micromegaedizioni.net/2021/07/23/lato-oscuro-algoritmi/">here</Linka>.
              </OListItem>
              <OListItem>
                <b>Festival della Scienza, Genova, 18/5/2021 (public talk): </b>{" "}
                In this talk, held in the context of the Italian Science
                Festival 2021, Alessandro Gandini discussed algorithms and
                content creators in the digital reputation economy.
              </OListItem>
              <OListItem>
                <b>
                  Open night, Museo della Scienza e della Tecnologia Leonardo da
                  Vinci, Milano, 24/9/2021:{" "}
                </b>{" "}
                This consisted in a ‘speed date’ and ‘meet the researchers’
                event where Alessandro Gandini met with museum attendees and
                members of the general public in an informal setting, to discuss
                his research about algorithms
              </OListItem>
              <OListItem>
                <b>Film Festival Diritti Umani, Lugano 15/10/2021: </b>On
                occasion of the projection of the documentary Coded Bias (2020),
                Alessandro Gandini discussed with Chiara Fanetti (RSI) the
                increasingly central role algorithms play in 21st century
                societies.
              </OListItem>
              <OListItem>
                <b>SISSA Conference, 18/11/2021: </b>In a public roundtable
                hosted at the Science Communication conference, Trieste,
                Alessandro Gandini discussed algorithms and content creation in
                the context of science communication.
              </OListItem>
              <OListItem>
                <b>Dubai EXPO, 13-16/12/2021: </b>Algocount’s Communications
                Manager Diletta Huyskes participated to the 2020 Expo in Dubai
                as part of the Italian delegation for the artificial
                intelligence and inclusion section of the exhibition, holding
                talks with relevant stakeholders on the topic of algorithmic
                accountability and transparency.
              </OListItem>
              <OListItem>
                <b>In altre parole, Rete Due - RSI, Lugano (7/2/2022): </b>
                Alessandro Gandini was hosted on Rete Due, RSI (Swiss national
                radio station) to discuss algorithms and their role in culture
                and society.
              </OListItem>
            </ol>
          </OListItem>
          <OListItem>
            The realization of a project website to host data visualizations
            (LINK TO PLAC PLAC)
          </OListItem>
          <OListItem>
            the conduction of a set of workshops on “algorithmic literacy”
            addressed to high school students aged 14–18, to be carried out in
            schools in the area of Lombardy. These have involved the following
            schools: TBA
          </OListItem>
          <OListItem>
            a conference and final public event, to be hosted on 7-July 2022 at
            the Science Museum of Milan, that will mark the end of the project
            and involve a set of designated stakeholders and the general public
            in the discussion of the main results of the research.
          </OListItem>
        </ol>
      </section>
    </Layout>
  );
};

export default Research;
