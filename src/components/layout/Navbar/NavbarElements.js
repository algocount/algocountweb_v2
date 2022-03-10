import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavPlaceholder = styled.div`
  display: none;
  height: 48px;

  &.open {
    display: block;
  }
`;

export const Nav = styled.nav`
  position: sticky;
  top: 0%;
  width: 100%;
  height: 100vh;
  max-height: 56px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  z-index: 10;
  -webkit-backdrop-filter: blur(4px);
  -moz-backdrop-filter: blur(4px);
  -ms-backdrop-filter: blur(4px);
  -o-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);

  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);

  -webkit-transition: max-height 0.7s cubic-bezier(0.5, 0.06, 0.01, 0.99);
  -moz-transition: max-height 0.7s cubic-bezier(0.5, 0.06, 0.01, 0.99);
  -ms-transition: max-height 0.7s cubic-bezier(0.5, 0.06, 0.01, 0.99);
  -o-transition: max-height 0.7s cubic-bezier(0.5, 0.06, 0.01, 0.99);
  transition: max-height 0.7s cubic-bezier(0.5, 0.06, 0.01, 0.99);
  background: rgba(255, 255, 255, 0.4);

  @media only screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 36px;

    &.open {
      -webkit-backdrop-filter: blur(8px);
  -moz-backdrop-filter: blur(8px);
  -ms-backdrop-filter: blur(8px);
  -o-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);;
      flex-direction: column;
      flex-wrap: nowrap;
      top: 0%;
      left: 0;
      max-height: 100vh;
    }
  }
`;

export const NavContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: 85%;
  text-transform: uppercase;
  padding-left: 0;
  margin: 0; 

  @media only screen and (max-width: 750px) {
    width: auto;
    display: none;
    flex-direction: column;
    text-align: center;
    -webkit-animation: fadeOutToNone 2s linear;
    -moz-animation: fadeOutToNone 2s linear;
    -ms-animation: fadeOutToNone 2s linear;
    -o-animation: fadeOutToNone 2s linear;
    animation: fadeOutToNone 2s linear;
  
    &.open {
      display: flex;
      flex-direction: column;
      align-items:center; 
      height: 80%;
      -webkit-animation: fadeInFromNone 0.7s cubic-bezier(0.5, 0.06, 0.01, 0.99);
      -moz-animation: fadeInFromNone 0.7s cubic-bezier(0.5, 0.06, 0.01, 0.99);
      -ms-animation: fadeInFromNone 0.7s cubic-bezier(0.5, 0.06, 0.01, 0.99);
      -o-animation: fadeInFromNone 0.7s cubic-bezier(0.5, 0.06, 0.01, 0.99);
      animation: fadeInFromNone 0.7s cubic-bezier(0.5, 0.06, 0.01, 0.99);
      animation-fill-mode: forwards;
    }

    @keyframes fadeInFromNone {
      0% {
        display: none;
        opacity: 0;
      }

      1% {
        display: flex;
        opacity: 0;
      }

      100% {
        display: flex;
        opacity: 1;
      }
    }
  }
`;

export const Button = styled.button`
  display: none;
  background: none;
  height: 48px;
  width: 48px;
  padding: 0%;
  border: none;
  z-index: 10;
  color: black; 

  @media only screen and (max-width: 750px) {
    display: block;
    top: 2%;
  }
`;

export const SNavLink = styled(NavLink)`
  display: block;
  color: black;
  text-decoration: none;
  position: relative;
  padding: 0.2em 0;
  margin: auto;
  

  &:hover {
    color: black;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: black;
    -webkit-transition: all 0.2s cubic-bezier(0.5, 0.06, 0.01, 0.99);
    -moz-transition: all 0.2s cubic-bezier(0.5, 0.06, 0.01, 0.99);
    -ms-transition: all 0.2s cubic-bezier(0.5, 0.06, 0.01, 0.99);
    -o-transition: all 0.2s cubic-bezier(0.5, 0.06, 0.01, 0.99);
    transition: all 0.2s cubic-bezier(0.5, 0.06, 0.01, 0.99);
    opacity: 1;
    transform: scale(0);
    transform-origin: center;
  }

  &:hover::after,
  &:focus::after {
    transform: scale(1);
  }

  &.active {
    font-weight: 700;
  }

  &.active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: black;
    transition: all 0.3s cubic-bezier(0.5, 0.06, 0.01, 0.99);
    -webkit-transition: all 0.3s cubic-bezier(0.5, 0.06, 0.01, 0.99);
    -moz-transition: all 0.3s cubic-bezier(0.5, 0.06, 0.01, 0.99);
    -ms-transition: all 0.3s cubic-bezier(0.5, 0.06, 0.01, 0.99);
    -o-transition: all 0.3s cubic-bezier(0.5, 0.06, 0.01, 0.99);
    opacity: 1;
    transform: scale(1);
    transform-origin: center;
  }
`;

export const NavItem = (props) => {
  return (
    <li style={{ listStyle: "none", display: "flex" }}>
      <SNavLink to={props.to}>{props.children}</SNavLink>
    </li>
  );
};
