import { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

const Img = styled.img` 
  width: 100%; 
  max-width: 400px;
  height: auto;
  box-shadow: 0px 0px 16px rgba(0,0,0,0.2);

  @media only screen and (max-width: 750px) {
      max-height: 20em;
      width: auto;  
    }    
  `

const Name = styled.h2`
    text-transform: uppercase; 
    font-size: 0.875em; 
    font-weight: 400; 
    letter-spacing: 1.25px;
    `

const Bio = styled.p`
    font-family: "EB Garamond", serif; 
    font-size: 1em; 
    font-weight: 400; 
    letter-spacing: .5px; 
    bottom: 0%; 
    `

const Role = styled.h1`
  font-size: 2.875em;
  letter-spacing: -1.8px;
  font-weight: 600;
  margin-bottom: 0.15em;
  line-height:0.9; 
  margin-bottom: .3em; 
  
  @media only screen and (max-width: 992px) {
    font-size: 2em;
    letter-spacing: -1px;
  }
  `;

const ImgCol = styled(Col)`
    position: relative; 
    justify-content: center; 
    margin-bottom: 2.5em;
    
    @media only screen and (max-width: 750px) {
      margin-bottom: 4em;
    }    
    `
const TxtCol = styled(Col)`
    font-family: "Inter", sans-serif; 
    
    @media only screen and (max-width: 750px) {
      margin-top: 4em;
      margin-left: 2em; 
      margin-right: 2em;
    }    
`

const BlurBox = styled.div`
    position: absolute;  
    inset: 0;
    backdrop-filter: blur(3px);
    transform: translate(-20%, 20%);
    border: 1px solid black;
    transition: all 0.4s ease-in-out; 

    &:hover{
        backdrop-filter: blur(0px);
    }
`

const ImgContainer = styled.div`
  position: relative; 
  max-width: 60%;  
  height: auto; 
  margin-bottom: auto;
`

const PeopleCoordinatorBox = (props) => {

  const imgRef = useRef(); 
  const boxRef = useRef(); 

  useEffect(() => {
    
  })

  return (
    <Row style={{marginTop:"2.5em", marginBottom:"4em"}}>
      <TxtCol md={6, { order: 'first' }}>
        <Name>{props.name}</Name>
        <Role>{props.role}</Role>
        <Bio>{props.bio}</Bio>
      </TxtCol>
      <ImgCol className="d-flex" md={6} xs={{ order: 'first' }}>
        <ImgContainer>
          <Img ref={imgRef} id={props.name} src={props.src}/>
          <BlurBox ref={boxRef} />
        </ImgContainer>
      </ImgCol>
    </Row>
  );
};

export default PeopleCoordinatorBox;
