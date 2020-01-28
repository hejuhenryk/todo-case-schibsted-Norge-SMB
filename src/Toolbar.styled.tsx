import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";
export const NavLinkStyled = styled(NavLink).attrs({
  activeClassName: activeClassName
})`
  &.${activeClassName} {
    border-bottom: 2px solid black;
  }
`;

export const HeaderStyled = styled.header`
  min-height: 3rem;
  width: 98%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px black dashed;
  padding: 0.5rem;
  margin: 0.3rem auto 2rem;
  div {
    margin-left: 2rem;
    > * {
      color: black;
      font-size: 1.5rem;
      text-decoration: none;
    }
    span {
      margin-left: 0.5rem;
      @media (max-width: 650px) {
        display: none;
      }
    }
  }
  nav {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    > * {
      color: black;
      font-size: 1.2rem;
      text-decoration: none;
      text-transform: uppercase;
      margin: 0.5rem;
      border: 2px solid transparent;
    }
  }
`;
