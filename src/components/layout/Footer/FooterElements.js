import styled from "styled-components";

export const FooterMain = styled.footer`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 2em;
  padding: 1em 1em 2em 1em;
  margin: 0 auto 0 auto;

  @media only screen and (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

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
  padding: 0.5em;
  padding-right: 1em;
  transition: all 0.4s ease-in-out;

  @media only screen and (max-width: 750px) {
    padding-right: none;
  }

  &:hover {
    color: black;
    filter: blur(1px);
  }
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: auto;

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

  &:hover {
    color: black;
    filter: blur(1px);
  }
`;

export const Mail = styled.p`
  margin: 0;
  padding-left: 0.5em;

  font-family: Inter, sans-serif;
  font-weight: 300;
  font-size: 1em;

  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

export const SocialBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;

const FooterBox = styled.div`
  @media only screen and (max-width: 750px) {
    width: 100%; 
    grid-row: ${(props) => props.row};
    grid-column: ${(props) => props.col};
  }
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
    <FooterBox {...props}>
      <FootHeader>{props.title}</FootHeader>
      <LogoDiv>{props.children}</LogoDiv>
    </FooterBox>
  );
};

export const ContactBox = (props) => {
  return (
    <FooterBox {...props}>
      <FootHeader>{props.title}</FootHeader>
      <ContactsContainer>{props.children}</ContactsContainer>
    </FooterBox>
  );
};
