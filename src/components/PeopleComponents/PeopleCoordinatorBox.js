import styled from "styled-components";

const Img = styled.div` 
  display: flex;
  flex-grow: 1;
  width: 100%; 
  height: 100%;
  box-shadow: 0px 0px 16px rgba(0,0,0,0.2);
  aspect-ratio: 3/4; 
  background-image: url(${props => props.src});
  background-size: cover; 
  background-position: center;  

  &:before {
    content: "";
    position: absolute;  
    inset: 0;
    backdrop-filter: blur(0px);
    transform: translate(-20%, 20%);
    border: 1px solid black;
    transition: all 0.4s ease-in-out; 
  }

  &:hover:before {
    backdrop-filter: blur(3px);
  }

  @media only screen and (max-width: 750px) {
      max-height: 20em;
      width: auto;  
    }    
`

const Name = styled.h2`
  padding-left: 0.2em;
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
  
  @media only screen and (max-width: 750px) {
    font-size: 1.2em; 
  }

`;

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

;
const ImgCol = styled.div`
    margin-bottom: 2.5em;
  
    @media only screen and (max-width: 750px) {
      margin-bottom: 4em;
    }
`;

const TxtCol = styled.div`
  font-family: "Inter", sans-serif; 
  display: flex; 
  flex-direction: column; 
  justify-content: flex-end; 
  
  @media only screen and (max-width: 750px) {
    margin-top: 4em;
    grid-row: 2; 
  }    
  `

const ImgContainer = styled.div`
  width: 60%; 
  position: relative; 
  height: auto; 
  margin: auto;
  grid-column: 2;

  @media only screen and (max-width: 750px) {
    grid-row: 1; 
  }    
`

const CoordinatorContainer = styled.div`
  display: grid;
  margin: 2.5em 0 5em 0; 
  grid-template-columns: 3fr 2fr; 
  grid-gap: 1em;
  width: 100%; 
  
  @media only screen and (max-width: 750px){
    grid-template-columns: 1fr; 
  }
`

const PeopleCoordinatorBox = (props) => {
  return (
    <CoordinatorContainer>
      <TxtCol>
        <Name>{props.name}</Name>
        <Role>{props.role}</Role>
        <Bio> {props.bio} </Bio>
      </TxtCol>
      <ImgCol>
        <ImgContainer>
          <Img id={props.name} src={props.src}/>
        </ImgContainer>
      </ImgCol>
    </CoordinatorContainer>
  );
};

export default PeopleCoordinatorBox;