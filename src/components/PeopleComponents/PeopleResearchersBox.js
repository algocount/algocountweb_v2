import styled from "styled-components";

const Img = styled.div`
  width: 100%;
  height: auto;
  padding: 0;
  aspect-ratio: 1;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  filter: blur(0px);
  transition: all 0.3s cubic-bezier(0.5, 0.06, 0.01, 0.99); 

  &:hover{
    filter: blur(3px);
  }
`;

const Name = styled.h2`
  text-transform: uppercase;
  font-size: 0.875em;
  font-weight: 400;
  letter-spacing: 1.25px;
`;

const Role = styled.h2`
  font-family: "EB Garamond", serif;
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 0.25px;
`;

const Header = styled.h1`
  text-transform: uppercase;
  font-size: 0.875em;
  font-weight: 400;
  letter-spacing: 1.25px;
`;

export const PeopleContainer = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(${(props) => props.col}, 1fr);
  margin-bottom: 3em;

  @media only screen and (max-width: 995px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled.div`
  border: 1px solid black;
  margin-top: 1.5em;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.5, 0.06, 0.01, 0.99);

  &:hover {
    transform: scale(1.025);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  }
`;

const TxtBox = styled.div`
  padding: 0.5em;
`;

const CardNoPic = styled.div`
  padding: 0.5em;
  border: 1px solid #000;
`;


export const JustText = (props) => {
  return (
    <CardNoPic>
      <Name>{props.name}</Name>
      <Role>{props.role}</Role>
    </CardNoPic>
  );
};

const ResearcherCard = (props) => {
  return (
    <Card>
      <Img src={props.src} />
      <TxtBox>
        <Name>{props.name}</Name>
        <Role>{props.role}</Role>
      </TxtBox>
    </Card>
  );
};

const PeopleResearchersBox = (props) => {
  return (
    <>
      <Header>Research Team</Header>
      <PeopleContainer col={props.col}>
        {props.researchers.map((item) => (
          <ResearcherCard {...item}/>
        ))}
      </PeopleContainer>
    </>
  );
};

export default PeopleResearchersBox;
