import { styled } from "styled-components";

export const Navigation = () => {
  return (
    <NavigationStyled>
      <ItemStyled active = {true}>
        <a href="/profile">Profile</a>
      </ItemStyled>
      <ItemStyled>
        <a href="/dialogs" >Messages</a>
      </ItemStyled>
      <ItemStyled>
        <a>News</a>
      </ItemStyled>
      <ItemStyled>
        <a>Music</a>
      </ItemStyled>
      <ItemStyled>
        <a>Settings</a>
      </ItemStyled>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.div`
  grid-area: n;
  background-color: burlywood;
`;

const ItemStyled = styled.div<{active?: boolean}>`
    color: ${props => props.active ? 'yellow' : 'white'};
`;
