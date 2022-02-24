import { Link } from "react-router-dom";
import styled from "styled-components";
import slugify from "./slugify";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  margin-top: 2em;

  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }

`;

const Card = styled.div`
  display: flex; 
  flex-direction: column; 
  border: 1px solid black;
  margin: 0.5em;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.5, 0.06, 0.01, 0.99);

  &:hover {
    transform: scale(1.025);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  }
`;

const Img = styled.div`
  width: 100%;
  height: auto;
  padding: 0; 
  aspect-ratio: 4/3; 
  background-image: url(${props => props.src});
  background-size: cover; 
  background-position: center;  
`;

const Name = styled.h2`
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  font-size: 0.875em;
  font-weight: 400;
  letter-spacing: 1.25px;
  margin: 1em 0.75em 0 0.75em;
`;

const Description = styled.p`
  font-family: "EB Garamond", serif;
  font-size: 0.975em;
  font-weight: 400;
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
  padding: .25em .5em .25em .5em;
  margin-top: auto; 
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-size: 0.65em;
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: none; 
  color: white; 

  &:hover {
      color: white; 
  }

  @media only screen and (max-width: 750px) {
    font-size: .85em;
  }
`;

export const MaterialCard = (props) => {
  return (
    <Card>
      <Img src={props.imgUrl} />
      <Name>{props.title}</Name>
      <Description>{props.description}</Description>
      <BtnContainer>
        <Button>
          <StyledLink
            to={`/materials/${slugify(props.title)}`}
          >
            Read More
          </StyledLink>
        </Button>
      </BtnContainer>
    </Card>
  );
};
