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
  backdrop-filter: blur(5px);

  -webkit-transition: max-height 0.7s cubic-bezier(0.5, 0.06, 0.01, 0.99);
  -moz-transition: max-height 0.7s cubic-bezier(0.5, 0.06, 0.01, 0.99);
  -o-transition: max-height 0.7s cubic-bezier(0.5, 0.06, 0.01, 0.99);
  transition: max-height 0.7s cubic-bezier(0.5, 0.06, 0.01, 0.99);

  @media only screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 36px;

    &.open {
      flex-direction: column;
      flex-wrap: nowrap;
      top: 0%;
      left: 0;
      max-height: 100vh;
    }
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: 85%;
  text-transform: uppercase;

  @media only screen and (max-width: 750px) {
    width: auto;
    display: none;
    flex-direction: column;
    text-align: center;
    animation: fadeOutToNone 2s linear;

    &.open {
      display: flex;
      flex-direction: column;
      height: 80%;
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

  @media only screen and (max-width: 750px) {
    display: block;
    position: fixed;
    top: 2%; 
  }
`;

export const NavItem = (props) => {
  return (
    <li style={{listStyle:"none", display:"flex"}}>
      <NavLink className="menu-item" to={props.to}>{props.children}</NavLink>
    </li>
  );
};


