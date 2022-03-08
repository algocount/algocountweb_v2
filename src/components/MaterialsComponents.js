import { Link } from "react-router-dom";
import styled from "styled-components";
import slugify from "./slugify";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5em;
  margin-top: 2em;

  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.75px solid black;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 24%);
  transition: all 0.3s cubic-bezier(0.5, 0.06, 0.01, 0.99);
  filter: blur(${(props) => (props.type === "read more\r" ? "0px" : "1px")});
  opacity: ${(props) => (props.type === "read more\r" ? "1" : "0.45")};

  &:hover {
    transform: scale(${(props) => (props.type === "read more\r" ? "1.025" : "1")});
    box-shadow: 0 1px ${(props) => (props.type === "read more\r" ? "12" : "6")}px 0
      rgb(0 0 0 / 24%);
  }
`;

const Img = styled.div`
  width: 100%;
  height: auto;
  padding: 0;
  aspect-ratio: 4/3;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

const Name = styled.h2`
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  font-size: 0.875em;
  font-weight: 400;
  letter-spacing: 1.25px;
  margin: 0.75em 0.75em 0.5em 0.75em;
`;

const Description = styled.p`
  font-family: "EB Garamond", serif;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.25em;
  letter-spacing: 0.25px;
  margin: 0 0.75em 0.75em 0.75em;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5em;
  flex-grow: 1;
`;

const Button = styled.button`
  border: none;
  background-color: black;
  display: flex;
  padding: 0.25em 0.5em 0.25em 0.5em;
  margin-top: auto;
  cursor: ${(props) => (props.type === "read more\r" ? "auto" : "default !important")};

`;

const JustText = styled.p`
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0; 
  padding: 0;
  text-decoration: none;
  color: white;
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: none;
  color: white;

  &:hover {
    color: white;
  }

  @media only screen and (max-width: 750px) {
    font-size: 0.85em;
  }
`;

export const MaterialCard = (props) => {
  return (
    <Card {...props}>
      <Img src={require(props.imgUrl)} />
      <Name>{props.title}</Name>
      <Description>{props.description}</Description>
      <BtnContainer>
        <Button>
          {props.type === "read more\r" ? (
            <StyledLink
              to={`/${props.pageName}/${slugify(props.title)}`}
              target={"_blank"}
            >
              {props.type}
            </StyledLink>
          ) : (
            <JustText>{props.type}</JustText>
          )}
        </Button>
      </BtnContainer>
    </Card>
  );
};
