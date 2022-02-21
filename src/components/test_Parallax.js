import styled from "styled-components";

const Parallax = ( props ) => {
  
  const ParallaxContainer = styled.div`
    position: relative;
    z-index: 10;  
    height: 100%; 
    width: 100%;
    overflow-y: scroll;  
    perspective: 300px; 
    perspective-origin: 50% 50%;  
  `

  const BackgroundContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateZ(0px);
  `

  const BlurBox = styled.div`
    position: relative; 
    height: ${props => props.size + "em"};
    width:  ${props => props.size + "em"};
    top:  ${props => props.top + "px"};
    left:  ${props => props.left + "px"};
    margin-top: auto; 
    transform: translateZ(${props => props.zPos + "px"});
    background-color: red; 
    border: 1px solid black; 
  `

  return (
      <ParallaxContainer>
        <BackgroundContainer>
        {props.children}
        </BackgroundContainer>
        <BlurBox top={100} left={8} size={4} zPos={-2}></BlurBox>
        <BlurBox top={320} left={12} size={10} zPos={-40}></BlurBox>
      </ParallaxContainer>
    );
};

export default Parallax;
