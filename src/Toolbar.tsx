import React from "react";
import { List } from "./AppContainer";
import { icon } from "./helpers"
import { NavLinkStyled, HeaderStyled } from './Toolbar.styled'

type ToolbarProps = {
  lists: List[];
};
export const Toolbar: React.FC<ToolbarProps> = props => {
  return (
    <HeaderStyled>
      <div>
        <NavLinkStyled exact to={`/`}>
          {icon.home}
          <span>Home</span>
        </NavLinkStyled>
      </div>
      <nav>
        {props.lists.map(list => {
          return (
            <NavLinkStyled key={list.id} to={`/${list.id}`}>
              {list.title}
            </NavLinkStyled>
          );
        })}
      </nav>
    </HeaderStyled>
  );
};

