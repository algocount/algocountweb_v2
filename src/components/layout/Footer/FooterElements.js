import { Col } from "react-bootstrap";
import styled from "styled-components";

const FootHeader = styled.p`
  font-family: Inter, sans-serif;
  font-weight: 300;
  font-size: 1em;

  @media only screen and (max-width: 750px) {
    text-align: center;
  }
`;

const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  padding: .5em;
  padding-right: 1em;
  transition: all 0.4s ease-in-out;
  
  @media only screen and (max-width: 750px) {
    padding-right: none;
  }

  &:hover{
    color: black;
    filter: blur(1px)
  }
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin:auto;

  @media only screen and (max-width: 750px) {
    justify-content: space-evenly;
  }
`;

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media only screen and (max-width: 750px) {
    align-items: center; 
    flex-direction: row;
    margin-bottom: 1em;
    justify-content: center;
  }
`;

//================================COMPONENTS=================================//

export const ContactLink = styled.a`
  display: flex;
  padding: 0.25em;
  color: black;
  text-decoration: none;
  transition: all 0.4s ease-in-out;
  align-items: center;
  
  &:hover{
    color: black;
    filter: blur(1px)
  }
`;

export const Mail = styled.p`
  margin: 0;
  padding-left: 0.5em;

  @media only screen and (max-width: 750px) {
    display: none; 
  }
`

export const SocialBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;

export const IconBox = (props) => {
  return (
    <LogoLink href={props.href}>
      <img style={{ height: "2.5em" }} src={props.src} alt={props.alt} />
    </LogoLink>
  );
};

export const LogoBox = (props) => {
  return (
    <Col {...props} style={{ paddingBottom: "1em" }}>
      <FootHeader>{props.title}</FootHeader>
      <LogoDiv>
        {props.children}
      </LogoDiv>
    </Col>
  );
};

export const ContactBox = (props) => {
  return (
    <Col {...props}>
      <FootHeader>{props.title}</FootHeader>
      <ContactsContainer>{props.children}</ContactsContainer>
    </Col>
  );
};
