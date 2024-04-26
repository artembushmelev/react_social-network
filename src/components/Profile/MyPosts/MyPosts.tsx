import { styled } from "styled-components";
import { Post } from "./Post";

export const MyPosts = () => {
    return (
        <MyPostsStyled>
            <div>
                <div>MyPosts</div>
               <textarea></textarea> 
                <button>Add Post</button>
            </div>
            <Posts>
                <Post/> 
            </Posts>

        </MyPostsStyled>
    )
};

const MyPostsStyled = styled.div`
    
    background-color: cornflowerblue;
    
`

const Posts = styled.div`
    
`
