import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  max-width: 400px;
  max-height: 250px;
  height: auto;
  padding: 0; 
`;

const Name = styled.h2`
  text-transform: uppercase;
  font-size: 0.875em;
  font-weight: 400;
  letter-spacing: 1.25px;
  margin: 0.4em 0.4em 0.4em 0.4em;
`;

const Role = styled.h2`
  font-family: "EB Garamond", serif;
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 0.25px;
  margin: 0 0.4em 0.4em 0.4em;
`;

const Header = styled.h1`
  text-transform: uppercase;
  font-size: 0.875em;
  font-weight: 400;
  letter-spacing: 1.25px;
`;

const PeopleContainer = styled.div`
  display: grid;
  grid-gap: 1em; 
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 5em; 

  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled(Row)`
  border: 1px solid black;
  padding: 0;
  margin: 0.5em;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.5, 0.06, 0.01, 0.99);

  &:hover {
    transform: scale(1.025);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  }
`;

const ResearcherCard = (props) => {
  return (
    <Card>
      <Img src={props.src} />
      <Name>{props.name}</Name>
      <Role>{props.role}</Role>
    </Card>
  );
};

const PeopleResearchersBox = (props) => {
  return (
    <>
      <Header>Research Team</Header>
      <PeopleContainer>
        {props.researchers.map((item) => (
          <ResearcherCard {...item} />
        ))}
      </PeopleContainer>
    </>
  );
};

export default PeopleResearchersBox;
