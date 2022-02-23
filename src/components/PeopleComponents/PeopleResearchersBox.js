import { Row, Col } from "react-bootstrap";
import styled from "styled-components"

const Img = styled.img`
  width: 100%;
  max-width: 400px;
  max-height: 250px;
  height: auto;
`

const Name = styled.h2`
    text-transform: uppercase; 
    font-size: 0.875em; 
    font-weight: 400; 
    letter-spacing: 1.25px; 
    margin: .4em .4em .4em .4em; 
`

const Role = styled.h2`
    font-family: "EB Garamond", serif; 
    font-size: 1em; 
    font-weight: 400; 
    letter-spacing: .25px; 
    margin: 0 .4em .4em .4em; 
`

const SCol = styled(Col)`
    border: 1px solid black; 
    padding: 0; 
    margin: .5em; 
    box-shadow: 0px 0px 4px rgba(0,0,0,0.2);
    transition: all 0.3s cubic-bezier(0.5, 0.06, 0.01, 0.99);
    
    &:hover{
        transform: scale(1.025); 
        box-shadow: 0px 4px 8px rgba(0,0,0,0.05);
    }
`;

const Header = styled.h1`
    text-transform: uppercase; 
    font-size: 0.875em; 
    font-weight: 400; 
    letter-spacing: 1.25px;
`;

const SRow = styled(Row)`
  @media only screen and (max-width:750px){
    padding-left: 2em;
    padding-right: 2em;
  }
`

const ResearcherCard = (props) => {
  return (
    <SCol md={2} xs={4}>
      <Img src={props.src} />
      <Name>{props.name}</Name>
      <Role>{props.role}</Role>
    </SCol>
  );
};

const PeopleResearchersBox = (props) => {
  return (
    <SRow style={{ display: "flex", paddingBottom: "5em" }}>
      <Header>Research Team</Header>
      {props.researchers.map((item) => (
        <ResearcherCard {...item} />
      ))}
    </SRow>
  );
};

export default PeopleResearchersBox;
