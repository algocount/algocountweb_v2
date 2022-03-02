import { Link } from "react-router-dom";
import styled from "styled-components";
import slugify from "./slugify";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 1em;
  margin-top: 2em;

  @media only screen and (max-width: 750px) {
    grid-template-columns: auto;
  }
`;

const Card = styled.div`
  color: black;  
  padding: 1em; 
  text-decoration: none !important;
  border: 1px solid black;
  margin: 0.5em;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.5, 0.06, 0.01, 0.99);

  &:hover {
    transform: scale(1.025);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  }
`;

const Date = styled.h3`
  text-decoration: none;
  font-family: "Inter", sans-serif; 
  text-transform: uppercase; 
  font-size: 0.875em;
  font-weight: 400;
  letter-spacing: 1.25px;
`;

const Title = styled.h2`
  text-decoration: none;
  font-family: "Inter", sans-serif;   
  font-size: 1.5em;
  font-weight: 600;
  letter-spacing: -0.25px;
`;

const Description = styled.p`
  text-decoration: none;
  font-family: "EB Garamond", serif;
  font-size: 0.875em;
  font-weight: 400;
  letter-spacing: 0.25px;
  margin: 0; 
`;

export const EventCard = (props) => {
  return (
    <Link style={{textDecoration:"none"}}to={`/events/${slugify(props.title)}`} target={"_blank"}>
      <Card>
        <Date>{props.date}</Date>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </Card>
    </Link>
  );
};
