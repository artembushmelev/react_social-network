import React from "react";
import styled from "styled-components";

export const Post = () => {
  return (
    <PostStyled>
      <img
        src="https://cdn.dribbble.com/users/5707367/screenshots/19107382/media/162fb070ebe306fd4a42ba61345db2d9.jpg?resize=400x0"
        alt=""
      />
      <div>post 1</div>
      <div>
        <span>like</span>
      </div>
    </PostStyled>
  );
};

const PostStyled = styled.div`
  color: #c1eb40;

  img {
    width: 60px;
    height: 60px;
    border-radius: 25px;
  }
`;
