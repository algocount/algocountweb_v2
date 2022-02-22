import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    grid-gap: 1em;
    margin-top: 2em; 

    @media only screen and (max-width: 750px) {
        grid-template-columns: auto auto;
        grid-template-rows: auto auto auto auto auto;
    }
`

const Card = styled.div `
    border: 1px solid black; 
    inset: 0; 
    margin: .5em; 
    box-shadow: 0px 0px 4px rgba(0,0,0,0.2);
    transition: all 0.3s cubic-bezier(0.5, 0.06, 0.01, 0.99);
    
    &:hover{
        transform: scale(1.025); 
        box-shadow: 0px 4px 8px rgba(0,0,0,0.05);
    }
`

const Img = styled.img`
    object-fit: cover;
    height: 250px;
    width: 100%;
`

const Name = styled.h2`
    text-transform: uppercase; 
    font-size: 0.875em; 
    font-weight: 400; 
    letter-spacing: 1.25px; 
    margin: 1em .75em 0 .75em; 
`

const Description = styled.p`
    font-family: "EB Garamond", serif; 
    font-size: 0.875em; 
    font-weight: 400; 
    letter-spacing: .25px; 
    margin: 0 .75em .75em .75em; 
`

export const MaterialCard = (props) => {
    return (
      <Card>
        <Img src={props.imgUrl} />
        <Name>{props.title}</Name>
        <Description>{props.description}</Description>
        <button className="method-button"> <Link to={`/materials/${props.title.toLowerCase().replace(/ /g, "-")}`}>Read More</Link> </button>
      </Card>
    );
  };

